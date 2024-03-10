"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ctransposeDocs = void 0;
var ctransposeDocs = exports.ctransposeDocs = {
  name: 'ctranspose',
  category: 'Matrix',
  syntax: ['x\'', 'ctranspose(x)'],
  description: 'Complex Conjugate and Transpose a matrix',
  examples: ['a = [1, 2, 3; 4, 5, 6]', 'a\'', 'ctranspose(a)'],
  seealso: ['concat', 'det', 'diag', 'identity', 'inv', 'ones', 'range', 'size', 'squeeze', 'subset', 'trace', 'zeros']
};