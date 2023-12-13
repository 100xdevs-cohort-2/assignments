import { nearlyEqual as bigNearlyEqual } from '../../utils/bignumber/nearlyEqual.js';
import { nearlyEqual } from '../../utils/number.js';
import { factory } from '../../utils/factory.js';
import { complexEquals } from '../../utils/complex.js';
import { createCompareUnits } from './compareUnits.js';
var name = 'equalScalar';
var dependencies = ['typed', 'config'];
export var createEqualScalar = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config
  } = _ref;
  var compareUnits = createCompareUnits({
    typed
  });

  /**
   * Test whether two scalar values are nearly equal.
   *
   * @param  {number | BigNumber | Fraction | boolean | Complex | Unit} x   First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Complex} y          Second value to compare
   * @return {boolean}                                                  Returns true when the compared values are equal, else returns false
   * @private
   */
  return typed(name, {
    'boolean, boolean': function booleanBoolean(x, y) {
      return x === y;
    },
    'number, number': function numberNumber(x, y) {
      return nearlyEqual(x, y, config.epsilon);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.eq(y) || bigNearlyEqual(x, y, config.epsilon);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.equals(y);
    },
    'Complex, Complex': function ComplexComplex(x, y) {
      return complexEquals(x, y, config.epsilon);
    }
  }, compareUnits);
});
export var createEqualScalarNumber = factory(name, ['typed', 'config'], _ref2 => {
  var {
    typed,
    config
  } = _ref2;
  return typed(name, {
    'number, number': function numberNumber(x, y) {
      return nearlyEqual(x, y, config.epsilon);
    }
  });
});