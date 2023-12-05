"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAcoth = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'acoth';
var dependencies = ['typed', 'config', 'Complex', 'BigNumber'];
var createAcoth = exports.createAcoth = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    Complex = _ref.Complex,
    _BigNumber = _ref.BigNumber;
  /**
   * Calculate the hyperbolic arccotangent of a value,
   * defined as `acoth(x) = atanh(1/x) = (ln((x+1)/x) + ln(x/(x-1))) / 2`.
   *
   * To avoid confusion with the matrix hyperbolic arccotangent, this
   * function does not apply to matrices.
   *
   * Syntax:
   *
   *    math.acoth(x)
   *
   * Examples:
   *
   *    math.acoth(0.5)       // returns 0.8047189562170503
   *
   * See also:
   *
   *    acsch, asech
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic arccotangent of x
   */
  return typed(name, {
    number: function number(x) {
      if (x >= 1 || x <= -1 || config.predictable) {
        return (0, _index.acothNumber)(x);
      }
      return new Complex(x, 0).acoth();
    },
    Complex: function Complex(x) {
      return x.acoth();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x).atanh();
    }
  });
});