"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIm = void 0;
var _factory = require("../../utils/factory.js");
var _collection = require("../../utils/collection.js");
var name = 'im';
var dependencies = ['typed'];
var createIm = exports.createIm = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Get the imaginary part of a complex number.
   * For a complex number `a + bi`, the function returns `b`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.im(x)
   *
   * Examples:
   *
   *    const a = math.complex(2, 3)
   *    math.re(a)                     // returns number 2
   *    math.im(a)                     // returns number 3
   *
   *    math.re(math.complex('-5.2i')) // returns number -5.2
   *    math.re(math.complex(2.4))     // returns number 0
   *
   * See also:
   *
   *    re, conj, abs, arg
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x
   *            A complex number or array with complex numbers
   * @return {number | BigNumber | Array | Matrix} The imaginary part of x
   */
  return typed(name, {
    number: function number() {
      return 0;
    },
    'BigNumber | Fraction': function BigNumberFraction(x) {
      return x.mul(0);
    },
    Complex: function Complex(x) {
      return x.im;
    },
    'Array | Matrix': typed.referToSelf(function (self) {
      return function (x) {
        return (0, _collection.deepMap)(x, self);
      };
    })
  });
});