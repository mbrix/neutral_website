/**
 * @fileoverview gRPC-Web generated client stub for neutralservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var common_pb = require('./common_pb.js')
const proto = {};
proto.neutralservice = require('./signingservice_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neutralservice.SigningServiceClient =
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
proto.neutralservice.SigningServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.neutralservice.SigningServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.neutralservice.SigningServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.SignRequest,
 *   !proto.neutralservice.SignedResponse>}
 */
const methodInfo_SigningService_sign = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neutralservice.SignedResponse,
  /** @param {!proto.neutralservice.SignRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.neutralservice.SignedResponse.deserializeBinary
);


/**
 * @param {!proto.neutralservice.SignRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.SignedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.SignedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.SigningServiceClient.prototype.sign =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.SigningService/sign',
      request,
      metadata,
      methodInfo_SigningService_sign,
      callback);
};


/**
 * @param {!proto.neutralservice.SignRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.SignedResponse>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.SigningServicePromiseClient.prototype.sign =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.sign(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.VerifyRequest,
 *   !proto.neutralservice.VerifyResponse>}
 */
const methodInfo_SigningService_verify = new grpc.web.AbstractClientBase.MethodInfo(
  proto.neutralservice.VerifyResponse,
  /** @param {!proto.neutralservice.VerifyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.neutralservice.VerifyResponse.deserializeBinary
);


/**
 * @param {!proto.neutralservice.VerifyRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.VerifyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.VerifyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.SigningServiceClient.prototype.verify =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.SigningService/verify',
      request,
      metadata,
      methodInfo_SigningService_verify,
      callback);
};


/**
 * @param {!proto.neutralservice.VerifyRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.VerifyResponse>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.SigningServicePromiseClient.prototype.verify =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.verify(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.neutralservice;

