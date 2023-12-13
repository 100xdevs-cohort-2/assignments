"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCsch = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'csch';
var dependencies = ['typed', 'BigNumber'];
var createCsch = exports.createCsch = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    _BigNumber = _ref.BigNumber;
  /**
   * Calculate the hyperbolic cosecant of a value,
   * defined as `csch(x) = 1 / sinh(x)`.
   *
   * To avoid confusion with the matrix hyperbolic cosecant, this function
   * does not apply to matrices.
   *
   * Syntax:
   *
   *    math.csch(x)
   *
   * Examples:
   *
   *    // csch(x) = 1/ sinh(x)
   *    math.csch(0.5)       // returns 1.9190347513349437
   *    1 / math.sinh(0.5)   // returns 1.9190347513349437
   *
   * See also:
   *
   *    sinh, sech, coth
   *
   * @param {number | BigNumber | Complex} x  Function input
   * @return {number | BigNumber | Complex} Hyperbolic cosecant of x
   */
  return typed(name, {
    number: _index.cschNumber,
    Complex: function Complex(x) {
      return x.csch();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x.sinh());
    }
  });
});