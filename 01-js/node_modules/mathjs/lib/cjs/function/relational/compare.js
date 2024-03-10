"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCompareNumber = exports.createCompare = void 0;
var _nearlyEqual = require("../../utils/bignumber/nearlyEqual.js");
var _number = require("../../utils/number.js");
var _factory = require("../../utils/factory.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matAlgo05xSfSf = require("../../type/matrix/utils/matAlgo05xSfSf.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _compareUnits = require("./compareUnits.js");
var name = 'compare';
var dependencies = ['typed', 'config', 'matrix', 'equalScalar', 'BigNumber', 'Fraction', 'DenseMatrix', 'concat'];
var createCompare = exports.createCompare = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    equalScalar = _ref.equalScalar,
    matrix = _ref.matrix,
    BigNumber = _ref.BigNumber,
    Fraction = _ref.Fraction,
    DenseMatrix = _ref.DenseMatrix,
    concat = _ref.concat;
  var matAlgo03xDSf = (0, _matAlgo03xDSf.createMatAlgo03xDSf)({
    typed: typed
  });
  var matAlgo05xSfSf = (0, _matAlgo05xSfSf.createMatAlgo05xSfSf)({
    typed: typed,
    equalScalar: equalScalar
  });
  var matAlgo12xSfs = (0, _matAlgo12xSfs.createMatAlgo12xSfs)({
    typed: typed,
    DenseMatrix: DenseMatrix
  });
  var matrixAlgorithmSuite = (0, _matrixAlgorithmSuite.createMatrixAlgorithmSuite)({
    typed: typed,
    matrix: matrix,
    concat: concat
  });
  var compareUnits = (0, _compareUnits.createCompareUnits)({
    typed: typed
  });

  /**
   * Compare two values. Returns 1 when x > y, -1 when x < y, and 0 when x == y.
   *
   * x and y are considered equal when the relative difference between x and y
   * is smaller than the configured epsilon. The function cannot be used to
   * compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.compare(x, y)
   *
   * Examples:
   *
   *    math.compare(6, 1)           // returns 1
   *    math.compare(2, 3)           // returns -1
   *    math.compare(7, 7)           // returns 0
   *    math.compare('10', '2')      // returns 1
   *    math.compare('1000', '1e3')  // returns 0
   *
   *    const a = math.unit('5 cm')
   *    const b = math.unit('40 mm')
   *    math.compare(a, b)           // returns 1
   *
   *    math.compare(2, [1, 2, 3])   // returns [1, 0, -1]
   *
   * See also:
   *
   *    equal, unequal, smaller, smallerEq, larger, largerEq, compareNatural, compareText
   *
   * @param  {number | BigNumber | Fraction | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | Fraction | Unit | string | Array | Matrix} y Second value to compare
   * @return {number | BigNumber | Fraction | Array | Matrix} Returns the result of the comparison:
   *                                                          1 when x > y, -1 when x < y, and 0 when x == y.
   */
  return typed(name, createCompareNumber({
    typed: typed,
    config: config
  }), {
    'boolean, boolean': function booleanBoolean(x, y) {
      return x === y ? 0 : x > y ? 1 : -1;
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return (0, _nearlyEqual.nearlyEqual)(x, y, config.epsilon) ? new BigNumber(0) : new BigNumber(x.cmp(y));
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return new Fraction(x.compare(y));
    },
    'Complex, Complex': function ComplexComplex() {
      throw new TypeError('No ordering relation is defined for complex numbers');
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createCompareNumber = exports.createCompareNumber = /* #__PURE__ */(0, _factory.factory)(name, ['typed', 'config'], function (_ref2) {
  var typed = _ref2.typed,
    config = _ref2.config;
  return typed(name, {
    'number, number': function numberNumber(x, y) {
      return (0, _number.nearlyEqual)(x, y, config.epsilon) ? 0 : x > y ? 1 : -1;
    }
  });
});