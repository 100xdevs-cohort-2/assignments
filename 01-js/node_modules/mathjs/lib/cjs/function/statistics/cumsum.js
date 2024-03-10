"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCumSum = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _switch2 = require("../../utils/switch.js");
var _improveErrorMessage = require("./utils/improveErrorMessage.js");
var _array = require("../../utils/array.js");
var _IndexError = require("../../error/IndexError.js");
var name = 'cumsum';
var dependencies = ['typed', 'add', 'unaryPlus'];
var createCumSum = exports.createCumSum = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    add = _ref.add,
    unaryPlus = _ref.unaryPlus;
  /**
   * Compute the cumulative sum of a matrix or a list with values.
   * In case of a (multi dimensional) array or matrix, the cumulative sums
   * along a specified dimension (defaulting to the first) will be calculated.
   *
   * Syntax:
   *
   *     math.cumsum(a, b, c, ...)
   *     math.cumsum(A)
   *
   * Examples:
   *
   *     math.cumsum(2, 1, 4, 3)               // returns [2, 3, 7, 10]
   *     math.cumsum([2, 1, 4, 3])             // returns [2, 3, 7, 10]
   *     math.cumsum([[1, 2], [3, 4]])         // returns [[1, 2], [4, 6]]
   *     math.cumsum([[1, 2], [3, 4]], 0)      // returns [[1, 2], [4, 6]]
   *     math.cumsum([[1, 2], [3, 4]], 1)      // returns [[1, 3], [3, 7]]
   *     math.cumsum([[2, 5], [4, 3], [1, 7]]) // returns [[2, 5], [6, 8], [7, 15]]
   *
   * See also:
   *
   *    mean, median, min, max, prod, std, variance, sum
   *
   * @param {... *} args  A single matrix or or multiple scalar values
   * @return {*} The cumulative sum of all values
   */
  return typed(name, {
    // sum([a, b, c, d, ...])
    Array: _cumsum,
    Matrix: function Matrix(matrix) {
      return matrix.create(_cumsum(matrix.valueOf()));
    },
    // sum([a, b, c, d, ...], dim)
    'Array, number | BigNumber': _ncumSumDim,
    'Matrix, number | BigNumber': function MatrixNumberBigNumber(matrix, dim) {
      return matrix.create(_ncumSumDim(matrix.valueOf(), dim));
    },
    // cumsum(a, b, c, d, ...)
    '...': function _(args) {
      if ((0, _collection.containsCollections)(args)) {
        throw new TypeError('All values expected to be scalar in function cumsum');
      }
      return _cumsum(args);
    }
  });

  /**
     * Recursively calculate the cumulative sum of an n-dimensional array
     * @param {Array} array
     * @return {number} cumsum
     * @private
     */
  function _cumsum(array) {
    try {
      return _cumsummap(array);
    } catch (err) {
      throw (0, _improveErrorMessage.improveErrorMessage)(err, name);
    }
  }
  function _cumsummap(array) {
    if (array.length === 0) {
      return [];
    }
    var sums = [unaryPlus(array[0])]; // unaryPlus converts to number if need be
    for (var i = 1; i < array.length; ++i) {
      // Must use add below and not addScalar for the case of summing a
      // 2+-dimensional array along the 0th dimension (the row vectors,
      // or higher-d analogues, are literally added to each other).
      sums.push(add(sums[i - 1], array[i]));
    }
    return sums;
  }
  function _ncumSumDim(array, dim) {
    var size = (0, _array.arraySize)(array);
    if (dim < 0 || dim >= size.length) {
      // TODO: would be more clear when throwing a DimensionError here
      throw new _IndexError.IndexError(dim, size.length);
    }
    try {
      return _cumsumDimensional(array, dim);
    } catch (err) {
      throw (0, _improveErrorMessage.improveErrorMessage)(err, name);
    }
  }

  /* Possible TODO: Refactor _reduce in collection.js to be able to work here as well */
  function _cumsumDimensional(mat, dim) {
    var i, ret, tran;
    if (dim <= 0) {
      var initialValue = mat[0][0];
      if (!Array.isArray(initialValue)) {
        return _cumsummap(mat);
      } else {
        tran = (0, _switch2._switch)(mat);
        ret = [];
        for (i = 0; i < tran.length; i++) {
          ret[i] = _cumsumDimensional(tran[i], dim - 1);
        }
        return ret;
      }
    } else {
      ret = [];
      for (i = 0; i < mat.length; i++) {
        ret[i] = _cumsumDimensional(mat[i], dim - 1);
      }
      return ret;
    }
  }
});