import { factory } from '../../utils/factory.js';
var name = 'kldivergence';
var dependencies = ['typed', 'matrix', 'divide', 'sum', 'multiply', 'map', 'dotDivide', 'log', 'isNumeric'];
export var createKldivergence = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    divide,
    sum,
    multiply,
    map,
    dotDivide,
    log,
    isNumeric
  } = _ref;
  /**
     * Calculate the Kullback-Leibler (KL) divergence  between two distributions
     *
     * Syntax:
     *
     *     math.kldivergence(x, y)
     *
     * Examples:
     *
     *     math.kldivergence([0.7,0.5,0.4], [0.2,0.9,0.5])   //returns 0.24376698773121153
     *
     *
     * @param  {Array | Matrix} q    First vector
     * @param  {Array | Matrix} p    Second vector
     * @return {number}              Returns distance between q and p
     */
  return typed(name, {
    'Array, Array': function ArrayArray(q, p) {
      return _kldiv(matrix(q), matrix(p));
    },
    'Matrix, Array': function MatrixArray(q, p) {
      return _kldiv(q, matrix(p));
    },
    'Array, Matrix': function ArrayMatrix(q, p) {
      return _kldiv(matrix(q), p);
    },
    'Matrix, Matrix': function MatrixMatrix(q, p) {
      return _kldiv(q, p);
    }
  });
  function _kldiv(q, p) {
    var plength = p.size().length;
    var qlength = q.size().length;
    if (plength > 1) {
      throw new Error('first object must be one dimensional');
    }
    if (qlength > 1) {
      throw new Error('second object must be one dimensional');
    }
    if (plength !== qlength) {
      throw new Error('Length of two vectors must be equal');
    }

    // Before calculation, apply normalization
    var sumq = sum(q);
    if (sumq === 0) {
      throw new Error('Sum of elements in first object must be non zero');
    }
    var sump = sum(p);
    if (sump === 0) {
      throw new Error('Sum of elements in second object must be non zero');
    }
    var qnorm = divide(q, sum(q));
    var pnorm = divide(p, sum(p));
    var result = sum(multiply(qnorm, map(dotDivide(qnorm, pnorm), x => log(x))));
    if (isNumeric(result)) {
      return result;
    } else {
      return Number.NaN;
    }
  }
});