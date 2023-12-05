"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAssociativity = getAssociativity;
exports.getOperator = getOperator;
exports.getPrecedence = getPrecedence;
exports.isAssociativeWith = isAssociativeWith;
exports.properties = void 0;
var _object = require("../utils/object.js");
var _is = require("../utils/is.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // list of identifiers of nodes in order of their precedence
// also contains information about left/right associativity
// and which other operator the operator is associative with
// Example:
// addition is associative with addition and subtraction, because:
// (a+b)+c=a+(b+c)
// (a+b)-c=a+(b-c)
//
// postfix operators are left associative, prefix operators
// are right associative
//
// It's also possible to set the following properties:
// latexParens: if set to false, this node doesn't need to be enclosed
//              in parentheses when using LaTeX
// latexLeftParens: if set to false, this !OperatorNode's!
//                  left argument doesn't need to be enclosed
//                  in parentheses
// latexRightParens: the same for the right argument
var properties = exports.properties = [{
  // assignment
  AssignmentNode: {},
  FunctionAssignmentNode: {}
}, {
  // conditional expression
  ConditionalNode: {
    latexLeftParens: false,
    latexRightParens: false,
    latexParens: false
    // conditionals don't need parentheses in LaTeX because
    // they are 2 dimensional
  }
}, {
  // logical or
  'OperatorNode:or': {
    op: 'or',
    associativity: 'left',
    associativeWith: []
  }
}, {
  // logical xor
  'OperatorNode:xor': {
    op: 'xor',
    associativity: 'left',
    associativeWith: []
  }
}, {
  // logical and
  'OperatorNode:and': {
    op: 'and',
    associativity: 'left',
    associativeWith: []
  }
}, {
  // bitwise or
  'OperatorNode:bitOr': {
    op: '|',
    associativity: 'left',
    associativeWith: []
  }
}, {
  // bitwise xor
  'OperatorNode:bitXor': {
    op: '^|',
    associativity: 'left',
    associativeWith: []
  }
}, {
  // bitwise and
  'OperatorNode:bitAnd': {
    op: '&',
    associativity: 'left',
    associativeWith: []
  }
}, {
  // relational operators
  'OperatorNode:equal': {
    op: '==',
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:unequal': {
    op: '!=',
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:smaller': {
    op: '<',
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:larger': {
    op: '>',
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:smallerEq': {
    op: '<=',
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:largerEq': {
    op: '>=',
    associativity: 'left',
    associativeWith: []
  },
  RelationalNode: {
    associativity: 'left',
    associativeWith: []
  }
}, {
  // bitshift operators
  'OperatorNode:leftShift': {
    op: '<<',
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:rightArithShift': {
    op: '>>',
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:rightLogShift': {
    op: '>>>',
    associativity: 'left',
    associativeWith: []
  }
}, {
  // unit conversion
  'OperatorNode:to': {
    op: 'to',
    associativity: 'left',
    associativeWith: []
  }
}, {
  // range
  RangeNode: {}
}, {
  // addition, subtraction
  'OperatorNode:add': {
    op: '+',
    associativity: 'left',
    associativeWith: ['OperatorNode:add', 'OperatorNode:subtract']
  },
  'OperatorNode:subtract': {
    op: '-',
    associativity: 'left',
    associativeWith: []
  }
}, {
  // multiply, divide, modulus
  'OperatorNode:multiply': {
    op: '*',
    associativity: 'left',
    associativeWith: ['OperatorNode:multiply', 'OperatorNode:divide', 'Operator:dotMultiply', 'Operator:dotDivide']
  },
  'OperatorNode:divide': {
    op: '/',
    associativity: 'left',
    associativeWith: [],
    latexLeftParens: false,
    latexRightParens: false,
    latexParens: false
    // fractions don't require parentheses because
    // they're 2 dimensional, so parens aren't needed
    // in LaTeX
  },

  'OperatorNode:dotMultiply': {
    op: '.*',
    associativity: 'left',
    associativeWith: ['OperatorNode:multiply', 'OperatorNode:divide', 'OperatorNode:dotMultiply', 'OperatorNode:doDivide']
  },
  'OperatorNode:dotDivide': {
    op: './',
    associativity: 'left',
    associativeWith: []
  },
  'OperatorNode:mod': {
    op: 'mod',
    associativity: 'left',
    associativeWith: []
  }
}, {
  // Repeat multiplication for implicit multiplication
  'OperatorNode:multiply': {
    associativity: 'left',
    associativeWith: ['OperatorNode:multiply', 'OperatorNode:divide', 'Operator:dotMultiply', 'Operator:dotDivide']
  }
}, {
  // unary prefix operators
  'OperatorNode:unaryPlus': {
    op: '+',
    associativity: 'right'
  },
  'OperatorNode:unaryMinus': {
    op: '-',
    associativity: 'right'
  },
  'OperatorNode:bitNot': {
    op: '~',
    associativity: 'right'
  },
  'OperatorNode:not': {
    op: 'not',
    associativity: 'right'
  }
}, {
  // exponentiation
  'OperatorNode:pow': {
    op: '^',
    associativity: 'right',
    associativeWith: [],
    latexRightParens: false
    // the exponent doesn't need parentheses in
    // LaTeX because it's 2 dimensional
    // (it's on top)
  },

  'OperatorNode:dotPow': {
    op: '.^',
    associativity: 'right',
    associativeWith: []
  }
}, {
  // factorial
  'OperatorNode:factorial': {
    op: '!',
    associativity: 'left'
  }
}, {
  // matrix transpose
  'OperatorNode:ctranspose': {
    op: "'",
    associativity: 'left'
  }
}];

/**
 * Returns the first non-parenthesis internal node, but only
 * when the 'parenthesis' option is unset or auto.
 * @param {Node} _node
 * @param {string} parenthesis
 * @return {Node}
 */
function unwrapParen(_node, parenthesis) {
  if (!parenthesis || parenthesis !== 'auto') return _node;
  var node = _node;
  while ((0, _is.isParenthesisNode)(node)) node = node.content;
  return node;
}

/**
 * Get the precedence of a Node.
 * Higher number for higher precedence, starting with 0.
 * Returns null if the precedence is undefined.
 *
 * @param {Node} _node
 * @param {string} parenthesis
 * @param {string} implicit
 * @param {Node} parent (for determining context for implicit multiplication)
 * @return {number | null}
 */
function getPrecedence(_node, parenthesis, implicit, parent) {
  var node = _node;
  if (parenthesis !== 'keep') {
    // ParenthesisNodes are only ignored when not in 'keep' mode
    node = _node.getContent();
  }
  var identifier = node.getIdentifier();
  var precedence = null;
  for (var i = 0; i < properties.length; i++) {
    if (identifier in properties[i]) {
      precedence = i;
      break;
    }
  }
  // Bump up precedence of implicit multiplication, except when preceded
  // by a "Rule 2" fraction ( [unaryOp]constant / constant )
  if (identifier === 'OperatorNode:multiply' && node.implicit && implicit !== 'show') {
    var leftArg = unwrapParen(node.args[0], parenthesis);
    if (!((0, _is.isConstantNode)(leftArg) && parent && parent.getIdentifier() === 'OperatorNode:divide' && (0, _is.rule2Node)(unwrapParen(parent.args[0], parenthesis))) && !(leftArg.getIdentifier() === 'OperatorNode:divide' && (0, _is.rule2Node)(unwrapParen(leftArg.args[0], parenthesis)) && (0, _is.isConstantNode)(unwrapParen(leftArg.args[1])))) {
      precedence += 1;
    }
  }
  return precedence;
}

/**
 * Get the associativity of an operator (left or right).
 * Returns a string containing 'left' or 'right' or null if
 * the associativity is not defined.
 *
 * @param {Node} _node
 * @param {string} parenthesis
 * @return {string|null}
 * @throws {Error}
 */
function getAssociativity(_node, parenthesis) {
  var node = _node;
  if (parenthesis !== 'keep') {
    // ParenthesisNodes are only ignored when not in 'keep' mode
    node = _node.getContent();
  }
  var identifier = node.getIdentifier();
  var index = getPrecedence(node, parenthesis);
  if (index === null) {
    // node isn't in the list
    return null;
  }
  var property = properties[index][identifier];
  if ((0, _object.hasOwnProperty)(property, 'associativity')) {
    if (property.associativity === 'left') {
      return 'left';
    }
    if (property.associativity === 'right') {
      return 'right';
    }
    // associativity is invalid
    throw Error('\'' + identifier + '\' has the invalid associativity \'' + property.associativity + '\'.');
  }

  // associativity is undefined
  return null;
}

/**
 * Check if an operator is associative with another operator.
 * Returns either true or false or null if not defined.
 *
 * @param {Node} nodeA
 * @param {Node} nodeB
 * @param {string} parenthesis
 * @return {boolean | null}
 */
function isAssociativeWith(nodeA, nodeB, parenthesis) {
  // ParenthesisNodes are only ignored when not in 'keep' mode
  var a = parenthesis !== 'keep' ? nodeA.getContent() : nodeA;
  var b = parenthesis !== 'keep' ? nodeA.getContent() : nodeB;
  var identifierA = a.getIdentifier();
  var identifierB = b.getIdentifier();
  var index = getPrecedence(a, parenthesis);
  if (index === null) {
    // node isn't in the list
    return null;
  }
  var property = properties[index][identifierA];
  if ((0, _object.hasOwnProperty)(property, 'associativeWith') && property.associativeWith instanceof Array) {
    for (var i = 0; i < property.associativeWith.length; i++) {
      if (property.associativeWith[i] === identifierB) {
        return true;
      }
    }
    return false;
  }

  // associativeWith is not defined
  return null;
}

/**
 * Get the operator associated with a function name.
 * Returns a string with the operator symbol, or null if the
 * input is not the name of a function associated with an
 * operator.
 *
 * @param {string} Function name
 * @return {string | null} Associated operator symbol, if any
 */
function getOperator(fn) {
  var identifier = 'OperatorNode:' + fn;
  var _iterator = _createForOfIteratorHelper(properties),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var group = _step.value;
      if (identifier in group) {
        return group[identifier].op;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return null;
}