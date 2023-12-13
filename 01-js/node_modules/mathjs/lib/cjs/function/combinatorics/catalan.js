"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCatalan = void 0;
var _factory = require("../../utils/factory.js");
var name = 'catalan';
var dependencies = ['typed', 'addScalar', 'divideScalar', 'multiplyScalar', 'combinations', 'isNegative', 'isInteger'];
var createCatalan = exports.createCatalan = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    addScalar = _ref.addScalar,
    divideScalar = _ref.divideScalar,
    multiplyScalar = _ref.multiplyScalar,
    combinations = _ref.combinations,
    isNegative = _ref.isNegative,
    isInteger = _ref.isInteger;
  /**
   * The Catalan Numbers enumerate combinatorial structures of many different types.
   * catalan only takes integer arguments.
   * The following condition must be enforced: n >= 0
   *
   * Syntax:
   *
   *   math.catalan(n)
   *
   * Examples:
   *
   *    math.catalan(3) // returns 5
   *    math.catalan(8) // returns 1430
   *
   * See also:
   *
   *    bellNumbers
   *
   * @param {Number | BigNumber} n    nth Catalan number
   * @return {Number | BigNumber}     Cn(n)
   */
  return typed(name, {
    'number | BigNumber': function numberBigNumber(n) {
      if (!isInteger(n) || isNegative(n)) {
        throw new TypeError('Non-negative integer value expected in function catalan');
      }
      return divideScalar(combinations(multiplyScalar(n, 2), n), addScalar(n, 1));
    }
  });
});