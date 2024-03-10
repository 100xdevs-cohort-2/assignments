"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIsPositive = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'isPositive';
var dependencies = ['typed'];
var createIsPositive = exports.createIsPositive = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Test whether a value is positive: larger than zero.
   * The function supports types `number`, `BigNumber`, `Fraction`, and `Unit`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isPositive(x)
   *
   * Examples:
   *
   *    math.isPositive(3)                     // returns true
   *    math.isPositive(-2)                    // returns false
   *    math.isPositive(0)                     // returns false
   *    math.isPositive(-0)                    // returns false
   *    math.isPositive(0.5)                   // returns true
   *    math.isPositive(math.bignumber(2))     // returns true
   *    math.isPositive(math.fraction(-2, 5))  // returns false
   *    math.isPositive(math.fraction(1, 3))   // returns true
   *    math.isPositive('2')                   // returns true
   *    math.isPositive([2, 0, -3])            // returns [true, false, false]
   *
   * See also:
   *
   *    isNumeric, isZero, isNegative, isInteger
   *
   * @param {number | BigNumber | Fraction | Unit | Array | Matrix} x  Value to be tested
   * @return {boolean}  Returns true when `x` is larger than zero.
   *                    Throws an error in case of an unknown data type.
   */
  return typed(name, {
    number: _index.isPositiveNumber,
    BigNumber: function BigNumber(x) {
      return !x.isNeg() && !x.isZero() && !x.isNaN();
    },
    Fraction: function Fraction(x) {
      return x.s > 0 && x.n > 0;
    },
    Unit: typed.referToSelf(function (self) {
      return function (x) {
        return typed.find(self, x.valueType())(x.value);
      };
    }),
    'Array | Matrix': typed.referToSelf(function (self) {
      return function (x) {
        return (0, _collection.deepMap)(x, self);
      };
    })
  });
});