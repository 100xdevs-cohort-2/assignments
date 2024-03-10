import { factory } from '../../utils/factory.js';
var name = 'hasNumericValue';
var dependencies = ['typed', 'isNumeric'];
export var createHasNumericValue = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    isNumeric
  } = _ref;
  /**
   * Test whether a value is an numeric value.
   *
   * In case of a string, true is returned if the string contains a numeric value.
   *
   * Syntax:
   *
   *     math.hasNumericValue(x)
   *
   * Examples:
   *
   *    math.hasNumericValue(2)                     // returns true
   *    math.hasNumericValue('2')                   // returns true
   *    math.isNumeric('2')                         // returns false
   *    math.hasNumericValue(0)                     // returns true
   *    math.hasNumericValue(math.bignumber(500))   // returns true
   *    math.hasNumericValue(math.fraction(4))      // returns true
   *    math.hasNumericValue(math.complex('2-4i'))  // returns false
   *    math.hasNumericValue(false)                 // returns true
   *    math.hasNumericValue([2.3, 'foo', false])   // returns [true, false, true]
   *
   * See also:
   *
   *    isZero, isPositive, isNegative, isInteger, isNumeric
   *
   * @param {*} x       Value to be tested
   * @return {boolean}  Returns true when `x` is a `number`, `BigNumber`,
   *                    `Fraction`, `Boolean`, or a `String` containing number. Returns false for other types.
   *                    Throws an error in case of unknown types.
   */
  return typed(name, {
    boolean: () => true,
    string: function string(x) {
      return x.trim().length > 0 && !isNaN(Number(x));
    },
    any: function any(x) {
      return isNumeric(x);
    }
  });
});