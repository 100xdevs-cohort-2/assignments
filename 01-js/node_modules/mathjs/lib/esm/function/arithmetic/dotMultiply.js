import { factory } from '../../utils/factory.js';
import { createMatAlgo02xDS0 } from '../../type/matrix/utils/matAlgo02xDS0.js';
import { createMatAlgo09xS0Sf } from '../../type/matrix/utils/matAlgo09xS0Sf.js';
import { createMatAlgo11xS0s } from '../../type/matrix/utils/matAlgo11xS0s.js';
import { createMatrixAlgorithmSuite } from '../../type/matrix/utils/matrixAlgorithmSuite.js';
var name = 'dotMultiply';
var dependencies = ['typed', 'matrix', 'equalScalar', 'multiplyScalar', 'concat'];
export var createDotMultiply = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    equalScalar,
    multiplyScalar,
    concat
  } = _ref;
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed,
    equalScalar
  });
  var matAlgo09xS0Sf = createMatAlgo09xS0Sf({
    typed,
    equalScalar
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
    typed,
    equalScalar
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });

  /**
   * Multiply two matrices element wise. The function accepts both matrices and
   * scalar values.
   *
   * Syntax:
   *
   *    math.dotMultiply(x, y)
   *
   * Examples:
   *
   *    math.dotMultiply(2, 4) // returns 8
   *
   *    a = [[9, 5], [6, 1]]
   *    b = [[3, 2], [5, 2]]
   *
   *    math.dotMultiply(a, b) // returns [[27, 10], [30, 2]]
   *    math.multiply(a, b)    // returns [[52, 28], [23, 14]]
   *
   * See also:
   *
   *    multiply, divide, dotDivide
   *
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} x Left hand value
   * @param  {number | BigNumber | Fraction | Complex | Unit | Array | Matrix} y Right hand value
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix}                    Multiplication of `x` and `y`
   */
  return typed(name, matrixAlgorithmSuite({
    elop: multiplyScalar,
    SS: matAlgo09xS0Sf,
    DS: matAlgo02xDS0,
    Ss: matAlgo11xS0s
  }));
});