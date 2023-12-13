"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createForEach = void 0;
var _applyCallback = require("../../utils/applyCallback.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var name = 'forEach';
var dependencies = ['typed'];
var createForEach = exports.createForEach = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Iterate over all elements of a matrix/array, and executes the given callback function.
   *
   * Syntax:
   *
   *    math.forEach(x, callback)
   *
   * Examples:
   *
   *    math.forEach([1, 2, 3], function(value) {
   *      console.log(value)
   *    })
   *    // outputs 1, 2, 3
   *
   * See also:
   *
   *    filter, map, sort
   *
   * @param {Matrix | Array} x    The matrix to iterate on.
   * @param {Function} callback   The callback function is invoked with three
   *                              parameters: the value of the element, the index
   *                              of the element, and the Matrix/array being traversed.
   */
  return typed(name, {
    'Array, function': _forEach,
    'Matrix, function': function MatrixFunction(x, callback) {
      x.forEach(callback);
    }
  });
});

/**
 * forEach for a multidimensional array
 * @param {Array} array
 * @param {Function} callback
 * @private
 */
function _forEach(array, callback) {
  var recurse = function recurse(value, index) {
    if (Array.isArray(value)) {
      (0, _array.forEach)(value, function (child, i) {
        // we create a copy of the index array and append the new index value
        recurse(child, index.concat(i));
      });
    } else {
      // invoke the callback function with the right number of arguments
      return (0, _applyCallback.applyCallback)(callback, value, index, array, 'forEach');
    }
  };
  recurse(array, []);
}