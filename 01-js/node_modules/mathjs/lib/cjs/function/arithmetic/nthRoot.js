"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNthRootNumber = exports.createNthRoot = void 0;
var _factory = require("../../utils/factory.js");
var _matAlgo01xDSid = require("../../type/matrix/utils/matAlgo01xDSid.js");
var _matAlgo02xDS = require("../../type/matrix/utils/matAlgo02xDS0.js");
var _matAlgo06xS0S = require("../../type/matrix/utils/matAlgo06xS0S0.js");
var _matAlgo11xS0s = require("../../type/matrix/utils/matAlgo11xS0s.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _index = require("../../plain/number/index.js");
var name = 'nthRoot';
var dependencies = ['typed', 'matrix', 'equalScalar', 'BigNumber', 'concat'];
var createNthRoot = exports.createNthRoot = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    equalScalar = _ref.equalScalar,
    _BigNumber = _ref.BigNumber,
    concat = _ref.concat;
  var matAlgo01xDSid = (0, _matAlgo01xDSid.createMatAlgo01xDSid)({
    typed: typed
  });
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
  var matrixAlgorithmSuite = (0, _matrixAlgorithmSuite.createMatrixAlgorithmSuite)({
    typed: typed,
    matrix: matrix,
    concat: concat
  });

  /**
   * Calculate the nth root of a value.
   * The principal nth root of a positive real number A, is the positive real
   * solution of the equation
   *
   *     x^root = A
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *     math.nthRoot(a)
   *     math.nthRoot(a, root)
   *
   * Examples:
   *
   *     math.nthRoot(9, 2)    // returns 3 (since 3^2 == 9)
   *     math.sqrt(9)          // returns 3 (since 3^2 == 9)
   *     math.nthRoot(64, 3)   // returns 4 (since 4^3 == 64)
   *
   * See also:
   *
   *     sqrt, pow
   *
   * @param {number | BigNumber | Array | Matrix | Complex} a
   *              Value for which to calculate the nth root
   * @param {number | BigNumber} [root=2]    The root.
   * @return {number | Complex | Array | Matrix} Returns the nth root of `a`
   */
  function complexErr() {
    throw new Error('Complex number not supported in function nthRoot. Use nthRoots instead.');
  }
  return typed(name, {
    number: _index.nthRootNumber,
    'number, number': _index.nthRootNumber,
    BigNumber: function BigNumber(x) {
      return _bigNthRoot(x, new _BigNumber(2));
    },
    'BigNumber, BigNumber': _bigNthRoot,
    Complex: complexErr,
    'Complex, number': complexErr,
    Array: typed.referTo('DenseMatrix,number', function (selfDn) {
      return function (x) {
        return selfDn(matrix(x), 2).valueOf();
      };
    }),
    DenseMatrix: typed.referTo('DenseMatrix,number', function (selfDn) {
      return function (x) {
        return selfDn(x, 2);
      };
    }),
    SparseMatrix: typed.referTo('SparseMatrix,number', function (selfSn) {
      return function (x) {
        return selfSn(x, 2);
      };
    }),
    'SparseMatrix, SparseMatrix': typed.referToSelf(function (self) {
      return function (x, y) {
        // density must be one (no zeros in matrix)
        if (y.density() === 1) {
          // sparse + sparse
          return matAlgo06xS0S0(x, y, self);
        } else {
          // throw exception
          throw new Error('Root must be non-zero');
        }
      };
    }),
    'DenseMatrix, SparseMatrix': typed.referToSelf(function (self) {
      return function (x, y) {
        // density must be one (no zeros in matrix)
        if (y.density() === 1) {
          // dense + sparse
          return matAlgo01xDSid(x, y, self, false);
        } else {
          // throw exception
          throw new Error('Root must be non-zero');
        }
      };
    }),
    'Array, SparseMatrix': typed.referTo('DenseMatrix,SparseMatrix', function (selfDS) {
      return function (x, y) {
        return selfDS(matrix(x), y);
      };
    }),
    'number | BigNumber, SparseMatrix': typed.referToSelf(function (self) {
      return function (x, y) {
        // density must be one (no zeros in matrix)
        if (y.density() === 1) {
          // sparse - scalar
          return matAlgo11xS0s(y, x, self, true);
        } else {
          // throw exception
          throw new Error('Root must be non-zero');
        }
      };
    })
  }, matrixAlgorithmSuite({
    scalar: 'number | BigNumber',
    SD: matAlgo02xDS0,
    Ss: matAlgo11xS0s,
    sS: false
  }));

  /**
   * Calculate the nth root of a for BigNumbers, solve x^root == a
   * https://rosettacode.org/wiki/Nth_root#JavaScript
   * @param {BigNumber} a
   * @param {BigNumber} root
   * @private
   */
  function _bigNthRoot(a, root) {
    var precision = _BigNumber.precision;
    var Big = _BigNumber.clone({
      precision: precision + 2
    });
    var zero = new _BigNumber(0);
    var one = new Big(1);
    var inv = root.isNegative();
    if (inv) {
      root = root.neg();
    }
    if (root.isZero()) {
      throw new Error('Root must be non-zero');
    }
    if (a.isNegative() && !root.abs().mod(2).equals(1)) {
      throw new Error('Root must be odd when a is negative.');
    }

    // edge cases zero and infinity
    if (a.isZero()) {
      return inv ? new Big(Infinity) : 0;
    }
    if (!a.isFinite()) {
      return inv ? zero : a;
    }
    var x = a.abs().pow(one.div(root));
    // If a < 0, we require that root is an odd integer,
    // so (-1) ^ (1/root) = -1
    x = a.isNeg() ? x.neg() : x;
    return new _BigNumber((inv ? one.div(x) : x).toPrecision(precision));
  }
});
var createNthRootNumber = exports.createNthRootNumber = /* #__PURE__ */(0, _factory.factory)(name, ['typed'], function (_ref2) {
  var typed = _ref2.typed;
  return typed(name, {
    number: _index.nthRootNumber,
    'number, number': _index.nthRootNumber
  });
});