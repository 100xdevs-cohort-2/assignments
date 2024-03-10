"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSec = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var _trigUnit = require("./trigUnit.js");
var name = 'sec';
var dependencies = ['typed', 'BigNumber'];
var createSec = exports.createSec = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    _BigNumber = _ref.BigNumber;
  var trigUnit = (0, _trigUnit.createTrigUnit)({
    typed: typed
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
    number: _index.secNumber,
    Complex: function Complex(x) {
      return x.sec();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x.cos());
    }
  }, trigUnit);
});