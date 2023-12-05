import { factory } from '../../utils/factory.js';
var name = 'hex';
var dependencies = ['typed', 'format'];

/**
 * Format a number as hexadecimal.
 *
 * Syntax:
 *
 *    math.hex(value)
 *
 * Examples:
 *
 *    math.hex(240) // returns "0xF0"
 *
 * See also:
 *
 *    oct
 *    bin
 *
 * @param {number} value    Value to be stringified
 * @param {number} wordSize Optional word size (see `format`)
 * @return {string}         The formatted value
 */
export var createHex = factory(name, dependencies, _ref => {
  var {
    typed,
    format
  } = _ref;
  return typed(name, {
    'number | BigNumber': function numberBigNumber(n) {
      return format(n, {
        notation: 'hex'
      });
    },
    'number | BigNumber, number': function numberBigNumberNumber(n, wordSize) {
      return format(n, {
        notation: 'hex',
        wordSize
      });
    }
  });
});