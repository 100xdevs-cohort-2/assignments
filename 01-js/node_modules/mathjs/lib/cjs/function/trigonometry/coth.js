"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCoth = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'coth';
var dependencies = ['typed', 'BigNumber'];
var createCoth = exports.createCoth = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    _BigNumber = _ref.BigNumber;
  /**
   * Calculate the hyperbolic cotangent of a value,
   * defined as `coth(x) = 1 / tanh(x)`.
   *
   * To avoid confusion with the matrix hyperbolic cotangent, this function
   * does not apply to matrices.
   *
   * Syntax:
   *
   *    math.coth(x)
   *
   * Examples:
   *
   *    // coth(x) = 1 / tanh(x)
   *    math.coth(2)         // returns 1.0373147207275482
   *    1 / math.tanh(2)     // returns 1.0373147207275482
   *
   * See also:
   *
   *    sinh, tanh, cosh
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic cotangent of x
   */
  return typed(name, {
    number: _index.cothNumber,
    Complex: function Complex(x) {
      return x.coth();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x.tanh());
    }
  });
});