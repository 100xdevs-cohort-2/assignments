"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notDocs = void 0;
var notDocs = exports.notDocs = {
  name: 'not',
  category: 'Logical',
  syntax: ['not x', 'not(x)'],
  description: 'Logical not. Flips the boolean value of given argument.',
  examples: ['not true', 'not false', 'not 2', 'not 0'],
  seealso: ['and', 'or', 'xor']
};