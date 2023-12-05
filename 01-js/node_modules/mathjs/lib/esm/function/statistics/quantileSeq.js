import { isNumber } from '../../utils/is.js';
import { flatten } from '../../utils/array.js';
import { factory } from '../../utils/factory.js';
import { createApply } from '../matrix/apply.js';
var name = 'quantileSeq';
var dependencies = ['typed', '?bignumber', 'add', 'subtract', 'divide', 'multiply', 'partitionSelect', 'compare', 'isInteger', 'smaller', 'smallerEq', 'larger'];
export var createQuantileSeq = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    bignumber,
    add,
    subtract,
    divide,
    multiply,
    partitionSelect,
    compare,
    isInteger,
    smaller,
    smallerEq,
    larger
  } = _ref;
  var apply = createApply({
    typed,
    isInteger
  });

  /**
   * Compute the prob order quantile of a matrix or a list with values.
   * The sequence is sorted and the middle value is returned.
   * Supported types of sequence values are: Number, BigNumber, Unit
   * Supported types of probability are: Number, BigNumber
   *
   * In case of a multidimensional array or matrix, the prob order quantile
   * of all elements will be calculated.
   *
   * Syntax:
   *
   *     math.quantileSeq(A, prob[, sorted])
   *     math.quantileSeq(A, [prob1, prob2, ...][, sorted])
   *     math.quantileSeq(A, N[, sorted])
   *
   * Examples:
   *
   *     math.quantileSeq([3, -1, 5, 7], 0.5)         // returns 4
   *     math.quantileSeq([3, -1, 5, 7], [1/3, 2/3])  // returns [3, 5]
   *     math.quantileSeq([3, -1, 5, 7], 2)           // returns [3, 5]
   *     math.quantileSeq([-1, 3, 5, 7], 0.5, true)   // returns 4
   *
   * See also:
   *
   *     median, mean, min, max, sum, prod, std, variance
   *
   * @param {Array, Matrix} data                A single matrix or Array
   * @param {Number, BigNumber, Array} probOrN  prob is the order of the quantile, while N is
   *                                            the amount of evenly distributed steps of
   *                                            probabilities; only one of these options can
   *                                            be provided
   * @param {Boolean} sorted=false              is data sorted in ascending order
   * @return {Number, BigNumber, Unit, Array}   Quantile(s)
   */
  return typed(name, {
    'Array | Matrix, number | BigNumber': (data, p) => _quantileSeqProbNumber(data, p, false),
    'Array | Matrix, number | BigNumber, number': (data, prob, dim) => _quantileSeqDim(data, prob, false, dim, _quantileSeqProbNumber),
    'Array | Matrix, number | BigNumber, boolean': _quantileSeqProbNumber,
    'Array | Matrix, number | BigNumber, boolean, number': (data, prob, sorted, dim) => _quantileSeqDim(data, prob, sorted, dim, _quantileSeqProbNumber),
    'Array | Matrix, Array | Matrix': (data, p) => _quantileSeqProbCollection(data, p, false),
    'Array | Matrix, Array | Matrix, number': (data, prob, dim) => _quantileSeqDim(data, prob, false, dim, _quantileSeqProbCollection),
    'Array | Matrix, Array | Matrix, boolean': _quantileSeqProbCollection,
    'Array | Matrix, Array | Matrix, boolean, number': (data, prob, sorted, dim) => _quantileSeqDim(data, prob, sorted, dim, _quantileSeqProbCollection)
  });
  function _quantileSeqDim(data, prob, sorted, dim, fn) {
    return apply(data, dim, x => fn(x, prob, sorted));
  }
  function _quantileSeqProbNumber(data, probOrN, sorted) {
    var probArr;
    var dataArr = data.valueOf();
    if (smaller(probOrN, 0)) {
      throw new Error('N/prob must be non-negative');
    }
    if (smallerEq(probOrN, 1)) {
      // quantileSeq([a, b, c, d, ...], prob[,sorted])
      return isNumber(probOrN) ? _quantileSeq(dataArr, probOrN, sorted) : bignumber(_quantileSeq(dataArr, probOrN, sorted));
    }
    if (larger(probOrN, 1)) {
      // quantileSeq([a, b, c, d, ...], N[,sorted])
      if (!isInteger(probOrN)) {
        throw new Error('N must be a positive integer');
      }

      // largest possible Array length is 2^32-1
      // 2^32 < 10^15, thus safe conversion guaranteed
      if (larger(probOrN, 4294967295)) {
        throw new Error('N must be less than or equal to 2^32-1, as that is the maximum length of an Array');
      }
      var nPlusOne = add(probOrN, 1);
      probArr = [];
      for (var i = 0; smaller(i, probOrN); i++) {
        var prob = divide(i + 1, nPlusOne);
        probArr.push(_quantileSeq(dataArr, prob, sorted));
      }
      return isNumber(probOrN) ? probArr : bignumber(probArr);
    }
  }

  /**
   * Calculate the prob order quantile of an n-dimensional array.
   *
   * @param {Array, Matrix} array
   * @param {Array, Matrix} prob
   * @param {Boolean} sorted
   * @return {Number, BigNumber, Unit} prob order quantile
   * @private
   */

  function _quantileSeqProbCollection(data, probOrN, sorted) {
    var dataArr = data.valueOf();
    // quantileSeq([a, b, c, d, ...], [prob1, prob2, ...][,sorted])
    var probOrNArr = probOrN.valueOf();
    var probArr = [];
    for (var i = 0; i < probOrNArr.length; ++i) {
      probArr.push(_quantileSeq(dataArr, probOrNArr[i], sorted));
    }
    return probArr;
  }

  /**
   * Calculate the prob order quantile of an n-dimensional array.
   *
   * @param {Array} array
   * @param {Number, BigNumber} prob
   * @param {Boolean} sorted
   * @return {Number, BigNumber, Unit} prob order quantile
   * @private
   */
  function _quantileSeq(array, prob, sorted) {
    var flat = flatten(array);
    var len = flat.length;
    if (len === 0) {
      throw new Error('Cannot calculate quantile of an empty sequence');
    }
    var index = isNumber(prob) ? prob * (len - 1) : prob.times(len - 1);
    var integerPart = isNumber(prob) ? Math.floor(index) : index.floor().toNumber();
    var fracPart = isNumber(prob) ? index % 1 : index.minus(integerPart);
    if (isInteger(index)) {
      return sorted ? flat[index] : partitionSelect(flat, isNumber(prob) ? index : index.valueOf());
    }
    var left;
    var right;
    if (sorted) {
      left = flat[integerPart];
      right = flat[integerPart + 1];
    } else {
      right = partitionSelect(flat, integerPart + 1);

      // max of partition is kth largest
      left = flat[integerPart];
      for (var i = 0; i < integerPart; ++i) {
        if (compare(flat[i], left) > 0) {
          left = flat[i];
        }
      }
    }
    // Q(prob) = (1-f)*A[floor(index)] + f*A[floor(index)+1]
    return add(multiply(left, subtract(1, fracPart)), multiply(right, fracPart));
  }
});