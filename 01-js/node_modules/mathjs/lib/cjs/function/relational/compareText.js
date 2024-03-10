"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCompareTextNumber = exports.createCompareText = void 0;
var _string = require("../../utils/string.js");
var _factory = require("../../utils/factory.js");
var _matrixAlgorithmSuite = require("../../type/matrix/utils/matrixAlgorithmSuite.js");
var name = 'compareText';
var dependencies = ['typed', 'matrix', 'concat'];
_string.compareText.signature = 'any, any';
var createCompareText = exports.createCompareText = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    concat = _ref.concat;
  var matrixAlgorithmSuite = (0, _matrixAlgorithmSuite.createMatrixAlgorithmSuite)({
    typed: typed,
    matrix: matrix,
    concat: concat
  });

  /**
   * Compare two strings lexically. Comparison is case sensitive.
   * Returns 1 when x > y, -1 when x < y, and 0 when x == y.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.compareText(x, y)
   *
   * Examples:
   *
   *    math.compareText('B', 'A')     // returns 1
   *    math.compareText('2', '10')    // returns 1
   *    math.compare('2', '10')        // returns -1
   *    math.compareNatural('2', '10') // returns -1
   *
   *    math.compareText('B', ['A', 'B', 'C']) // returns [1, 0, -1]
   *
   * See also:
   *
   *    equal, equalText, compare, compareNatural
   *
   * @param  {string | Array | DenseMatrix} x First string to compare
   * @param  {string | Array | DenseMatrix} y Second string to compare
   * @return {number | Array | DenseMatrix} Returns the result of the comparison:
   *                                        1 when x > y, -1 when x < y, and 0 when x == y.
   */
  return typed(name, _string.compareText, matrixAlgorithmSuite({
    elop: _string.compareText,
    Ds: true
  }));
});
var createCompareTextNumber = exports.createCompareTextNumber = /* #__PURE__ */(0, _factory.factory)(name, ['typed'], function (_ref2) {
  var typed = _ref2.typed;
  return typed(name, _string.compareText);
});