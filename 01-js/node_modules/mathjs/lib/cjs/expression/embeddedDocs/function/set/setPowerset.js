"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setPowersetDocs = void 0;
var setPowersetDocs = exports.setPowersetDocs = {
  name: 'setPowerset',
  category: 'Set',
  syntax: ['setPowerset(set)'],
  description: 'Create the powerset of a (multi)set: the powerset contains very possible subsets of a (multi)set. A multi-dimension array will be converted to a single-dimension array before the operation.',
  examples: ['setPowerset([1, 2, 3])'],
  seealso: ['setCartesian']
};