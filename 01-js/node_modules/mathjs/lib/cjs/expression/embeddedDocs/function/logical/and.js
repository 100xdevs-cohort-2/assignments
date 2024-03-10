"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.andDocs = void 0;
var andDocs = exports.andDocs = {
  name: 'and',
  category: 'Logical',
  syntax: ['x and y', 'and(x, y)'],
  description: 'Logical and. Test whether two values are both defined with a nonzero/nonempty value.',
  examples: ['true and false', 'true and true', '2 and 4'],
  seealso: ['not', 'or', 'xor']
};