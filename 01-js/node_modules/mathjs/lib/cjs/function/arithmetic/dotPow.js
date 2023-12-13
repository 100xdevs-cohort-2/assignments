"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDotPow = void 0;
var _factory = require("../../utils/factory.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo07xSSf = require("../../type/matrix/utils/matAlgo07xSSf.js");
var _matAlgo11xS0s = require("../../type/matrix/utils/matAlgo11xS0s.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var name = 'dotPow';
var dependencies = ['typed', 'equalScalar', 'matrix', 'pow', 'DenseMatrix', 'concat'];
var createDotPow = exports.createDotPow = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    equalScalar = _ref.equalScalar,
    matrix = _ref.matrix,
    pow = _ref.pow,
    DenseMatrix = _ref.DenseMatrix,
    concat = _ref.concat;
  var matAlgo03xDSf = (0, _matAlgo03xDSf.createMatAlgo03xDSf)({
    typed: typed
  });
  var matAlgo07xSSf = (0, _matAlgo07xSSf.createMatAlgo07xSSf)({
    typed: typed,
    DenseMatrix: DenseMatrix
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
  var powScalarSignatures = {};
  for (var signature in pow.signatures) {
    if (Object.prototype.hasOwnProperty.call(pow.signatures, signature)) {
      if (!signature.includes('Matrix') && !signature.includes('Array')) {
        powScalarSignatures[signature] = pow.signatures[signature];
      }
    }
  }
  var powScalar = typed(powScalarSignatures);

  /**
   * Calculates the power of x to y element wise.
   *
   * Syntax:
   *
   *    math.dotPow(x, y)
   *
   * Examples:
   *
   *    math.dotPow(2, 3)            // returns number 8
   *
   *    const a = [[1, 2], [4, 3]]
   *    math.dotPow(a, 2)            // returns Array [[1, 4], [16, 9]]
   *    math.pow(a, 2)               // returns Array [[9, 8], [16, 17]]
   *
   * See also:
   *
   *    pow, sqrt, multiply
   *
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} x  The base
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} y  The exponent
   * @return {number | BigNumber | Complex | Unit | Array | Matrix}                     The value of `x` to the power `y`
   */
  return typed(name, matrixAlgorithmSuite({
    elop: powScalar,
    SS: matAlgo07xSSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo11xS0s,
    sS: matAlgo12xSfs
  }));
});