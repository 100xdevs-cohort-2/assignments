"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnd = void 0;
var _matAlgo02xDS = require("../../type/matrix/utils/matAlgo02xDS0.js");
var _matAlgo11xS0s = require("../../type/matrix/utils/matAlgo11xS0s.js");
var _matAlgo14xDs = require("../../type/matrix/utils/matAlgo14xDs.js");
var _matAlgo06xS0S = require("../../type/matrix/utils/matAlgo06xS0S0.js");
var _factory = require("../../utils/factory.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _index = require("../../plain/number/index.js");
var name = 'and';
var dependencies = ['typed', 'matrix', 'equalScalar', 'zeros', 'not', 'concat'];
var createAnd = exports.createAnd = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    equalScalar = _ref.equalScalar,
    zeros = _ref.zeros,
    not = _ref.not,
    concat = _ref.concat;
  var matAlgo02xDS0 = (0, _matAlgo02xDS.createMatAlgo02xDS0)({
    typed: typed,
    equalScalar: equalScalar
  });
  var matAlgo06xS0S0 = (0, _matAlgo06xS0S.createMatAlgo06xS0S0)({
    typed: typed,
    equalScalar: equalScalar
  });
  var matAlgo11xS0s = (0, _matAlgo11xS0s.createMatAlgo11xS0s)({
    typed: typed,
    equalScalar: equalScalar
  });
  var matAlgo14xDs = (0, _matAlgo14xDs.createMatAlgo14xDs)({
    typed: typed
  });
  var matrixAlgorithmSuite = (0, _matrixAlgorithmSuite.createMatrixAlgorithmSuite)({
    typed: typed,
    matrix: matrix,
    concat: concat
  });

  /**
   * Logical `and`. Test whether two values are both defined with a nonzero/nonempty value.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.and(x, y)
   *
   * Examples:
   *
   *    math.and(2, 4)   // returns true
   *
   *    a = [2, 0, 0]
   *    b = [3, 7, 0]
   *    c = 0
   *
   *    math.and(a, b)   // returns [true, false, false]
   *    math.and(a, c)   // returns [false, false, false]
   *
   * See also:
   *
   *    not, or, xor
   *
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} x First value to check
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} y Second value to check
   * @return {boolean | Array | Matrix}
   *            Returns true when both inputs are defined with a nonzero/nonempty value.
   */
  return typed(name, {
    'number, number': _index.andNumber,
    'Complex, Complex': function ComplexComplex(x, y) {
      return (x.re !== 0 || x.im !== 0) && (y.re !== 0 || y.im !== 0);
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return !x.isZero() && !y.isZero() && !x.isNaN() && !y.isNaN();
    },
    'Unit, Unit': typed.referToSelf(function (self) {
      return function (x, y) {
        return self(x.value || 0, y.value || 0);
      };
    }),
    'SparseMatrix, any': typed.referToSelf(function (self) {
      return function (x, y) {
        // check scalar
        if (not(y)) {
          // return zero matrix
          return zeros(x.size(), x.storage());
        }
        return matAlgo11xS0s(x, y, self, false);
      };
    }),
    'DenseMatrix, any': typed.referToSelf(function (self) {
      return function (x, y) {
        // check scalar
        if (not(y)) {
          // return zero matrix
          return zeros(x.size(), x.storage());
        }
        return matAlgo14xDs(x, y, self, false);
      };
    }),
    'any, SparseMatrix': typed.referToSelf(function (self) {
      return function (x, y) {
        // check scalar
        if (not(x)) {
          // return zero matrix
          return zeros(x.size(), x.storage());
        }
        return matAlgo11xS0s(y, x, self, true);
      };
    }),
    'any, DenseMatrix': typed.referToSelf(function (self) {
      return function (x, y) {
        // check scalar
        if (not(x)) {
          // return zero matrix
          return zeros(x.size(), x.storage());
        }
        return matAlgo14xDs(y, x, self, true);
      };
    }),
    'Array, any': typed.referToSelf(function (self) {
      return function (x, y) {
        // use matrix implementation
        return self(matrix(x), y).valueOf();
      };
    }),
    'any, Array': typed.referToSelf(function (self) {
      return function (x, y) {
        // use matrix implementation
        return self(x, matrix(y)).valueOf();
      };
    })
  }, matrixAlgorithmSuite({
    SS: matAlgo06xS0S0,
    DS: matAlgo02xDS0
  }));
});