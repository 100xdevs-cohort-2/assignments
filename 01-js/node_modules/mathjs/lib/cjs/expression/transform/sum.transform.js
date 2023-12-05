"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSumTransform = void 0;
var _factory = require("../../utils/factory.js");
var _errorTransform = require("./utils/errorTransform.js");
var _sum = require("../../function/statistics/sum.js");
var _lastDimToZeroBase = require("./utils/lastDimToZeroBase.js");
/**
 * Attach a transform function to math.sum
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `dim` parameter of function sum
 * from one-based to zero based
 */
var name = 'sum';
var dependencies = ['typed', 'config', 'add', 'numeric'];
var createSumTransform = exports.createSumTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    add = _ref.add,
    numeric = _ref.numeric;
  var sum = (0, _sum.createSum)({
    typed: typed,
    config: config,
    add: add,
    numeric: numeric
  });
  return typed(name, {
    '...any': function any(args) {
      args = (0, _lastDimToZeroBase.lastDimToZeroBase)(args);
      try {
        return sum.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});