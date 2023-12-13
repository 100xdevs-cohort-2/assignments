import { factory } from '../../utils/factory.js';
var name = 'matrixFromRows';
var dependencies = ['typed', 'matrix', 'flatten', 'size'];
export var createMatrixFromRows = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    flatten,
    size
  } = _ref;
  /**
   * Create a dense matrix from vectors as individual rows.
   * If you pass column vectors, they will be transposed (but not conjugated!)
   *
   * Syntax:
   *
   *    math.matrixFromRows(...arr)
   *    math.matrixFromRows(row1, row2)
   *    math.matrixFromRows(row1, row2, row3)
   *
   * Examples:
   *
   *    math.matrixFromRows([1, 2, 3], [[4],[5],[6]])
   *    math.matrixFromRows(...vectors)
   *
   * See also:
   *
   *    matrix, matrixFromColumns, matrixFromFunction, zeros
   *
   * @param {... Array | Matrix} rows  Multiple rows
   * @return { number[][] | Matrix } if at least one of the arguments is an array, an array will be returned
   */
  return typed(name, {
    '...Array': function Array(arr) {
      return _createArray(arr);
    },
    '...Matrix': function Matrix(arr) {
      return matrix(_createArray(arr.map(m => m.toArray())));
    }

    // TODO implement this properly for SparseMatrix
  });

  function _createArray(arr) {
    if (arr.length === 0) throw new TypeError('At least one row is needed to construct a matrix.');
    var N = checkVectorTypeAndReturnLength(arr[0]);
    var result = [];
    for (var row of arr) {
      var rowLength = checkVectorTypeAndReturnLength(row);
      if (rowLength !== N) {
        throw new TypeError('The vectors had different length: ' + (N | 0) + ' ≠ ' + (rowLength | 0));
      }
      result.push(flatten(row));
    }
    return result;
  }
  function checkVectorTypeAndReturnLength(vec) {
    var s = size(vec);
    if (s.length === 1) {
      // 1D vector
      return s[0];
    } else if (s.length === 2) {
      // 2D vector
      if (s[0] === 1) {
        // row vector
        return s[1];
      } else if (s[1] === 1) {
        // col vector
        return s[0];
      } else {
        throw new TypeError('At least one of the arguments is not a vector.');
      }
    } else {
      throw new TypeError('Only one- or two-dimensional vectors are supported.');
    }
  }
});