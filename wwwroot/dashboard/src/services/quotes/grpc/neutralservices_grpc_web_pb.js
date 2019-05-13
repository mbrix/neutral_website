/**
 * @fileoverview gRPC-Web generated client stub for neutralservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var accounts_pb = require('./accounts_pb.js')

var instruments_pb = require('./instruments_pb.js')

var quotes_pb = require('./quotes_pb.js')

var common_pb = require('./common_pb.js')
const proto = {};
proto.neutralservice = require('./neutralservices_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neutralservice.UserGatewayClient =
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
proto.neutralservice.UserGatewayPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.neutralservice.UserGatewayClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.neutralservice.UserGatewayClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.Empty,
 *   !proto.neutralservice.SessionToken>}
 */
const methodInfo_UserGateway_getPrivateSessionToken = new grpc.web.AbstractClientBase.MethodInfo(
  common_pb.SessionToken,
  /** @param {!proto.neutralservice.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.SessionToken.deserializeBinary
);


/**
 * @param {!proto.neutralservice.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.SessionToken)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.SessionToken>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayClient.prototype.getPrivateSessionToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.UserGateway/getPrivateSessionToken',
      request,
      metadata,
      methodInfo_UserGateway_getPrivateSessionToken,
      callback);
};


/**
 * @param {!proto.neutralservice.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.SessionToken>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayPromiseClient.prototype.getPrivateSessionToken =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getPrivateSessionToken(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.Empty,
 *   !proto.neutralservice.SessionToken>}
 */
const methodInfo_UserGateway_getPublicSessionToken = new grpc.web.AbstractClientBase.MethodInfo(
  common_pb.SessionToken,
  /** @param {!proto.neutralservice.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.SessionToken.deserializeBinary
);


/**
 * @param {!proto.neutralservice.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.SessionToken)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.SessionToken>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayClient.prototype.getPublicSessionToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.UserGateway/getPublicSessionToken',
      request,
      metadata,
      methodInfo_UserGateway_getPublicSessionToken,
      callback);
};


/**
 * @param {!proto.neutralservice.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.SessionToken>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayPromiseClient.prototype.getPublicSessionToken =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getPublicSessionToken(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.Empty,
 *   !proto.neutralservice.UserAccountInfo>}
 */
const methodInfo_UserGateway_accountInfo = new grpc.web.AbstractClientBase.MethodInfo(
  accounts_pb.UserAccountInfo,
  /** @param {!proto.neutralservice.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  accounts_pb.UserAccountInfo.deserializeBinary
);


/**
 * @param {!proto.neutralservice.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.UserAccountInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.UserAccountInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayClient.prototype.accountInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.UserGateway/accountInfo',
      request,
      metadata,
      methodInfo_UserGateway_accountInfo,
      callback);
};


/**
 * @param {!proto.neutralservice.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.UserAccountInfo>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayPromiseClient.prototype.accountInfo =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.accountInfo(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.InstrumentRequest,
 *   !proto.neutralservice.SignedInstrumentResponse>}
 */
const methodInfo_UserGateway_getInstrumentDefinitions = new grpc.web.AbstractClientBase.MethodInfo(
  instruments_pb.SignedInstrumentResponse,
  /** @param {!proto.neutralservice.InstrumentRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  instruments_pb.SignedInstrumentResponse.deserializeBinary
);


/**
 * @param {!proto.neutralservice.InstrumentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.SignedInstrumentResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.SignedInstrumentResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayClient.prototype.getInstrumentDefinitions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.UserGateway/getInstrumentDefinitions',
      request,
      metadata,
      methodInfo_UserGateway_getInstrumentDefinitions,
      callback);
};


/**
 * @param {!proto.neutralservice.InstrumentRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.SignedInstrumentResponse>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayPromiseClient.prototype.getInstrumentDefinitions =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getInstrumentDefinitions(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.SubscribeRequest,
 *   !proto.neutralservice.SignedUserQuote>}
 */
const methodInfo_UserGateway_subscribeToUserQuotes = new grpc.web.AbstractClientBase.MethodInfo(
  quotes_pb.SignedUserQuote,
  /** @param {!proto.neutralservice.SubscribeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  quotes_pb.SignedUserQuote.deserializeBinary
);


/**
 * @param {!proto.neutralservice.SubscribeRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.SignedUserQuote>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayClient.prototype.subscribeToUserQuotes =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/neutralservice.UserGateway/subscribeToUserQuotes',
      request,
      metadata,
      methodInfo_UserGateway_subscribeToUserQuotes);
};


/**
 * @param {!proto.neutralservice.SubscribeRequest} request The request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.SignedUserQuote>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayPromiseClient.prototype.subscribeToUserQuotes =
    function(request, metadata) {
  return this.delegateClient_.client_.serverStreaming(this.delegateClient_.hostname_ +
      '/neutralservice.UserGateway/subscribeToUserQuotes',
      request,
      metadata,
      methodInfo_UserGateway_subscribeToUserQuotes);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.ImmediateCommitRequest,
 *   !proto.neutralservice.SignedFinalCommitResponse>}
 */
const methodInfo_UserGateway_execute = new grpc.web.AbstractClientBase.MethodInfo(
  quotes_pb.SignedFinalCommitResponse,
  /** @param {!proto.neutralservice.ImmediateCommitRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  quotes_pb.SignedFinalCommitResponse.deserializeBinary
);


/**
 * @param {!proto.neutralservice.ImmediateCommitRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.SignedFinalCommitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.SignedFinalCommitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayClient.prototype.execute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.UserGateway/execute',
      request,
      metadata,
      methodInfo_UserGateway_execute,
      callback);
};


/**
 * @param {!proto.neutralservice.ImmediateCommitRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.SignedFinalCommitResponse>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.UserGatewayPromiseClient.prototype.execute =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.execute(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neutralservice.ValidatorClient =
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
proto.neutralservice.ValidatorPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.neutralservice.ValidatorClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.neutralservice.ValidatorClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.ImmediateCommitRequest,
 *   !proto.neutralservice.SignedFinalCommitResponse>}
 */
const methodInfo_Validator_execute = new grpc.web.AbstractClientBase.MethodInfo(
  quotes_pb.SignedFinalCommitResponse,
  /** @param {!proto.neutralservice.ImmediateCommitRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  quotes_pb.SignedFinalCommitResponse.deserializeBinary
);


/**
 * @param {!proto.neutralservice.ImmediateCommitRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.SignedFinalCommitResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.SignedFinalCommitResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.ValidatorClient.prototype.execute =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.Validator/execute',
      request,
      metadata,
      methodInfo_Validator_execute,
      callback);
};


/**
 * @param {!proto.neutralservice.ImmediateCommitRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.SignedFinalCommitResponse>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.ValidatorPromiseClient.prototype.execute =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.execute(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neutralservice.AccountManagementClient =
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
proto.neutralservice.AccountManagementPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.neutralservice.AccountManagementClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.neutralservice.AccountManagementClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.AccountRequest,
 *   !proto.neutralservice.AccountInfo>}
 */
const methodInfo_AccountManagement_getAccount = new grpc.web.AbstractClientBase.MethodInfo(
  accounts_pb.AccountInfo,
  /** @param {!proto.neutralservice.AccountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  accounts_pb.AccountInfo.deserializeBinary
);


/**
 * @param {!proto.neutralservice.AccountRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.AccountInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.AccountInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.AccountManagementClient.prototype.getAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.AccountManagement/getAccount',
      request,
      metadata,
      methodInfo_AccountManagement_getAccount,
      callback);
};


/**
 * @param {!proto.neutralservice.AccountRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.AccountInfo>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.AccountManagementPromiseClient.prototype.getAccount =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.getAccount(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.AccountInfo,
 *   !proto.neutralservice.AccountInfo>}
 */
const methodInfo_AccountManagement_setAccount = new grpc.web.AbstractClientBase.MethodInfo(
  accounts_pb.AccountInfo,
  /** @param {!proto.neutralservice.AccountInfo} request */
  function(request) {
    return request.serializeBinary();
  },
  accounts_pb.AccountInfo.deserializeBinary
);


/**
 * @param {!proto.neutralservice.AccountInfo} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.AccountInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.AccountInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.AccountManagementClient.prototype.setAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.AccountManagement/setAccount',
      request,
      metadata,
      methodInfo_AccountManagement_setAccount,
      callback);
};


/**
 * @param {!proto.neutralservice.AccountInfo} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.AccountInfo>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.AccountManagementPromiseClient.prototype.setAccount =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.setAccount(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.Empty,
 *   !proto.neutralservice.Accounts>}
 */
const methodInfo_AccountManagement_listAccounts = new grpc.web.AbstractClientBase.MethodInfo(
  accounts_pb.Accounts,
  /** @param {!proto.neutralservice.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  accounts_pb.Accounts.deserializeBinary
);


/**
 * @param {!proto.neutralservice.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.Accounts)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.Accounts>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.AccountManagementClient.prototype.listAccounts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.AccountManagement/listAccounts',
      request,
      metadata,
      methodInfo_AccountManagement_listAccounts,
      callback);
};


/**
 * @param {!proto.neutralservice.Empty} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.Accounts>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.AccountManagementPromiseClient.prototype.listAccounts =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.listAccounts(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.neutralservice.CanonicalClient =
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
proto.neutralservice.CanonicalPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.neutralservice.CanonicalClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.neutralservice.CanonicalClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.neutralservice.Anything,
 *   !proto.neutralservice.CanonicalResponse>}
 */
const methodInfo_Canonical_canonicalize = new grpc.web.AbstractClientBase.MethodInfo(
  common_pb.CanonicalResponse,
  /** @param {!proto.neutralservice.Anything} request */
  function(request) {
    return request.serializeBinary();
  },
  common_pb.CanonicalResponse.deserializeBinary
);


/**
 * @param {!proto.neutralservice.Anything} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.neutralservice.CanonicalResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.neutralservice.CanonicalResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.CanonicalClient.prototype.canonicalize =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/neutralservice.Canonical/canonicalize',
      request,
      metadata,
      methodInfo_Canonical_canonicalize,
      callback);
};


/**
 * @param {!proto.neutralservice.Anything} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.neutralservice.CanonicalResponse>}
 *     The XHR Node Readable Stream
 */
proto.neutralservice.CanonicalPromiseClient.prototype.canonicalize =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.canonicalize(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.neutralservice;

