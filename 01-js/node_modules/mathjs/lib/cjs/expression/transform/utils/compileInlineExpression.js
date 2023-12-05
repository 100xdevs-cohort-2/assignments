"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compileInlineExpression = compileInlineExpression;
var _is = require("../../../utils/is.js");
var _scope = require("../../../utils/scope.js");
/**
 * Compile an inline expression like "x > 0"
 * @param {Node} expression
 * @param {Object} math
 * @param {Object} scope
 * @return {function} Returns a function with one argument which fills in the
 *                    undefined variable (like "x") and evaluates the expression
 */
function compileInlineExpression(expression, math, scope) {
  // find an undefined symbol
  var symbol = expression.filter(function (node) {
    return (0, _is.isSymbolNode)(node) && !(node.name in math) && !scope.has(node.name);
  })[0];
  if (!symbol) {
    throw new Error('No undefined variable found in inline expression "' + expression + '"');
  }

  // create a test function for this equation
  var name = symbol.name; // variable name
  var subScope = (0, _scope.createSubScope)(scope);
  var eq = expression.compile();
  return function inlineExpression(x) {
    subScope.set(name, x);
    return eq.evaluate(subScope);
  };
}