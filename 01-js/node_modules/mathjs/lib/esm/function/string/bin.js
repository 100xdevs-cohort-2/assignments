import { factory } from '../../utils/factory.js';
var name = 'bin';
var dependencies = ['typed', 'format'];

/**
 * Format a number as binary.
 *
 * Syntax:
 *
 *    math.bin(value)
 *
 * Examples:
 *
 *    //the following outputs "0b10"
 *    math.bin(2)
 *
 * See also:
 *
 *    oct
 *    hex
 *
 * @param {number} value    Value to be stringified
 * @param {number} wordSize Optional word size (see `format`)
 * @return {string}         The formatted value
 */
export var createBin = factory(name, dependencies, _ref => {
  var {
    typed,
    format
  } = _ref;
  return typed(name, {
    'number | BigNumber': function numberBigNumber(n) {
      return format(n, {
        notation: 'bin'
      });
    },
    'number | BigNumber, number': function numberBigNumberNumber(n, wordSize) {
      return format(n, {
        notation: 'bin',
        wordSize
      });
    }
  });
});