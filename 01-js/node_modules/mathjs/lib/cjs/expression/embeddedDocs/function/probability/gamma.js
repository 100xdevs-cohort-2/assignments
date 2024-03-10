"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gammaDocs = void 0;
var gammaDocs = exports.gammaDocs = {
  name: 'gamma',
  category: 'Probability',
  syntax: ['gamma(n)'],
  description: 'Compute the gamma function. For small values, the Lanczos approximation is used, and for large values the extended Stirling approximation.',
  examples: ['gamma(4)', '3!', 'gamma(1/2)', 'sqrt(pi)'],
  seealso: ['factorial']
};