"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLog2 = void 0;
var _factory = require("../../utils/factory.js");
var _collection = require("../../utils/collection.js");
var _index = require("../../plain/number/index.js");
var name = 'log2';
var dependencies = ['typed', 'config', 'Complex'];
var createLog2 = exports.createLog2 = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    Complex = _ref.Complex;
  /**
   * Calculate the 2-base of a value. This is the same as calculating `log(x, 2)`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.log2(x)
   *
   * Examples:
   *
   *    math.log2(0.03125)           // returns -5
   *    math.log2(16)                // returns 4
   *    math.log2(16) / math.log2(2) // returns 4
   *    math.pow(2, 4)               // returns 16
   *
   * See also:
   *
   *    exp, log, log1p, log10
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x
   *            Value for which to calculate the logarithm.
   * @return {number | BigNumber | Complex | Array | Matrix}
   *            Returns the 2-base logarithm of `x`
   */
  return typed(name, {
    number: function number(x) {
      if (x >= 0 || config.predictable) {
        return (0, _index.log2Number)(x);
      } else {
        // negative value -> complex value computation
        return _log2Complex(new Complex(x, 0));
      }
    },
    Complex: _log2Complex,
    BigNumber: function BigNumber(x) {
      if (!x.isNegative() || config.predictable) {
        return x.log(2);
      } else {
        // downgrade to number, return Complex valued result
        return _log2Complex(new Complex(x.toNumber(), 0));
      }
    },
    'Array | Matrix': typed.referToSelf(function (self) {
      return function (x) {
        return (0, _collection.deepMap)(x, self);
      };
    })
  });

  /**
   * Calculate log2 for a complex value
   * @param {Complex} x
   * @returns {Complex}
   * @private
   */
  function _log2Complex(x) {
    var newX = Math.sqrt(x.re * x.re + x.im * x.im);
    return new Complex(Math.log2 ? Math.log2(newX) : Math.log(newX) / Math.LN2, Math.atan2(x.im, x.re) / Math.LN2);
  }
});