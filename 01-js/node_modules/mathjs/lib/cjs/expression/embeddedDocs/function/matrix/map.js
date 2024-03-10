"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapDocs = void 0;
var mapDocs = exports.mapDocs = {
  name: 'map',
  category: 'Matrix',
  syntax: ['map(x, callback)'],
  description: 'Create a new matrix or array with the results of the callback function executed on each entry of the matrix/array.',
  examples: ['map([1, 2, 3], square)'],
  seealso: ['filter', 'forEach']
};