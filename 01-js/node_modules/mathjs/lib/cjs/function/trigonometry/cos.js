"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCos = void 0;
var _factory = require("../../utils/factory.js");
var _trigUnit = require("./trigUnit.js");
var name = 'cos';
var dependencies = ['typed'];
var createCos = exports.createCos = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  var trigUnit = (0, _trigUnit.createTrigUnit)({
    typed: typed
  });

  /**
   * Calculate the cosine of a value.
   *
   * To avoid confusion with the matrix cosine, this function does not
   * apply to matrices.
   *
   * Syntax:
   *
   *    math.cos(x)
   *
   * Examples:
   *
   *    math.cos(2)                      // returns number -0.4161468365471422
   *    math.cos(math.pi / 4)            // returns number  0.7071067811865475
   *    math.cos(math.unit(180, 'deg'))  // returns number -1
   *    math.cos(math.unit(60, 'deg'))   // returns number  0.5
   *
   *    const angle = 0.2
   *    math.pow(math.sin(angle), 2) + math.pow(math.cos(angle), 2) // returns number ~1
   *
   * See also:
   *
   *    cos, tan
   *
   * @param {number | BigNumber | Complex | Unit} x  Function input
   * @return {number | BigNumber | Complex} Cosine of x
   */
  return typed(name, {
    number: Math.cos,
    'Complex | BigNumber': function ComplexBigNumber(x) {
      return x.cos();
    }
  }, trigUnit);
});