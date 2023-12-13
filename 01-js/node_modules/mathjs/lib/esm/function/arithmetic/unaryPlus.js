import { factory } from '../../utils/factory.js';
import { deepMap } from '../../utils/collection.js';
import { unaryPlusNumber } from '../../plain/number/index.js';
var name = 'unaryPlus';
var dependencies = ['typed', 'config', 'BigNumber'];
export var createUnaryPlus = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    BigNumber
  } = _ref;
  /**
   * Unary plus operation.
   * Boolean values and strings will be converted to a number, numeric values will be returned as is.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.unaryPlus(x)
   *
   * Examples:
   *
   *    math.unaryPlus(3.5)      // returns 3.5
   *    math.unaryPlus(1)     // returns 1
   *
   * See also:
   *
   *    unaryMinus, add, subtract
   *
   * @param  {number | BigNumber | Fraction | string | Complex | Unit | Array | Matrix} x
   *            Input value
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix}
   *            Returns the input value when numeric, converts to a number when input is non-numeric.
   */
  return typed(name, {
    number: unaryPlusNumber,
    Complex: function Complex(x) {
      return x; // complex numbers are immutable
    },

    BigNumber: function BigNumber(x) {
      return x; // bignumbers are immutable
    },

    Fraction: function Fraction(x) {
      return x; // fractions are immutable
    },

    Unit: function Unit(x) {
      return x.clone();
    },
    // deep map collection, skip zeros since unaryPlus(0) = 0
    'Array | Matrix': typed.referToSelf(self => x => deepMap(x, self, true)),
    'boolean | string': function booleanString(x) {
      // convert to a number or bignumber
      return config.number === 'BigNumber' ? new BigNumber(+x) : +x;
    }
  });
});