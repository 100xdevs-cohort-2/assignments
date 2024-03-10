"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSetPowerset = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var name = 'setPowerset';
var dependencies = ['typed', 'size', 'subset', 'compareNatural', 'Index'];
var createSetPowerset = exports.createSetPowerset = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    size = _ref.size,
    subset = _ref.subset,
    compareNatural = _ref.compareNatural,
    Index = _ref.Index;
  /**
   * Create the powerset of a (multi)set. (The powerset contains very possible subsets of a (multi)set.)
   * A multi-dimension array will be converted to a single-dimension array before the operation.
   *
   * Syntax:
   *
   *    math.setPowerset(set)
   *
   * Examples:
   *
   *    math.setPowerset([1, 2, 3])        // returns [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
   *
   * See also:
   *
   *    setCartesian
   *
   * @param {Array | Matrix}    a  A (multi)set
   * @return {Array}    The powerset of the (multi)set
   */
  return typed(name, {
    'Array | Matrix': function ArrayMatrix(a) {
      if (subset(size(a), new Index(0)) === 0) {
        // if empty, return empty
        return [];
      }
      var b = (0, _array.flatten)(Array.isArray(a) ? a : a.toArray()).sort(compareNatural);
      var result = [];
      var number = 0;
      while (number.toString(2).length <= b.length) {
        result.push(_subset(b, number.toString(2).split('').reverse()));
        number++;
      }
      // can not return a matrix, because of the different size of the subarrays
      return _sort(result);
    }
  });

  // create subset
  function _subset(array, bitarray) {
    var result = [];
    for (var i = 0; i < bitarray.length; i++) {
      if (bitarray[i] === '1') {
        result.push(array[i]);
      }
    }
    return result;
  }

  // sort subsests by length
  function _sort(array) {
    var temp = [];
    for (var i = array.length - 1; i > 0; i--) {
      for (var j = 0; j < i; j++) {
        if (array[j].length > array[j + 1].length) {
          temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
    return array;
  }
});