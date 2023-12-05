"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPartitionSelect = void 0;
var _is = require("../../utils/is.js");
var _number = require("../../utils/number.js");
var _factory = require("../../utils/factory.js");
var name = 'partitionSelect';
var dependencies = ['typed', 'isNumeric', 'isNaN', 'compare'];
var createPartitionSelect = exports.createPartitionSelect = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    isNumeric = _ref.isNumeric,
    isNaN = _ref.isNaN,
    compare = _ref.compare;
  var asc = compare;
  var desc = function desc(a, b) {
    return -compare(a, b);
  };

  /**
   * Partition-based selection of an array or 1D matrix.
   * Will find the kth smallest value, and mutates the input array.
   * Uses Quickselect.
   *
   * Syntax:
   *
   *    math.partitionSelect(x, k)
   *    math.partitionSelect(x, k, compare)
   *
   * Examples:
   *
   *    math.partitionSelect([5, 10, 1], 2)                               // returns 10
   *    math.partitionSelect(['C', 'B', 'A', 'D'], 1, math.compareText)   // returns 'B'
   *
   *    function sortByLength (a, b) {
   *      return a.length - b.length
   *    }
   *    math.partitionSelect(['Langdon', 'Tom', 'Sara'], 2, sortByLength) // returns 'Langdon'
   *
   *    // the input array is mutated
   *    arr = [5, 2, 1]
   *    math.partitionSelect(arr, 0) // returns 1, arr is now: [1, 2, 5]
   *    math.partitionSelect(arr, 1, 'desc') // returns 2, arr is now: [5, 2, 1]
   *
   * See also:
   *
   *    sort
   *
   * @param {Matrix | Array} x    A one dimensional matrix or array to sort
   * @param {Number} k            The kth smallest value to be retrieved zero-based index
   * @param {Function | 'asc' | 'desc'} [compare='asc']
   *        An optional comparator function. The function is called as
   *        `compare(a, b)`, and must return 1 when a > b, -1 when a < b,
   *        and 0 when a == b.
   * @return {*} Returns the kth lowest value.
   */
  return typed(name, {
    'Array | Matrix, number': function ArrayMatrixNumber(x, k) {
      return _partitionSelect(x, k, asc);
    },
    'Array | Matrix, number, string': function ArrayMatrixNumberString(x, k, compare) {
      if (compare === 'asc') {
        return _partitionSelect(x, k, asc);
      } else if (compare === 'desc') {
        return _partitionSelect(x, k, desc);
      } else {
        throw new Error('Compare string must be "asc" or "desc"');
      }
    },
    'Array | Matrix, number, function': _partitionSelect
  });
  function _partitionSelect(x, k, compare) {
    if (!(0, _number.isInteger)(k) || k < 0) {
      throw new Error('k must be a non-negative integer');
    }
    if ((0, _is.isMatrix)(x)) {
      var size = x.size();
      if (size.length > 1) {
        throw new Error('Only one dimensional matrices supported');
      }
      return quickSelect(x.valueOf(), k, compare);
    }
    if (Array.isArray(x)) {
      return quickSelect(x, k, compare);
    }
  }

  /**
   * Quickselect algorithm.
   * Code adapted from:
   * https://blog.teamleadnet.com/2012/07/quick-select-algorithm-find-kth-element.html
   *
   * @param {Array} arr
   * @param {Number} k
   * @param {Function} compare
   * @private
   */
  function quickSelect(arr, k, compare) {
    if (k >= arr.length) {
      throw new Error('k out of bounds');
    }

    // check for NaN values since these can cause an infinite while loop
    for (var i = 0; i < arr.length; i++) {
      if (isNumeric(arr[i]) && isNaN(arr[i])) {
        return arr[i]; // return NaN
      }
    }

    var from = 0;
    var to = arr.length - 1;

    // if from == to we reached the kth element
    while (from < to) {
      var r = from;
      var w = to;
      var pivot = arr[Math.floor(Math.random() * (to - from + 1)) + from];

      // stop if the reader and writer meets
      while (r < w) {
        // arr[r] >= pivot
        if (compare(arr[r], pivot) >= 0) {
          // put the large values at the end
          var tmp = arr[w];
          arr[w] = arr[r];
          arr[r] = tmp;
          --w;
        } else {
          // the value is smaller than the pivot, skip
          ++r;
        }
      }

      // if we stepped up (r++) we need to step one down (arr[r] > pivot)
      if (compare(arr[r], pivot) > 0) {
        --r;
      }

      // the r pointer is on the end of the first k elements
      if (k <= r) {
        to = r;
      } else {
        from = r + 1;
      }
    }
    return arr[k];
  }
});