import { applyCallback } from '../../utils/applyCallback.js';
import { forEach } from '../../utils/array.js';
import { factory } from '../../utils/factory.js';
import { isFunctionAssignmentNode, isSymbolNode } from '../../utils/is.js';
import { compileInlineExpression } from './utils/compileInlineExpression.js';
var name = 'forEach';
var dependencies = ['typed'];
export var createForEachTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed
  } = _ref;
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
      if (isSymbolNode(args[1]) || isFunctionAssignmentNode(args[1])) {
        // a function pointer, like forEach([3, -2, 5], myTestFunction)
        callback = args[1].compile().evaluate(scope);
      } else {
        // an expression like forEach([3, -2, 5], x > 0 ? callback1(x) : callback2(x) )
        callback = compileInlineExpression(args[1], math, scope);
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
          forEach(value, function (child, i) {
            // we create a copy of the index array and append the new index value
            recurse(child, index.concat(i + 1)); // one based index, hence i+1
          });
        } else {
          // invoke the callback function with the right number of arguments
          return applyCallback(callback, value, index, array, 'forEach');
        }
      };
      recurse(array.valueOf(), []); // pass Array
    }
  });

  return forEachTransform;
}, {
  isTransformFunction: true
});