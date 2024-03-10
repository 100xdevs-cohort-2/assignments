"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSech = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'sech';
var dependencies = ['typed', 'BigNumber'];
var createSech = exports.createSech = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    _BigNumber = _ref.BigNumber;
  /**
   * Calculate the hyperbolic secant of a value,
   * defined as `sech(x) = 1 / cosh(x)`.
   *
   * To avoid confusion with the matrix hyperbolic secant, this function does
   * not apply to matrices.
   *
   * Syntax:
   *
   *    math.sech(x)
   *
   * Examples:
   *
   *    // sech(x) = 1/ cosh(x)
   *    math.sech(0.5)       // returns 0.886818883970074
   *    1 / math.cosh(0.5)   // returns 0.886818883970074
   *
   * See also:
   *
   *    cosh, csch, coth
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic secant of x
   */
  return typed(name, {
    number: _index.sechNumber,
    Complex: function Complex(x) {
      return x.sech();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x.cosh());
    }
  });
});