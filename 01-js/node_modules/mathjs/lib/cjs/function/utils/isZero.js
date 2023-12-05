"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIsZero = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'isZero';
var dependencies = ['typed'];
var createIsZero = exports.createIsZero = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Test whether a value is zero.
   * The function can check for zero for types `number`, `BigNumber`, `Fraction`,
   * `Complex`, and `Unit`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isZero(x)
   *
   * Examples:
   *
   *    math.isZero(0)                      // returns true
   *    math.isZero(2)                      // returns false
   *    math.isZero(0.5)                    // returns false
   *    math.isZero(math.bignumber(0))      // returns true
   *    math.isZero(math.fraction(0))       // returns true
   *    math.isZero(math.fraction(1,3))     // returns false
   *    math.isZero(math.complex('2 - 4i')) // returns false
   *    math.isZero(math.complex('0i'))     // returns true
   *    math.isZero('0')                    // returns true
   *    math.isZero('2')                    // returns false
   *    math.isZero([2, 0, -3])             // returns [false, true, false]
   *
   * See also:
   *
   *    isNumeric, isPositive, isNegative, isInteger
   *
   * @param {number | BigNumber | Complex | Fraction | Unit | Array | Matrix} x       Value to be tested
   * @return {boolean}  Returns true when `x` is zero.
   *                    Throws an error in case of an unknown data type.
   */
  return typed(name, {
    number: _index.isZeroNumber,
    BigNumber: function BigNumber(x) {
      return x.isZero();
    },
    Complex: function Complex(x) {
      return x.re === 0 && x.im === 0;
    },
    Fraction: function Fraction(x) {
      return x.d === 1 && x.n === 0;
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