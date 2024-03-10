"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMultiplyScalar = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'multiplyScalar';
var dependencies = ['typed'];
var createMultiplyScalar = exports.createMultiplyScalar = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Multiply two scalar values, `x * y`.
   * This function is meant for internal use: it is used by the public function
   * `multiply`
   *
   * This function does not support collections (Array or Matrix).
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x   First value to multiply
   * @param  {number | BigNumber | Fraction | Complex} y          Second value to multiply
   * @return {number | BigNumber | Fraction | Complex | Unit}     Multiplication of `x` and `y`
   * @private
   */
  return typed('multiplyScalar', {
    'number, number': _index.multiplyNumber,
    'Complex, Complex': function ComplexComplex(x, y) {
      return x.mul(y);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.times(y);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.mul(y);
    },
    'number | Fraction | BigNumber | Complex, Unit': function numberFractionBigNumberComplexUnit(x, y) {
      return y.multiply(x);
    },
    'Unit, number | Fraction | BigNumber | Complex | Unit': function UnitNumberFractionBigNumberComplexUnit(x, y) {
      return x.multiply(y);
    }
  });
});