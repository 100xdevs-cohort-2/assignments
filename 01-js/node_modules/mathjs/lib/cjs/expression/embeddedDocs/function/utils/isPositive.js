"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPositiveDocs = void 0;
var isPositiveDocs = exports.isPositiveDocs = {
  name: 'isPositive',
  category: 'Utils',
  syntax: ['isPositive(x)'],
  description: 'Test whether a value is positive: larger than zero.',
  examples: ['isPositive(2)', 'isPositive(0)', 'isPositive(-4)', 'isPositive([3, 0.5, -2])'],
  seealso: ['isInteger', 'isNumeric', 'isNegative', 'isZero']
};