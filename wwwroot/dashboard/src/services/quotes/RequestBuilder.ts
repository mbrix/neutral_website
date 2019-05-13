/*
 * Helper for the construction of gRPC requests.
 * gRPC-web doesn't translate plain objects into
 * the required request format so you have to
 * build them manually.
 */
import { Signer } from 'ethers/ethers';
const Common = require('./grpc/common_pb');
const Instruments = require('./grpc/instruments_pb');
const Quotes = require('./grpc/quotes_pb');

const getTokenSignature = async (
  signer: Signer,
  sessionToken: string,
) => {
  const sigHex = await signer.signMessage(sessionToken);
  const sig = sigHex.substr(2);
  const v = sig.substr(-2);
  return v + sig.substr(0, sig.length - 2);
};

const createSubscribeRequest = (nusdAddress: string) => {
  const subRequest = new Quotes.SubscribeRequest();

  const instrument = new Common.InstrumentID();
  instrument.setSymbol('NUSD');
  const instrumentAddress = new Common.Address();
  instrumentAddress.setValue(nusdAddress);
  instrumentAddress.setAddresstype('ethereum');
  instrument.setAddress(instrumentAddress);
  subRequest.setInstrument(instrument);

  return subRequest;
};

export default {
  createSubscribeRequest,
  getTokenSignature,
};
