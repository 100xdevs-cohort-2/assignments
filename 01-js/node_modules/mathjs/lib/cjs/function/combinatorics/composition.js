"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComposition = void 0;
var _factory = require("../../utils/factory.js");
var name = 'composition';
var dependencies = ['typed', 'addScalar', 'combinations', 'isNegative', 'isPositive', 'isInteger', 'larger'];
var createComposition = exports.createComposition = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    addScalar = _ref.addScalar,
    combinations = _ref.combinations,
    isPositive = _ref.isPositive,
    isNegative = _ref.isNegative,
    isInteger = _ref.isInteger,
    larger = _ref.larger;
  /**
   * The composition counts of n into k parts.
   *
   * composition only takes integer arguments.
   * The following condition must be enforced: k <= n.
   *
   * Syntax:
   *
   *   math.composition(n, k)
   *
   * Examples:
   *
   *    math.composition(5, 3) // returns 6
   *
   * See also:
   *
   *    combinations
   *
   * @param {Number | BigNumber} n    Total number of objects in the set
   * @param {Number | BigNumber} k    Number of objects in the subset
   * @return {Number | BigNumber}     Returns the composition counts of n into k parts.
   */
  return typed(name, {
    'number | BigNumber, number | BigNumber': function numberBigNumberNumberBigNumber(n, k) {
      if (!isInteger(n) || !isPositive(n) || !isInteger(k) || !isPositive(k)) {
        throw new TypeError('Positive integer value expected in function composition');
      } else if (larger(k, n)) {
        throw new TypeError('k must be less than or equal to n in function composition');
      }
      return combinations(addScalar(n, -1), addScalar(k, -1));
    }
  });
});