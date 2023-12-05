import { factory } from '../../utils/factory.js';
var name = 'oct';
var dependencies = ['typed', 'format'];

/**
 * Format a number as octal.
 *
 * Syntax:
 *
 *    math.oct(value)
 *
 * Examples:
 *
 *    //the following outputs "0o70"
 *    math.oct(56)
 *
 * See also:
 *
 *    bin
 *    hex
 *
 * @param {number} value    Value to be stringified
 * @param {number} wordSize Optional word size (see `format`)
 * @return {string}         The formatted value
 */

export var createOct = factory(name, dependencies, _ref => {
  var {
    typed,
    format
  } = _ref;
  return typed(name, {
    'number | BigNumber': function numberBigNumber(n) {
      return format(n, {
        notation: 'oct'
      });
    },
    'number | BigNumber, number': function numberBigNumberNumber(n, wordSize) {
      return format(n, {
        notation: 'oct',
        wordSize
      });
    }
  });
});