declare let proto: any;
import RequestBuilder from './RequestBuilder';
import { ethers } from 'ethers';
import { Error as GrpcError } from 'grpc-web';
const protodef = require('./grpc/neutralservices_grpc_web_pb');
const { Empty } = require('./grpc/common_pb');
const { UserGatewayPromiseClient } = protodef;
type GatewayInterface = typeof UserGatewayPromiseClient;

const willSessionExpire = (sessionToken: string) => {
  if (!sessionToken) {
    return true;
  }

  const parsedToken = JSON.parse(sessionToken);
  const { creationTimeUtcMillis, expirationWindowMillis } = parsedToken.unsigned;
  const expMillis = creationTimeUtcMillis + expirationWindowMillis;
  const currentMillis = new Date().getTime();
  return expMillis - currentMillis <= 20000; // 20 seconds
};

class QuoteService {
  static signer?: any;
  static quoteStreamListener?: (data: any) => void;
  static quoteStreamErrorListener?: (error: GrpcError) => void;
  static quoteStream?: any = undefined;
  static client?: GatewayInterface = undefined;
  static sessionMeta?: any = {};
  static timeoutListenerFn?: any;
  static nusdAddress?: string;

  static async init(gatewayAddress: string, nusdAddress: string) {
    this.nusdAddress = nusdAddress;
    this.client = new UserGatewayPromiseClient(gatewayAddress);
    this.signer = new ethers.Wallet('0xb3a1955556c4a86fc8d1840705ba25825021904c5c2211e35bbb82e90e2d338c');
  }

  static async disconnectListener() {
    this.onReceiveQuoteStreamError({ code: 100, message: 'Connection timed out.' });
    await this.connect();
  }

  static async listenForDisconnect() {
    if (this.timeoutListenerFn) {
      clearTimeout(this.timeoutListenerFn);
    }

    // Need to explicitly bind to QuoteService, will otherwise bind to global object.
    this.timeoutListenerFn = setTimeout(this.disconnectListener.bind(this), 20000);
  }

  static async getSessionToken() {
    const sessionToken = await this.client.getPublicSessionToken(new Empty(), {});
    return sessionToken.getToken();
  }

  static async refreshToken() {
    const shouldRefreshToken = willSessionExpire(this.sessionMeta['session-token']);
    if (!shouldRefreshToken) {
      return;
    }

    try {
      const token = await this.getSessionToken();
      const signature = await RequestBuilder.getTokenSignature(this.signer, token);
      this.sessionMeta = { 'session-token': token, 'user-signature': signature };
    } catch (err) {
      console.log('Failed to refresh token:', err);
    }
  }

  // Connect to pricing service
  static async connect() {
    if (this.quoteStream) {
      this.disconnect();
    }

    await this.refreshToken();

    this.quoteStream = await this.client.subscribeToUserQuotes(
      RequestBuilder.createSubscribeRequest(this.nusdAddress),
      this.sessionMeta,
    );

    this.quoteStream.on('data', (message: any, err: string) => {
      if (err || !message) {
        console.log(err || 'Received empty gRPC message.');
        return;
      }

      this.listenForDisconnect();

      if (this.quoteStreamListener) {
        this.quoteStreamListener(message);
      }
    });

    this.quoteStream.on('error', (error: GrpcError) => {
      this.onReceiveQuoteStreamError(error);
    });
  }

  static disconnect() {
    if (this.quoteStream) {
      this.quoteStream.on('data', null);
      this.quoteStream.cancel();
      delete this.quoteStream;
      this.sessionMeta = {};
    }
  }

  static onReceiveQuoteStreamError(error: GrpcError) {
    if (this.quoteStreamErrorListener) {
      this.quoteStreamErrorListener(error);
    }
  }

  static onReceiveQuoteStreamMessage(message: any) {
    if (this.quoteStreamListener) {
      this.quoteStreamListener(message);
    }
  }

  static setQuoteStreamErrorListener(
    fn: (error: GrpcError) => void,
  ) {
    this.quoteStreamErrorListener = fn;
  }

  static setQuoteStreamListener(
    fn: (message: any) => void,
  ) {
    this.quoteStreamListener = fn;
  }
}

export default QuoteService;
