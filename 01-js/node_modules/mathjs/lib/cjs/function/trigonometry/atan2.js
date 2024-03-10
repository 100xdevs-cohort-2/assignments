"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAtan2 = void 0;
var _factory = require("../../utils/factory.js");
var _matAlgo02xDS = require("../../type/matrix/utils/matAlgo02xDS0.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo09xS0Sf = require("../../type/matrix/utils/matAlgo09xS0Sf.js");
var _matAlgo11xS0s = require("../../type/matrix/utils/matAlgo11xS0s.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var name = 'atan2';
var dependencies = ['typed', 'matrix', 'equalScalar', 'BigNumber', 'DenseMatrix', 'concat'];
var createAtan2 = exports.createAtan2 = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    equalScalar = _ref.equalScalar,
    BigNumber = _ref.BigNumber,
    DenseMatrix = _ref.DenseMatrix,
    concat = _ref.concat;
  var matAlgo02xDS0 = (0, _matAlgo02xDS.createMatAlgo02xDS0)({
    typed: typed,
    equalScalar: equalScalar
  });
  var matAlgo03xDSf = (0, _matAlgo03xDSf.createMatAlgo03xDSf)({
    typed: typed
  });
  var matAlgo09xS0Sf = (0, _matAlgo09xS0Sf.createMatAlgo09xS0Sf)({
    typed: typed,
    equalScalar: equalScalar
  });
  var matAlgo11xS0s = (0, _matAlgo11xS0s.createMatAlgo11xS0s)({
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

  /**
   * Calculate the inverse tangent function with two arguments, y/x.
   * By providing two arguments, the right quadrant of the computed angle can be
   * determined.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.atan2(y, x)
   *
   * Examples:
   *
   *    math.atan2(2, 2) / math.pi       // returns number 0.25
   *
   *    const angle = math.unit(60, 'deg') // returns Unit 60 deg
   *    const x = math.cos(angle)
   *    const y = math.sin(angle)
   *
   *    math.atan(2)             // returns number 1.1071487177940904
   *
   * See also:
   *
   *    tan, atan, sin, cos
   *
   * @param {number | Array | Matrix} y  Second dimension
   * @param {number | Array | Matrix} x  First dimension
   * @return {number | Array | Matrix} Four-quadrant inverse tangent
   */
  return typed(name, {
    'number, number': Math.atan2,
    // Complex numbers doesn't seem to have a reasonable implementation of
    // atan2(). Even Matlab removed the support, after they only calculated
    // the atan only on base of the real part of the numbers and ignored
    // the imaginary.

    'BigNumber, BigNumber': function BigNumberBigNumber(y, x) {
      return BigNumber.atan2(y, x);
    }
  }, matrixAlgorithmSuite({
    scalar: 'number | BigNumber',
    SS: matAlgo09xS0Sf,
    DS: matAlgo03xDSf,
    SD: matAlgo02xDS0,
    Ss: matAlgo11xS0s,
    sS: matAlgo12xSfs
  }));
});