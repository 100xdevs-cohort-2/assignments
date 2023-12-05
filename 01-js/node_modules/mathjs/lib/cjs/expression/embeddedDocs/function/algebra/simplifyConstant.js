"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simplifyConstantDocs = void 0;
var simplifyConstantDocs = exports.simplifyConstantDocs = {
  name: 'simplifyConstant',
  category: 'Algebra',
  syntax: ['simplifyConstant(expr)', 'simplifyConstant(expr, options)'],
  description: 'Replace constant subexpressions of node with their values.',
  examples: ['simplifyConstant("(3-3)*x")', 'simplifyConstant(parse("z-cos(tau/8)"))'],
  seealso: ['simplify', 'simplifyCore', 'evaluate']
};