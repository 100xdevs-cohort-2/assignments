import { factory } from '../../utils/factory.js';
import { secNumber } from '../../plain/number/index.js';
import { createTrigUnit } from './trigUnit.js';
var name = 'sec';
var dependencies = ['typed', 'BigNumber'];
export var createSec = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    BigNumber: _BigNumber
  } = _ref;
  var trigUnit = createTrigUnit({
    typed
  });

  /**
   * Calculate the secant of a value, defined as `sec(x) = 1/cos(x)`.
   *
   * To avoid confusion with the matrix secant, this function does not
   * apply to matrices.
   *
   * Syntax:
   *
   *    math.sec(x)
   *
   * Examples:
   *
   *    math.sec(2)      // returns number -2.4029979617223822
   *    1 / math.cos(2)  // returns number -2.4029979617223822
   *
   * See also:
   *
   *    cos, csc, cot
   *
   * @param {number | BigNumber | Complex | Unit} x  Function input
   * @return {number | BigNumber | Complex} Secant of x
   */
  return typed(name, {
    number: secNumber,
    Complex: x => x.sec(),
    BigNumber: x => new _BigNumber(1).div(x.cos())
  }, trigUnit);
});