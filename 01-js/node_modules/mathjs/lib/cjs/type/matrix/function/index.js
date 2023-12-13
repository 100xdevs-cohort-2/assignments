"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIndex = void 0;
var _is = require("../../../utils/is.js");
var _factory = require("../../../utils/factory.js");
var name = 'index';
var dependencies = ['typed', 'Index'];
var createIndex = exports.createIndex = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    Index = _ref.Index;
  /**
   * Create an index. An Index can store ranges having start, step, and end
   * for multiple dimensions.
   * Matrix.get, Matrix.set, and math.subset accept an Index as input.
   *
   * Syntax:
   *
   *     math.index(range1, range2, ...)
   *
   * Where each range can be any of:
   *
   * - A number
   * - A string for getting/setting an object property
   * - An instance of `Range`
   * - A one-dimensional Array or a Matrix with numbers or booleans
   *
   * Indexes must be zero-based, integer numbers.
   *
   * Examples:
   *
   *    const b = [1, 2, 3, 4, 5]
   *    math.subset(b, math.index([1, 2, 3]))                         // returns [2, 3, 4]
   *    math.subset(b, math.index([false, true, true, true, false]))  // returns [2, 3, 4]
   *
   *    const a = math.matrix([[1, 2], [3, 4]])
   *    a.subset(math.index(0, 1))             // returns 2
   *    a.subset(math.index(0, [false, true])) // returns 2
   *
   * See also:
   *
   *    bignumber, boolean, complex, matrix, number, string, unit
   *
   * @param {...*} ranges   Zero or more ranges or numbers.
   * @return {Index}        Returns the created index
   */
  return typed(name, {
    '...number | string | BigNumber | Range | Array | Matrix': function numberStringBigNumberRangeArrayMatrix(args) {
      var ranges = args.map(function (arg) {
        if ((0, _is.isBigNumber)(arg)) {
          return arg.toNumber(); // convert BigNumber to Number
        } else if ((0, _is.isArray)(arg) || (0, _is.isMatrix)(arg)) {
          return arg.map(function (elem) {
            // convert BigNumber to Number
            return (0, _is.isBigNumber)(elem) ? elem.toNumber() : elem;
          });
        } else {
          return arg;
        }
      });
      var res = new Index();
      Index.apply(res, ranges);
      return res;
    }
  });
});