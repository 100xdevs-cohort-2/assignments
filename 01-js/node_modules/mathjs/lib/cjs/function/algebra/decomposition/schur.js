"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSchur = void 0;
var _factory = require("../../../utils/factory.js");
var name = 'schur';
var dependencies = ['typed', 'matrix', 'identity', 'multiply', 'qr', 'norm', 'subtract'];
var createSchur = exports.createSchur = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    identity = _ref.identity,
    multiply = _ref.multiply,
    qr = _ref.qr,
    norm = _ref.norm,
    subtract = _ref.subtract;
  /**
   *
   * Performs a real Schur decomposition of the real matrix A = UTU' where U is orthogonal
   * and T is upper quasi-triangular.
   * https://en.wikipedia.org/wiki/Schur_decomposition
   *
   * Syntax:
   *
   *     math.schur(A)
   *
   * Examples:
   *
   *     const A = [[1, 0], [-4, 3]]
   *     math.schur(A) // returns {T: [[3, 4], [0, 1]], R: [[0, 1], [-1, 0]]}
   *
   * See also:
   *
   *     sylvester, lyap, qr
   *
   * @param {Array | Matrix} A  Matrix A
   * @return {{U: Array | Matrix, T: Array | Matrix}} Object containing both matrix U and T of the Schur Decomposition A=UTU'
   */
  return typed(name, {
    Array: function Array(X) {
      var r = _schur(matrix(X));
      return {
        U: r.U.valueOf(),
        T: r.T.valueOf()
      };
    },
    Matrix: function Matrix(X) {
      return _schur(X);
    }
  });
  function _schur(X) {
    var n = X.size()[0];
    var A = X;
    var U = identity(n);
    var k = 0;
    var A0;
    do {
      A0 = A;
      var QR = qr(A);
      var Q = QR.Q;
      var R = QR.R;
      A = multiply(R, Q);
      U = multiply(U, Q);
      if (k++ > 100) {
        break;
      }
    } while (norm(subtract(A, A0)) > 1e-4);
    return {
      U: U,
      T: A
    };
  }
});