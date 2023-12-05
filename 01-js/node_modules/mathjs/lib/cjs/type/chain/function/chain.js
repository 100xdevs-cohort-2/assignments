"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChain = void 0;
var _factory = require("../../../utils/factory.js");
var name = 'chain';
var dependencies = ['typed', 'Chain'];
var createChain = exports.createChain = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    Chain = _ref.Chain;
  /**
   * Wrap any value in a chain, allowing to perform chained operations on
   * the value.
   *
   * All methods available in the math.js library can be called upon the chain,
   * and then will be evaluated with the value itself as first argument.
   * The chain can be closed by executing `chain.done()`, which returns
   * the final value.
   *
   * The chain has a number of special functions:
   *
   * - `done()`     Finalize the chain and return the chain's value.
   * - `valueOf()`  The same as `done()`
   * - `toString()` Executes `math.format()` onto the chain's value, returning
   *                a string representation of the value.
   *
   * Syntax:
   *
   *    math.chain(value)
   *
   * Examples:
   *
   *     math.chain(3)
   *         .add(4)
   *         .subtract(2)
   *         .done()     // 5
   *
   *     math.chain( [[1, 2], [3, 4]] )
   *         .subset(math.index(0, 0), 8)
   *         .multiply(3)
   *         .done()     // [[24, 6], [9, 12]]
   *
   * @param {*} [value]   A value of any type on which to start a chained operation.
   * @return {math.Chain} The created chain
   */
  return typed(name, {
    '': function _() {
      return new Chain();
    },
    any: function any(value) {
      return new Chain(value);
    }
  });
});