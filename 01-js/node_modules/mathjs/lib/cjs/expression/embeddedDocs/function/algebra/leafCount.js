"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.leafCountDocs = void 0;
var leafCountDocs = exports.leafCountDocs = {
  name: 'leafCount',
  category: 'Algebra',
  syntax: ['leafCount(expr)'],
  description: 'Computes the number of leaves in the parse tree of the given expression',
  examples: ['leafCount("e^(i*pi)-1")', 'leafCount(parse("{a: 22/7, b: 10^(1/2)}"))'],
  seealso: ['simplify']
};