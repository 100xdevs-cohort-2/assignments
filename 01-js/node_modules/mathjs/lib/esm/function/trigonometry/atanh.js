import { factory } from '../../utils/factory.js';
import { atanhNumber } from '../../plain/number/index.js';
var name = 'atanh';
var dependencies = ['typed', 'config', 'Complex'];
export var createAtanh = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    Complex
  } = _ref;
  /**
   * Calculate the hyperbolic arctangent of a value,
   * defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.
   *
   * To avoid confusion with the matrix hyperbolic arctangent, this function
   * does not apply to matrices.
   *
   * Syntax:
   *
   *    math.atanh(x)
   *
   * Examples:
   *
   *    math.atanh(0.5)       // returns 0.5493061443340549
   *
   * See also:
   *
   *    acosh, asinh
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic arctangent of x
   */
  return typed(name, {
    number: function number(x) {
      if (x <= 1 && x >= -1 || config.predictable) {
        return atanhNumber(x);
      }
      return new Complex(x, 0).atanh();
    },
    Complex: function Complex(x) {
      return x.atanh();
    },
    BigNumber: function BigNumber(x) {
      return x.atanh();
    }
  });
});