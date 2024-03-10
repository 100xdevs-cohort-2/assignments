"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCross = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var name = 'cross';
var dependencies = ['typed', 'matrix', 'subtract', 'multiply'];
var createCross = exports.createCross = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    subtract = _ref.subtract,
    multiply = _ref.multiply;
  /**
   * Calculate the cross product for two vectors in three dimensional space.
   * The cross product of `A = [a1, a2, a3]` and `B = [b1, b2, b3]` is defined
   * as:
   *
   *    cross(A, B) = [
   *      a2 * b3 - a3 * b2,
   *      a3 * b1 - a1 * b3,
   *      a1 * b2 - a2 * b1
   *    ]
   *
   * If one of the input vectors has a dimension greater than 1, the output
   * vector will be a 1x3 (2-dimensional) matrix.
   *
   * Syntax:
   *
   *    math.cross(x, y)
   *
   * Examples:
   *
   *    math.cross([1, 1, 0],   [0, 1, 1])       // Returns [1, -1, 1]
   *    math.cross([3, -3, 1],  [4, 9, 2])       // Returns [-15, -2, 39]
   *    math.cross([2, 3, 4],   [5, 6, 7])       // Returns [-3, 6, -3]
   *    math.cross([[1, 2, 3]], [[4], [5], [6]]) // Returns [[-3, 6, -3]]
   *
   * See also:
   *
   *    dot, multiply
   *
   * @param  {Array | Matrix} x   First vector
   * @param  {Array | Matrix} y   Second vector
   * @return {Array | Matrix}     Returns the cross product of `x` and `y`
   */
  return typed(name, {
    'Matrix, Matrix': function MatrixMatrix(x, y) {
      return matrix(_cross(x.toArray(), y.toArray()));
    },
    'Matrix, Array': function MatrixArray(x, y) {
      return matrix(_cross(x.toArray(), y));
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      return matrix(_cross(x, y.toArray()));
    },
    'Array, Array': _cross
  });

  /**
   * Calculate the cross product for two arrays
   * @param {Array} x  First vector
   * @param {Array} y  Second vector
   * @returns {Array} Returns the cross product of x and y
   * @private
   */
  function _cross(x, y) {
    var highestDimension = Math.max((0, _array.arraySize)(x).length, (0, _array.arraySize)(y).length);
    x = (0, _array.squeeze)(x);
    y = (0, _array.squeeze)(y);
    var xSize = (0, _array.arraySize)(x);
    var ySize = (0, _array.arraySize)(y);
    if (xSize.length !== 1 || ySize.length !== 1 || xSize[0] !== 3 || ySize[0] !== 3) {
      throw new RangeError('Vectors with length 3 expected ' + '(Size A = [' + xSize.join(', ') + '], B = [' + ySize.join(', ') + '])');
    }
    var product = [subtract(multiply(x[1], y[2]), multiply(x[2], y[1])), subtract(multiply(x[2], y[0]), multiply(x[0], y[2])), subtract(multiply(x[0], y[1]), multiply(x[1], y[0]))];
    if (highestDimension > 1) {
      return [product];
    } else {
      return product;
    }
  }
});