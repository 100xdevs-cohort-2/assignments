import { factory } from '../../../utils/factory.js';
import { createSolveValidation } from './utils/solveValidation.js';
var name = 'lsolve';
var dependencies = ['typed', 'matrix', 'divideScalar', 'multiplyScalar', 'subtractScalar', 'equalScalar', 'DenseMatrix'];
export var createLsolve = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    divideScalar,
    multiplyScalar,
    subtractScalar,
    equalScalar,
    DenseMatrix
  } = _ref;
  var solveValidation = createSolveValidation({
    DenseMatrix
  });

  /**
   * Finds one solution of a linear equation system by forwards substitution. Matrix must be a lower triangular matrix. Throws an error if there's no solution.
   *
   * `L * x = b`
   *
   * Syntax:
   *
   *    math.lsolve(L, b)
   *
   * Examples:
   *
   *    const a = [[-2, 3], [2, 1]]
   *    const b = [11, 9]
   *    const x = lsolve(a, b)  // [[-5.5], [20]]
   *
   * See also:
   *
   *    lsolveAll, lup, slu, usolve, lusolve
   *
   * @param {Matrix, Array} L       A N x N matrix or array (L)
   * @param {Matrix, Array} b       A column vector with the b values
   *
   * @return {DenseMatrix | Array}  A column vector with the linear system solution (x)
   */
  return typed(name, {
    'SparseMatrix, Array | Matrix': function SparseMatrixArrayMatrix(m, b) {
      return _sparseForwardSubstitution(m, b);
    },
    'DenseMatrix, Array | Matrix': function DenseMatrixArrayMatrix(m, b) {
      return _denseForwardSubstitution(m, b);
    },
    'Array, Array | Matrix': function ArrayArrayMatrix(a, b) {
      var m = matrix(a);
      var r = _denseForwardSubstitution(m, b);
      return r.valueOf();
    }
  });
  function _denseForwardSubstitution(m, b) {
    // validate matrix and vector, return copy of column vector b
    b = solveValidation(m, b, true);
    var bdata = b._data;
    var rows = m._size[0];
    var columns = m._size[1];

    // result
    var x = [];
    var mdata = m._data;

    // loop columns
    for (var j = 0; j < columns; j++) {
      var bj = bdata[j][0] || 0;
      var xj = void 0;
      if (!equalScalar(bj, 0)) {
        // non-degenerate row, find solution

        var vjj = mdata[j][j];
        if (equalScalar(vjj, 0)) {
          throw new Error('Linear system cannot be solved since matrix is singular');
        }
        xj = divideScalar(bj, vjj);

        // loop rows
        for (var i = j + 1; i < rows; i++) {
          bdata[i] = [subtractScalar(bdata[i][0] || 0, multiplyScalar(xj, mdata[i][j]))];
        }
      } else {
        // degenerate row, we can choose any value
        xj = 0;
      }
      x[j] = [xj];
    }
    return new DenseMatrix({
      data: x,
      size: [rows, 1]
    });
  }
  function _sparseForwardSubstitution(m, b) {
    // validate matrix and vector, return copy of column vector b
    b = solveValidation(m, b, true);
    var bdata = b._data;
    var rows = m._size[0];
    var columns = m._size[1];
    var values = m._values;
    var index = m._index;
    var ptr = m._ptr;

    // result
    var x = [];

    // loop columns
    for (var j = 0; j < columns; j++) {
      var bj = bdata[j][0] || 0;
      if (!equalScalar(bj, 0)) {
        // non-degenerate row, find solution

        var vjj = 0;
        // matrix values & indices (column j)
        var jValues = [];
        var jIndices = [];

        // first and last index in the column
        var firstIndex = ptr[j];
        var lastIndex = ptr[j + 1];

        // values in column, find value at [j, j]
        for (var k = firstIndex; k < lastIndex; k++) {
          var i = index[k];

          // check row (rows are not sorted!)
          if (i === j) {
            vjj = values[k];
          } else if (i > j) {
            // store lower triangular
            jValues.push(values[k]);
            jIndices.push(i);
          }
        }

        // at this point we must have a value in vjj
        if (equalScalar(vjj, 0)) {
          throw new Error('Linear system cannot be solved since matrix is singular');
        }
        var xj = divideScalar(bj, vjj);
        for (var _k = 0, l = jIndices.length; _k < l; _k++) {
          var _i = jIndices[_k];
          bdata[_i] = [subtractScalar(bdata[_i][0] || 0, multiplyScalar(xj, jValues[_k]))];
        }
        x[j] = [xj];
      } else {
        // degenerate row, we can choose any value
        x[j] = [0];
      }
    }
    return new DenseMatrix({
      data: x,
      size: [rows, 1]
    });
  }
});