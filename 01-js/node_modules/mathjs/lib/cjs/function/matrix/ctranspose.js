"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCtranspose = void 0;
var _factory = require("../../utils/factory.js");
var name = 'ctranspose';
var dependencies = ['typed', 'transpose', 'conj'];
var createCtranspose = exports.createCtranspose = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    transpose = _ref.transpose,
    conj = _ref.conj;
  /**
   * Transpose and complex conjugate a matrix. All values of the matrix are
   * reflected over its main diagonal and then the complex conjugate is
   * taken. This is equivalent to complex conjugation for scalars and
   * vectors.
   *
   * Syntax:
   *
   *     math.ctranspose(x)
   *
   * Examples:
   *
   *     const A = [[1, 2, 3], [4, 5, math.complex(6,7)]]
   *     math.ctranspose(A)               // returns [[1, 4], [2, 5], [3, {re:6,im:7}]]
   *
   * See also:
   *
   *     transpose, diag, inv, subset, squeeze
   *
   * @param {Array | Matrix} x  Matrix to be ctransposed
   * @return {Array | Matrix}   The ctransposed matrix
   */
  return typed(name, {
    any: function any(x) {
      return conj(transpose(x));
    }
  });
});