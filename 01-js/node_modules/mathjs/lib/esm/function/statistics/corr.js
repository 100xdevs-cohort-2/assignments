import { factory } from '../../utils/factory.js';
var name = 'corr';
var dependencies = ['typed', 'matrix', 'mean', 'sqrt', 'sum', 'add', 'subtract', 'multiply', 'pow', 'divide'];
export var createCorr = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    sqrt,
    sum,
    add,
    subtract,
    multiply,
    pow,
    divide
  } = _ref;
  /**
   * Compute the correlation coefficient of a two list with values, For matrices, the matrix correlation coefficient is calculated.
   *
   * Syntax:
   *
   *     math.corr(A, B)
   *
   * Examples:
   *
   *     math.corr([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])     // returns 1
   *     math.corr([1, 2.2, 3, 4.8, 5], [4, 5.3, 6.6, 7, 8])     //returns 0.9569941688503644
   *     math.corr([[1, 2.2, 3, 4.8, 5], [4, 5.3, 6.6, 7, 8]],[[1, 2.2, 3, 4.8, 5], [4, 5.3, 6.6, 7, 8]])   // returns [1,1]
   *
   * See also:
   *
   *     median, mean, min, max, sum, prod, std, variance
   *
   * @param {Array | Matrix} A The first array or matrix to compute correlation coefficient
   * @param {Array | Matrix} B The second array or matrix to compute correlation coefficient
   * @return {*} The correlation coefficient
   */
  return typed(name, {
    'Array, Array': function ArrayArray(A, B) {
      return _corr(A, B);
    },
    'Matrix, Matrix': function MatrixMatrix(A, B) {
      var res = _corr(A.toArray(), B.toArray());
      return Array.isArray(res) ? matrix(res) : res;
    }
  });
  /**
   * Calculate the correlation coefficient between two arrays or matrices.
   * @param {Array | Matrix} A
   * @param {Array | Matrix} B
   * @return {*} correlation coefficient
   * @private
   */
  function _corr(A, B) {
    var correlations = [];
    if (Array.isArray(A[0]) && Array.isArray(B[0])) {
      if (A.length !== B.length) {
        throw new SyntaxError('Dimension mismatch. Array A and B must have the same length.');
      }
      for (var i = 0; i < A.length; i++) {
        if (A[i].length !== B[i].length) {
          throw new SyntaxError('Dimension mismatch. Array A and B must have the same number of elements.');
        }
        correlations.push(correlation(A[i], B[i]));
      }
      return correlations;
    } else {
      if (A.length !== B.length) {
        throw new SyntaxError('Dimension mismatch. Array A and B must have the same number of elements.');
      }
      return correlation(A, B);
    }
  }
  function correlation(A, B) {
    var n = A.length;
    var sumX = sum(A);
    var sumY = sum(B);
    var sumXY = A.reduce((acc, x, index) => add(acc, multiply(x, B[index])), 0);
    var sumXSquare = sum(A.map(x => pow(x, 2)));
    var sumYSquare = sum(B.map(y => pow(y, 2)));
    var numerator = subtract(multiply(n, sumXY), multiply(sumX, sumY));
    var denominator = sqrt(multiply(subtract(multiply(n, sumXSquare), pow(sumX, 2)), subtract(multiply(n, sumYSquare), pow(sumY, 2))));
    return divide(numerator, denominator);
  }
});