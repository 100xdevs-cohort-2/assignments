"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMultinomial = void 0;
var _collection = require("../../utils/collection.js");
var _factory = require("../../utils/factory.js");
var name = 'multinomial';
var dependencies = ['typed', 'add', 'divide', 'multiply', 'factorial', 'isInteger', 'isPositive'];
var createMultinomial = exports.createMultinomial = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    add = _ref.add,
    divide = _ref.divide,
    multiply = _ref.multiply,
    factorial = _ref.factorial,
    isInteger = _ref.isInteger,
    isPositive = _ref.isPositive;
  /**
   * Multinomial Coefficients compute the number of ways of picking a1, a2, ..., ai unordered outcomes from `n` possibilities.
   *
   * multinomial takes one array of integers as an argument.
   * The following condition must be enforced: every ai <= 0
   *
   * Syntax:
   *
   *     math.multinomial(a) // a is an array type
   *
   * Examples:
   *
   *    math.multinomial([1,2,1]) // returns 12
   *
   * See also:
   *
   *    combinations, factorial
   *
   * @param {number[] | BigNumber[]} a    Integer numbers of objects in the subset
   * @return {Number | BigNumber}         Multinomial coefficient.
   */
  return typed(name, {
    'Array | Matrix': function ArrayMatrix(a) {
      var sum = 0;
      var denom = 1;
      (0, _collection.deepForEach)(a, function (ai) {
        if (!isInteger(ai) || !isPositive(ai)) {
          throw new TypeError('Positive integer value expected in function multinomial');
        }
        sum = add(sum, ai);
        denom = multiply(denom, factorial(ai));
      });
      return divide(factorial(sum), denom);
    }
  });
});