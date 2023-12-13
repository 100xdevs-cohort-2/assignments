import { factory } from '../../utils/factory.js';
var name = 'divideScalar';
var dependencies = ['typed', 'numeric'];
export var createDivideScalar = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    numeric
  } = _ref;
  /**
   * Divide two scalar values, `x / y`.
   * This function is meant for internal use: it is used by the public functions
   * `divide` and `inv`.
   *
   * This function does not support collections (Array or Matrix).
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x   Numerator
   * @param  {number | BigNumber | Fraction | Complex} y          Denominator
   * @return {number | BigNumber | Fraction | Complex | Unit}     Quotient, `x / y`
   * @private
   */
  return typed(name, {
    'number, number': function numberNumber(x, y) {
      return x / y;
    },
    'Complex, Complex': function ComplexComplex(x, y) {
      return x.div(y);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.div(y);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.div(y);
    },
    'Unit, number | Complex | Fraction | BigNumber | Unit': (x, y) => x.divide(y),
    'number | Fraction | Complex | BigNumber, Unit': (x, y) => y.divideInto(x)
  });
});