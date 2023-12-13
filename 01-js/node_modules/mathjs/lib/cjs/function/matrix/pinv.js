"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPinv = void 0;
var _is = require("../../utils/is.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var _string = require("../../utils/string.js");
var _object = require("../../utils/object.js");
var name = 'pinv';
var dependencies = ['typed', 'matrix', 'inv', 'deepEqual', 'equal', 'dotDivide', 'dot', 'ctranspose', 'divideScalar', 'multiply', 'add', 'Complex'];
var createPinv = exports.createPinv = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    inv = _ref.inv,
    deepEqual = _ref.deepEqual,
    equal = _ref.equal,
    dotDivide = _ref.dotDivide,
    dot = _ref.dot,
    ctranspose = _ref.ctranspose,
    divideScalar = _ref.divideScalar,
    multiply = _ref.multiply,
    add = _ref.add,
    Complex = _ref.Complex;
  /**
   * Calculate the Moore–Penrose inverse of a matrix.
   *
   * Syntax:
   *
   *     math.pinv(x)
   *
   * Examples:
   *
   *     math.pinv([[1, 2], [3, 4]])          // returns [[-2, 1], [1.5, -0.5]]
   *     math.pinv([[1, 0], [0, 1], [0, 1]])  // returns [[1, 0, 0], [0, 0.5, 0.5]]
   *     math.pinv(4)                         // returns 0.25
   *
   * See also:
   *
   *     inv
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
          if (_isZeros(x)) return ctranspose(x); // null vector
          if (size[0] === 1) {
            return inv(x); // invertible matrix
          } else {
            return dotDivide(ctranspose(x), dot(x, x));
          }
        case 2:
          // two dimensional array
          {
            if (_isZeros(x)) return ctranspose(x); // zero matrixx
            var rows = size[0];
            var cols = size[1];
            if (rows === cols) {
              try {
                return inv(x); // invertible matrix
              } catch (err) {
                if (err instanceof Error && err.message.match(/Cannot calculate inverse, determinant is zero/)) {
                  // Expected
                } else {
                  throw err;
                }
              }
            }
            if ((0, _is.isMatrix)(x)) {
              return matrix(_pinv(x.valueOf(), rows, cols), x.storage());
            } else {
              // return an Array
              return _pinv(x, rows, cols);
            }
          }
        default:
          // multi dimensional array
          throw new RangeError('Matrix must be two dimensional ' + '(size: ' + (0, _string.format)(size) + ')');
      }
    },
    any: function any(x) {
      // scalar
      if (equal(x, 0)) return (0, _object.clone)(x); // zero
      return divideScalar(1, x);
    }
  });

  /**
   * Calculate the Moore–Penrose inverse of a matrix
   * @param {Array[]} mat     A matrix
   * @param {number} rows     Number of rows
   * @param {number} cols     Number of columns
   * @return {Array[]} pinv    Pseudoinverse matrix
   * @private
   */
  function _pinv(mat, rows, cols) {
    var _rankFact2 = _rankFact(mat, rows, cols),
      C = _rankFact2.C,
      F = _rankFact2.F; // TODO: Use SVD instead (may improve precision)
    var Cpinv = multiply(inv(multiply(ctranspose(C), C)), ctranspose(C));
    var Fpinv = multiply(ctranspose(F), inv(multiply(F, ctranspose(F))));
    return multiply(Fpinv, Cpinv);
  }

  /**
   * Calculate the reduced row echelon form of a matrix
   *
   * Modified from https://rosettacode.org/wiki/Reduced_row_echelon_form
   *
   * @param {Array[]} mat     A matrix
   * @param {number} rows     Number of rows
   * @param {number} cols     Number of columns
   * @return {Array[]}        Reduced row echelon form
   * @private
   */
  function _rref(mat, rows, cols) {
    var M = (0, _object.clone)(mat);
    var lead = 0;
    for (var r = 0; r < rows; r++) {
      if (cols <= lead) {
        return M;
      }
      var i = r;
      while (_isZero(M[i][lead])) {
        i++;
        if (rows === i) {
          i = r;
          lead++;
          if (cols === lead) {
            return M;
          }
        }
      }
      var _ref2 = [M[r], M[i]];
      M[i] = _ref2[0];
      M[r] = _ref2[1];
      var val = M[r][lead];
      for (var j = 0; j < cols; j++) {
        M[r][j] = dotDivide(M[r][j], val);
      }
      for (var _i = 0; _i < rows; _i++) {
        if (_i === r) continue;
        val = M[_i][lead];
        for (var _j = 0; _j < cols; _j++) {
          M[_i][_j] = add(M[_i][_j], multiply(-1, multiply(val, M[r][_j])));
        }
      }
      lead++;
    }
    return M;
  }

  /**
   * Calculate the rank factorization of a matrix
   *
   * @param {Array[]} mat                  A matrix (M)
   * @param {number} rows                  Number of rows
   * @param {number} cols                  Number of columns
   * @return {{C: Array, F: Array}}        rank factorization where M = C F
   * @private
   */
  function _rankFact(mat, rows, cols) {
    var rref = _rref(mat, rows, cols);
    var C = mat.map(function (_, i) {
      return _.filter(function (_, j) {
        return j < rows && !_isZero(dot(rref[j], rref[j]));
      });
    });
    var F = rref.filter(function (_, i) {
      return !_isZero(dot(rref[i], rref[i]));
    });
    return {
      C: C,
      F: F
    };
  }
  function _isZero(x) {
    return equal(add(x, Complex(1, 1)), add(0, Complex(1, 1)));
  }
  function _isZeros(arr) {
    return deepEqual(add(arr, Complex(1, 1)), add(multiply(arr, 0), Complex(1, 1)));
  }
});