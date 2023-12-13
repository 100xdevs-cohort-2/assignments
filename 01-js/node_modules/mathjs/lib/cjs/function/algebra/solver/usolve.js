"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUsolve = void 0;
var _factory = require("../../../utils/factory.js");
var _solveValidation = require("./utils/solveValidation.js");
var name = 'usolve';
var dependencies = ['typed', 'matrix', 'divideScalar', 'multiplyScalar', 'subtractScalar', 'equalScalar', 'DenseMatrix'];
var createUsolve = exports.createUsolve = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    divideScalar = _ref.divideScalar,
    multiplyScalar = _ref.multiplyScalar,
    subtractScalar = _ref.subtractScalar,
    equalScalar = _ref.equalScalar,
    DenseMatrix = _ref.DenseMatrix;
  var solveValidation = (0, _solveValidation.createSolveValidation)({
    DenseMatrix: DenseMatrix
  });

  /**
   * Finds one solution of a linear equation system by backward substitution. Matrix must be an upper triangular matrix. Throws an error if there's no solution.
   *
   * `U * x = b`
   *
   * Syntax:
   *
   *    math.usolve(U, b)
   *
   * Examples:
   *
   *    const a = [[-2, 3], [2, 1]]
   *    const b = [11, 9]
   *    const x = usolve(a, b)  // [[8], [9]]
   *
   * See also:
   *
   *    usolveAll, lup, slu, usolve, lusolve
   *
   * @param {Matrix, Array} U       A N x N matrix or array (U)
   * @param {Matrix, Array} b       A column vector with the b values
   *
   * @return {DenseMatrix | Array}  A column vector with the linear system solution (x)
   */
  return typed(name, {
    'SparseMatrix, Array | Matrix': function SparseMatrixArrayMatrix(m, b) {
      return _sparseBackwardSubstitution(m, b);
    },
    'DenseMatrix, Array | Matrix': function DenseMatrixArrayMatrix(m, b) {
      return _denseBackwardSubstitution(m, b);
    },
    'Array, Array | Matrix': function ArrayArrayMatrix(a, b) {
      var m = matrix(a);
      var r = _denseBackwardSubstitution(m, b);
      return r.valueOf();
    }
  });
  function _denseBackwardSubstitution(m, b) {
    // make b into a column vector
    b = solveValidation(m, b, true);
    var bdata = b._data;
    var rows = m._size[0];
    var columns = m._size[1];

    // result
    var x = [];
    var mdata = m._data;
    // loop columns backwards
    for (var j = columns - 1; j >= 0; j--) {
      // b[j]
      var bj = bdata[j][0] || 0;
      // x[j]
      var xj = void 0;
      if (!equalScalar(bj, 0)) {
        // value at [j, j]
        var vjj = mdata[j][j];
        if (equalScalar(vjj, 0)) {
          // system cannot be solved
          throw new Error('Linear system cannot be solved since matrix is singular');
        }
        xj = divideScalar(bj, vjj);

        // loop rows
        for (var i = j - 1; i >= 0; i--) {
          // update copy of b
          bdata[i] = [subtractScalar(bdata[i][0] || 0, multiplyScalar(xj, mdata[i][j]))];
        }
      } else {
        // zero value at j
        xj = 0;
      }
      // update x
      x[j] = [xj];
    }
    return new DenseMatrix({
      data: x,
      size: [rows, 1]
    });
  }
  function _sparseBackwardSubstitution(m, b) {
    // make b into a column vector
    b = solveValidation(m, b, true);
    var bdata = b._data;
    var rows = m._size[0];
    var columns = m._size[1];
    var values = m._values;
    var index = m._index;
    var ptr = m._ptr;

    // result
    var x = [];

    // loop columns backwards
    for (var j = columns - 1; j >= 0; j--) {
      var bj = bdata[j][0] || 0;
      if (!equalScalar(bj, 0)) {
        // non-degenerate row, find solution

        var vjj = 0;

        // upper triangular matrix values & index (column j)
        var jValues = [];
        var jIndices = [];

        // first & last indeces in column
        var firstIndex = ptr[j];
        var lastIndex = ptr[j + 1];

        // values in column, find value at [j, j], loop backwards
        for (var k = lastIndex - 1; k >= firstIndex; k--) {
          var i = index[k];

          // check row (rows are not sorted!)
          if (i === j) {
            vjj = values[k];
          } else if (i < j) {
            // store upper triangular
            jValues.push(values[k]);
            jIndices.push(i);
          }
        }

        // at this point we must have a value in vjj
        if (equalScalar(vjj, 0)) {
          throw new Error('Linear system cannot be solved since matrix is singular');
        }
        var xj = divideScalar(bj, vjj);
        for (var _k = 0, _lastIndex = jIndices.length; _k < _lastIndex; _k++) {
          var _i = jIndices[_k];
          bdata[_i] = [subtractScalar(bdata[_i][0], multiplyScalar(xj, jValues[_k]))];
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