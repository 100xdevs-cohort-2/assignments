"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matrixFromRowsDocs = void 0;
var matrixFromRowsDocs = exports.matrixFromRowsDocs = {
  name: 'matrixFromRows',
  category: 'Matrix',
  syntax: ['matrixFromRows(...arr)', 'matrixFromRows(row1, row2)', 'matrixFromRows(row1, row2, row3)'],
  description: 'Create a dense matrix from vectors as individual rows.',
  examples: ['matrixFromRows([1, 2, 3], [[4],[5],[6]])'],
  seealso: ['matrix', 'matrixFromColumns', 'matrixFromFunction', 'zeros']
};