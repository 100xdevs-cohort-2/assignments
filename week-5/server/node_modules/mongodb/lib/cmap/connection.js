"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.readMany = exports.writeCommand = exports.readWireProtocolMessages = exports.ModernConnection = exports.hasSessionSupport = exports.CryptoConnection = exports.Connection = void 0;
const events_1 = require("events");
const stream_1 = require("stream");
const timers_1 = require("timers");
const util_1 = require("util");
const constants_1 = require("../constants");
const error_1 = require("../error");
const mongo_types_1 = require("../mongo_types");
const sessions_1 = require("../sessions");
const utils_1 = require("../utils");
const command_monitoring_events_1 = require("./command_monitoring_events");
const commands_1 = require("./commands");
const message_stream_1 = require("./message_stream");
const stream_description_1 = require("./stream_description");
const compression_1 = require("./wire_protocol/compression");
const shared_1 = require("./wire_protocol/shared");
/** @internal */
const kStream = Symbol('stream');
/** @internal */
const kQueue = Symbol('queue');
/** @internal */
const kMessageStream = Symbol('messageStream');
/** @internal */
const kGeneration = Symbol('generation');
/** @internal */
const kLastUseTime = Symbol('lastUseTime');
/** @internal */
const kClusterTime = Symbol('clusterTime');
/** @internal */
const kDescription = Symbol('description');
/** @internal */
const kHello = Symbol('hello');
/** @internal */
const kAutoEncrypter = Symbol('autoEncrypter');
/** @internal */
const kDelayedTimeoutId = Symbol('delayedTimeoutId');
const INVALID_QUEUE_SIZE = 'Connection internal queue contains more than 1 operation description';
/** @internal */
class Connection extends mongo_types_1.TypedEventEmitter {
    constructor(stream, options) {
        super();
        this.commandAsync = (0, util_1.promisify)((ns, cmd, options, callback) => this.command(ns, cmd, options, callback));
        this.id = options.id;
        this.address = streamIdentifier(stream, options);
        this.socketTimeoutMS = options.socketTimeoutMS ?? 0;
        this.monitorCommands = options.monitorCommands;
        this.serverApi = options.serverApi;
        this.closed = false;
        this[kHello] = null;
        this[kClusterTime] = null;
        this[kDescription] = new stream_description_1.StreamDescription(this.address, options);
        this[kGeneration] = options.generation;
        this[kLastUseTime] = (0, utils_1.now)();
        // setup parser stream and message handling
        this[kQueue] = new Map();
        this[kMessageStream] = new message_stream_1.MessageStream({
            ...options,
            maxBsonMessageSize: this.hello?.maxBsonMessageSize
        });
        this[kStream] = stream;
        this[kDelayedTimeoutId] = null;
        this[kMessageStream].on('message', message => this.onMessage(message));
        this[kMessageStream].on('error', error => this.onError(error));
        this[kStream].on('close', () => this.onClose());
        this[kStream].on('timeout', () => this.onTimeout());
        this[kStream].on('error', () => {
            /* ignore errors, listen to `close` instead */
        });
        // hook the message stream up to the passed in stream
        this[kStream].pipe(this[kMessageStream]);
        this[kMessageStream].pipe(this[kStream]);
    }
    get description() {
        return this[kDescription];
    }
    get hello() {
        return this[kHello];
    }
    // the `connect` method stores the result of the handshake hello on the connection
    set hello(response) {
        this[kDescription].receiveResponse(response);
        this[kDescription] = Object.freeze(this[kDescription]);
        // TODO: remove this, and only use the `StreamDescription` in the future
        this[kHello] = response;
    }
    // Set the whether the message stream is for a monitoring connection.
    set isMonitoringConnection(value) {
        this[kMessageStream].isMonitoringConnection = value;
    }
    get isMonitoringConnection() {
        return this[kMessageStream].isMonitoringConnection;
    }
    get serviceId() {
        return this.hello?.serviceId;
    }
    get loadBalanced() {
        return this.description.loadBalanced;
    }
    get generation() {
        return this[kGeneration] || 0;
    }
    set generation(generation) {
        this[kGeneration] = generation;
    }
    get idleTime() {
        return (0, utils_1.calculateDurationInMs)(this[kLastUseTime]);
    }
    get clusterTime() {
        return this[kClusterTime];
    }
    get stream() {
        return this[kStream];
    }
    markAvailable() {
        this[kLastUseTime] = (0, utils_1.now)();
    }
    onError(error) {
        this.cleanup(true, error);
    }
    onClose() {
        const message = `connection ${this.id} to ${this.address} closed`;
        this.cleanup(true, new error_1.MongoNetworkError(message));
    }
    onTimeout() {
        this[kDelayedTimeoutId] = (0, timers_1.setTimeout)(() => {
            const message = `connection ${this.id} to ${this.address} timed out`;
            const beforeHandshake = this.hello == null;
            this.cleanup(true, new error_1.MongoNetworkTimeoutError(message, { beforeHandshake }));
        }, 1).unref(); // No need for this timer to hold the event loop open
    }
    onMessage(message) {
        const delayedTimeoutId = this[kDelayedTimeoutId];
        if (delayedTimeoutId != null) {
            (0, timers_1.clearTimeout)(delayedTimeoutId);
            this[kDelayedTimeoutId] = null;
        }
        const socketTimeoutMS = this[kStream].timeout ?? 0;
        this[kStream].setTimeout(0);
        // always emit the message, in case we are streaming
        this.emit('message', message);
        let operationDescription = this[kQueue].get(message.responseTo);
        if (!operationDescription && this.isMonitoringConnection) {
            // This is how we recover when the initial hello's requestId is not
            // the responseTo when hello responses have been skipped:
            // First check if the map is of invalid size
            if (this[kQueue].size > 1) {
                this.cleanup(true, new error_1.MongoRuntimeError(INVALID_QUEUE_SIZE));
            }
            else {
                // Get the first orphaned operation description.
                const entry = this[kQueue].entries().next();
                if (entry.value != null) {
                    const [requestId, orphaned] = entry.value;
                    // If the orphaned operation description exists then set it.
                    operationDescription = orphaned;
                    // Remove the entry with the bad request id from the queue.
                    this[kQueue].delete(requestId);
                }
            }
        }
        if (!operationDescription) {
            return;
        }
        const callback = operationDescription.cb;
        // SERVER-45775: For exhaust responses we should be able to use the same requestId to
        // track response, however the server currently synthetically produces remote requests
        // making the `responseTo` change on each response
        this[kQueue].delete(message.responseTo);
        if ('moreToCome' in message && message.moreToCome) {
            // If the operation description check above does find an orphaned
            // description and sets the operationDescription then this line will put one
            // back in the queue with the correct requestId and will resolve not being able
            // to find the next one via the responseTo of the next streaming hello.
            this[kQueue].set(message.requestId, operationDescription);
            this[kStream].setTimeout(socketTimeoutMS);
        }
        try {
            // Pass in the entire description because it has BSON parsing options
            message.parse(operationDescription);
        }
        catch (err) {
            // If this error is generated by our own code, it will already have the correct class applied
            // if it is not, then it is coming from a catastrophic data parse failure or the BSON library
            // in either case, it should not be wrapped
            callback(err);
            return;
        }
        if (message.documents[0]) {
            const document = message.documents[0];
            const session = operationDescription.session;
            if (session) {
                (0, sessions_1.updateSessionFromResponse)(session, document);
            }
            if (document.$clusterTime) {
                this[kClusterTime] = document.$clusterTime;
                this.emit(Connection.CLUSTER_TIME_RECEIVED, document.$clusterTime);
            }
            if (document.writeConcernError) {
                callback(new error_1.MongoWriteConcernError(document.writeConcernError, document), document);
                return;
            }
            if (document.ok === 0 || document.$err || document.errmsg || document.code) {
                callback(new error_1.MongoServerError(document));
                return;
            }
        }
        callback(undefined, message.documents[0]);
    }
    destroy(options, callback) {
        if (this.closed) {
            process.nextTick(() => callback?.());
            return;
        }
        if (typeof callback === 'function') {
            this.once('close', () => process.nextTick(() => callback()));
        }
        // load balanced mode requires that these listeners remain on the connection
        // after cleanup on timeouts, errors or close so we remove them before calling
        // cleanup.
        this.removeAllListeners(Connection.PINNED);
        this.removeAllListeners(Connection.UNPINNED);
        const message = `connection ${this.id} to ${this.address} closed`;
        this.cleanup(options.force, new error_1.MongoNetworkError(message));
    }
    /**
     * A method that cleans up the connection.  When `force` is true, this method
     * forcibly destroys the socket.
     *
     * If an error is provided, any in-flight operations will be closed with the error.
     *
     * This method does nothing if the connection is already closed.
     */
    cleanup(force, error) {
        if (this.closed) {
            return;
        }
        this.closed = true;
        const completeCleanup = () => {
            for (const op of this[kQueue].values()) {
                op.cb(error);
            }
            this[kQueue].clear();
            this.emit(Connection.CLOSE);
        };
        this[kStream].removeAllListeners();
        this[kMessageStream].removeAllListeners();
        this[kMessageStream].destroy();
        if (force) {
            this[kStream].destroy();
            completeCleanup();
            return;
        }
        if (!this[kStream].writableEnded) {
            this[kStream].end(() => {
                this[kStream].destroy();
                completeCleanup();
            });
        }
        else {
            completeCleanup();
        }
    }
    command(ns, command, options, callback) {
        let cmd = { ...command };
        const readPreference = (0, shared_1.getReadPreference)(options);
        const shouldUseOpMsg = supportsOpMsg(this);
        const session = options?.session;
        let clusterTime = this.clusterTime;
        if (this.serverApi) {
            const { version, strict, deprecationErrors } = this.serverApi;
            cmd.apiVersion = version;
            if (strict != null)
                cmd.apiStrict = strict;
            if (deprecationErrors != null)
                cmd.apiDeprecationErrors = deprecationErrors;
        }
        if (hasSessionSupport(this) && session) {
            if (session.clusterTime &&
                clusterTime &&
                session.clusterTime.clusterTime.greaterThan(clusterTime.clusterTime)) {
                clusterTime = session.clusterTime;
            }
            const err = (0, sessions_1.applySession)(session, cmd, options);
            if (err) {
                return callback(err);
            }
        }
        else if (session?.explicit) {
            return callback(new error_1.MongoCompatibilityError('Current topology does not support sessions'));
        }
        // if we have a known cluster time, gossip it
        if (clusterTime) {
            cmd.$clusterTime = clusterTime;
        }
        if ((0, shared_1.isSharded)(this) && !shouldUseOpMsg && readPreference && readPreference.mode !== 'primary') {
            cmd = {
                $query: cmd,
                $readPreference: readPreference.toJSON()
            };
        }
        const commandOptions = Object.assign({
            numberToSkip: 0,
            numberToReturn: -1,
            checkKeys: false,
            // This value is not overridable
            secondaryOk: readPreference.secondaryOk()
        }, options);
        const message = shouldUseOpMsg
            ? new commands_1.OpMsgRequest(ns.db, cmd, commandOptions)
            : new commands_1.OpQueryRequest(ns.db, cmd, commandOptions);
        try {
            write(this, message, commandOptions, callback);
        }
        catch (err) {
            callback(err);
        }
    }
}
/** @event */
Connection.COMMAND_STARTED = constants_1.COMMAND_STARTED;
/** @event */
Connection.COMMAND_SUCCEEDED = constants_1.COMMAND_SUCCEEDED;
/** @event */
Connection.COMMAND_FAILED = constants_1.COMMAND_FAILED;
/** @event */
Connection.CLUSTER_TIME_RECEIVED = constants_1.CLUSTER_TIME_RECEIVED;
/** @event */
Connection.CLOSE = constants_1.CLOSE;
/** @event */
Connection.MESSAGE = constants_1.MESSAGE;
/** @event */
Connection.PINNED = constants_1.PINNED;
/** @event */
Connection.UNPINNED = constants_1.UNPINNED;
exports.Connection = Connection;
/** @internal */
class CryptoConnection extends Connection {
    constructor(stream, options) {
        super(stream, options);
        this[kAutoEncrypter] = options.autoEncrypter;
    }
    /** @internal @override */
    command(ns, cmd, options, callback) {
        const autoEncrypter = this[kAutoEncrypter];
        if (!autoEncrypter) {
            return callback(new error_1.MongoMissingDependencyError('No AutoEncrypter available for encryption'));
        }
        const serverWireVersion = (0, utils_1.maxWireVersion)(this);
        if (serverWireVersion === 0) {
            // This means the initial handshake hasn't happened yet
            return super.command(ns, cmd, options, callback);
        }
        if (serverWireVersion < 8) {
            callback(new error_1.MongoCompatibilityError('Auto-encryption requires a minimum MongoDB version of 4.2'));
            return;
        }
        // Save sort or indexKeys based on the command being run
        // the encrypt API serializes our JS objects to BSON to pass to the native code layer
        // and then deserializes the encrypted result, the protocol level components
        // of the command (ex. sort) are then converted to JS objects potentially losing
        // import key order information. These fields are never encrypted so we can save the values
        // from before the encryption and replace them after encryption has been performed
        const sort = cmd.find || cmd.findAndModify ? cmd.sort : null;
        const indexKeys = cmd.createIndexes
            ? cmd.indexes.map((index) => index.key)
            : null;
        autoEncrypter.encrypt(ns.toString(), cmd, options).then(encrypted => {
            // Replace the saved values
            if (sort != null && (cmd.find || cmd.findAndModify)) {
                encrypted.sort = sort;
            }
            if (indexKeys != null && cmd.createIndexes) {
                for (const [offset, index] of indexKeys.entries()) {
                    // @ts-expect-error `encrypted` is a generic "command", but we've narrowed for only `createIndexes` commands here
                    encrypted.indexes[offset].key = index;
                }
            }
            super.command(ns, encrypted, options, (err, response) => {
                if (err || response == null) {
                    callback(err, response);
                    return;
                }
                autoEncrypter.decrypt(response, options).then(res => callback(undefined, res), err => callback(err));
            });
        }, err => {
            if (err) {
                callback(err, null);
            }
        });
    }
}
exports.CryptoConnection = CryptoConnection;
/** @internal */
function hasSessionSupport(conn) {
    const description = conn.description;
    return description.logicalSessionTimeoutMinutes != null;
}
exports.hasSessionSupport = hasSessionSupport;
function supportsOpMsg(conn) {
    const description = conn.description;
    if (description == null) {
        return false;
    }
    return (0, utils_1.maxWireVersion)(conn) >= 6 && !description.__nodejs_mock_server__;
}
function streamIdentifier(stream, options) {
    if (options.proxyHost) {
        // If proxy options are specified, the properties of `stream` itself
        // will not accurately reflect what endpoint this is connected to.
        return options.hostAddress.toString();
    }
    const { remoteAddress, remotePort } = stream;
    if (typeof remoteAddress === 'string' && typeof remotePort === 'number') {
        return utils_1.HostAddress.fromHostPort(remoteAddress, remotePort).toString();
    }
    return (0, utils_1.uuidV4)().toString('hex');
}
function write(conn, command, options, callback) {
    options = options ?? {};
    const operationDescription = {
        requestId: command.requestId,
        cb: callback,
        session: options.session,
        noResponse: typeof options.noResponse === 'boolean' ? options.noResponse : false,
        documentsReturnedIn: options.documentsReturnedIn,
        // for BSON parsing
        useBigInt64: typeof options.useBigInt64 === 'boolean' ? options.useBigInt64 : false,
        promoteLongs: typeof options.promoteLongs === 'boolean' ? options.promoteLongs : true,
        promoteValues: typeof options.promoteValues === 'boolean' ? options.promoteValues : true,
        promoteBuffers: typeof options.promoteBuffers === 'boolean' ? options.promoteBuffers : false,
        bsonRegExp: typeof options.bsonRegExp === 'boolean' ? options.bsonRegExp : false,
        enableUtf8Validation: typeof options.enableUtf8Validation === 'boolean' ? options.enableUtf8Validation : true,
        raw: typeof options.raw === 'boolean' ? options.raw : false,
        started: 0
    };
    if (conn[kDescription] && conn[kDescription].compressor) {
        operationDescription.agreedCompressor = conn[kDescription].compressor;
        if (conn[kDescription].zlibCompressionLevel) {
            operationDescription.zlibCompressionLevel = conn[kDescription].zlibCompressionLevel;
        }
    }
    if (typeof options.socketTimeoutMS === 'number') {
        conn[kStream].setTimeout(options.socketTimeoutMS);
    }
    else if (conn.socketTimeoutMS !== 0) {
        conn[kStream].setTimeout(conn.socketTimeoutMS);
    }
    // if command monitoring is enabled we need to modify the callback here
    if (conn.monitorCommands) {
        conn.emit(Connection.COMMAND_STARTED, new command_monitoring_events_1.CommandStartedEvent(conn, command));
        operationDescription.started = (0, utils_1.now)();
        operationDescription.cb = (err, reply) => {
            // Command monitoring spec states that if ok is 1, then we must always emit
            // a command succeeded event, even if there's an error. Write concern errors
            // will have an ok: 1 in their reply.
            if (err && reply?.ok !== 1) {
                conn.emit(Connection.COMMAND_FAILED, new command_monitoring_events_1.CommandFailedEvent(conn, command, err, operationDescription.started));
            }
            else {
                if (reply && (reply.ok === 0 || reply.$err)) {
                    conn.emit(Connection.COMMAND_FAILED, new command_monitoring_events_1.CommandFailedEvent(conn, command, reply, operationDescription.started));
                }
                else {
                    conn.emit(Connection.COMMAND_SUCCEEDED, new command_monitoring_events_1.CommandSucceededEvent(conn, command, reply, operationDescription.started));
                }
            }
            if (typeof callback === 'function') {
                // Since we're passing through the reply with the write concern error now, we
                // need it not to be provided to the original callback in this case so
                // retryability does not get tricked into thinking the command actually
                // succeeded.
                callback(err, err instanceof error_1.MongoWriteConcernError ? undefined : reply);
            }
        };
    }
    if (!operationDescription.noResponse) {
        conn[kQueue].set(operationDescription.requestId, operationDescription);
    }
    try {
        conn[kMessageStream].writeCommand(command, operationDescription);
    }
    catch (e) {
        if (!operationDescription.noResponse) {
            conn[kQueue].delete(operationDescription.requestId);
            operationDescription.cb(e);
            return;
        }
    }
    if (operationDescription.noResponse) {
        operationDescription.cb();
    }
}
/** in-progress connection layer */
/** @internal */
class ModernConnection extends mongo_types_1.TypedEventEmitter {
    constructor(stream, options) {
        super();
        this.commandAsync = (0, util_1.promisify)((ns, cmd, options, callback) => this.command(ns, cmd, options, callback));
        this.id = options.id;
        this.address = streamIdentifier(stream, options);
        this.socketTimeoutMS = options.socketTimeoutMS ?? 0;
        this.monitorCommands = options.monitorCommands;
        this.serverApi = options.serverApi;
        this.closed = false;
        this[kHello] = null;
        this[kClusterTime] = null;
        this[kDescription] = new stream_description_1.StreamDescription(this.address, options);
        this[kGeneration] = options.generation;
        this[kLastUseTime] = (0, utils_1.now)();
        // setup parser stream and message handling
        this[kQueue] = new Map();
        this[kMessageStream] = new message_stream_1.MessageStream({
            ...options,
            maxBsonMessageSize: this.hello?.maxBsonMessageSize
        });
        this.socket = stream;
        this[kDelayedTimeoutId] = null;
        this[kMessageStream].on('message', message => this.onMessage(message));
        this[kMessageStream].on('error', error => this.onError(error));
        this.socket.on('close', () => this.onClose());
        this.socket.on('timeout', () => this.onTimeout());
        this.socket.on('error', () => {
            /* ignore errors, listen to `close` instead */
        });
        // hook the message stream up to the passed in stream
        this.socket.pipe(this[kMessageStream]);
        this[kMessageStream].pipe(this.socket);
    }
    get description() {
        return this[kDescription];
    }
    get hello() {
        return this[kHello];
    }
    // the `connect` method stores the result of the handshake hello on the connection
    set hello(response) {
        this[kDescription].receiveResponse(response);
        this[kDescription] = Object.freeze(this[kDescription]);
        // TODO: remove this, and only use the `StreamDescription` in the future
        this[kHello] = response;
    }
    // Set the whether the message stream is for a monitoring connection.
    set isMonitoringConnection(value) {
        this[kMessageStream].isMonitoringConnection = value;
    }
    get isMonitoringConnection() {
        return this[kMessageStream].isMonitoringConnection;
    }
    get serviceId() {
        return this.hello?.serviceId;
    }
    get loadBalanced() {
        return this.description.loadBalanced;
    }
    get generation() {
        return this[kGeneration] || 0;
    }
    set generation(generation) {
        this[kGeneration] = generation;
    }
    get idleTime() {
        return (0, utils_1.calculateDurationInMs)(this[kLastUseTime]);
    }
    get clusterTime() {
        return this[kClusterTime];
    }
    get stream() {
        return this.socket;
    }
    get hasSessionSupport() {
        return this.description.logicalSessionTimeoutMinutes != null;
    }
    get supportsOpMsg() {
        return (this.description != null &&
            (0, utils_1.maxWireVersion)(this) >= 6 &&
            !this.description.__nodejs_mock_server__);
    }
    markAvailable() {
        this[kLastUseTime] = (0, utils_1.now)();
    }
    onError(error) {
        this.cleanup(true, error);
    }
    onClose() {
        const message = `connection ${this.id} to ${this.address} closed`;
        this.cleanup(true, new error_1.MongoNetworkError(message));
    }
    onTimeout() {
        this[kDelayedTimeoutId] = (0, timers_1.setTimeout)(() => {
            const message = `connection ${this.id} to ${this.address} timed out`;
            const beforeHandshake = this.hello == null;
            this.cleanup(true, new error_1.MongoNetworkTimeoutError(message, { beforeHandshake }));
        }, 1).unref(); // No need for this timer to hold the event loop open
    }
    onMessage(message) {
        const delayedTimeoutId = this[kDelayedTimeoutId];
        if (delayedTimeoutId != null) {
            (0, timers_1.clearTimeout)(delayedTimeoutId);
            this[kDelayedTimeoutId] = null;
        }
        const socketTimeoutMS = this.socket.timeout ?? 0;
        this.socket.setTimeout(0);
        // always emit the message, in case we are streaming
        this.emit('message', message);
        let operationDescription = this[kQueue].get(message.responseTo);
        if (!operationDescription && this.isMonitoringConnection) {
            // This is how we recover when the initial hello's requestId is not
            // the responseTo when hello responses have been skipped:
            // First check if the map is of invalid size
            if (this[kQueue].size > 1) {
                this.cleanup(true, new error_1.MongoRuntimeError(INVALID_QUEUE_SIZE));
            }
            else {
                // Get the first orphaned operation description.
                const entry = this[kQueue].entries().next();
                if (entry.value != null) {
                    const [requestId, orphaned] = entry.value;
                    // If the orphaned operation description exists then set it.
                    operationDescription = orphaned;
                    // Remove the entry with the bad request id from the queue.
                    this[kQueue].delete(requestId);
                }
            }
        }
        if (!operationDescription) {
            return;
        }
        const callback = operationDescription.cb;
        // SERVER-45775: For exhaust responses we should be able to use the same requestId to
        // track response, however the server currently synthetically produces remote requests
        // making the `responseTo` change on each response
        this[kQueue].delete(message.responseTo);
        if ('moreToCome' in message && message.moreToCome) {
            // If the operation description check above does find an orphaned
            // description and sets the operationDescription then this line will put one
            // back in the queue with the correct requestId and will resolve not being able
            // to find the next one via the responseTo of the next streaming hello.
            this[kQueue].set(message.requestId, operationDescription);
            this.socket.setTimeout(socketTimeoutMS);
        }
        try {
            // Pass in the entire description because it has BSON parsing options
            message.parse(operationDescription);
        }
        catch (err) {
            // If this error is generated by our own code, it will already have the correct class applied
            // if it is not, then it is coming from a catastrophic data parse failure or the BSON library
            // in either case, it should not be wrapped
            callback(err);
            return;
        }
        if (message.documents[0]) {
            const document = message.documents[0];
            const session = operationDescription.session;
            if (session) {
                (0, sessions_1.updateSessionFromResponse)(session, document);
            }
            if (document.$clusterTime) {
                this[kClusterTime] = document.$clusterTime;
                this.emit(Connection.CLUSTER_TIME_RECEIVED, document.$clusterTime);
            }
            if (document.writeConcernError) {
                callback(new error_1.MongoWriteConcernError(document.writeConcernError, document), document);
                return;
            }
            if (document.ok === 0 || document.$err || document.errmsg || document.code) {
                callback(new error_1.MongoServerError(document));
                return;
            }
        }
        callback(undefined, message.documents[0]);
    }
    destroy(options, callback) {
        if (this.closed) {
            process.nextTick(() => callback?.());
            return;
        }
        if (typeof callback === 'function') {
            this.once('close', () => process.nextTick(() => callback()));
        }
        // load balanced mode requires that these listeners remain on the connection
        // after cleanup on timeouts, errors or close so we remove them before calling
        // cleanup.
        this.removeAllListeners(Connection.PINNED);
        this.removeAllListeners(Connection.UNPINNED);
        const message = `connection ${this.id} to ${this.address} closed`;
        this.cleanup(options.force, new error_1.MongoNetworkError(message));
    }
    /**
     * A method that cleans up the connection.  When `force` is true, this method
     * forcibly destroys the socket.
     *
     * If an error is provided, any in-flight operations will be closed with the error.
     *
     * This method does nothing if the connection is already closed.
     */
    cleanup(force, error) {
        if (this.closed) {
            return;
        }
        this.closed = true;
        const completeCleanup = () => {
            for (const op of this[kQueue].values()) {
                op.cb(error);
            }
            this[kQueue].clear();
            this.emit(Connection.CLOSE);
        };
        this.socket.removeAllListeners();
        this[kMessageStream].removeAllListeners();
        this[kMessageStream].destroy();
        if (force) {
            this.socket.destroy();
            completeCleanup();
            return;
        }
        if (!this.socket.writableEnded) {
            this.socket.end(() => {
                this.socket.destroy();
                completeCleanup();
            });
        }
        else {
            completeCleanup();
        }
    }
    command(ns, command, options, callback) {
        let cmd = { ...command };
        const readPreference = (0, shared_1.getReadPreference)(options);
        const session = options?.session;
        let clusterTime = this.clusterTime;
        if (this.serverApi) {
            const { version, strict, deprecationErrors } = this.serverApi;
            cmd.apiVersion = version;
            if (strict != null)
                cmd.apiStrict = strict;
            if (deprecationErrors != null)
                cmd.apiDeprecationErrors = deprecationErrors;
        }
        if (this.hasSessionSupport && session) {
            if (session.clusterTime &&
                clusterTime &&
                session.clusterTime.clusterTime.greaterThan(clusterTime.clusterTime)) {
                clusterTime = session.clusterTime;
            }
            const err = (0, sessions_1.applySession)(session, cmd, options);
            if (err) {
                return callback(err);
            }
        }
        else if (session?.explicit) {
            return callback(new error_1.MongoCompatibilityError('Current topology does not support sessions'));
        }
        // if we have a known cluster time, gossip it
        if (clusterTime) {
            cmd.$clusterTime = clusterTime;
        }
        if (
        // @ts-expect-error ModernConnections cannot be passed as connections
        (0, shared_1.isSharded)(this) &&
            !this.supportsOpMsg &&
            readPreference &&
            readPreference.mode !== 'primary') {
            cmd = {
                $query: cmd,
                $readPreference: readPreference.toJSON()
            };
        }
        const commandOptions = Object.assign({
            numberToSkip: 0,
            numberToReturn: -1,
            checkKeys: false,
            // This value is not overridable
            secondaryOk: readPreference.secondaryOk()
        }, options);
        const message = this.supportsOpMsg
            ? new commands_1.OpMsgRequest(ns.db, cmd, commandOptions)
            : new commands_1.OpQueryRequest(ns.db, cmd, commandOptions);
        try {
            write(this, message, commandOptions, callback);
        }
        catch (err) {
            callback(err);
        }
    }
}
/** @event */
ModernConnection.COMMAND_STARTED = constants_1.COMMAND_STARTED;
/** @event */
ModernConnection.COMMAND_SUCCEEDED = constants_1.COMMAND_SUCCEEDED;
/** @event */
ModernConnection.COMMAND_FAILED = constants_1.COMMAND_FAILED;
/** @event */
ModernConnection.CLUSTER_TIME_RECEIVED = constants_1.CLUSTER_TIME_RECEIVED;
/** @event */
ModernConnection.CLOSE = constants_1.CLOSE;
/** @event */
ModernConnection.MESSAGE = constants_1.MESSAGE;
/** @event */
ModernConnection.PINNED = constants_1.PINNED;
/** @event */
ModernConnection.UNPINNED = constants_1.UNPINNED;
exports.ModernConnection = ModernConnection;
const kDefaultMaxBsonMessageSize = 1024 * 1024 * 16 * 4;
/**
 * @internal
 *
 * This helper reads chucks of data out of a socket and buffers them until it has received a
 * full wire protocol message.
 *
 * By itself, produces an infinite async generator of wire protocol messages and consumers must end
 * the stream by calling `return` on the generator.
 *
 * Note that `for-await` loops call `return` automatically when the loop is exited.
 */
async function* readWireProtocolMessages(connection) {
    const bufferPool = new utils_1.BufferPool();
    const maxBsonMessageSize = connection.hello?.maxBsonMessageSize ?? kDefaultMaxBsonMessageSize;
    for await (const [chunk] of (0, stream_1.on)(connection.socket, 'data')) {
        bufferPool.append(chunk);
        const sizeOfMessage = bufferPool.getInt32();
        if (sizeOfMessage == null) {
            continue;
        }
        if (sizeOfMessage < 0) {
            throw new error_1.MongoParseError(`Invalid message size: ${sizeOfMessage}`);
        }
        if (sizeOfMessage > maxBsonMessageSize) {
            throw new error_1.MongoParseError(`Invalid message size: ${sizeOfMessage}, max allowed: ${maxBsonMessageSize}`);
        }
        if (sizeOfMessage > bufferPool.length) {
            continue;
        }
        yield bufferPool.read(sizeOfMessage);
    }
}
exports.readWireProtocolMessages = readWireProtocolMessages;
/**
 * @internal
 *
 * Writes an OP_MSG or OP_QUERY request to the socket, optionally compressing the command. This method
 * waits until the socket's buffer has emptied (the Nodejs socket `drain` event has fired).
 */
async function writeCommand(connection, command, options) {
    const drained = (0, events_1.once)(connection.socket, 'drain');
    const finalCommand = options.agreedCompressor === 'none' || !commands_1.OpCompressedRequest.canCompress(command)
        ? command
        : new commands_1.OpCompressedRequest(command, {
            agreedCompressor: options.agreedCompressor ?? 'none',
            zlibCompressionLevel: options.zlibCompressionLevel ?? 0
        });
    const buffer = Buffer.concat(await finalCommand.toBin());
    connection.socket.push(buffer);
    await drained;
}
exports.writeCommand = writeCommand;
/**
 * @internal
 *
 * Returns an async generator that yields full wire protocol messages from the underlying socket.  This function
 * yields messages until `moreToCome` is false or not present in a response, or the caller cancels the request
 * by calling `return` on the generator.
 *
 * Note that `for-await` loops call `return` automatically when the loop is exited.
 */
async function* readMany(connection) {
    for await (const message of readWireProtocolMessages(connection)) {
        const response = await (0, compression_1.decompressResponse)(message);
        yield response;
        if (!('moreToCome' in response) || !response.moreToCome) {
            return;
        }
    }
}
exports.readMany = readMany;
/**
 * @internal
 *
 * Reads a single wire protocol message out of a connection.
 */
async function read(connection) {
    for await (const value of readMany(connection)) {
        return value;
    }
    throw new error_1.MongoRuntimeError('unable to read message off of connection');
}
exports.read = read;
//# sourceMappingURL=connection.js.map