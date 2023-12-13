import { factory } from '../../utils/factory.js';
import { asinhNumber } from '../../plain/number/index.js';
var name = 'asinh';
var dependencies = ['typed'];
export var createAsinh = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed
  } = _ref;
  /**
   * Calculate the hyperbolic arcsine of a value,
   * defined as `asinh(x) = ln(x + sqrt(x^2 + 1))`.
   *
   * To avoid confusion with the matrix hyperbolic arcsine, this function
   * does not apply to matrices.
   *
   * Syntax:
   *
   *    math.asinh(x)
   *
   * Examples:
   *
   *    math.asinh(0.5)       // returns 0.48121182505960347
   *
   * See also:
   *
   *    acosh, atanh
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic arcsine of x
   */
  return typed('asinh', {
    number: asinhNumber,
    Complex: function Complex(x) {
      return x.asinh();
    },
    BigNumber: function BigNumber(x) {
      return x.asinh();
    }
  });
});