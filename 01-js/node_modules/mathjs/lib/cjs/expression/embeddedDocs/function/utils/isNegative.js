"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNegativeDocs = void 0;
var isNegativeDocs = exports.isNegativeDocs = {
  name: 'isNegative',
  category: 'Utils',
  syntax: ['isNegative(x)'],
  description: 'Test whether a value is negative: smaller than zero.',
  examples: ['isNegative(2)', 'isNegative(0)', 'isNegative(-4)', 'isNegative([3, 0.5, -2])'],
  seealso: ['isInteger', 'isNumeric', 'isPositive', 'isZero']
};