"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFactorial = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var name = 'factorial';
var dependencies = ['typed', 'gamma'];
var createFactorial = exports.createFactorial = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    gamma = _ref.gamma;
  /**
   * Compute the factorial of a value
   *
   * Factorial only supports an integer value as argument.
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.factorial(n)
   *
   * Examples:
   *
   *    math.factorial(5)    // returns 120
   *    math.factorial(3)    // returns 6
   *
   * See also:
   *
   *    combinations, combinationsWithRep, gamma, permutations
   *
   * @param {number | BigNumber | Array | Matrix} n   An integer number
   * @return {number | BigNumber | Array | Matrix}    The factorial of `n`
   */
  return typed(name, {
    number: function number(n) {
      if (n < 0) {
        throw new Error('Value must be non-negative');
      }
      return gamma(n + 1);
    },
    BigNumber: function BigNumber(n) {
      if (n.isNegative()) {
        throw new Error('Value must be non-negative');
      }
      return gamma(n.plus(1));
    },
    'Array | Matrix': typed.referToSelf(function (self) {
      return function (n) {
        return (0, _collection.deepMap)(n, self);
      };
    })
  });
});