"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLargerNumber = exports.createLarger = void 0;
var _nearlyEqual = require("../../utils/bignumber/nearlyEqual.js");
var _number = require("../../utils/number.js");
var _factory = require("../../utils/factory.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo07xSSf = require("../../type/matrix/utils/matAlgo07xSSf.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _compareUnits = require("./compareUnits.js");
var name = 'larger';
var dependencies = ['typed', 'config', 'matrix', 'DenseMatrix', 'concat'];
var createLarger = exports.createLarger = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    matrix = _ref.matrix,
    DenseMatrix = _ref.DenseMatrix,
    concat = _ref.concat;
  var matAlgo03xDSf = (0, _matAlgo03xDSf.createMatAlgo03xDSf)({
    typed: typed
  });
  var matAlgo07xSSf = (0, _matAlgo07xSSf.createMatAlgo07xSSf)({
    typed: typed,
    DenseMatrix: DenseMatrix
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
   * Test whether value x is larger than y.
   *
   * The function returns true when x is larger than y and the relative
   * difference between x and y is larger than the configured epsilon. The
   * function cannot be used to compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.larger(x, y)
   *
   * Examples:
   *
   *    math.larger(2, 3)             // returns false
   *    math.larger(5, 2 + 2)         // returns true
   *
   *    const a = math.unit('5 cm')
   *    const b = math.unit('2 inch')
   *    math.larger(a, b)             // returns false
   *
   * See also:
   *
   *    equal, unequal, smaller, smallerEq, largerEq, compare
   *
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | Fraction | boolean | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the x is larger than y, else returns false
   */
  return typed(name, createLargerNumber({
    typed: typed,
    config: config
  }), {
    'boolean, boolean': function booleanBoolean(x, y) {
      return x > y;
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return x.gt(y) && !(0, _nearlyEqual.nearlyEqual)(x, y, config.epsilon);
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.compare(y) === 1;
    },
    'Complex, Complex': function ComplexComplex() {
      throw new TypeError('No ordering relation is defined for complex numbers');
    }
  }, compareUnits, matrixAlgorithmSuite({
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createLargerNumber = exports.createLargerNumber = /* #__PURE__ */(0, _factory.factory)(name, ['typed', 'config'], function (_ref2) {
  var typed = _ref2.typed,
    config = _ref2.config;
  return typed(name, {
    'number, number': function numberNumber(x, y) {
      return x > y && !(0, _number.nearlyEqual)(x, y, config.epsilon);
    }
  });
});