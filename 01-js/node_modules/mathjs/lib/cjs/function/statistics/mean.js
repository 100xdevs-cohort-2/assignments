"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMean = void 0;
var _collection = require("../../utils/collection.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var _improveErrorMessage = require("./utils/improveErrorMessage.js");
var name = 'mean';
var dependencies = ['typed', 'add', 'divide'];
var createMean = exports.createMean = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    add = _ref.add,
    divide = _ref.divide;
  /**
   * Compute the mean value of matrix or a list with values.
   * In case of a multidimensional array, the mean of the flattened array
   * will be calculated. When `dim` is provided, the maximum over the selected
   * dimension will be calculated. Parameter `dim` is zero-based.
   *
   * Syntax:
   *
   *     math.mean(a, b, c, ...)
   *     math.mean(A)
   *     math.mean(A, dimension)
   *
   * Examples:
   *
   *     math.mean(2, 1, 4, 3)                     // returns 2.5
   *     math.mean([1, 2.7, 3.2, 4])               // returns 2.725
   *
   *     math.mean([[2, 5], [6, 3], [1, 7]], 0)    // returns [3, 5]
   *     math.mean([[2, 5], [6, 3], [1, 7]], 1)    // returns [3.5, 4.5, 4]
   *
   * See also:
   *
   *     median, min, max, sum, prod, std, variance
   *
   * @param {... *} args  A single matrix or or multiple scalar values
   * @return {*} The mean of all values
   */
  return typed(name, {
    // mean([a, b, c, d, ...])
    'Array | Matrix': _mean,
    // mean([a, b, c, d, ...], dim)
    'Array | Matrix, number | BigNumber': _nmeanDim,
    // mean(a, b, c, d, ...)
    '...': function _(args) {
      if ((0, _collection.containsCollections)(args)) {
        throw new TypeError('Scalar values expected in function mean');
      }
      return _mean(args);
    }
  });

  /**
   * Calculate the mean value in an n-dimensional array, returning a
   * n-1 dimensional array
   * @param {Array} array
   * @param {number} dim
   * @return {number} mean
   * @private
   */
  function _nmeanDim(array, dim) {
    try {
      var sum = (0, _collection.reduce)(array, dim, add);
      var s = Array.isArray(array) ? (0, _array.arraySize)(array) : array.size();
      return divide(sum, s[dim]);
    } catch (err) {
      throw (0, _improveErrorMessage.improveErrorMessage)(err, 'mean');
    }
  }

  /**
   * Recursively calculate the mean value in an n-dimensional array
   * @param {Array} array
   * @return {number} mean
   * @private
   */
  function _mean(array) {
    var sum;
    var num = 0;
    (0, _collection.deepForEach)(array, function (value) {
      try {
        sum = sum === undefined ? value : add(sum, value);
        num++;
      } catch (err) {
        throw (0, _improveErrorMessage.improveErrorMessage)(err, 'mean', value);
      }
    });
    if (num === 0) {
      throw new Error('Cannot calculate the mean of an empty array');
    }
    return divide(sum, num);
  }
});