"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHex = void 0;
var _factory = require("../../utils/factory.js");
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
var createHex = exports.createHex = (0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    format = _ref.format;
  return typed(name, {
    'number | BigNumber': function numberBigNumber(n) {
      return format(n, {
        notation: 'hex'
      });
    },
    'number | BigNumber, number': function numberBigNumberNumber(n, wordSize) {
      return format(n, {
        notation: 'hex',
        wordSize: wordSize
      });
    }
  });
});