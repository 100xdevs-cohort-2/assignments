"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSquare = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'square';
var dependencies = ['typed'];
var createSquare = exports.createSquare = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Compute the square of a value, `x * x`.
   * To avoid confusion with multiplying a square matrix by itself,
   * this function does not apply to matrices. If you wish to square
   * every element of a matrix, see the examples.
   *
   * Syntax:
   *
   *    math.square(x)
   *
   * Examples:
   *
   *    math.square(2)           // returns number 4
   *    math.square(3)           // returns number 9
   *    math.pow(3, 2)           // returns number 9
   *    math.multiply(3, 3)      // returns number 9
   *
   *    math.map([1, 2, 3, 4], math.square)  // returns Array [1, 4, 9, 16]
   *
   * See also:
   *
   *    multiply, cube, sqrt, pow
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x
   *            Number for which to calculate the square
   * @return {number | BigNumber | Fraction | Complex | Unit}
   *            Squared value
   */
  return typed(name, {
    number: _index.squareNumber,
    Complex: function Complex(x) {
      return x.mul(x);
    },
    BigNumber: function BigNumber(x) {
      return x.times(x);
    },
    Fraction: function Fraction(x) {
      return x.mul(x);
    },
    Unit: function Unit(x) {
      return x.pow(2);
    }
  });
});