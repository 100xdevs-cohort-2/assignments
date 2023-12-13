"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBitNot = void 0;
var _bitwise = require("../../utils/bignumber/bitwise.js");
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'bitNot';
var dependencies = ['typed'];
var createBitNot = exports.createBitNot = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Bitwise NOT value, `~x`.
   * For matrices, the function is evaluated element wise.
   * For units, the function is evaluated on the best prefix base.
   *
   * Syntax:
   *
   *    math.bitNot(x)
   *
   * Examples:
   *
   *    math.bitNot(1)               // returns number -2
   *
   *    math.bitNot([2, -3, 4])      // returns Array [-3, 2, -5]
   *
   * See also:
   *
   *    bitAnd, bitOr, bitXor, leftShift, rightArithShift, rightLogShift
   *
   * @param  {number | BigNumber | Array | Matrix} x Value to not
   * @return {number | BigNumber | Array | Matrix} NOT of `x`
   */
  return typed(name, {
    number: _index.bitNotNumber,
    BigNumber: _bitwise.bitNotBigNumber,
    'Array | Matrix': typed.referToSelf(function (self) {
      return function (x) {
        return (0, _collection.deepMap)(x, self);
      };
    })
  });
});