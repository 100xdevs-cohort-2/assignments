"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTanh = void 0;
var _factory = require("../../utils/factory.js");
var _number = require("../../utils/number.js");
var name = 'tanh';
var dependencies = ['typed'];
var createTanh = exports.createTanh = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Calculate the hyperbolic tangent of a value,
   * defined as `tanh(x) = (exp(2 * x) - 1) / (exp(2 * x) + 1)`.
   *
   * To avoid confusion with matrix hyperbolic tangent, this function does
   * not apply to matrices.
   *
   * Syntax:
   *
   *    math.tanh(x)
   *
   * Examples:
   *
   *    // tanh(x) = sinh(x) / cosh(x) = 1 / coth(x)
   *    math.tanh(0.5)                   // returns 0.46211715726000974
   *    math.sinh(0.5) / math.cosh(0.5)  // returns 0.46211715726000974
   *    1 / math.coth(0.5)               // returns 0.46211715726000974
   *
   * See also:
   *
   *    sinh, cosh, coth
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic tangent of x
   */
  return typed('tanh', {
    number: _number.tanh,
    'Complex | BigNumber': function ComplexBigNumber(x) {
      return x.tanh();
    }
  });
});