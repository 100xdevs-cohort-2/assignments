"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIsInteger = void 0;
var _collection = require("../../utils/collection.js");
var _number = require("../../utils/number.js");
var _factory = require("../../utils/factory.js");
var name = 'isInteger';
var dependencies = ['typed'];
var createIsInteger = exports.createIsInteger = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Test whether a value is an integer number.
   * The function supports `number`, `BigNumber`, and `Fraction`.
   *
   * The function is evaluated element-wise in case of Array or Matrix input.
   *
   * Syntax:
   *
   *     math.isInteger(x)
   *
   * Examples:
   *
   *    math.isInteger(2)                     // returns true
   *    math.isInteger(0)                     // returns true
   *    math.isInteger(0.5)                   // returns false
   *    math.isInteger(math.bignumber(500))   // returns true
   *    math.isInteger(math.fraction(4))      // returns true
   *    math.isInteger('3')                   // returns true
   *    math.isInteger([3, 0.5, -2])          // returns [true, false, true]
   *    math.isInteger(math.complex('2-4i'))  // throws an error
   *
   * See also:
   *
   *    isNumeric, isPositive, isNegative, isZero
   *
   * @param {number | BigNumber | Fraction | Array | Matrix} x   Value to be tested
   * @return {boolean}  Returns true when `x` contains a numeric, integer value.
   *                    Throws an error in case of an unknown data type.
   */
  return typed(name, {
    number: _number.isInteger,
    // TODO: what to do with isInteger(add(0.1, 0.2))  ?

    BigNumber: function BigNumber(x) {
      return x.isInt();
    },
    Fraction: function Fraction(x) {
      return x.d === 1 && isFinite(x.n);
    },
    'Array | Matrix': typed.referToSelf(function (self) {
      return function (x) {
        return (0, _collection.deepMap)(x, self);
      };
    })
  });
});