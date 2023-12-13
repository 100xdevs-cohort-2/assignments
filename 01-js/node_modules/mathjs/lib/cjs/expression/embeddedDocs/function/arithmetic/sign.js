"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signDocs = void 0;
var signDocs = exports.signDocs = {
  name: 'sign',
  category: 'Arithmetic',
  syntax: ['sign(x)'],
  description: 'Compute the sign of a value. The sign of a value x is 1 when x>1, -1 when x<0, and 0 when x=0.',
  examples: ['sign(3.5)', 'sign(-4.2)', 'sign(0)'],
  seealso: ['abs']
};