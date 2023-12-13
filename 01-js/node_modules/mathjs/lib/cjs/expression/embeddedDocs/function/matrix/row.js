"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rowDocs = void 0;
var rowDocs = exports.rowDocs = {
  name: 'row',
  category: 'Matrix',
  syntax: ['row(x, index)'],
  description: 'Return a row from a matrix or array.',
  examples: ['A = [[1, 2], [3, 4]]', 'row(A, 1)', 'row(A, 2)'],
  seealso: ['column', 'matrixFromRows']
};