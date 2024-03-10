"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectWrappingMap = void 0;
exports.assign = assign;
exports.createEmptyMap = createEmptyMap;
exports.createMap = createMap;
exports.isMap = isMap;
exports.toObject = toObject;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _customs = require("./customs.js");
var _is = require("./is.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * A map facade on a bare object.
 *
 * The small number of methods needed to implement a scope,
 * forwarding on to the SafeProperty functions. Over time, the codebase
 * will stop using this method, as all objects will be Maps, rather than
 * more security prone objects.
 */
var ObjectWrappingMap = exports.ObjectWrappingMap = /*#__PURE__*/function () {
  function ObjectWrappingMap(object) {
    (0, _classCallCheck2["default"])(this, ObjectWrappingMap);
    this.wrappedObject = object;
  }
  (0, _createClass2["default"])(ObjectWrappingMap, [{
    key: "keys",
    value: function keys() {
      return Object.keys(this.wrappedObject);
    }
  }, {
    key: "get",
    value: function get(key) {
      return (0, _customs.getSafeProperty)(this.wrappedObject, key);
    }
  }, {
    key: "set",
    value: function set(key, value) {
      (0, _customs.setSafeProperty)(this.wrappedObject, key, value);
      return this;
    }
  }, {
    key: "has",
    value: function has(key) {
      return (0, _customs.hasSafeProperty)(this.wrappedObject, key);
    }
  }]);
  return ObjectWrappingMap;
}();
/**
 * Creates an empty map, or whatever your platform's polyfill is.
 *
 * @returns an empty Map or Map like object.
 */
function createEmptyMap() {
  return new Map();
}

/**
 * Creates a Map from the given object.
 *
 * @param { Map | { [key: string]: unknown } | undefined } mapOrObject
 * @returns
 */
function createMap(mapOrObject) {
  if (!mapOrObject) {
    return createEmptyMap();
  }
  if (isMap(mapOrObject)) {
    return mapOrObject;
  }
  if ((0, _is.isObject)(mapOrObject)) {
    return new ObjectWrappingMap(mapOrObject);
  }
  throw new Error('createMap can create maps from objects or Maps');
}

/**
 * Unwraps a map into an object.
 *
 * @param {Map} map
 * @returns { [key: string]: unknown }
 */
function toObject(map) {
  if (map instanceof ObjectWrappingMap) {
    return map.wrappedObject;
  }
  var object = {};
  var _iterator = _createForOfIteratorHelper(map.keys()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var value = map.get(key);
      (0, _customs.setSafeProperty)(object, key, value);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return object;
}

/**
 * Returns `true` if the passed object appears to be a Map (i.e. duck typing).
 *
 * Methods looked for are `get`, `set`, `keys` and `has`.
 *
 * @param {Map | object} object
 * @returns
 */
function isMap(object) {
  // We can use the fast instanceof, or a slower duck typing check.
  // The duck typing method needs to cover enough methods to not be confused with DenseMatrix.
  if (!object) {
    return false;
  }
  return object instanceof Map || object instanceof ObjectWrappingMap || typeof object.set === 'function' && typeof object.get === 'function' && typeof object.keys === 'function' && typeof object.has === 'function';
}

/**
 * Copies the contents of key-value pairs from each `objects` in to `map`.
 *
 * Object is `objects` can be a `Map` or object.
 *
 * This is the `Map` analog to `Object.assign`.
 */
function assign(map) {
  for (var _len = arguments.length, objects = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    objects[_key - 1] = arguments[_key];
  }
  for (var _i = 0, _objects = objects; _i < _objects.length; _i++) {
    var args = _objects[_i];
    if (!args) {
      continue;
    }
    if (isMap(args)) {
      var _iterator2 = _createForOfIteratorHelper(args.keys()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var key = _step2.value;
          map.set(key, args.get(key));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    } else if ((0, _is.isObject)(args)) {
      for (var _i2 = 0, _Object$keys = Object.keys(args); _i2 < _Object$keys.length; _i2++) {
        var _key2 = _Object$keys[_i2];
        map.set(_key2, args[_key2]);
      }
    }
  }
  return map;
}