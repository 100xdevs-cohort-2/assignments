import { factory } from '../../utils/factory.js';
var name = 'sqrt';
var dependencies = ['config', 'typed', 'Complex'];
export var createSqrt = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    config,
    typed,
    Complex
  } = _ref;
  /**
   * Calculate the square root of a value.
   *
   * For matrices, if you want the matrix square root of a square matrix,
   * use the `sqrtm` function. If you wish to apply `sqrt` elementwise to
   * a matrix M, use `math.map(M, math.sqrt)`.
   *
   * Syntax:
   *
   *    math.sqrt(x)
   *
   * Examples:
   *
   *    math.sqrt(25)                // returns 5
   *    math.square(5)               // returns 25
   *    math.sqrt(-4)                // returns Complex 2i
   *
   * See also:
   *
   *    square, multiply, cube, cbrt, sqrtm
   *
   * @param {number | BigNumber | Complex | Unit} x
   *            Value for which to calculate the square root.
   * @return {number | BigNumber | Complex | Unit}
   *            Returns the square root of `x`
   */
  return typed('sqrt', {
    number: _sqrtNumber,
    Complex: function Complex(x) {
      return x.sqrt();
    },
    BigNumber: function BigNumber(x) {
      if (!x.isNegative() || config.predictable) {
        return x.sqrt();
      } else {
        // negative value -> downgrade to number to do complex value computation
        return _sqrtNumber(x.toNumber());
      }
    },
    Unit: function Unit(x) {
      // Someday will work for complex units when they are implemented
      return x.pow(0.5);
    }
  });

  /**
   * Calculate sqrt for a number
   * @param {number} x
   * @returns {number | Complex} Returns the square root of x
   * @private
   */
  function _sqrtNumber(x) {
    if (isNaN(x)) {
      return NaN;
    } else if (x >= 0 || config.predictable) {
      return Math.sqrt(x);
    } else {
      return new Complex(x, 0).sqrt();
    }
  }
});