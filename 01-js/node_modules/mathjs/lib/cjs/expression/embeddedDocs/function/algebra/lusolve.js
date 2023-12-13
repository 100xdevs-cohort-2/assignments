"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lusolveDocs = void 0;
var lusolveDocs = exports.lusolveDocs = {
  name: 'lusolve',
  category: 'Algebra',
  syntax: ['x=lusolve(A, b)', 'x=lusolve(lu, b)'],
  description: 'Solves the linear system A * x = b where A is an [n x n] matrix and b is a [n] column vector.',
  examples: ['a = [-2, 3; 2, 1]', 'b = [11, 9]', 'x = lusolve(a, b)'],
  seealso: ['lup', 'slu', 'lsolve', 'usolve', 'matrix', 'sparse']
};