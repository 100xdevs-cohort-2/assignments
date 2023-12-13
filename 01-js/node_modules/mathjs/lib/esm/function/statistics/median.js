import { containsCollections } from '../../utils/collection.js';
import { flatten } from '../../utils/array.js';
import { factory } from '../../utils/factory.js';
import { improveErrorMessage } from './utils/improveErrorMessage.js';
var name = 'median';
var dependencies = ['typed', 'add', 'divide', 'compare', 'partitionSelect'];
export var createMedian = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    add,
    divide,
    compare,
    partitionSelect
  } = _ref;
  /**
   * Recursively calculate the median of an n-dimensional array
   * @param {Array} array
   * @return {Number} median
   * @private
   */
  function _median(array) {
    try {
      array = flatten(array.valueOf());
      var num = array.length;
      if (num === 0) {
        throw new Error('Cannot calculate median of an empty array');
      }
      if (num % 2 === 0) {
        // even: return the average of the two middle values
        var mid = num / 2 - 1;
        var right = partitionSelect(array, mid + 1);

        // array now partitioned at mid + 1, take max of left part
        var left = array[mid];
        for (var i = 0; i < mid; ++i) {
          if (compare(array[i], left) > 0) {
            left = array[i];
          }
        }
        return middle2(left, right);
      } else {
        // odd: return the middle value
        var m = partitionSelect(array, (num - 1) / 2);
        return middle(m);
      }
    } catch (err) {
      throw improveErrorMessage(err, 'median');
    }
  }

  // helper function to type check the middle value of the array
  var middle = typed({
    'number | BigNumber | Complex | Unit': function numberBigNumberComplexUnit(value) {
      return value;
    }
  });

  // helper function to type check the two middle value of the array
  var middle2 = typed({
    'number | BigNumber | Complex | Unit, number | BigNumber | Complex | Unit': function numberBigNumberComplexUnitNumberBigNumberComplexUnit(left, right) {
      return divide(add(left, right), 2);
    }
  });

  /**
   * Compute the median of a matrix or a list with values. The values are
   * sorted and the middle value is returned. In case of an even number of
   * values, the average of the two middle values is returned.
   * Supported types of values are: Number, BigNumber, Unit
   *
   * In case of a (multi dimensional) array or matrix, the median of all
   * elements will be calculated.
   *
   * Syntax:
   *
   *     math.median(a, b, c, ...)
   *     math.median(A)
   *
   * Examples:
   *
   *     math.median(5, 2, 7)        // returns 5
   *     math.median([3, -1, 5, 7])  // returns 4
   *
   * See also:
   *
   *     mean, min, max, sum, prod, std, variance, quantileSeq
   *
   * @param {... *} args  A single matrix or or multiple scalar values
   * @return {*} The median
   */
  return typed(name, {
    // median([a, b, c, d, ...])
    'Array | Matrix': _median,
    // median([a, b, c, d, ...], dim)
    'Array | Matrix, number | BigNumber': function ArrayMatrixNumberBigNumber(array, dim) {
      // TODO: implement median(A, dim)
      throw new Error('median(A, dim) is not yet supported');
      // return reduce(arguments[0], arguments[1], ...)
    },

    // median(a, b, c, d, ...)
    '...': function _(args) {
      if (containsCollections(args)) {
        throw new TypeError('Scalar values expected in function median');
      }
      return _median(args);
    }
  });
});