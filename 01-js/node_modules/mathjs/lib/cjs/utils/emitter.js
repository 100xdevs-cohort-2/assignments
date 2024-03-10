"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mixin = mixin;
var _tinyEmitter = _interopRequireDefault(require("tiny-emitter"));
/**
 * Extend given object with emitter functions `on`, `off`, `once`, `emit`
 * @param {Object} obj
 * @return {Object} obj
 */
function mixin(obj) {
  // create event emitter
  var emitter = new _tinyEmitter["default"]();

  // bind methods to obj (we don't want to expose the emitter.e Array...)
  obj.on = emitter.on.bind(emitter);
  obj.off = emitter.off.bind(emitter);
  obj.once = emitter.once.bind(emitter);
  obj.emit = emitter.emit.bind(emitter);
  return obj;
}