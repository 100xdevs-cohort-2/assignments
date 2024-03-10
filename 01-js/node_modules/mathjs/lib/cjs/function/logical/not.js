"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNot = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'not';
var dependencies = ['typed'];
var createNot = exports.createNot = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Logical `not`. Flips boolean value of a given parameter.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.not(x)
   *
   * Examples:
   *
   *    math.not(2)      // returns false
   *    math.not(0)      // returns true
   *    math.not(true)   // returns false
   *
   *    a = [2, -7, 0]
   *    math.not(a)      // returns [false, false, true]
   *
   * See also:
   *
   *    and, or, xor
   *
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} x First value to check
   * @return {boolean | Array | Matrix}
   *            Returns true when input is a zero or empty value.
   */
  return typed(name, {
    'null | undefined': function nullUndefined() {
      return true;
    },
    number: _index.notNumber,
    Complex: function Complex(x) {
      return x.re === 0 && x.im === 0;
    },
    BigNumber: function BigNumber(x) {
      return x.isZero() || x.isNaN();
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