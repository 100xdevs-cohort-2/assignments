"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMapTransform = void 0;
var _applyCallback = require("../../utils/applyCallback.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _compileInlineExpression = require("./utils/compileInlineExpression.js");
var name = 'map';
var dependencies = ['typed'];
var createMapTransform = exports.createMapTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Attach a transform function to math.map
   * Adds a property transform containing the transform function.
   *
   * This transform creates a one-based index instead of a zero-based index
   */
  function mapTransform(args, math, scope) {
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
    return map(x, callback);
  }
  mapTransform.rawArgs = true;

  // one-based version of map function
  var map = typed('map', {
    'Array, function': function ArrayFunction(x, callback) {
      return _map(x, callback, x);
    },
    'Matrix, function': function MatrixFunction(x, callback) {
      return x.create(_map(x.valueOf(), callback, x));
    }
  });
  return mapTransform;
}, {
  isTransformFunction: true
});

/**
 * Map for a multidimensional array. One-based indexes
 * @param {Array} array
 * @param {function} callback
 * @param {Array} orig
 * @return {Array}
 * @private
 */
function _map(array, callback, orig) {
  function recurse(value, index) {
    if (Array.isArray(value)) {
      return (0, _array.map)(value, function (child, i) {
        // we create a copy of the index array and append the new index value
        return recurse(child, index.concat(i + 1)); // one based index, hence i + 1
      });
    } else {
      // invoke the (typed) callback function with the right number of arguments
      return (0, _applyCallback.applyCallback)(callback, value, index, orig, 'map');
    }
  }
  return recurse(array, []);
}