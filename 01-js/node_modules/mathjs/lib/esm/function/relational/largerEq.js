import { nearlyEqual as bigNearlyEqual } from '../../utils/bignumber/nearlyEqual.js';
import { nearlyEqual } from '../../utils/number.js';
import { factory } from '../../utils/factory.js';
import { createMatAlgo03xDSf } from '../../type/matrix/utils/matAlgo03xDSf.js';
import { createMatAlgo07xSSf } from '../../type/matrix/utils/matAlgo07xSSf.js';
import { createMatAlgo12xSfs } from '../../type/matrix/utils/matAlgo12xSfs.js';
import { createMatrixAlgorithmSuite } from '../../type/matrix/utils/matrixAlgorithmSuite.js';
import { createCompareUnits } from './compareUnits.js';
var name = 'largerEq';
var dependencies = ['typed', 'config', 'matrix', 'DenseMatrix', 'concat'];
export var createLargerEq = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    matrix,
    DenseMatrix,
    concat
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed,
    DenseMatrix
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });
  var compareUnits = createCompareUnits({
    typed
  });

  /**
   * Test whether value x is larger or equal to y.
   *
   * The function returns true when x is larger than y or the relative
   * difference between x and y is smaller than the configured epsilon. The
   * function cannot be used to compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.largerEq(x, y)
   *
   * Examples:
   *
   *    math.larger(2, 1 + 1)         // returns false
   *    math.largerEq(2, 1 + 1)       // returns true
   *
   * See also:
   *
   *    equal, unequal, smaller, smallerEq, larger, compare
   *
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the x is larger or equal to y, else returns false
   */
  return typed(name, createLargerEqNumber({
    typed,
    config
  }), {
    'boolean, boolean': (x, y) => x >= y,
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.gte(y) || bigNearlyEqual(x, y, config.epsilon);
    },
    'Fraction, Fraction': (x, y) => x.compare(y) !== -1,
    'Complex, Complex': function ComplexComplex() {
      throw new TypeError('No ordering relation is defined for complex numbers');
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
export var createLargerEqNumber = /* #__PURE__ */factory(name, ['typed', 'config'], _ref2 => {
  var {
    typed,
    config
  } = _ref2;
  return typed(name, {
    'number, number': function numberNumber(x, y) {
      return x >= y || nearlyEqual(x, y, config.epsilon);
    }
  });
});