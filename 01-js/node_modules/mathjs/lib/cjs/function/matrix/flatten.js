"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFlatten = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var name = 'flatten';
var dependencies = ['typed', 'matrix'];
var createFlatten = exports.createFlatten = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix;
  /**
   * Flatten a multidimensional matrix into a single dimensional matrix.
   * A new matrix is returned, the original matrix is left untouched.
   *
   * Syntax:
   *
   *    math.flatten(x)
   *
   * Examples:
   *
   *    math.flatten([[1,2], [3,4]])   // returns [1, 2, 3, 4]
   *
   * See also:
   *
   *    concat, resize, size, squeeze
   *
   * @param {Matrix | Array} x   Matrix to be flattened
   * @return {Matrix | Array} Returns the flattened matrix
   */
  return typed(name, {
    Array: function Array(x) {
      return (0, _array.flatten)(x);
    },
    Matrix: function Matrix(x) {
      var flat = (0, _array.flatten)(x.toArray());
      // TODO: return the same matrix type as x (Dense or Sparse Matrix)
      return matrix(flat);
    }
  });
});