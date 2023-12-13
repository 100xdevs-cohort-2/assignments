import { factory } from '../../utils/factory.js';
import { createMatAlgo01xDSid } from '../../type/matrix/utils/matAlgo01xDSid.js';
import { createMatAlgo04xSidSid } from '../../type/matrix/utils/matAlgo04xSidSid.js';
import { createMatAlgo10xSids } from '../../type/matrix/utils/matAlgo10xSids.js';
import { createMatrixAlgorithmSuite } from '../../type/matrix/utils/matrixAlgorithmSuite.js';
var name = 'add';
var dependencies = ['typed', 'matrix', 'addScalar', 'equalScalar', 'DenseMatrix', 'SparseMatrix', 'concat'];
export var createAdd = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    addScalar,
    equalScalar,
    DenseMatrix,
    SparseMatrix,
    concat
  } = _ref;
  var matAlgo01xDSid = createMatAlgo01xDSid({
    typed
  });
  var matAlgo04xSidSid = createMatAlgo04xSidSid({
    typed,
    equalScalar
  });
  var matAlgo10xSids = createMatAlgo10xSids({
    typed,
    DenseMatrix
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
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
    'any, any, ...any': typed.referToSelf(self => (x, y, rest) => {
      var result = self(x, y);
      for (var i = 0; i < rest.length; i++) {
        result = self(result, rest[i]);
      }
      return result;
    })
  }, matrixAlgorithmSuite({
    elop: addScalar,
    DS: matAlgo01xDSid,
    SS: matAlgo04xSidSid,
    Ss: matAlgo10xSids
  }));
});