"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStdTransform = void 0;
var _factory = require("../../utils/factory.js");
var _std = require("../../function/statistics/std.js");
var _errorTransform = require("./utils/errorTransform.js");
var _lastDimToZeroBase = require("./utils/lastDimToZeroBase.js");
var name = 'std';
var dependencies = ['typed', 'map', 'sqrt', 'variance'];

/**
 * Attach a transform function to math.std
 * Adds a property transform containing the transform function.
 *
 * This transform changed the `dim` parameter of function std
 * from one-based to zero based
 */
var createStdTransform = exports.createStdTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    map = _ref.map,
    sqrt = _ref.sqrt,
    variance = _ref.variance;
  var std = (0, _std.createStd)({
    typed: typed,
    map: map,
    sqrt: sqrt,
    variance: variance
  });
  return typed('std', {
    '...any': function any(args) {
      args = (0, _lastDimToZeroBase.lastDimToZeroBase)(args);
      try {
        return std.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});