"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAcot = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var name = 'acot';
var dependencies = ['typed', 'BigNumber'];
var createAcot = exports.createAcot = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    _BigNumber = _ref.BigNumber;
  /**
   * Calculate the inverse cotangent of a value, defined as `acot(x) = atan(1/x)`.
   *
   * To avoid confusion with the matrix arccotanget, this function does not
   * apply to matrices.
   *
   * Syntax:
   *
   *    math.acot(x)
   *
   * Examples:
   *
   *    math.acot(0.5)           // returns number 1.1071487177940904
   *    math.acot(2)             // returns number 0.4636476090008061
   *    math.acot(math.cot(1.5)) // returns number 1.5
   *
   * See also:
   *
   *    cot, atan
   *
   * @param {number | BigNumber| Complex} x   Function input
   * @return {number | BigNumber| Complex} The arc cotangent of x
   */
  return typed(name, {
    number: _index.acotNumber,
    Complex: function Complex(x) {
      return x.acot();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x).atan();
    }
  });
});