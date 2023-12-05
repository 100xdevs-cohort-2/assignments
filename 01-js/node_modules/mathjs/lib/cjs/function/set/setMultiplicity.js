"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSetMultiplicity = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var name = 'setMultiplicity';
var dependencies = ['typed', 'size', 'subset', 'compareNatural', 'Index'];
var createSetMultiplicity = exports.createSetMultiplicity = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    size = _ref.size,
    subset = _ref.subset,
    compareNatural = _ref.compareNatural,
    Index = _ref.Index;
  /**
   * Count the multiplicity of an element in a multiset.
   * A multi-dimension array will be converted to a single-dimension array before the operation.
   *
   * Syntax:
   *
   *    math.setMultiplicity(element, set)
   *
   * Examples:
   *
   *    math.setMultiplicity(1, [1, 2, 2, 4])    // returns 1
   *    math.setMultiplicity(2, [1, 2, 2, 4])    // returns 2
   *
   * See also:
   *
   *    setDistinct, setSize
   *
   * @param {number | BigNumber | Fraction | Complex} e  An element in the multiset
   * @param {Array | Matrix}     a  A multiset
   * @return {number}            The number of how many times the multiset contains the element
   */
  return typed(name, {
    'number | BigNumber | Fraction | Complex, Array | Matrix': function numberBigNumberFractionComplexArrayMatrix(e, a) {
      if (subset(size(a), new Index(0)) === 0) {
        // if empty, return 0
        return 0;
      }
      var b = (0, _array.flatten)(Array.isArray(a) ? a : a.toArray());
      var count = 0;
      for (var i = 0; i < b.length; i++) {
        if (compareNatural(b[i], e) === 0) {
          count++;
        }
      }
      return count;
    }
  });
});