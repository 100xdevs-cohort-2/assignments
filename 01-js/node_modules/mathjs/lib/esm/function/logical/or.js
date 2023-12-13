import { createMatAlgo03xDSf } from '../../type/matrix/utils/matAlgo03xDSf.js';
import { createMatAlgo12xSfs } from '../../type/matrix/utils/matAlgo12xSfs.js';
import { createMatAlgo05xSfSf } from '../../type/matrix/utils/matAlgo05xSfSf.js';
import { factory } from '../../utils/factory.js';
import { createMatrixAlgorithmSuite } from '../../type/matrix/utils/matrixAlgorithmSuite.js';
import { orNumber } from '../../plain/number/index.js';
var name = 'or';
var dependencies = ['typed', 'matrix', 'equalScalar', 'DenseMatrix', 'concat'];
export var createOr = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    equalScalar,
    DenseMatrix,
    concat
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo05xSfSf = createMatAlgo05xSfSf({
    typed,
    equalScalar
  });
  var matAlgo12xSfs = createMatAlgo12xSfs({
    typed,
    DenseMatrix
  });
  var matrixAlgorithmSuite = createMatrixAlgorithmSuite({
    typed,
    matrix,
    concat
  });

  /**
   * Logical `or`. Test if at least one value is defined with a nonzero/nonempty value.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.or(x, y)
   *
   * Examples:
   *
   *    math.or(2, 4)   // returns true
   *
   *    a = [2, 5, 0]
   *    b = [0, 22, 0]
   *    c = 0
   *
   *    math.or(a, b)   // returns [true, true, false]
   *    math.or(b, c)   // returns [false, true, false]
   *
   * See also:
   *
   *    and, not, xor
   *
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} x First value to check
   * @param  {number | BigNumber | Complex | Unit | Array | Matrix} y Second value to check
   * @return {boolean | Array | Matrix}
   *            Returns true when one of the inputs is defined with a nonzero/nonempty value.
   */
  return typed(name, {
    'number, number': orNumber,
    'Complex, Complex': function ComplexComplex(x, y) {
      return x.re !== 0 || x.im !== 0 || y.re !== 0 || y.im !== 0;
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(x, y) {
      return !x.isZero() && !x.isNaN() || !y.isZero() && !y.isNaN();
    },
    'Unit, Unit': typed.referToSelf(self => (x, y) => self(x.value || 0, y.value || 0))
  }, matrixAlgorithmSuite({
    SS: matAlgo05xSfSf,
    DS: matAlgo03xDSf,
    Ss: matAlgo12xSfs
  }));
});