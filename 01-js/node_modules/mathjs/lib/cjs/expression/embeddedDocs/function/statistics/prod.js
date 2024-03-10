"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prodDocs = void 0;
var prodDocs = exports.prodDocs = {
  name: 'prod',
  category: 'Statistics',
  syntax: ['prod(a, b, c, ...)', 'prod(A)'],
  description: 'Compute the product of all values.',
  examples: ['prod(2, 3, 4)', 'prod([2, 3, 4])', 'prod([2, 5; 4, 3])'],
  seealso: ['max', 'mean', 'min', 'median', 'min', 'std', 'sum', 'variance']
};