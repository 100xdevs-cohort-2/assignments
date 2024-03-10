"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unaryMinusDocs = void 0;
var unaryMinusDocs = exports.unaryMinusDocs = {
  name: 'unaryMinus',
  category: 'Operators',
  syntax: ['-x', 'unaryMinus(x)'],
  description: 'Inverse the sign of a value. Converts booleans and strings to numbers.',
  examples: ['-4.5', '-(-5.6)', '-"22"'],
  seealso: ['add', 'subtract', 'unaryPlus']
};