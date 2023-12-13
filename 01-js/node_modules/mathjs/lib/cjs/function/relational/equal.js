"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEqualNumber = exports.createEqual = void 0;
var _factory = require("../../utils/factory.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo07xSSf = require("../../type/matrix/utils/matAlgo07xSSf.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var name = 'equal';
var dependencies = ['typed', 'matrix', 'equalScalar', 'DenseMatrix', 'concat'];
var createEqual = exports.createEqual = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    equalScalar = _ref.equalScalar,
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

  /**
   * Test whether two values are equal.
   *
   * The function tests whether the relative difference between x and y is
   * smaller than the configured epsilon. The function cannot be used to
   * compare values smaller than approximately 2.22e-16.
   *
   * For matrices, the function is evaluated element wise.
   * In case of complex numbers, x.re must equal y.re, and x.im must equal y.im.
   *
   * Values `null` and `undefined` are compared strictly, thus `null` is only
   * equal to `null` and nothing else, and `undefined` is only equal to
   * `undefined` and nothing else. Strings are compared by their numerical value.
   *
   * Syntax:
   *
   *    math.equal(x, y)
   *
   * Examples:
   *
   *    math.equal(2 + 2, 3)         // returns false
   *    math.equal(2 + 2, 4)         // returns true
   *
   *    const a = math.unit('50 cm')
   *    const b = math.unit('5 m')
   *    math.equal(a, b)             // returns true
   *
   *    const c = [2, 5, 1]
   *    const d = [2, 7, 1]
   *
   *    math.equal(c, d)             // returns [true, false, true]
   *    math.deepEqual(c, d)         // returns false
   *
   *    math.equal("1000", "1e3")    // returns true
   *    math.equal(0, null)          // returns false
   *
   * See also:
   *
   *    unequal, smaller, smallerEq, larger, largerEq, compare, deepEqual, equalText
   *
   * @param  {number | BigNumber | boolean | Complex | Unit | string | Array | Matrix} x First value to compare
   * @param  {number | BigNumber | boolean | Complex | Unit | string | Array | Matrix} y Second value to compare
   * @return {boolean | Array | Matrix} Returns true when the compared values are equal, else returns false
   */
  return typed(name, createEqualNumber({
    typed: typed,
    equalScalar: equalScalar
  }), matrixAlgorithmSuite({
    elop: equalScalar,
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});
var createEqualNumber = exports.createEqualNumber = (0, _factory.factory)(name, ['typed', 'equalScalar'], function (_ref2) {
  var typed = _ref2.typed,
    equalScalar = _ref2.equalScalar;
  return typed(name, {
    'any, any': function anyAny(x, y) {
      // strict equality for null and undefined?
      if (x === null) {
        return y === null;
      }
      if (y === null) {
        return x === null;
      }
      if (x === undefined) {
        return y === undefined;
      }
      if (y === undefined) {
        return x === undefined;
      }
      return equalScalar(x, y);
    }
  });
});