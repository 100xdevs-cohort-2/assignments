"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSubtractScalar = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'subtractScalar';
var dependencies = ['typed'];
var createSubtractScalar = exports.createSubtractScalar = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Subtract two scalar values, `x - y`.
   * This function is meant for internal use: it is used by the public function
   * `subtract`
   *
   * This function does not support collections (Array or Matrix).
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit} x   First value
   * @param  {number | BigNumber | Fraction | Complex} y          Second value to be subtracted from `x`
   * @return {number | BigNumber | Fraction | Complex | Unit}     Difference of `x` and `y`
   * @private
   */
  return typed(name, {
    'number, number': _index.subtractNumber,
    'Complex, Complex': function ComplexComplex(x, y) {
      return x.sub(y);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.minus(y);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.sub(y);
    },
    'Unit, Unit': typed.referToSelf(function (self) {
      return function (x, y) {
        if (x.value === null || x.value === undefined) {
          throw new Error('Parameter x contains a unit with undefined value');
        }
        if (y.value === null || y.value === undefined) {
          throw new Error('Parameter y contains a unit with undefined value');
        }
        if (!x.equalBase(y)) throw new Error('Units do not match');
        var res = x.clone();
        res.value = typed.find(self, [res.valueType(), y.valueType()])(res.value, y.value);
        res.fixPrefix = false;
        return res;
      };
    })
  });
});