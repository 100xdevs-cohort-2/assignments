"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createForEachTransform = void 0;
var _applyCallback = require("../../utils/applyCallback.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _compileInlineExpression = require("./utils/compileInlineExpression.js");
var name = 'forEach';
var dependencies = ['typed'];
var createForEachTransform = exports.createForEachTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Attach a transform function to math.forEach
   * Adds a property transform containing the transform function.
   *
   * This transform creates a one-based index instead of a zero-based index
   */
  function forEachTransform(args, math, scope) {
    var x, callback;
    if (args[0]) {
      x = args[0].compile().evaluate(scope);
    }
    if (args[1]) {
      if ((0, _is.isSymbolNode)(args[1]) || (0, _is.isFunctionAssignmentNode)(args[1])) {
        // a function pointer, like forEach([3, -2, 5], myTestFunction)
        callback = args[1].compile().evaluate(scope);
      } else {
        // an expression like forEach([3, -2, 5], x > 0 ? callback1(x) : callback2(x) )
        callback = (0, _compileInlineExpression.compileInlineExpression)(args[1], math, scope);
      }
    }
    return _forEach(x, callback);
  }
  forEachTransform.rawArgs = true;

  // one-based version of forEach
  var _forEach = typed('forEach', {
    'Array | Matrix, function': function ArrayMatrixFunction(array, callback) {
      var recurse = function recurse(value, index) {
        if (Array.isArray(value)) {
          (0, _array.forEach)(value, function (child, i) {
            // we create a copy of the index array and append the new index value
            recurse(child, index.concat(i + 1)); // one based index, hence i+1
          });
        } else {
          // invoke the callback function with the right number of arguments
          return (0, _applyCallback.applyCallback)(callback, value, index, array, 'forEach');
        }
      };
      recurse(array.valueOf(), []); // pass Array
    }
  });

  return forEachTransform;
}, {
  isTransformFunction: true
});