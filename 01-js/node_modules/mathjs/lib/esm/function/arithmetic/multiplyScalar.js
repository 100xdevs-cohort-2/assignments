import { factory } from '../../utils/factory.js';
import { multiplyNumber } from '../../plain/number/index.js';
var name = 'multiplyScalar';
var dependencies = ['typed'];
export var createMultiplyScalar = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed
  } = _ref;
  /**
   * Multiply two scalar values, `x * y`.
   * This function is meant for internal use: it is used by the public function
   * `multiply`
   *
   * This function does not support collections (Array or Matrix).
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x   First value to multiply
   * @param  {number | BigNumber | Fraction | Complex} y          Second value to multiply
   * @return {number | BigNumber | Fraction | Complex | Unit}     Multiplication of `x` and `y`
   * @private
   */
  return typed('multiplyScalar', {
    'number, number': multiplyNumber,
    'Complex, Complex': function ComplexComplex(x, y) {
      return x.mul(y);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.times(y);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.mul(y);
    },
    'number | Fraction | BigNumber | Complex, Unit': (x, y) => y.multiply(x),
    'Unit, number | Fraction | BigNumber | Complex | Unit': (x, y) => x.multiply(y)
  });
});