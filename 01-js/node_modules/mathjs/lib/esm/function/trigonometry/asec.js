import { factory } from '../../utils/factory.js';
import { asecNumber } from '../../plain/number/index.js';
var name = 'asec';
var dependencies = ['typed', 'config', 'Complex', 'BigNumber'];
export var createAsec = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    Complex,
    BigNumber: _BigNumber
  } = _ref;
  /**
   * Calculate the inverse secant of a value. Defined as `asec(x) = acos(1/x)`.
   *
   * To avoid confusion with the matrix arcsecant, this function does not
   * apply to matrices.
   *
   * Syntax:
   *
   *    math.asec(x)
   *
   * Examples:
   *
   *    math.asec(2)             // returns 1.0471975511965979
   *    math.asec(math.sec(1.5)) // returns 1.5
   *
   *    math.asec(0.5)           // returns Complex 0 + 1.3169578969248166i
   *
   * See also:
   *
   *    acos, acot, acsc
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} The arc secant of x
   */
  return typed(name, {
    number: function number(x) {
      if (x <= -1 || x >= 1 || config.predictable) {
        return asecNumber(x);
      }
      return new Complex(x, 0).asec();
    },
    Complex: function Complex(x) {
      return x.asec();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x).acos();
    }
  });
});