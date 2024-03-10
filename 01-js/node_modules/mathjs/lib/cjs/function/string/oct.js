"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOct = void 0;
var _factory = require("../../utils/factory.js");
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

var createOct = exports.createOct = (0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    format = _ref.format;
  return typed(name, {
    'number | BigNumber': function numberBigNumber(n) {
      return format(n, {
        notation: 'oct'
      });
    },
    'number | BigNumber, number': function numberBigNumberNumber(n, wordSize) {
      return format(n, {
        notation: 'oct',
        wordSize: wordSize
      });
    }
  });
});