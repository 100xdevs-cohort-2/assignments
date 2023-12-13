"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isConstantExpression = isConstantExpression;
Object.defineProperty(exports, "isConstantNode", {
  enumerable: true,
  get: function get() {
    return _is.isConstantNode;
  }
});
exports.isNumericNode = isNumericNode;
Object.defineProperty(exports, "isVariableNode", {
  enumerable: true,
  get: function get() {
    return _is.isSymbolNode;
  }
});
var _is = require("../../../utils/is.js");
function isNumericNode(x) {
  return (0, _is.isConstantNode)(x) || (0, _is.isOperatorNode)(x) && x.isUnary() && (0, _is.isConstantNode)(x.args[0]);
}
function isConstantExpression(x) {
  if ((0, _is.isConstantNode)(x)) {
    // Basic Constant types
    return true;
  }
  if (((0, _is.isFunctionNode)(x) || (0, _is.isOperatorNode)(x)) && x.args.every(isConstantExpression)) {
    // Can be constant depending on arguments
    return true;
  }
  if ((0, _is.isParenthesisNode)(x) && isConstantExpression(x.content)) {
    // Parenthesis are transparent
    return true;
  }
  return false; // Probably missing some edge cases
}