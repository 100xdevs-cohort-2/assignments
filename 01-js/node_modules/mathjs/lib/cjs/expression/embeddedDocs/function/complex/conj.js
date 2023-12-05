"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.conjDocs = void 0;
var conjDocs = exports.conjDocs = {
  name: 'conj',
  category: 'Complex',
  syntax: ['conj(x)'],
  description: 'Compute the complex conjugate of a complex value. If x = a+bi, the complex conjugate is a-bi.',
  examples: ['conj(2 + 3i)', 'conj(2 - 3i)', 'conj(-5.2i)'],
  seealso: ['re', 'im', 'abs', 'arg']
};