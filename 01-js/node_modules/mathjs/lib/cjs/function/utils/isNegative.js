"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIsNegative = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'isNegative';
var dependencies = ['typed'];
var createIsNegative = exports.createIsNegative = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Test whether a value is negative: smaller than zero.
   * The function supports types `number`, `BigNumber`, `Fraction`, and `Unit`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isNegative(x)
   *
   * Examples:
   *
   *    math.isNegative(3)                     // returns false
   *    math.isNegative(-2)                    // returns true
   *    math.isNegative(0)                     // returns false
   *    math.isNegative(-0)                    // returns false
   *    math.isNegative(math.bignumber(2))     // returns false
   *    math.isNegative(math.fraction(-2, 5))  // returns true
   *    math.isNegative('-2')                  // returns true
   *    math.isNegative([2, 0, -3])            // returns [false, false, true]
   *
   * See also:
   *
   *    isNumeric, isPositive, isZero, isInteger
   *
   * @param {number | BigNumber | Fraction | Unit | Array | Matrix} x  Value to be tested
   * @return {boolean}  Returns true when `x` is larger than zero.
   *                    Throws an error in case of an unknown data type.
   */
  return typed(name, {
    number: _index.isNegativeNumber,
    BigNumber: function BigNumber(x) {
      return x.isNeg() && !x.isZero() && !x.isNaN();
    },
    Fraction: function Fraction(x) {
      return x.s < 0; // It's enough to decide on the sign
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