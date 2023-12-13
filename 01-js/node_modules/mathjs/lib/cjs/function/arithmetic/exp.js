"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createExp = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'exp';
var dependencies = ['typed'];
var createExp = exports.createExp = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Calculate the exponential of a value.
   * For matrices, if you want the matrix exponential of square matrix, use
   * the `expm` function; if you want to take the exponential of each element,
   * see the examples.
   *
   * Syntax:
   *
   *    math.exp(x)
   *
   * Examples:
   *
   *    math.exp(2)                  // returns number 7.3890560989306495
   *    math.pow(math.e, 2)          // returns number 7.3890560989306495
   *    math.log(math.exp(2))        // returns number 2
   *
   *    math.map([1, 2, 3], math.exp)
   *    // returns Array [
   *    //   2.718281828459045,
   *    //   7.3890560989306495,
   *    //   20.085536923187668
   *    // ]
   *
   * See also:
   *
   *    expm1, expm, log, pow
   *
   * @param {number | BigNumber | Complex} x  A number to exponentiate
   * @return {number | BigNumber | Complex} Exponential of `x`
   */
  return typed(name, {
    number: _index.expNumber,
    Complex: function Complex(x) {
      return x.exp();
    },
    BigNumber: function BigNumber(x) {
      return x.exp();
    }
  });
});