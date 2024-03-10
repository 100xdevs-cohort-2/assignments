"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCsc = void 0;
var _factory = require("../../utils/factory.js");
var _index = require("../../plain/number/index.js");
var _trigUnit = require("./trigUnit.js");
var name = 'csc';
var dependencies = ['typed', 'BigNumber'];
var createCsc = exports.createCsc = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    _BigNumber = _ref.BigNumber;
  var trigUnit = (0, _trigUnit.createTrigUnit)({
    typed: typed
  });

  /**
   * Calculate the cosecant of a value, defined as `csc(x) = 1/sin(x)`.
   *
   * To avoid confusion with the matrix cosecant, this function does not
   * apply to matrices.
   *
   * Syntax:
   *
   *    math.csc(x)
   *
   * Examples:
   *
   *    math.csc(2)      // returns number 1.099750170294617
   *    1 / math.sin(2)  // returns number 1.099750170294617
   *
   * See also:
   *
   *    sin, sec, cot
   *
   * @param {number | BigNumber | Complex | Unit} x  Function input
   * @return {number | BigNumber | Complex} Cosecant of x
   */
  return typed(name, {
    number: _index.cscNumber,
    Complex: function Complex(x) {
      return x.csc();
    },
    BigNumber: function BigNumber(x) {
      return new _BigNumber(1).div(x.sin());
    }
  }, trigUnit);
});