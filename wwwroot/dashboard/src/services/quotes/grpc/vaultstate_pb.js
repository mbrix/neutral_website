/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.neutralservice.LineState', null, global);
goog.exportSymbol('proto.neutralservice.VaultState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.neutralservice.LineState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.neutralservice.LineState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.neutralservice.LineState.displayName = 'proto.neutralservice.LineState';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.neutralservice.VaultState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.neutralservice.VaultState.repeatedFields_, null);
};
goog.inherits(proto.neutralservice.VaultState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.neutralservice.VaultState.displayName = 'proto.neutralservice.VaultState';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.neutralservice.LineState.prototype.toObject = function(opt_includeInstance) {
  return proto.neutralservice.LineState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.neutralservice.LineState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.neutralservice.LineState.toObject = function(includeInstance, msg) {
  var obj = {
    instrument: (f = msg.getInstrument()) && common_pb.InstrumentID.toObject(includeInstance, f),
    quantity: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.neutralservice.LineState}
 */
proto.neutralservice.LineState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.neutralservice.LineState;
  return proto.neutralservice.LineState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.neutralservice.LineState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.neutralservice.LineState}
 */
proto.neutralservice.LineState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.InstrumentID;
      reader.readMessage(value,common_pb.InstrumentID.deserializeBinaryFromReader);
      msg.setInstrument(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuantity(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.neutralservice.LineState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.neutralservice.LineState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.neutralservice.LineState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.neutralservice.LineState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstrument();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.InstrumentID.serializeBinaryToWriter
    );
  }
  f = message.getQuantity();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional InstrumentID instrument = 1;
 * @return {?proto.neutralservice.InstrumentID}
 */
proto.neutralservice.LineState.prototype.getInstrument = function() {
  return /** @type{?proto.neutralservice.InstrumentID} */ (
    jspb.Message.getWrapperField(this, common_pb.InstrumentID, 1));
};


/** @param {?proto.neutralservice.InstrumentID|undefined} value */
proto.neutralservice.LineState.prototype.setInstrument = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 */
proto.neutralservice.LineState.prototype.clearInstrument = function() {
  this.setInstrument(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.neutralservice.LineState.prototype.hasInstrument = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string quantity = 2;
 * @return {string}
 */
proto.neutralservice.LineState.prototype.getQuantity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.neutralservice.LineState.prototype.setQuantity = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.neutralservice.VaultState.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.neutralservice.VaultState.prototype.toObject = function(opt_includeInstance) {
  return proto.neutralservice.VaultState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.neutralservice.VaultState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.neutralservice.VaultState.toObject = function(includeInstance, msg) {
  var obj = {
    linesList: jspb.Message.toObjectList(msg.getLinesList(),
    proto.neutralservice.LineState.toObject, includeInstance),
    timestampnanos: jspb.Message.getFieldWithDefault(msg, 2, 0),
    blocknumber: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.neutralservice.VaultState}
 */
proto.neutralservice.VaultState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.neutralservice.VaultState;
  return proto.neutralservice.VaultState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.neutralservice.VaultState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.neutralservice.VaultState}
 */
proto.neutralservice.VaultState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.neutralservice.LineState;
      reader.readMessage(value,proto.neutralservice.LineState.deserializeBinaryFromReader);
      msg.addLines(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestampnanos(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlocknumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.neutralservice.VaultState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.neutralservice.VaultState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.neutralservice.VaultState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.neutralservice.VaultState.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLinesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.neutralservice.LineState.serializeBinaryToWriter
    );
  }
  f = message.getTimestampnanos();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getBlocknumber();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * repeated LineState lines = 1;
 * @return {!Array<!proto.neutralservice.LineState>}
 */
proto.neutralservice.VaultState.prototype.getLinesList = function() {
  return /** @type{!Array<!proto.neutralservice.LineState>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.neutralservice.LineState, 1));
};


/** @param {!Array<!proto.neutralservice.LineState>} value */
proto.neutralservice.VaultState.prototype.setLinesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.neutralservice.LineState=} opt_value
 * @param {number=} opt_index
 * @return {!proto.neutralservice.LineState}
 */
proto.neutralservice.VaultState.prototype.addLines = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.neutralservice.LineState, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 */
proto.neutralservice.VaultState.prototype.clearLinesList = function() {
  this.setLinesList([]);
};


/**
 * optional uint64 timestampNanos = 2;
 * @return {number}
 */
proto.neutralservice.VaultState.prototype.getTimestampnanos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.neutralservice.VaultState.prototype.setTimestampnanos = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 blockNumber = 3;
 * @return {number}
 */
proto.neutralservice.VaultState.prototype.getBlocknumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.neutralservice.VaultState.prototype.setBlocknumber = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.neutralservice);
