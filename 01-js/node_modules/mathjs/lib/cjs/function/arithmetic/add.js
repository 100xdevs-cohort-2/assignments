"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdd = void 0;
var _factory = require("../../utils/factory.js");
var _matAlgo01xDSid = require("../../type/matrix/utils/matAlgo01xDSid.js");
var _matAlgo04xSidSid = require("../../type/matrix/utils/matAlgo04xSidSid.js");
var _matAlgo10xSids = require("../../type/matrix/utils/matAlgo10xSids.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var name = 'add';
var dependencies = ['typed', 'matrix', 'addScalar', 'equalScalar', 'DenseMatrix', 'SparseMatrix', 'concat'];
var createAdd = exports.createAdd = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    addScalar = _ref.addScalar,
    equalScalar = _ref.equalScalar,
    DenseMatrix = _ref.DenseMatrix,
    SparseMatrix = _ref.SparseMatrix,
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
  * Add two or more values, `x + y`.
  * For matrices, the function is evaluated element wise.
  *
  * Syntax:
  *
  *    math.add(x, y)
  *    math.add(x, y, z, ...)
  *
  * Examples:
  *
  *    math.add(2, 3)               // returns number 5
  *    math.add(2, 3, 4)            // returns number 9
  *
  *    const a = math.complex(2, 3)
  *    const b = math.complex(-4, 1)
  *    math.add(a, b)               // returns Complex -2 + 4i
  *
  *    math.add([1, 2, 3], 4)       // returns Array [5, 6, 7]
  *
  *    const c = math.unit('5 cm')
  *    const d = math.unit('2.1 mm')
  *    math.add(c, d)               // returns Unit 52.1 mm
  *
  *    math.add("2.3", "4")         // returns number 6.3
  *
  * See also:
  *
  *    subtract, sum
  *
  * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x First value to add
  * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} y Second value to add
  * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} Sum of `x` and `y`
  */
  return typed(name, {
    'any, any': addScalar,
    'any, any, ...any': typed.referToSelf(function (self) {
      return function (x, y, rest) {
        var result = self(x, y);
        for (var i = 0; i < rest.length; i++) {
          result = self(result, rest[i]);
        }
        return result;
      };
    })
  }, matrixAlgorithmSuite({
    elop: addScalar,
    DS: matAlgo01xDSid,
    SS: matAlgo04xSidSid,
    Ss: matAlgo10xSids
  }));
});