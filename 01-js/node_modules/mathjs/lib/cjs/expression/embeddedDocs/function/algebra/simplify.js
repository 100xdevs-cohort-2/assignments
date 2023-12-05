"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simplifyDocs = void 0;
var simplifyDocs = exports.simplifyDocs = {
  name: 'simplify',
  category: 'Algebra',
  syntax: ['simplify(expr)', 'simplify(expr, rules)'],
  description: 'Simplify an expression tree.',
  examples: ['simplify("3 + 2 / 4")', 'simplify("2x + x")', 'f = parse("x * (x + 2 + x)")', 'simplified = simplify(f)', 'simplified.evaluate({x: 2})'],
  seealso: ['simplifyCore', 'derivative', 'evaluate', 'parse', 'rationalize', 'resolve']
};