"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSqrtm = void 0;
var _is = require("../../utils/is.js");
var _string = require("../../utils/string.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var name = 'sqrtm';
var dependencies = ['typed', 'abs', 'add', 'multiply', 'map', 'sqrt', 'subtract', 'inv', 'size', 'max', 'identity'];
var createSqrtm = exports.createSqrtm = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    abs = _ref.abs,
    add = _ref.add,
    multiply = _ref.multiply,
    map = _ref.map,
    sqrt = _ref.sqrt,
    subtract = _ref.subtract,
    inv = _ref.inv,
    size = _ref.size,
    max = _ref.max,
    identity = _ref.identity;
  var _maxIterations = 1e3;
  var _tolerance = 1e-6;

  /**
   * Calculate the principal square root matrix using the Denman–Beavers iterative method
   *
   * https://en.wikipedia.org/wiki/Square_root_of_a_matrix#By_Denman–Beavers_iteration
   *
   * @param  {Array | Matrix} A   The square matrix `A`
   * @return {Array | Matrix}     The principal square root of matrix `A`
   * @private
   */
  function _denmanBeavers(A) {
    var error;
    var iterations = 0;
    var Y = A;
    var Z = identity(size(A));
    do {
      var Yk = Y;
      Y = multiply(0.5, add(Yk, inv(Z)));
      Z = multiply(0.5, add(Z, inv(Yk)));
      error = max(abs(subtract(Y, Yk)));
      if (error > _tolerance && ++iterations > _maxIterations) {
        throw new Error('computing square root of matrix: iterative method could not converge');
      }
    } while (error > _tolerance);
    return Y;
  }

  /**
   * Calculate the principal square root of a square matrix.
   * The principal square root matrix `X` of another matrix `A` is such that `X * X = A`.
   *
   * https://en.wikipedia.org/wiki/Square_root_of_a_matrix
   *
   * Syntax:
   *
   *     math.sqrtm(A)
   *
   * Examples:
   *
   *     math.sqrtm([[33, 24], [48, 57]]) // returns [[5, 2], [4, 7]]
   *
   * See also:
   *
   *     sqrt, pow
   *
   * @param  {Array | Matrix} A   The square matrix `A`
   * @return {Array | Matrix}     The principal square root of matrix `A`
   */
  return typed(name, {
    'Array | Matrix': function ArrayMatrix(A) {
      var size = (0, _is.isMatrix)(A) ? A.size() : (0, _array.arraySize)(A);
      switch (size.length) {
        case 1:
          // Single element Array | Matrix
          if (size[0] === 1) {
            return map(A, sqrt);
          } else {
            throw new RangeError('Matrix must be square ' + '(size: ' + (0, _string.format)(size) + ')');
          }
        case 2:
          {
            // Two-dimensional Array | Matrix
            var rows = size[0];
            var cols = size[1];
            if (rows === cols) {
              return _denmanBeavers(A);
            } else {
              throw new RangeError('Matrix must be square ' + '(size: ' + (0, _string.format)(size) + ')');
            }
          }
        default:
          // Multi dimensional array
          throw new RangeError('Matrix must be at most two dimensional ' + '(size: ' + (0, _string.format)(size) + ')');
      }
    }
  });
});