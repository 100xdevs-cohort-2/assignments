"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compositionDocs = void 0;
var compositionDocs = exports.compositionDocs = {
  name: 'composition',
  category: 'Combinatorics',
  syntax: ['composition(n, k)'],
  description: 'The composition counts of n into k parts. composition only takes integer arguments. The following condition must be enforced: k <= n.',
  examples: ['composition(5, 3)'],
  seealso: ['combinations']
};