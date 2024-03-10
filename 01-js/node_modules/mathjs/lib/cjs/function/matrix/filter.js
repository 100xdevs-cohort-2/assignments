"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilter = void 0;
var _applyCallback = require("../../utils/applyCallback.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var name = 'filter';
var dependencies = ['typed'];
var createFilter = exports.createFilter = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Filter the items in an array or one dimensional matrix.
   *
   * Syntax:
   *
   *    math.filter(x, test)
   *
   * Examples:
   *
   *    function isPositive (x) {
   *      return x > 0
   *    }
   *    math.filter([6, -2, -1, 4, 3], isPositive) // returns [6, 4, 3]
   *
   *    math.filter(["23", "foo", "100", "55", "bar"], /[0-9]+/) // returns ["23", "100", "55"]
   *
   * See also:
   *
   *    forEach, map, sort
   *
   * @param {Matrix | Array} x    A one dimensional matrix or array to filter
   * @param {Function | RegExp} test
   *        A function or regular expression to test items.
   *        All entries for which `test` returns true are returned.
   *        When `test` is a function, it is invoked with three parameters:
   *        the value of the element, the index of the element, and the
   *        matrix/array being traversed. The function must return a boolean.
   * @return {Matrix | Array} Returns the filtered matrix.
   */
  return typed('filter', {
    'Array, function': _filterCallback,
    'Matrix, function': function MatrixFunction(x, test) {
      return x.create(_filterCallback(x.toArray(), test));
    },
    'Array, RegExp': _array.filterRegExp,
    'Matrix, RegExp': function MatrixRegExp(x, test) {
      return x.create((0, _array.filterRegExp)(x.toArray(), test));
    }
  });
});

/**
 * Filter values in a callback given a callback function
 * @param {Array} x
 * @param {Function} callback
 * @return {Array} Returns the filtered array
 * @private
 */
function _filterCallback(x, callback) {
  return (0, _array.filter)(x, function (value, index, array) {
    // invoke the callback function with the right number of arguments
    return (0, _applyCallback.applyCallback)(callback, value, [index], array, 'filter');
  });
}