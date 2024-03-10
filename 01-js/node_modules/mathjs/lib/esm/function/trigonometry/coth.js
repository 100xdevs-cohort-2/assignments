import { factory } from '../../utils/factory.js';
import { cothNumber } from '../../plain/number/index.js';
var name = 'coth';
var dependencies = ['typed', 'BigNumber'];
export var createCoth = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    BigNumber: _BigNumber
  } = _ref;
  /**
   * Calculate the hyperbolic cotangent of a value,
   * defined as `coth(x) = 1 / tanh(x)`.
   *
   * To avoid confusion with the matrix hyperbolic cotangent, this function
   * does not apply to matrices.
   *
   * Syntax:
   *
   *    math.coth(x)
   *
   * Examples:
   *
   *    // coth(x) = 1 / tanh(x)
   *    math.coth(2)         // returns 1.0373147207275482
   *    1 / math.tanh(2)     // returns 1.0373147207275482
   *
   * See also:
   *
   *    sinh, tanh, cosh
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic cotangent of x
   */
  return typed(name, {
    number: cothNumber,
    Complex: x => x.coth(),
    BigNumber: x => new _BigNumber(1).div(x.tanh())
  });
});