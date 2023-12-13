import { deepMap } from '../../utils/collection.js';
import { factory } from '../../utils/factory.js';
import { notNumber } from '../../plain/number/index.js';
var name = 'not';
var dependencies = ['typed'];
export var createNot = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed
  } = _ref;
  /**
   * Logical `not`. Flips boolean value of a given parameter.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.not(x)
   *
   * Examples:
   *
   *    math.not(2)      // returns false
   *    math.not(0)      // returns true
   *    math.not(true)   // returns false
   *
   *    a = [2, -7, 0]
   *    math.not(a)      // returns [false, false, true]
   *
   * See also:
   *
   *    and, or, xor
   *
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} x First value to check
   * @return {boolean | Array | Matrix}
   *            Returns true when input is a zero or empty value.
   */
  return typed(name, {
    'null | undefined': () => true,
    number: notNumber,
    Complex: function Complex(x) {
      return x.re === 0 && x.im === 0;
    },
    BigNumber: function BigNumber(x) {
      return x.isZero() || x.isNaN();
    },
    Unit: typed.referToSelf(self => x => typed.find(self, x.valueType())(x.value)),
    'Array | Matrix': typed.referToSelf(self => x => deepMap(x, self))
  });
});