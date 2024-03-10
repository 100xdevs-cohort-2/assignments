import { factory } from '../../utils/factory.js';
import { createMatAlgo03xDSf } from '../../type/matrix/utils/matAlgo03xDSf.js';
import { createMatAlgo07xSSf } from '../../type/matrix/utils/matAlgo07xSSf.js';
import { createMatAlgo11xS0s } from '../../type/matrix/utils/matAlgo11xS0s.js';
import { createMatAlgo12xSfs } from '../../type/matrix/utils/matAlgo12xSfs.js';
import { createMatrixAlgorithmSuite } from '../../type/matrix/utils/matrixAlgorithmSuite.js';
var name = 'dotPow';
var dependencies = ['typed', 'equalScalar', 'matrix', 'pow', 'DenseMatrix', 'concat'];
export var createDotPow = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    equalScalar,
    matrix,
    pow,
    DenseMatrix,
    concat
  } = _ref;
  var matAlgo03xDSf = createMatAlgo03xDSf({
    typed
  });
  var matAlgo07xSSf = createMatAlgo07xSSf({
    typed,
    DenseMatrix
  });
  var matAlgo11xS0s = createMatAlgo11xS0s({
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