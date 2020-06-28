// source: gtfs-realtime.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.transit_realtime.EntitySelector');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.transit_realtime.TripDescriptor');

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
proto.transit_realtime.EntitySelector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 6, null, null);
};
goog.inherits(proto.transit_realtime.EntitySelector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transit_realtime.EntitySelector.displayName = 'proto.transit_realtime.EntitySelector';
}

/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.transit_realtime.EntitySelector.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.transit_realtime.EntitySelector.extensionsBinary = {};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transit_realtime.EntitySelector.prototype.toObject = function(opt_includeInstance) {
  return proto.transit_realtime.EntitySelector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transit_realtime.EntitySelector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.EntitySelector.toObject = function(includeInstance, msg) {
  var f, obj = {
    agencyId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    routeId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    routeType: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    trip: (f = msg.getTrip()) && proto.transit_realtime.TripDescriptor.toObject(includeInstance, f),
    stopId: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.transit_realtime.EntitySelector.extensions, proto.transit_realtime.EntitySelector.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transit_realtime.EntitySelector}
 */
proto.transit_realtime.EntitySelector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transit_realtime.EntitySelector;
  return proto.transit_realtime.EntitySelector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transit_realtime.EntitySelector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transit_realtime.EntitySelector}
 */
proto.transit_realtime.EntitySelector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgencyId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRouteId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRouteType(value);
      break;
    case 4:
      var value = new proto.transit_realtime.TripDescriptor;
      reader.readMessage(value,proto.transit_realtime.TripDescriptor.deserializeBinaryFromReader);
      msg.setTrip(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStopId(value);
      break;
    default:
      jspb.Message.readBinaryExtension(msg, reader,
        proto.transit_realtime.EntitySelector.extensionsBinary,
        proto.transit_realtime.EntitySelector.prototype.getExtension,
        proto.transit_realtime.EntitySelector.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transit_realtime.EntitySelector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transit_realtime.EntitySelector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transit_realtime.EntitySelector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transit_realtime.EntitySelector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTrip();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.transit_realtime.TripDescriptor.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.transit_realtime.EntitySelector.extensionsBinary, proto.transit_realtime.EntitySelector.prototype.getExtension);
};


/**
 * optional string agency_id = 1;
 * @return {string}
 */
proto.transit_realtime.EntitySelector.prototype.getAgencyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_realtime.EntitySelector} returns this
 */
proto.transit_realtime.EntitySelector.prototype.setAgencyId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.transit_realtime.EntitySelector} returns this
 */
proto.transit_realtime.EntitySelector.prototype.clearAgencyId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transit_realtime.EntitySelector.prototype.hasAgencyId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string route_id = 2;
 * @return {string}
 */
proto.transit_realtime.EntitySelector.prototype.getRouteId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_realtime.EntitySelector} returns this
 */
proto.transit_realtime.EntitySelector.prototype.setRouteId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.transit_realtime.EntitySelector} returns this
 */
proto.transit_realtime.EntitySelector.prototype.clearRouteId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transit_realtime.EntitySelector.prototype.hasRouteId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 route_type = 3;
 * @return {number}
 */
proto.transit_realtime.EntitySelector.prototype.getRouteType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.transit_realtime.EntitySelector} returns this
 */
proto.transit_realtime.EntitySelector.prototype.setRouteType = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.transit_realtime.EntitySelector} returns this
 */
proto.transit_realtime.EntitySelector.prototype.clearRouteType = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transit_realtime.EntitySelector.prototype.hasRouteType = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TripDescriptor trip = 4;
 * @return {?proto.transit_realtime.TripDescriptor}
 */
proto.transit_realtime.EntitySelector.prototype.getTrip = function() {
  return /** @type{?proto.transit_realtime.TripDescriptor} */ (
    jspb.Message.getWrapperField(this, proto.transit_realtime.TripDescriptor, 4));
};


/**
 * @param {?proto.transit_realtime.TripDescriptor|undefined} value
 * @return {!proto.transit_realtime.EntitySelector} returns this
*/
proto.transit_realtime.EntitySelector.prototype.setTrip = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transit_realtime.EntitySelector} returns this
 */
proto.transit_realtime.EntitySelector.prototype.clearTrip = function() {
  return this.setTrip(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transit_realtime.EntitySelector.prototype.hasTrip = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string stop_id = 5;
 * @return {string}
 */
proto.transit_realtime.EntitySelector.prototype.getStopId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.transit_realtime.EntitySelector} returns this
 */
proto.transit_realtime.EntitySelector.prototype.setStopId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.transit_realtime.EntitySelector} returns this
 */
proto.transit_realtime.EntitySelector.prototype.clearStopId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transit_realtime.EntitySelector.prototype.hasStopId = function() {
  return jspb.Message.getField(this, 5) != null;
};


