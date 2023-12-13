"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLog1p = void 0;
var _factory = require("../../utils/factory.js");
var _collection = require("../../utils/collection.js");
var _number = require("../../utils/number.js");
var name = 'log1p';
var dependencies = ['typed', 'config', 'divideScalar', 'log', 'Complex'];
var createLog1p = exports.createLog1p = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    divideScalar = _ref.divideScalar,
    log = _ref.log,
    Complex = _ref.Complex;
  /**
   * Calculate the logarithm of a `value+1`.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.log1p(x)
   *    math.log1p(x, base)
   *
   * Examples:
   *
   *    math.log1p(2.5)                 // returns 1.252762968495368
   *    math.exp(math.log1p(1.4))       // returns 2.4
   *
   *    math.pow(10, 4)                 // returns 10000
   *    math.log1p(9999, 10)            // returns 4
   *    math.log1p(9999) / math.log(10) // returns 4
   *
   * See also:
   *
   *    exp, log, log2, log10
   *
   * @param {number | BigNumber | Complex | Array | Matrix} x
   *            Value for which to calculate the logarithm of `x+1`.
   * @param {number | BigNumber | Complex} [base=e]
   *            Optional base for the logarithm. If not provided, the natural
   *            logarithm of `x+1` is calculated.
   * @return {number | BigNumber | Complex | Array | Matrix}
   *            Returns the logarithm of `x+1`
   */
  return typed(name, {
    number: function number(x) {
      if (x >= -1 || config.predictable) {
        return (0, _number.log1p)(x);
      } else {
        // negative value -> complex value computation
        return _log1pComplex(new Complex(x, 0));
      }
    },
    Complex: _log1pComplex,
    BigNumber: function BigNumber(x) {
      var y = x.plus(1);
      if (!y.isNegative() || config.predictable) {
        return y.ln();
      } else {
        // downgrade to number, return Complex valued result
        return _log1pComplex(new Complex(x.toNumber(), 0));
      }
    },
    'Array | Matrix': typed.referToSelf(function (self) {
      return function (x) {
        return (0, _collection.deepMap)(x, self);
      };
    }),
    'any, any': typed.referToSelf(function (self) {
      return function (x, base) {
        // calculate logarithm for a specified base, log1p(x, base)
        return divideScalar(self(x), log(base));
      };
    })
  });

  /**
   * Calculate the natural logarithm of a complex number + 1
   * @param {Complex} x
   * @returns {Complex}
   * @private
   */
  function _log1pComplex(x) {
    var xRe1p = x.re + 1;
    return new Complex(Math.log(Math.sqrt(xRe1p * xRe1p + x.im * x.im)), Math.atan2(x.im, xRe1p));
  }
});