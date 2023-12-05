"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRangeTransform = void 0;
var _factory = require("../../utils/factory.js");
var _range = require("../../function/matrix/range.js");
var name = 'range';
var dependencies = ['typed', 'config', '?matrix', '?bignumber', 'smaller', 'smallerEq', 'larger', 'largerEq', 'add', 'isPositive'];
var createRangeTransform = exports.createRangeTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    matrix = _ref.matrix,
    bignumber = _ref.bignumber,
    smaller = _ref.smaller,
    smallerEq = _ref.smallerEq,
    larger = _ref.larger,
    largerEq = _ref.largerEq,
    add = _ref.add,
    isPositive = _ref.isPositive;
  var range = (0, _range.createRange)({
    typed: typed,
    config: config,
    matrix: matrix,
    bignumber: bignumber,
    smaller: smaller,
    smallerEq: smallerEq,
    larger: larger,
    largerEq: largerEq,
    add: add,
    isPositive: isPositive
  });

  /**
   * Attach a transform function to math.range
   * Adds a property transform containing the transform function.
   *
   * This transform creates a range which includes the end value
   */
  return typed('range', {
    '...any': function any(args) {
      var lastIndex = args.length - 1;
      var last = args[lastIndex];
      if (typeof last !== 'boolean') {
        // append a parameter includeEnd=true
        args.push(true);
      }
      return range.apply(null, args);
    }
  });
}, {
  isTransformFunction: true
});