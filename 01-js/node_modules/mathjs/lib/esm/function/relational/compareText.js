import { compareText as _compareText } from '../../utils/string.js';
import { factory } from '../../utils/factory.js';
import { createMatrixAlgorithmSuite } from '../../type/matrix/utils/matrixAlgorithmSuite.js';
var name = 'compareText';
var dependencies = ['typed', 'matrix', 'concat'];
_compareText.signature = 'any, any';
export var createCompareText = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    concat
  } = _ref;
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
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
  return typed(name, _compareText, matrixAlgorithmSuite({
    elop: _compareText,
    Ds: true
  }));
});
export var createCompareTextNumber = /* #__PURE__ */factory(name, ['typed'], _ref2 => {
  var {
    typed
  } = _ref2;
  return typed(name, _compareText);
});