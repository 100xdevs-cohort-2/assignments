"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSetSymDifference = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var name = 'setSymDifference';
var dependencies = ['typed', 'size', 'concat', 'subset', 'setDifference', 'Index'];
var createSetSymDifference = exports.createSetSymDifference = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    size = _ref.size,
    concat = _ref.concat,
    subset = _ref.subset,
    setDifference = _ref.setDifference,
    Index = _ref.Index;
  /**
   * Create the symmetric difference of two (multi)sets.
   * Multi-dimension arrays will be converted to single-dimension arrays before the operation.
   *
   * Syntax:
   *
   *    math.setSymDifference(set1, set2)
   *
   * Examples:
   *
   *    math.setSymDifference([1, 2, 3, 4], [3, 4, 5, 6])            // returns [1, 2, 5, 6]
   *    math.setSymDifference([[1, 2], [3, 4]], [[3, 4], [5, 6]])    // returns [1, 2, 5, 6]
   *
   * See also:
   *
   *    setUnion, setIntersect, setDifference
   *
   * @param {Array | Matrix}    a1  A (multi)set
   * @param {Array | Matrix}    a2  A (multi)set
   * @return {Array | Matrix}    The symmetric difference of two (multi)sets
   */
  return typed(name, {
    'Array | Matrix, Array | Matrix': function ArrayMatrixArrayMatrix(a1, a2) {
      if (subset(size(a1), new Index(0)) === 0) {
        // if any of them is empty, return the other one
        return (0, _array.flatten)(a2);
      } else if (subset(size(a2), new Index(0)) === 0) {
        return (0, _array.flatten)(a1);
      }
      var b1 = (0, _array.flatten)(a1);
      var b2 = (0, _array.flatten)(a2);
      return concat(setDifference(b1, b2), setDifference(b2, b1));
    }
  });
});