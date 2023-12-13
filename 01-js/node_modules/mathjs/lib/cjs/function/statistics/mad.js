"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMad = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var _improveErrorMessage = require("./utils/improveErrorMessage.js");
var name = 'mad';
var dependencies = ['typed', 'abs', 'map', 'median', 'subtract'];
var createMad = exports.createMad = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    abs = _ref.abs,
    map = _ref.map,
    median = _ref.median,
    subtract = _ref.subtract;
  /**
   * Compute the median absolute deviation of a matrix or a list with values.
   * The median absolute deviation is defined as the median of the absolute
   * deviations from the median.
   *
   * Syntax:
   *
   *     math.mad(a, b, c, ...)
   *     math.mad(A)
   *
   * Examples:
   *
   *     math.mad(10, 20, 30)             // returns 10
   *     math.mad([1, 2, 3])              // returns 1
   *     math.mad([[1, 2, 3], [4, 5, 6]]) // returns 1.5
   *
   * See also:
   *
   *     median, mean, std, abs
   *
   * @param {Array | Matrix} array
   *                        A single matrix or multiple scalar values.
   * @return {*} The median absolute deviation.
   */
  return typed(name, {
    // mad([a, b, c, d, ...])
    'Array | Matrix': _mad,
    // mad(a, b, c, d, ...)
    '...': function _(args) {
      return _mad(args);
    }
  });
  function _mad(array) {
    array = (0, _array.flatten)(array.valueOf());
    if (array.length === 0) {
      throw new Error('Cannot calculate median absolute deviation (mad) of an empty array');
    }
    try {
      var med = median(array);
      return median(map(array, function (value) {
        return abs(subtract(value, med));
      }));
    } catch (err) {
      if (err instanceof TypeError && err.message.indexOf('median') !== -1) {
        throw new TypeError(err.message.replace('median', 'mad'));
      } else {
        throw (0, _improveErrorMessage.improveErrorMessage)(err, 'mad');
      }
    }
  }
});