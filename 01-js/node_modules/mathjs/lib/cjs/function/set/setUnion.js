"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSetUnion = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var name = 'setUnion';
var dependencies = ['typed', 'size', 'concat', 'subset', 'setIntersect', 'setSymDifference', 'Index'];
var createSetUnion = exports.createSetUnion = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    size = _ref.size,
    concat = _ref.concat,
    subset = _ref.subset,
    setIntersect = _ref.setIntersect,
    setSymDifference = _ref.setSymDifference,
    Index = _ref.Index;
  /**
   * Create the union of two (multi)sets.
   * Multi-dimension arrays will be converted to single-dimension arrays before the operation.
   *
   * Syntax:
   *
   *    math.setUnion(set1, set2)
   *
   * Examples:
   *
   *    math.setUnion([1, 2, 3, 4], [3, 4, 5, 6])            // returns [1, 2, 3, 4, 5, 6]
   *    math.setUnion([[1, 2], [3, 4]], [[3, 4], [5, 6]])    // returns [1, 2, 3, 4, 5, 6]
   *
   * See also:
   *
   *    setIntersect, setDifference
   *
   * @param {Array | Matrix}    a1  A (multi)set
   * @param {Array | Matrix}    a2  A (multi)set
   * @return {Array | Matrix}    The union of two (multi)sets
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
      return concat(setSymDifference(b1, b2), setIntersect(b1, b2));
    }
  });
});