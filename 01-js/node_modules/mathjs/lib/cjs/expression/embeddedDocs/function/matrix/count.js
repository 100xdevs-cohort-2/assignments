"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countDocs = void 0;
var countDocs = exports.countDocs = {
  name: 'count',
  category: 'Matrix',
  syntax: ['count(x)'],
  description: 'Count the number of elements of a matrix, array or string.',
  examples: ['a = [1, 2; 3, 4; 5, 6]', 'count(a)', 'size(a)', 'count("hello world")'],
  seealso: ['size']
};