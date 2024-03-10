"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createResize = void 0;
var _is = require("../../utils/is.js");
var _DimensionError = require("../../error/DimensionError.js");
var _ArgumentsError = require("../../error/ArgumentsError.js");
var _number = require("../../utils/number.js");
var _string = require("../../utils/string.js");
var _object = require("../../utils/object.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var name = 'resize';
var dependencies = ['config', 'matrix'];
var createResize = exports.createResize = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var config = _ref.config,
    matrix = _ref.matrix;
  /**
   * Resize a matrix
   *
   * Syntax:
   *
   *     math.resize(x, size)
   *     math.resize(x, size, defaultValue)
   *
   * Examples:
   *
   *     math.resize([1, 2, 3, 4, 5], [3]) // returns Array  [1, 2, 3]
   *     math.resize([1, 2, 3], [5], 0)    // returns Array  [1, 2, 3, 0, 0]
   *     math.resize(2, [2, 3], 0)         // returns Matrix [[2, 0, 0], [0, 0, 0]]
   *     math.resize("hello", [8], "!")    // returns string 'hello!!!'
   *
   * See also:
   *
   *     size, squeeze, subset, reshape
   *
   * @param {Array | Matrix | *} x             Matrix to be resized
   * @param {Array | Matrix} size              One dimensional array with numbers
   * @param {number | string} [defaultValue=0] Zero by default, except in
   *                                           case of a string, in that case
   *                                           defaultValue = ' '
   * @return {* | Array | Matrix} A resized clone of matrix `x`
   */
  // TODO: rework resize to a typed-function
  return function resize(x, size, defaultValue) {
    if (arguments.length !== 2 && arguments.length !== 3) {
      throw new _ArgumentsError.ArgumentsError('resize', arguments.length, 2, 3);
    }
    if ((0, _is.isMatrix)(size)) {
      size = size.valueOf(); // get Array
    }

    if ((0, _is.isBigNumber)(size[0])) {
      // convert bignumbers to numbers
      size = size.map(function (value) {
        return !(0, _is.isBigNumber)(value) ? value : value.toNumber();
      });
    }

    // check x is a Matrix
    if ((0, _is.isMatrix)(x)) {
      // use optimized matrix implementation, return copy
      return x.resize(size, defaultValue, true);
    }
    if (typeof x === 'string') {
      // resize string
      return _resizeString(x, size, defaultValue);
    }

    // check result should be a matrix
    var asMatrix = Array.isArray(x) ? false : config.matrix !== 'Array';
    if (size.length === 0) {
      // output a scalar
      while (Array.isArray(x)) {
        x = x[0];
      }
      return (0, _object.clone)(x);
    } else {
      // output an array/matrix
      if (!Array.isArray(x)) {
        x = [x];
      }
      x = (0, _object.clone)(x);
      var res = (0, _array.resize)(x, size, defaultValue);
      return asMatrix ? matrix(res) : res;
    }
  };

  /**
   * Resize a string
   * @param {string} str
   * @param {number[]} size
   * @param {string} [defaultChar=' ']
   * @private
   */
  function _resizeString(str, size, defaultChar) {
    if (defaultChar !== undefined) {
      if (typeof defaultChar !== 'string' || defaultChar.length !== 1) {
        throw new TypeError('Single character expected as defaultValue');
      }
    } else {
      defaultChar = ' ';
    }
    if (size.length !== 1) {
      throw new _DimensionError.DimensionError(size.length, 1);
    }
    var len = size[0];
    if (typeof len !== 'number' || !(0, _number.isInteger)(len)) {
      throw new TypeError('Invalid size, must contain positive integers ' + '(size: ' + (0, _string.format)(size) + ')');
    }
    if (str.length > len) {
      return str.substring(0, len);
    } else if (str.length < len) {
      var res = str;
      for (var i = 0, ii = len - str.length; i < ii; i++) {
        res += defaultChar;
      }
      return res;
    } else {
      return str;
    }
  }
});