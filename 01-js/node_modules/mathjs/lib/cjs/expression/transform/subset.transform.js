"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSubsetTransform = void 0;
var _factory = require("../../utils/factory.js");
var _errorTransform = require("./utils/errorTransform.js");
var _subset = require("../../function/matrix/subset.js");
var name = 'subset';
var dependencies = ['typed', 'matrix', 'zeros', 'add'];
var createSubsetTransform = exports.createSubsetTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    zeros = _ref.zeros,
    add = _ref.add;
  var subset = (0, _subset.createSubset)({
    typed: typed,
    matrix: matrix,
    zeros: zeros,
    add: add
  });

  /**
   * Attach a transform function to math.subset
   * Adds a property transform containing the transform function.
   *
   * This transform creates a range which includes the end value
   */
  return typed('subset', {
    '...any': function any(args) {
      try {
        return subset.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});