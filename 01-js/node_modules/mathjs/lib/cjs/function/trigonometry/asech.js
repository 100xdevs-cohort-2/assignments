"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAsech = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'asech';
var dependencies = ['typed', 'config', 'Complex', 'BigNumber'];
var createAsech = exports.createAsech = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    Complex = _ref.Complex,
    _BigNumber = _ref.BigNumber;
  /**
   * Calculate the hyperbolic arcsecant of a value,
   * defined as `asech(x) = acosh(1/x) = ln(sqrt(1/x^2 - 1) + 1/x)`.
   *
   * To avoid confusion with the matrix hyperbolic arcsecant, this function
   * does not apply to matrices.
   *
   * Syntax:
   *
   *    math.asech(x)
   *
   * Examples:
   *
   *    math.asech(0.5)       // returns 1.3169578969248166
   *
   * See also:
   *
   *    acsch, acoth
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic arcsecant of x
   */
  return typed(name, {
    number: function number(x) {
      if (x <= 1 && x >= -1 || config.predictable) {
        var xInv = 1 / x;
        if (xInv > 0 || config.predictable) {
          return (0, _index.asechNumber)(x);
        }
        var ret = Math.sqrt(xInv * xInv - 1);
        return new Complex(Math.log(ret - xInv), Math.PI);
      }
      return new Complex(x, 0).asech();
    },
    Complex: function Complex(x) {
      return x.asech();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x).acosh();
    }
  });
});