"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOnes = void 0;
var _is = require("../../utils/is.js");
var _number = require("../../utils/number.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var name = 'ones';
var dependencies = ['typed', 'config', 'matrix', 'BigNumber'];
var createOnes = exports.createOnes = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    matrix = _ref.matrix,
    BigNumber = _ref.BigNumber;
  /**
   * Create a matrix filled with ones. The created matrix can have one or
   * multiple dimensions.
   *
   * Syntax:
   *
   *    math.ones(m)
   *    math.ones(m, format)
   *    math.ones(m, n)
   *    math.ones(m, n, format)
   *    math.ones([m, n])
   *    math.ones([m, n], format)
   *    math.ones([m, n, p, ...])
   *    math.ones([m, n, p, ...], format)
   *
   * Examples:
   *
   *    math.ones()                    // returns []
   *    math.ones(3)                   // returns [1, 1, 1]
   *    math.ones(3, 2)                // returns [[1, 1], [1, 1], [1, 1]]
   *    math.ones(3, 2, 'dense')       // returns Dense Matrix [[1, 1], [1, 1], [1, 1]]
   *
   *    const A = [[1, 2, 3], [4, 5, 6]]
   *    math.ones(math.size(A))       // returns [[1, 1, 1], [1, 1, 1]]
   *
   * See also:
   *
   *    zeros, identity, size, range
   *
   * @param {...(number|BigNumber) | Array} size    The size of each dimension of the matrix
   * @param {string} [format]           The Matrix storage format
   *
   * @return {Array | Matrix | number}  A matrix filled with ones
   */
  return typed('ones', {
    '': function _() {
      return config.matrix === 'Array' ? _ones([]) : _ones([], 'default');
    },
    // math.ones(m, n, p, ..., format)
    // TODO: more accurate signature '...number | BigNumber, string' as soon as typed-function supports this
    '...number | BigNumber | string': function numberBigNumberString(size) {
      var last = size[size.length - 1];
      if (typeof last === 'string') {
        var format = size.pop();
        return _ones(size, format);
      } else if (config.matrix === 'Array') {
        return _ones(size);
      } else {
        return _ones(size, 'default');
      }
    },
    Array: _ones,
    Matrix: function Matrix(size) {
      var format = size.storage();
      return _ones(size.valueOf(), format);
    },
    'Array | Matrix, string': function ArrayMatrixString(size, format) {
      return _ones(size.valueOf(), format);
    }
  });

  /**
   * Create an Array or Matrix with ones
   * @param {Array} size
   * @param {string} [format='default']
   * @return {Array | Matrix}
   * @private
   */
  function _ones(size, format) {
    var hasBigNumbers = _normalize(size);
    var defaultValue = hasBigNumbers ? new BigNumber(1) : 1;
    _validate(size);
    if (format) {
      // return a matrix
      var m = matrix(format);
      if (size.length > 0) {
        return m.resize(size, defaultValue);
      }
      return m;
    } else {
      // return an Array
      var arr = [];
      if (size.length > 0) {
        return (0, _array.resize)(arr, size, defaultValue);
      }
      return arr;
    }
  }

  // replace BigNumbers with numbers, returns true if size contained BigNumbers
  function _normalize(size) {
    var hasBigNumbers = false;
    size.forEach(function (value, index, arr) {
      if ((0, _is.isBigNumber)(value)) {
        hasBigNumbers = true;
        arr[index] = value.toNumber();
      }
    });
    return hasBigNumbers;
  }

  // validate arguments
  function _validate(size) {
    size.forEach(function (value) {
      if (typeof value !== 'number' || !(0, _number.isInteger)(value) || value < 0) {
        throw new Error('Parameters in function ones must be positive integers');
      }
    });
  }
});