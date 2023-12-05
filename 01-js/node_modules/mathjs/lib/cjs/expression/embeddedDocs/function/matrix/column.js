"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.columnDocs = void 0;
var columnDocs = exports.columnDocs = {
  name: 'column',
  category: 'Matrix',
  syntax: ['column(x, index)'],
  description: 'Return a column from a matrix or array.',
  examples: ['A = [[1, 2], [3, 4]]', 'column(A, 1)', 'column(A, 2)'],
  seealso: ['row', 'matrixFromColumns']
};