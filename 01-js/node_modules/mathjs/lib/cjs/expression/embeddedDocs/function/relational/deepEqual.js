"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepEqualDocs = void 0;
var deepEqualDocs = exports.deepEqualDocs = {
  name: 'deepEqual',
  category: 'Relational',
  syntax: ['deepEqual(x, y)'],
  description: 'Check equality of two matrices element wise. Returns true if the size of both matrices is equal and when and each of the elements are equal.',
  examples: ['deepEqual([1,3,4], [1,3,4])', 'deepEqual([1,3,4], [1,3])'],
  seealso: ['equal', 'unequal', 'smaller', 'larger', 'smallerEq', 'largerEq', 'compare']
};