"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMin = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _improveErrorMessage = require("./utils/improveErrorMessage.js");
var name = 'min';
var dependencies = ['typed', 'config', 'numeric', 'smaller'];
var createMin = exports.createMin = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    numeric = _ref.numeric,
    smaller = _ref.smaller;
  /**
   * Compute the minimum value of a matrix or a  list of values.
   * In case of a multidimensional array, the minimum of the flattened array
   * will be calculated. When `dim` is provided, the minimum over the selected
   * dimension will be calculated. Parameter `dim` is zero-based.
   *
   * Syntax:
   *
   *     math.min(a, b, c, ...)
   *     math.min(A)
   *     math.min(A, dimension)
   *
   * Examples:
   *
   *     math.min(2, 1, 4, 3)                  // returns 1
   *     math.min([2, 1, 4, 3])                // returns 1
   *
   *     // minimum over a specified dimension (zero-based)
   *     math.min([[2, 5], [4, 3], [1, 7]], 0) // returns [1, 3]
   *     math.min([[2, 5], [4, 3], [1, 7]], 1) // returns [2, 3, 1]
   *
   *     math.max(2.7, 7.1, -4.5, 2.0, 4.1)    // returns 7.1
   *     math.min(2.7, 7.1, -4.5, 2.0, 4.1)    // returns -4.5
   *
   * See also:
   *
   *    mean, median, max, prod, std, sum, variance
   *
   * @param {... *} args  A single matrix or or multiple scalar values
   * @return {*} The minimum value
   */
  return typed(name, {
    // min([a, b, c, d, ...])
    'Array | Matrix': _min,
    // min([a, b, c, d, ...], dim)
    'Array | Matrix, number | BigNumber': function ArrayMatrixNumberBigNumber(array, dim) {
      return (0, _collection.reduce)(array, dim.valueOf(), _smallest);
    },
    // min(a, b, c, d, ...)
    '...': function _(args) {
      if ((0, _collection.containsCollections)(args)) {
        throw new TypeError('Scalar values expected in function min');
      }
      return _min(args);
    }
  });

  /**
   * Return the smallest of two values
   * @param {*} x
   * @param {*} y
   * @returns {*} Returns x when x is smallest, or y when y is smallest
   * @private
   */
  function _smallest(x, y) {
    try {
      return smaller(x, y) ? x : y;
    } catch (err) {
      throw (0, _improveErrorMessage.improveErrorMessage)(err, 'min', y);
    }
  }

  /**
   * Recursively calculate the minimum value in an n-dimensional array
   * @param {Array} array
   * @return {number} min
   * @private
   */
  function _min(array) {
    var min;
    (0, _collection.deepForEach)(array, function (value) {
      try {
        if (isNaN(value) && typeof value === 'number') {
          min = NaN;
        } else if (min === undefined || smaller(value, min)) {
          min = value;
        }
      } catch (err) {
        throw (0, _improveErrorMessage.improveErrorMessage)(err, 'min', value);
      }
    });
    if (min === undefined) {
      throw new Error('Cannot calculate min of an empty array');
    }

    // make sure returning numeric value: parse a string into a numeric value
    if (typeof min === 'string') {
      min = numeric(min, config.number);
    }
    return min;
  }
});