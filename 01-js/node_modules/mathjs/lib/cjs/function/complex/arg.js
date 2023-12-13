"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createArg = void 0;
var _factory = require("../../utils/factory.js");
var _collection = require("../../utils/collection.js");
var name = 'arg';
var dependencies = ['typed'];
var createArg = exports.createArg = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Compute the argument of a complex value.
   * For a complex number `a + bi`, the argument is computed as `atan2(b, a)`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.arg(x)
   *
   * Examples:
   *
   *    const a = math.complex(2, 2)
   *    math.arg(a) / math.pi          // returns number 0.25
   *
   *    const b = math.complex('2 + 3i')
   *    math.arg(b)                    // returns number 0.982793723247329
   *    math.atan2(3, 2)               // returns number 0.982793723247329
   *
   * See also:
   *
   *    re, im, conj, abs
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x
   *            A complex number or array with complex numbers
   * @return {number | BigNumber | Array | Matrix} The argument of x
   */
  return typed(name, {
    number: function number(x) {
      return Math.atan2(0, x);
    },
    BigNumber: function BigNumber(x) {
      return x.constructor.atan2(0, x);
    },
    Complex: function Complex(x) {
      return x.arg();
    },
    // TODO: implement BigNumber support for function arg

    'Array | Matrix': typed.referToSelf(function (self) {
      return function (x) {
        return (0, _collection.deepMap)(x, self);
      };
    })
  });
});