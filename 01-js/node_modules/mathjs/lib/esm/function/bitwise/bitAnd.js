import { bitAndBigNumber } from '../../utils/bignumber/bitwise.js';
import { createMatAlgo02xDS0 } from '../../type/matrix/utils/matAlgo02xDS0.js';
import { createMatAlgo11xS0s } from '../../type/matrix/utils/matAlgo11xS0s.js';
import { createMatAlgo06xS0S0 } from '../../type/matrix/utils/matAlgo06xS0S0.js';
import { factory } from '../../utils/factory.js';
import { createMatrixAlgorithmSuite } from '../../type/matrix/utils/matrixAlgorithmSuite.js';
import { bitAndNumber } from '../../plain/number/index.js';
var name = 'bitAnd';
var dependencies = ['typed', 'matrix', 'equalScalar', 'concat'];
export var createBitAnd = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    equalScalar,
    concat
  } = _ref;
  var matAlgo02xDS0 = createMatAlgo02xDS0({
    typed,
    equalScalar
  });
  var matAlgo06xS0S0 = createMatAlgo06xS0S0({
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
   * Bitwise AND two values, `x & y`.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.bitAnd(x, y)
   *
   * Examples:
   *
   *    math.bitAnd(53, 131)               // returns number 1
   *
   *    math.bitAnd([1, 12, 31], 42)       // returns Array [0, 8, 10]
   *
   * See also:
   *
   *    bitNot, bitOr, bitXor, leftShift, rightArithShift, rightLogShift
   *
   * @param  {number | BigNumber | Array | Matrix} x First value to and
   * @param  {number | BigNumber | Array | Matrix} y Second value to and
   * @return {number | BigNumber | Array | Matrix} AND of `x` and `y`
   */
  return typed(name, {
    'number, number': bitAndNumber,
    'BigNumber, BigNumber': bitAndBigNumber
  }, matrixAlgorithmSuite({
    SS: matAlgo06xS0S0,
    DS: matAlgo02xDS0,
    Ss: matAlgo11xS0s
  }));
});