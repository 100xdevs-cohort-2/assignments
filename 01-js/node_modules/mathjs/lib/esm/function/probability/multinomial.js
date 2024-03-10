import { deepForEach } from '../../utils/collection.js';
import { factory } from '../../utils/factory.js';
var name = 'multinomial';
var dependencies = ['typed', 'add', 'divide', 'multiply', 'factorial', 'isInteger', 'isPositive'];
export var createMultinomial = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    add,
    divide,
    multiply,
    factorial,
    isInteger,
    isPositive
  } = _ref;
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
      deepForEach(a, function (ai) {
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