import { factory } from '../../utils/factory.js';
import { acscNumber } from '../../plain/number/index.js';
var name = 'acsc';
var dependencies = ['typed', 'config', 'Complex', 'BigNumber'];
export var createAcsc = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    Complex,
    BigNumber: _BigNumber
  } = _ref;
  /**
   * Calculate the inverse cosecant of a value, defined as `acsc(x) = asin(1/x)`.
   *
   * To avoid confusion with the matrix arccosecant, this function does not
   * apply to matrices.
   *
   * Syntax:
   *
   *    math.acsc(x)
   *
   * Examples:
   *
   *    math.acsc(2)             // returns 0.5235987755982989
   *    math.acsc(0.5)           // returns Complex 1.5707963267948966 -1.3169578969248166i
   *    math.acsc(math.csc(1.5)) // returns number ~1.5
   *
   * See also:
   *
   *    csc, asin, asec
   *
   * @param {number | BigNumber | Complex} x   Function input
   * @return {number | BigNumber | Complex} The arc cosecant of x
   */
  return typed(name, {
    number: function number(x) {
      if (x <= -1 || x >= 1 || config.predictable) {
        return acscNumber(x);
      }
      return new Complex(x, 0).acsc();
    },
    Complex: function Complex(x) {
      return x.acsc();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x).asin();
    }
  });
});