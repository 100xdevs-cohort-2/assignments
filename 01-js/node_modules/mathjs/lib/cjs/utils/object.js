"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canDefineProperty = canDefineProperty;
exports.clone = clone;
exports.deepExtend = deepExtend;
exports.deepFlatten = deepFlatten;
exports.deepStrictEqual = deepStrictEqual;
exports.extend = extend;
exports.get = get;
exports.hasOwnProperty = hasOwnProperty;
exports.isLegacyFactory = isLegacyFactory;
exports.lazy = lazy;
exports.mapObject = mapObject;
exports.pick = pick;
exports.pickShallow = pickShallow;
exports.set = set;
exports.traverse = traverse;
exports.values = values;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _is = require("./is.js");
/**
 * Clone an object
 *
 *     clone(x)
 *
 * Can clone any primitive type, array, and object.
 * If x has a function clone, this function will be invoked to clone the object.
 *
 * @param {*} x
 * @return {*} clone
 */
function clone(x) {
  var type = (0, _typeof2["default"])(x);

  // immutable primitive types
  if (type === 'number' || type === 'string' || type === 'boolean' || x === null || x === undefined) {
    return x;
  }

  // use clone function of the object when available
  if (typeof x.clone === 'function') {
    return x.clone();
  }

  // array
  if (Array.isArray(x)) {
    return x.map(function (value) {
      return clone(value);
    });
  }
  if (x instanceof Date) return new Date(x.valueOf());
  if ((0, _is.isBigNumber)(x)) return x; // bignumbers are immutable

  // object
  if ((0, _is.isObject)(x)) {
    return mapObject(x, clone);
  }
  throw new TypeError("Cannot clone: unknown type of value (value: ".concat(x, ")"));
}

/**
 * Apply map to all properties of an object
 * @param {Object} object
 * @param {function} callback
 * @return {Object} Returns a copy of the object with mapped properties
 */
function mapObject(object, callback) {
  var clone = {};
  for (var key in object) {
    if (hasOwnProperty(object, key)) {
      clone[key] = callback(object[key]);
    }
  }
  return clone;
}

/**
 * Extend object a with the properties of object b
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 */
function extend(a, b) {
  for (var prop in b) {
    if (hasOwnProperty(b, prop)) {
      a[prop] = b[prop];
    }
  }
  return a;
}

/**
 * Deep extend an object a with the properties of object b
 * @param {Object} a
 * @param {Object} b
 * @returns {Object}
 */
function deepExtend(a, b) {
  // TODO: add support for Arrays to deepExtend
  if (Array.isArray(b)) {
    throw new TypeError('Arrays are not supported by deepExtend');
  }
  for (var prop in b) {
    // We check against prop not being in Object.prototype or Function.prototype
    // to prevent polluting for example Object.__proto__.
    if (hasOwnProperty(b, prop) && !(prop in Object.prototype) && !(prop in Function.prototype)) {
      if (b[prop] && b[prop].constructor === Object) {
        if (a[prop] === undefined) {
          a[prop] = {};
        }
        if (a[prop] && a[prop].constructor === Object) {
          deepExtend(a[prop], b[prop]);
        } else {
          a[prop] = b[prop];
        }
      } else if (Array.isArray(b[prop])) {
        throw new TypeError('Arrays are not supported by deepExtend');
      } else {
        a[prop] = b[prop];
      }
    }
  }
  return a;
}

/**
 * Deep test equality of all fields in two pairs of arrays or objects.
 * Compares values and functions strictly (ie. 2 is not the same as '2').
 * @param {Array | Object} a
 * @param {Array | Object} b
 * @returns {boolean}
 */
function deepStrictEqual(a, b) {
  var prop, i, len;
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (i = 0, len = a.length; i < len; i++) {
      if (!deepStrictEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  } else if (typeof a === 'function') {
    return a === b;
  } else if (a instanceof Object) {
    if (Array.isArray(b) || !(b instanceof Object)) {
      return false;
    }
    for (prop in a) {
      // noinspection JSUnfilteredForInLoop
      if (!(prop in b) || !deepStrictEqual(a[prop], b[prop])) {
        return false;
      }
    }
    for (prop in b) {
      // noinspection JSUnfilteredForInLoop
      if (!(prop in a)) {
        return false;
      }
    }
    return true;
  } else {
    return a === b;
  }
}

/**
 * Recursively flatten a nested object.
 * @param {Object} nestedObject
 * @return {Object} Returns the flattened object
 */
function deepFlatten(nestedObject) {
  var flattenedObject = {};
  _deepFlatten(nestedObject, flattenedObject);
  return flattenedObject;
}

// helper function used by deepFlatten
function _deepFlatten(nestedObject, flattenedObject) {
  for (var prop in nestedObject) {
    if (hasOwnProperty(nestedObject, prop)) {
      var value = nestedObject[prop];
      if ((0, _typeof2["default"])(value) === 'object' && value !== null) {
        _deepFlatten(value, flattenedObject);
      } else {
        flattenedObject[prop] = value;
      }
    }
  }
}

/**
 * Test whether the current JavaScript engine supports Object.defineProperty
 * @returns {boolean} returns true if supported
 */
function canDefineProperty() {
  // test needed for broken IE8 implementation
  try {
    if (Object.defineProperty) {
      Object.defineProperty({}, 'x', {
        get: function get() {
          return null;
        }
      });
      return true;
    }
  } catch (e) {}
  return false;
}

/**
 * Attach a lazy loading property to a constant.
 * The given function `fn` is called once when the property is first requested.
 *
 * @param {Object} object         Object where to add the property
 * @param {string} prop           Property name
 * @param {Function} valueResolver Function returning the property value. Called
 *                                without arguments.
 */
function lazy(object, prop, valueResolver) {
  var _uninitialized = true;
  var _value;
  Object.defineProperty(object, prop, {
    get: function get() {
      if (_uninitialized) {
        _value = valueResolver();
        _uninitialized = false;
      }
      return _value;
    },
    set: function set(value) {
      _value = value;
      _uninitialized = false;
    },
    configurable: true,
    enumerable: true
  });
}

/**
 * Traverse a path into an object.
 * When a namespace is missing, it will be created
 * @param {Object} object
 * @param {string | string[]} path   A dot separated string like 'name.space'
 * @return {Object} Returns the object at the end of the path
 */
function traverse(object, path) {
  if (path && typeof path === 'string') {
    return traverse(object, path.split('.'));
  }
  var obj = object;
  if (path) {
    for (var i = 0; i < path.length; i++) {
      var key = path[i];
      if (!(key in obj)) {
        obj[key] = {};
      }
      obj = obj[key];
    }
  }
  return obj;
}

/**
 * A safe hasOwnProperty
 * @param {Object} object
 * @param {string} property
 */
function hasOwnProperty(object, property) {
  return object && Object.hasOwnProperty.call(object, property);
}

/**
 * Test whether an object is a factory. a factory has fields:
 *
 * - factory: function (type: Object, config: Object, load: function, typed: function [, math: Object])   (required)
 * - name: string (optional)
 * - path: string    A dot separated path (optional)
 * - math: boolean   If true (false by default), the math namespace is passed
 *                   as fifth argument of the factory function
 *
 * @param {*} object
 * @returns {boolean}
 */
function isLegacyFactory(object) {
  return object && typeof object.factory === 'function';
}

/**
 * Get a nested property from an object
 * @param {Object} object
 * @param {string | string[]} path
 * @returns {Object}
 */
function get(object, path) {
  if (typeof path === 'string') {
    if (isPath(path)) {
      return get(object, path.split('.'));
    } else {
      return object[path];
    }
  }
  var child = object;
  for (var i = 0; i < path.length; i++) {
    var key = path[i];
    child = child ? child[key] : undefined;
  }
  return child;
}

/**
 * Set a nested property in an object
 * Mutates the object itself
 * If the path doesn't exist, it will be created
 * @param {Object} object
 * @param {string | string[]} path
 * @param {*} value
 * @returns {Object}
 */
function set(object, path, value) {
  if (typeof path === 'string') {
    if (isPath(path)) {
      return set(object, path.split('.'), value);
    } else {
      object[path] = value;
      return object;
    }
  }
  var child = object;
  for (var i = 0; i < path.length - 1; i++) {
    var key = path[i];
    if (child[key] === undefined) {
      child[key] = {};
    }
    child = child[key];
  }
  if (path.length > 0) {
    var lastKey = path[path.length - 1];
    child[lastKey] = value;
  }
  return object;
}

/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string[]} properties
 * @param {function} [transform] Optional value to transform a value when picking it
 * @return {Object}
 */
function pick(object, properties, transform) {
  var copy = {};
  for (var i = 0; i < properties.length; i++) {
    var key = properties[i];
    var value = get(object, key);
    if (value !== undefined) {
      set(copy, key, transform ? transform(value, key) : value);
    }
  }
  return copy;
}

/**
 * Shallow version of pick, creating an object composed of the picked object properties
 * but not for nested properties
 * @param {Object} object
 * @param {string[]} properties
 * @return {Object}
 */
function pickShallow(object, properties) {
  var copy = {};
  for (var i = 0; i < properties.length; i++) {
    var key = properties[i];
    var value = object[key];
    if (value !== undefined) {
      copy[key] = value;
    }
  }
  return copy;
}
function values(object) {
  return Object.keys(object).map(function (key) {
    return object[key];
  });
}

// helper function to test whether a string contains a path like 'user.name'
function isPath(str) {
  return str.indexOf('.') !== -1;
}