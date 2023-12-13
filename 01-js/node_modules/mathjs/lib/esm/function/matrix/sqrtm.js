import { isMatrix } from '../../utils/is.js';
import { format } from '../../utils/string.js';
import { arraySize } from '../../utils/array.js';
import { factory } from '../../utils/factory.js';
var name = 'sqrtm';
var dependencies = ['typed', 'abs', 'add', 'multiply', 'map', 'sqrt', 'subtract', 'inv', 'size', 'max', 'identity'];
export var createSqrtm = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    abs,
    add,
    multiply,
    map,
    sqrt,
    subtract,
    inv,
    size,
    max,
    identity
  } = _ref;
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
      var size = isMatrix(A) ? A.size() : arraySize(A);
      switch (size.length) {
        case 1:
          // Single element Array | Matrix
          if (size[0] === 1) {
            return map(A, sqrt);
          } else {
            throw new RangeError('Matrix must be square ' + '(size: ' + format(size) + ')');
          }
        case 2:
          {
            // Two-dimensional Array | Matrix
            var rows = size[0];
            var cols = size[1];
            if (rows === cols) {
              return _denmanBeavers(A);
            } else {
              throw new RangeError('Matrix must be square ' + '(size: ' + format(size) + ')');
            }
          }
        default:
          // Multi dimensional array
          throw new RangeError('Matrix must be at most two dimensional ' + '(size: ' + format(size) + ')');
      }
    }
  });
});