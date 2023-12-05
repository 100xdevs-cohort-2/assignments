"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCount = void 0;
var _factory = require("../../utils/factory.js");
var name = 'count';
var dependencies = ['typed', 'size', 'prod'];
var createCount = exports.createCount = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    size = _ref.size,
    prod = _ref.prod;
  /**
   * Count the number of elements of a matrix, array or string.
   *
   * Syntax:
   *
   *     math.count(x)
   *
   * Examples:
   *
   *     math.count('hello world')        // returns 11
   *     const A = [[1, 2, 3], [4, 5, 6]]
   *     math.count(A)                    // returns 6
   *     math.count(math.range(1,6))      // returns 5
   *
   * See also:
   *
   *     size
   *
   * @param {string | Array | Matrix} x  A matrix or string
   * @return {number} An integer with the elements in `x`.
   */
  return typed(name, {
    string: function string(x) {
      return x.length;
    },
    'Matrix | Array': function MatrixArray(x) {
      return prod(size(x));
    }
  });
});