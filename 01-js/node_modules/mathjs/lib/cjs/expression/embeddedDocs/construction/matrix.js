"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matrixDocs = void 0;
var matrixDocs = exports.matrixDocs = {
  name: 'matrix',
  category: 'Construction',
  syntax: ['[]', '[a1, b1, ...; a2, b2, ...]', 'matrix()', 'matrix("dense")', 'matrix([...])'],
  description: 'Create a matrix.',
  examples: ['[]', '[1, 2, 3]', '[1, 2, 3; 4, 5, 6]', 'matrix()', 'matrix([3, 4])', 'matrix([3, 4; 5, 6], "sparse")', 'matrix([3, 4; 5, 6], "sparse", "number")'],
  seealso: ['bignumber', 'boolean', 'complex', 'index', 'number', 'string', 'unit', 'sparse']
};