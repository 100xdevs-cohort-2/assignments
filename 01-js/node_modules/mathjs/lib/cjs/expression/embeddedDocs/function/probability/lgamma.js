"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lgammaDocs = void 0;
var lgammaDocs = exports.lgammaDocs = {
  name: 'lgamma',
  category: 'Probability',
  syntax: ['lgamma(n)'],
  description: 'Logarithm of the gamma function for real, positive numbers and complex numbers, ' + 'using Lanczos approximation for numbers and Stirling series for complex numbers.',
  examples: ['lgamma(4)', 'lgamma(1/2)', 'lgamma(i)', 'lgamma(complex(1.1, 2))'],
  seealso: ['gamma']
};