"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setIntersectDocs = void 0;
var setIntersectDocs = exports.setIntersectDocs = {
  name: 'setIntersect',
  category: 'Set',
  syntax: ['setIntersect(set1, set2)'],
  description: 'Create the intersection of two (multi)sets. Multi-dimension arrays will be converted to single-dimension arrays before the operation.',
  examples: ['setIntersect([1, 2, 3, 4], [3, 4, 5, 6])', 'setIntersect([[1, 2], [3, 4]], [[3, 4], [5, 6]])'],
  seealso: ['setUnion', 'setDifference']
};