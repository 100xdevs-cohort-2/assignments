"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kronDocs = void 0;
var kronDocs = exports.kronDocs = {
  name: 'kron',
  category: 'Matrix',
  syntax: ['kron(x, y)'],
  description: 'Calculates the kronecker product of 2 matrices or vectors.',
  examples: ['kron([[1, 0], [0, 1]], [[1, 2], [3, 4]])', 'kron([1,1], [2,3,4])'],
  seealso: ['multiply', 'dot', 'cross']
};