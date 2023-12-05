"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simplifyCoreDocs = void 0;
var simplifyCoreDocs = exports.simplifyCoreDocs = {
  name: 'simplifyCore',
  category: 'Algebra',
  syntax: ['simplifyCore(node)'],
  description: 'Perform simple one-pass simplifications on an expression tree.',
  examples: ['simplifyCore(parse("0*x"))', 'simplifyCore(parse("(x+0)*2"))'],
  seealso: ['simplify', 'simplifyConstant', 'evaluate']
};