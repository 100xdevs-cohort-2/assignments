import { factory } from '../../utils/factory.js';
import { acschNumber } from '../../plain/number/index.js';
var name = 'acsch';
var dependencies = ['typed', 'BigNumber'];
export var createAcsch = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    BigNumber: _BigNumber
  } = _ref;
  /**
   * Calculate the hyperbolic arccosecant of a value,
   * defined as `acsch(x) = asinh(1/x) = ln(1/x + sqrt(1/x^2 + 1))`.
   *
   * To avoid confusion with the matrix hyperbolic arccosecant, this function
   * does not apply to matrices.
   *
   * Syntax:
   *
   *    math.acsch(x)
   *
   * Examples:
   *
   *    math.acsch(0.5)       // returns 1.4436354751788103
   *
   * See also:
   *
   *    asech, acoth
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic arccosecant of x
   */
  return typed(name, {
    number: acschNumber,
    Complex: function Complex(x) {
      return x.acsch();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x).asinh();
    }
  });
});