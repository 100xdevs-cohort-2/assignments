"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAtanh = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'atanh';
var dependencies = ['typed', 'config', 'Complex'];
var createAtanh = exports.createAtanh = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    Complex = _ref.Complex;
  /**
   * Calculate the hyperbolic arctangent of a value,
   * defined as `atanh(x) = ln((1 + x)/(1 - x)) / 2`.
   *
   * To avoid confusion with the matrix hyperbolic arctangent, this function
   * does not apply to matrices.
   *
   * Syntax:
   *
   *    math.atanh(x)
   *
   * Examples:
   *
   *    math.atanh(0.5)       // returns 0.5493061443340549
   *
   * See also:
   *
   *    acosh, asinh
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic arctangent of x
   */
  return typed(name, {
    number: function number(x) {
      if (x <= 1 && x >= -1 || config.predictable) {
        return (0, _index.atanhNumber)(x);
      }
      return new Complex(x, 0).atanh();
    },
    Complex: function Complex(x) {
      return x.atanh();
    },
    BigNumber: function BigNumber(x) {
      return x.atanh();
    }
  });
});