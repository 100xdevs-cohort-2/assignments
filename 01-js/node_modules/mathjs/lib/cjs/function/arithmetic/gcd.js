"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGcd = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _number = require("../../utils/number.js");
var _factory = require("../../utils/factory.js");
var _mod = require("./mod.js");
var _matAlgo01xDSid = require("../../type/matrix/utils/matAlgo01xDSid.js");
var _matAlgo04xSidSid = require("../../type/matrix/utils/matAlgo04xSidSid.js");
var _matAlgo10xSids = require("../../type/matrix/utils/matAlgo10xSids.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var _ArgumentsError = require("../../error/ArgumentsError.js");
var name = 'gcd';
var dependencies = ['typed', 'config', 'round', 'matrix', 'equalScalar', 'zeros', 'BigNumber', 'DenseMatrix', 'concat'];
var gcdTypes = 'number | BigNumber | Fraction | Matrix | Array';
var gcdManyTypesSignature = "".concat(gcdTypes, ", ").concat(gcdTypes, ", ...").concat(gcdTypes);
function is1d(array) {
  return !array.some(function (element) {
    return Array.isArray(element);
  });
}
var createGcd = exports.createGcd = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    config = _ref.config,
    round = _ref.round,
    equalScalar = _ref.equalScalar,
    zeros = _ref.zeros,
    BigNumber = _ref.BigNumber,
    DenseMatrix = _ref.DenseMatrix,
    concat = _ref.concat;
  var mod = (0, _mod.createMod)({
    typed: typed,
    config: config,
    round: round,
    matrix: matrix,
    equalScalar: equalScalar,
    zeros: zeros,
    DenseMatrix: DenseMatrix,
    concat: concat
  });
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
   * Calculate the greatest common divisor for two or more values or arrays.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.gcd(a, b)
   *    math.gcd(a, b, c, ...)
   *
   * Examples:
   *
   *    math.gcd(8, 12)              // returns 4
   *    math.gcd(-4, 6)              // returns 2
   *    math.gcd(25, 15, -10)        // returns 5
   *
   *    math.gcd([8, -4], [12, 6])   // returns [4, 2]
   *
   * See also:
   *
   *    lcm, xgcd
   *
   * @param {... number | BigNumber | Fraction | Array | Matrix} args  Two or more integer numbers
   * @return {number | BigNumber | Fraction | Array | Matrix}                           The greatest common divisor
   */
  return typed(name, {
    'number, number': _gcdNumber,
    'BigNumber, BigNumber': _gcdBigNumber,
    'Fraction, Fraction': function FractionFraction(x, y) {
      return x.gcd(y);
    }
  }, matrixAlgorithmSuite({
    SS: matAlgo04xSidSid,
    DS: matAlgo01xDSid,
    Ss: matAlgo10xSids
  }), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, gcdManyTypesSignature, typed.referToSelf(function (self) {
    return function (a, b, args) {
      var res = self(a, b);
      for (var i = 0; i < args.length; i++) {
        res = self(res, args[i]);
      }
      return res;
    };
  })), "Array", typed.referToSelf(function (self) {
    return function (array) {
      if (array.length === 1 && Array.isArray(array[0]) && is1d(array[0])) {
        return self.apply(void 0, (0, _toConsumableArray2["default"])(array[0]));
      }
      if (is1d(array)) {
        return self.apply(void 0, (0, _toConsumableArray2["default"])(array));
      }
      throw new _ArgumentsError.ArgumentsError('gcd() supports only 1d matrices!');
    };
  })), "Matrix", typed.referToSelf(function (self) {
    return function (matrix) {
      return self(matrix.toArray());
    };
  })));

  /**
  * Calculate gcd for numbers
  * @param {number} a
  * @param {number} b
  * @returns {number} Returns the greatest common denominator of a and b
  * @private
  */
  function _gcdNumber(a, b) {
    if (!(0, _number.isInteger)(a) || !(0, _number.isInteger)(b)) {
      throw new Error('Parameters in function gcd must be integer numbers');
    }

    // https://en.wikipedia.org/wiki/Euclidean_algorithm
    var r;
    while (b !== 0) {
      r = mod(a, b);
      a = b;
      b = r;
    }
    return a < 0 ? -a : a;
  }

  /**
   * Calculate gcd for BigNumbers
   * @param {BigNumber} a
   * @param {BigNumber} b
   * @returns {BigNumber} Returns greatest common denominator of a and b
   * @private
   */
  function _gcdBigNumber(a, b) {
    if (!a.isInt() || !b.isInt()) {
      throw new Error('Parameters in function gcd must be integer numbers');
    }

    // https://en.wikipedia.org/wiki/Euclidean_algorithm
    var zero = new BigNumber(0);
    while (!b.isZero()) {
      var r = mod(a, b);
      a = b;
      b = r;
    }
    return a.lt(zero) ? a.neg() : a;
  }
});