"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSize = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var _noop = require("../../utils/noop.js");
var name = 'size';
var dependencies = ['typed', 'config', '?matrix'];
var createSize = exports.createSize = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    matrix = _ref.matrix;
  /**
   * Calculate the size of a matrix or scalar.
   *
   * Syntax:
   *
   *     math.size(x)
   *
   * Examples:
   *
   *     math.size(2.3)                  // returns []
   *     math.size('hello world')        // returns [11]
   *
   *     const A = [[1, 2, 3], [4, 5, 6]]
   *     math.size(A)                    // returns [2, 3]
   *     math.size(math.range(1,6))      // returns [5]
   *
   * See also:
   *
   *     count, resize, squeeze, subset
   *
   * @param {boolean | number | Complex | Unit | string | Array | Matrix} x  A matrix
   * @return {Array | Matrix} A vector with size of `x`.
   */
  return typed(name, {
    Matrix: function Matrix(x) {
      return x.create(x.size());
    },
    Array: _array.arraySize,
    string: function string(x) {
      return config.matrix === 'Array' ? [x.length] : matrix([x.length]);
    },
    'number | Complex | BigNumber | Unit | boolean | null': function numberComplexBigNumberUnitBooleanNull(x) {
      // scalar
      return config.matrix === 'Array' ? [] : matrix ? matrix([]) : (0, _noop.noMatrix)();
    }
  });
});