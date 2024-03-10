import { factory } from '../../utils/factory.js';
var name = 'matrixFromColumns';
var dependencies = ['typed', 'matrix', 'flatten', 'size'];
export var createMatrixFromColumns = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    flatten,
    size
  } = _ref;
  /**
   * Create a dense matrix from vectors as individual columns.
   * If you pass row vectors, they will be transposed (but not conjugated!)
   *
   * Syntax:
   *
   *    math.matrixFromColumns(...arr)
   *    math.matrixFromColumns(col1, col2)
   *    math.matrixFromColumns(col1, col2, col3)
   *
   * Examples:
   *
   *    math.matrixFromColumns([1, 2, 3], [[4],[5],[6]])
   *    math.matrixFromColumns(...vectors)
   *
   * See also:
   *
   *    matrix, matrixFromRows, matrixFromFunction, zeros
   *
   * @param {... Array | Matrix} cols Multiple columns
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
    if (arr.length === 0) throw new TypeError('At least one column is needed to construct a matrix.');
    var N = checkVectorTypeAndReturnLength(arr[0]);

    // create an array with empty rows
    var result = [];
    for (var i = 0; i < N; i++) {
      result[i] = [];
    }

    // loop columns
    for (var col of arr) {
      var colLength = checkVectorTypeAndReturnLength(col);
      if (colLength !== N) {
        throw new TypeError('The vectors had different length: ' + (N | 0) + ' ≠ ' + (colLength | 0));
      }
      var f = flatten(col);

      // push a value to each row
      for (var _i = 0; _i < N; _i++) {
        result[_i].push(f[_i]);
      }
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