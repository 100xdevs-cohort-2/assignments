"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilterTransform = void 0;
var _applyCallback = require("../../utils/applyCallback.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _compileInlineExpression = require("./utils/compileInlineExpression.js");
var name = 'filter';
var dependencies = ['typed'];
var createFilterTransform = exports.createFilterTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Attach a transform function to math.filter
   * Adds a property transform containing the transform function.
   *
   * This transform adds support for equations as test function for math.filter,
   * so you can do something like 'filter([3, -2, 5], x > 0)'.
   */
  function filterTransform(args, math, scope) {
    var x, callback;
    if (args[0]) {
      x = args[0].compile().evaluate(scope);
    }
    if (args[1]) {
      if ((0, _is.isSymbolNode)(args[1]) || (0, _is.isFunctionAssignmentNode)(args[1])) {
        // a function pointer, like filter([3, -2, 5], myTestFunction)
        callback = args[1].compile().evaluate(scope);
      } else {
        // an expression like filter([3, -2, 5], x > 0)
        callback = (0, _compileInlineExpression.compileInlineExpression)(args[1], math, scope);
      }
    }
    return filter(x, callback);
  }
  filterTransform.rawArgs = true;

  // one based version of function filter
  var filter = typed('filter', {
    'Array, function': _filter,
    'Matrix, function': function MatrixFunction(x, test) {
      return x.create(_filter(x.toArray(), test));
    },
    'Array, RegExp': _array.filterRegExp,
    'Matrix, RegExp': function MatrixRegExp(x, test) {
      return x.create((0, _array.filterRegExp)(x.toArray(), test));
    }
  });
  return filterTransform;
}, {
  isTransformFunction: true
});

/**
 * Filter values in a callback given a callback function
 *
 * !!! Passes a one-based index !!!
 *
 * @param {Array} x
 * @param {Function} callback
 * @return {Array} Returns the filtered array
 * @private
 */
function _filter(x, callback) {
  return (0, _array.filter)(x, function (value, index, array) {
    // invoke the callback function with the right number of arguments
    return (0, _applyCallback.applyCallback)(callback, value, [index + 1], array, 'filter');
  });
}