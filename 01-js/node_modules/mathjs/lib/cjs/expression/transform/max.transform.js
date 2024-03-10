"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMaxTransform = void 0;
var _factory = require("../../utils/factory.js");
var _errorTransform = require("./utils/errorTransform.js");
var _max = require("../../function/statistics/max.js");
var _lastDimToZeroBase = require("./utils/lastDimToZeroBase.js");
var name = 'max';
var dependencies = ['typed', 'config', 'numeric', 'larger'];
var createMaxTransform = exports.createMaxTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    numeric = _ref.numeric,
    larger = _ref.larger;
  var max = (0, _max.createMax)({
    typed: typed,
    config: config,
    numeric: numeric,
    larger: larger
  });

  /**
   * Attach a transform function to math.max
   * Adds a property transform containing the transform function.
   *
   * This transform changed the last `dim` parameter of function max
   * from one-based to zero based
   */
  return typed('max', {
    '...any': function any(args) {
      args = (0, _lastDimToZeroBase.lastDimToZeroBase)(args);
      try {
        return max.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});