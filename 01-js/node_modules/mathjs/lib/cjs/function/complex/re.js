"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRe = void 0;
var _factory = require("../../utils/factory.js");
var _collection = require("../../utils/collection.js");
var name = 're';
var dependencies = ['typed'];
var createRe = exports.createRe = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Get the real part of a complex number.
   * For a complex number `a + bi`, the function returns `a`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.re(x)
   *
   * Examples:
   *
   *    const a = math.complex(2, 3)
   *    math.re(a)                     // returns number 2
   *    math.im(a)                     // returns number 3
   *
   *    math.re(math.complex('-5.2i')) // returns number 0
   *    math.re(math.complex(2.4))     // returns number 2.4
   *
   * See also:
   *
   *    im, conj, abs, arg
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x
   *            A complex number or array with complex numbers
   * @return {number | BigNumber | Array | Matrix} The real part of x
   */
  return typed(name, {
    'number | BigNumber | Fraction': function numberBigNumberFraction(x) {
      return x;
    },
    Complex: function Complex(x) {
      return x.re;
    },
    'Array | Matrix': typed.referToSelf(function (self) {
      return function (x) {
        return (0, _collection.deepMap)(x, self);
      };
    })
  });
});