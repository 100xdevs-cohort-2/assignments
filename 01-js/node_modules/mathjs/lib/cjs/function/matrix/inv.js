"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInv = void 0;
var _is = require("../../utils/is.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var _string = require("../../utils/string.js");
var name = 'inv';
var dependencies = ['typed', 'matrix', 'divideScalar', 'addScalar', 'multiply', 'unaryMinus', 'det', 'identity', 'abs'];
var createInv = exports.createInv = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    divideScalar = _ref.divideScalar,
    addScalar = _ref.addScalar,
    multiply = _ref.multiply,
    unaryMinus = _ref.unaryMinus,
    det = _ref.det,
    identity = _ref.identity,
    abs = _ref.abs;
  /**
   * Calculate the inverse of a square matrix.
   *
   * Syntax:
   *
   *     math.inv(x)
   *
   * Examples:
   *
   *     math.inv([[1, 2], [3, 4]])  // returns [[-2, 1], [1.5, -0.5]]
   *     math.inv(4)                 // returns 0.25
   *     1 / 4                       // returns 0.25
   *
   * See also:
   *
   *     det, transpose
   *
   * @param {number | Complex | Array | Matrix} x     Matrix to be inversed
   * @return {number | Complex | Array | Matrix} The inverse of `x`.
   */
  return typed(name, {
    'Array | Matrix': function ArrayMatrix(x) {
      var size = (0, _is.isMatrix)(x) ? x.size() : (0, _array.arraySize)(x);
      switch (size.length) {
        case 1:
          // vector
          if (size[0] === 1) {
            if ((0, _is.isMatrix)(x)) {
              return matrix([divideScalar(1, x.valueOf()[0])]);
            } else {
              return [divideScalar(1, x[0])];
            }
          } else {
            throw new RangeError('Matrix must be square ' + '(size: ' + (0, _string.format)(size) + ')');
          }
        case 2:
          // two dimensional array
          {
            var rows = size[0];
            var cols = size[1];
            if (rows === cols) {
              if ((0, _is.isMatrix)(x)) {
                return matrix(_inv(x.valueOf(), rows, cols), x.storage());
              } else {
                // return an Array
                return _inv(x, rows, cols);
              }
            } else {
              throw new RangeError('Matrix must be square ' + '(size: ' + (0, _string.format)(size) + ')');
            }
          }
        default:
          // multi dimensional array
          throw new RangeError('Matrix must be two dimensional ' + '(size: ' + (0, _string.format)(size) + ')');
      }
    },
    any: function any(x) {
      // scalar
      return divideScalar(1, x); // FIXME: create a BigNumber one when configured for bignumbers
    }
  });

  /**
   * Calculate the inverse of a square matrix
   * @param {Array[]} mat     A square matrix
   * @param {number} rows     Number of rows
   * @param {number} cols     Number of columns, must equal rows
   * @return {Array[]} inv    Inverse matrix
   * @private
   */
  function _inv(mat, rows, cols) {
    var r, s, f, value, temp;
    if (rows === 1) {
      // this is a 1 x 1 matrix
      value = mat[0][0];
      if (value === 0) {
        throw Error('Cannot calculate inverse, determinant is zero');
      }
      return [[divideScalar(1, value)]];
    } else if (rows === 2) {
      // this is a 2 x 2 matrix
      var d = det(mat);
      if (d === 0) {
        throw Error('Cannot calculate inverse, determinant is zero');
      }
      return [[divideScalar(mat[1][1], d), divideScalar(unaryMinus(mat[0][1]), d)], [divideScalar(unaryMinus(mat[1][0]), d), divideScalar(mat[0][0], d)]];
    } else {
      // this is a matrix of 3 x 3 or larger
      // calculate inverse using gauss-jordan elimination
      //      https://en.wikipedia.org/wiki/Gaussian_elimination
      //      http://mathworld.wolfram.com/MatrixInverse.html
      //      http://math.uww.edu/~mcfarlat/inverse.htm

      // make a copy of the matrix (only the arrays, not of the elements)
      var A = mat.concat();
      for (r = 0; r < rows; r++) {
        A[r] = A[r].concat();
      }

      // create an identity matrix which in the end will contain the
      // matrix inverse
      var B = identity(rows).valueOf();

      // loop over all columns, and perform row reductions
      for (var c = 0; c < cols; c++) {
        // Pivoting: Swap row c with row r, where row r contains the largest element A[r][c]
        var ABig = abs(A[c][c]);
        var rBig = c;
        r = c + 1;
        while (r < rows) {
          if (abs(A[r][c]) > ABig) {
            ABig = abs(A[r][c]);
            rBig = r;
          }
          r++;
        }
        if (ABig === 0) {
          throw Error('Cannot calculate inverse, determinant is zero');
        }
        r = rBig;
        if (r !== c) {
          temp = A[c];
          A[c] = A[r];
          A[r] = temp;
          temp = B[c];
          B[c] = B[r];
          B[r] = temp;
        }

        // eliminate non-zero values on the other rows at column c
        var Ac = A[c];
        var Bc = B[c];
        for (r = 0; r < rows; r++) {
          var Ar = A[r];
          var Br = B[r];
          if (r !== c) {
            // eliminate value at column c and row r
            if (Ar[c] !== 0) {
              f = divideScalar(unaryMinus(Ar[c]), Ac[c]);

              // add (f * row c) to row r to eliminate the value
              // at column c
              for (s = c; s < cols; s++) {
                Ar[s] = addScalar(Ar[s], multiply(f, Ac[s]));
              }
              for (s = 0; s < cols; s++) {
                Br[s] = addScalar(Br[s], multiply(f, Bc[s]));
              }
            }
          } else {
            // normalize value at Acc to 1,
            // divide each value on row r with the value at Acc
            f = Ac[c];
            for (s = c; s < cols; s++) {
              Ar[s] = divideScalar(Ar[s], f);
            }
            for (s = 0; s < cols; s++) {
              Br[s] = divideScalar(Br[s], f);
            }
          }
        }
      }
      return B;
    }
  }
});