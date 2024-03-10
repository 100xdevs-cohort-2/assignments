"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEqualScalarNumber = exports.createEqualScalar = void 0;
var _nearlyEqual = require("../../utils/bignumber/nearlyEqual.js");
var _number = require("../../utils/number.js");
var _factory = require("../../utils/factory.js");
var _complex = require("../../utils/complex.js");
var _compareUnits = require("./compareUnits.js");
var name = 'equalScalar';
var dependencies = ['typed', 'config'];
var createEqualScalar = exports.createEqualScalar = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config;
  var compareUnits = (0, _compareUnits.createCompareUnits)({
    typed: typed
  });

  /**
   * Test whether two scalar values are nearly equal.
   *
   * @param  {number | BigNumber | Fraction | boolean | Complex | Unit} x   First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Complex} y          Second value to compare
   * @return {boolean}                                                  Returns true when the compared values are equal, else returns false
   * @private
   */
  return typed(name, {
    'boolean, boolean': function booleanBoolean(x, y) {
      return x === y;
    },
    'number, number': function numberNumber(x, y) {
      return (0, _number.nearlyEqual)(x, y, config.epsilon);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.eq(y) || (0, _nearlyEqual.nearlyEqual)(x, y, config.epsilon);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.equals(y);
    },
    'Complex, Complex': function ComplexComplex(x, y) {
      return (0, _complex.complexEquals)(x, y, config.epsilon);
    }
  }, compareUnits);
});
var createEqualScalarNumber = exports.createEqualScalarNumber = (0, _factory.factory)(name, ['typed', 'config'], function (_ref2) {
  var typed = _ref2.typed,
    config = _ref2.config;
  return typed(name, {
    'number, number': function numberNumber(x, y) {
      return (0, _number.nearlyEqual)(x, y, config.epsilon);
    }
  });
});