"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBitOr = void 0;
var _bitwise = require("../../utils/bignumber/bitwise.js");
var _factory = require("../../utils/factory.js");
var _matAlgo10xSids = require("../../type/matrix/utils/matAlgo10xSids.js");
var _matAlgo04xSidSid = require("../../type/matrix/utils/matAlgo04xSidSid.js");
var _matAlgo01xDSid = require("../../type/matrix/utils/matAlgo01xDSid.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _index = require("../../plain/number/index.js");
var name = 'bitOr';
var dependencies = ['typed', 'matrix', 'equalScalar', 'DenseMatrix', 'concat'];
var createBitOr = exports.createBitOr = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    equalScalar = _ref.equalScalar,
    DenseMatrix = _ref.DenseMatrix,
    concat = _ref.concat;
  var matAlgo01xDSid = (0, _matAlgo01xDSid.createMatAlgo01xDSid)({
    typed: typed
  });
  var matAlgo04xSidSid = (0, _matAlgo04xSidSid.createMatAlgo04xSidSid)({
    typed: typed,
    equalScalar: equalScalar
  });
  var matAlgo10xSids = (0, _matAlgo10xSids.createMatAlgo10xSids)({
    typed: typed,
    DenseMatrix: DenseMatrix
  });
  var matrixAlgorithmSuite = (0, _matrixAlgorithmSuite.createMatrixAlgorithmSuite)({
    typed: typed,
    matrix: matrix,
    concat: concat
  });

  /**
   * Bitwise OR two values, `x | y`.
   * For matrices, the function is evaluated element wise.
   * For units, the function is evaluated on the lowest print base.
   *
   * Syntax:
   *
   *    math.bitOr(x, y)
   *
   * Examples:
   *
   *    math.bitOr(1, 2)               // returns number 3
   *
   *    math.bitOr([1, 2, 3], 4)       // returns Array [5, 6, 7]
   *
   * See also:
   *
   *    bitAnd, bitNot, bitXor, leftShift, rightArithShift, rightLogShift
   *
   * @param  {number | BigNumber | Array | Matrix} x First value to or
   * @param  {number | BigNumber | Array | Matrix} y Second value to or
   * @return {number | BigNumber | Array | Matrix} OR of `x` and `y`
   */
  return typed(name, {
    'number, number': _index.bitOrNumber,
    'BigNumber, BigNumber': _bitwise.bitOrBigNumber
  }, matrixAlgorithmSuite({
    SS: matAlgo04xSidSid,
    DS: matAlgo01xDSid,
    Ss: matAlgo10xSids
  }));
});