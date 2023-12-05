"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCot = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var _trigUnit = require("./trigUnit.js");
var name = 'cot';
var dependencies = ['typed', 'BigNumber'];
var createCot = exports.createCot = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    _BigNumber = _ref.BigNumber;
  var trigUnit = (0, _trigUnit.createTrigUnit)({
    typed: typed
  });

  /**
   * Calculate the cotangent of a value. Defined as `cot(x) = 1 / tan(x)`.
   *
   * To avoid confusion with the matrix cotangent, this function does not
   * apply to matrices.
   *
   * Syntax:
   *
   *    math.cot(x)
   *
   * Examples:
   *
   *    math.cot(2)      // returns number -0.45765755436028577
   *    1 / math.tan(2)  // returns number -0.45765755436028577
   *
   * See also:
   *
   *    tan, sec, csc
   *
   * @param {number | Complex | Unit | Array | Matrix} x  Function input
   * @return {number | Complex | Array | Matrix} Cotangent of x
   */
  return typed(name, {
    number: _index.cotNumber,
    Complex: function Complex(x) {
      return x.cot();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x.tan());
    }
  }, trigUnit);
});