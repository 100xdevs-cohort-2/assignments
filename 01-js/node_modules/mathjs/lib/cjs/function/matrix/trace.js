"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTrace = void 0;
var _object = require("../../utils/object.js");
var _string = require("../../utils/string.js");
var _factory = require("../../utils/factory.js");
var name = 'trace';
var dependencies = ['typed', 'matrix', 'add'];
var createTrace = exports.createTrace = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    add = _ref.add;
  /**
   * Calculate the trace of a matrix: the sum of the elements on the main
   * diagonal of a square matrix.
   *
   * Syntax:
   *
   *    math.trace(x)
   *
   * Examples:
   *
   *    math.trace([[1, 2], [3, 4]]) // returns 5
   *
   *    const A = [
   *      [1, 2, 3],
   *      [-1, 2, 3],
   *      [2, 0, 3]
   *    ]
   *    math.trace(A) // returns 6
   *
   * See also:
   *
   *    diag
   *
   * @param {Array | Matrix} x  A matrix
   *
   * @return {number} The trace of `x`
   */
  return typed('trace', {
    Array: function _arrayTrace(x) {
      // use dense matrix implementation
      return _denseTrace(matrix(x));
    },
    SparseMatrix: _sparseTrace,
    DenseMatrix: _denseTrace,
    any: _object.clone
  });
  function _denseTrace(m) {
    // matrix size & data
    var size = m._size;
    var data = m._data;

    // process dimensions
    switch (size.length) {
      case 1:
        // vector
        if (size[0] === 1) {
          // return data[0]
          return (0, _object.clone)(data[0]);
        }
        throw new RangeError('Matrix must be square (size: ' + (0, _string.format)(size) + ')');
      case 2:
        {
          // two dimensional
          var rows = size[0];
          var cols = size[1];
          if (rows === cols) {
            // calulate sum
            var sum = 0;
            // loop diagonal
            for (var i = 0; i < rows; i++) {
              sum = add(sum, data[i][i]);
            }
            // return trace
            return sum;
          } else {
            throw new RangeError('Matrix must be square (size: ' + (0, _string.format)(size) + ')');
          }
        }
      default:
        // multi dimensional
        throw new RangeError('Matrix must be two dimensional (size: ' + (0, _string.format)(size) + ')');
    }
  }
  function _sparseTrace(m) {
    // matrix arrays
    var values = m._values;
    var index = m._index;
    var ptr = m._ptr;
    var size = m._size;
    // check dimensions
    var rows = size[0];
    var columns = size[1];
    // matrix must be square
    if (rows === columns) {
      // calulate sum
      var sum = 0;
      // check we have data (avoid looping columns)
      if (values.length > 0) {
        // loop columns
        for (var j = 0; j < columns; j++) {
          // k0 <= k < k1 where k0 = _ptr[j] && k1 = _ptr[j+1]
          var k0 = ptr[j];
          var k1 = ptr[j + 1];
          // loop k within [k0, k1[
          for (var k = k0; k < k1; k++) {
            // row index
            var i = index[k];
            // check row
            if (i === j) {
              // accumulate value
              sum = add(sum, values[k]);
              // exit loop
              break;
            }
            if (i > j) {
              // exit loop, no value on the diagonal for column j
              break;
            }
          }
        }
      }
      // return trace
      return sum;
    }
    throw new RangeError('Matrix must be square (size: ' + (0, _string.format)(size) + ')');
  }
});