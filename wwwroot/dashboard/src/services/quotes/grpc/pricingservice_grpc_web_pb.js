/**
 * @fileoverview gRPC-Web generated client stub for neutralservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')

var quotes_pb = require('./quotes_pb.js')

var orderbook_pb = require('./orderbook_pb.js')

var vaultstate_pb = require('./vaultstate_pb.js')
const proto = {};
proto.neutralservice = require('./pricingservice_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neutralservice.PricingEngineRpcServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neutralservice.PricingEngineRpcServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.neutralservice.PricingEngineRpcServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.neutralservice.PricingEngineRpcServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.Empty,
 *   !proto.neutralservice.SignedBaseQuote>}
 */
const methodInfo_PricingEngineRpcService_sendBaseQuotes = new grpc.web.AbstractClientBase.MethodInfo(
  quotes_pb.SignedBaseQuote,
  /** @param {!proto.neutralservice.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  quotes_pb.SignedBaseQuote.deserializeBinary
);


/**
 * @param {!proto.neutralservice.Empty} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.SignedBaseQuote>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.PricingEngineRpcServiceClient.prototype.sendBaseQuotes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/neutralservice.PricingEngineRpcService/sendBaseQuotes',
      request,
      metadata,
      methodInfo_PricingEngineRpcService_sendBaseQuotes);
};


/**
 * @param {!proto.neutralservice.Empty} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.SignedBaseQuote>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.PricingEngineRpcServicePromiseClient.prototype.sendBaseQuotes =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/neutralservice.PricingEngineRpcService/sendBaseQuotes',
      request,
      metadata,
      methodInfo_PricingEngineRpcService_sendBaseQuotes);
};


module.exports = proto.neutralservice;

