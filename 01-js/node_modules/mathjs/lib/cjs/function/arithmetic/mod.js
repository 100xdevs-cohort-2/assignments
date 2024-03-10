"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMod = void 0;
var _factory = require("../../utils/factory.js");
var _floor = require("./floor.js");
var _matAlgo02xDS = require("../../type/matrix/utils/matAlgo02xDS0.js");
var _matAlgo03xDSf = require("../../type/matrix/utils/matAlgo03xDSf.js");
var _matAlgo05xSfSf = require("../../type/matrix/utils/matAlgo05xSfSf.js");
var _matAlgo11xS0s = require("../../type/matrix/utils/matAlgo11xS0s.js");
var _matAlgo12xSfs = require("../../type/matrix/utils/matAlgo12xSfs.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var name = 'mod';
var dependencies = ['typed', 'config', 'round', 'matrix', 'equalScalar', 'zeros', 'DenseMatrix', 'concat'];
var createMod = exports.createMod = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    round = _ref.round,
    matrix = _ref.matrix,
    equalScalar = _ref.equalScalar,
    zeros = _ref.zeros,
    DenseMatrix = _ref.DenseMatrix,
    concat = _ref.concat;
  var floor = (0, _floor.createFloor)({
    typed: typed,
    config: config,
    round: round,
    matrix: matrix,
    equalScalar: equalScalar,
    zeros: zeros,
    DenseMatrix: DenseMatrix
  });
  var matAlgo02xDS0 = (0, _matAlgo02xDS.createMatAlgo02xDS0)({
    typed: typed,
    equalScalar: equalScalar
  });
  var matAlgo03xDSf = (0, _matAlgo03xDSf.createMatAlgo03xDSf)({
    typed: typed
  });
  var matAlgo05xSfSf = (0, _matAlgo05xSfSf.createMatAlgo05xSfSf)({
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
   * Calculates the modulus, the remainder of an integer division.
   *
   * For matrices, the function is evaluated element wise.
   *
   * The modulus is defined as:
   *
   *     x - y * floor(x / y)
   *
   * See https://en.wikipedia.org/wiki/Modulo_operation.
   *
   * Syntax:
   *
   *    math.mod(x, y)
   *
   * Examples:
   *
   *    math.mod(8, 3)                // returns 2
   *    math.mod(11, 2)               // returns 1
   *
   *    function isOdd(x) {
   *      return math.mod(x, 2) != 0
   *    }
   *
   *    isOdd(2)                      // returns false
   *    isOdd(3)                      // returns true
   *
   * See also:
   *
   *    divide
   *
   * @param  {number | BigNumber | Fraction | Array | Matrix} x Dividend
   * @param  {number | BigNumber | Fraction | Array | Matrix} y Divisor
   * @return {number | BigNumber | Fraction | Array | Matrix} Returns the remainder of `x` divided by `y`.
   */
  return typed(name, {
    'number, number': _modNumber,
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return y.isZero() ? x : x.sub(y.mul(floor(x.div(y))));
    },
    'Fraction, Fraction': function FractionFraction(x, y) {
      return y.equals(0) ? x : x.sub(y.mul(floor(x.div(y))));
    }
  }, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo03xDSf,
    SD: matAlgo02xDS0,
    Ss: matAlgo11xS0s,
    sS: matAlgo12xSfs
  }));

  /**
  * Calculate the modulus of two numbers
  * @param {number} x
  * @param {number} y
  * @returns {number} res
  * @private
  */
  function _modNumber(x, y) {
    // We don't use JavaScript's % operator here as this doesn't work
    // correctly for x < 0 and x === 0
    // see https://en.wikipedia.org/wiki/Modulo_operation

    // We use mathjs floor to handle errors associated with
    // precision float approximation
    return y === 0 ? x : x - y * floor(x / y);
  }
});