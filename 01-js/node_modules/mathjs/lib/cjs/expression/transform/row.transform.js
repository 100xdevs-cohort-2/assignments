"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRowTransform = void 0;
var _factory = require("../../utils/factory.js");
var _row = require("../../function/matrix/row.js");
var _errorTransform = require("./utils/errorTransform.js");
var _is = require("../../utils/is.js");
var name = 'row';
var dependencies = ['typed', 'Index', 'matrix', 'range'];

/**
 * Attach a transform function to matrix.column
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `index` parameter of function column
 * from zero-based to one-based
 */
var createRowTransform = exports.createRowTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    Index = _ref.Index,
    matrix = _ref.matrix,
    range = _ref.range;
  var row = (0, _row.createRow)({
    typed: typed,
    Index: Index,
    matrix: matrix,
    range: range
  });

  // @see: comment of row itself
  return typed('row', {
    '...any': function any(args) {
      // change last argument from zero-based to one-based
      var lastIndex = args.length - 1;
      var last = args[lastIndex];
      if ((0, _is.isNumber)(last)) {
        args[lastIndex] = last - 1;
      }
      try {
        return row.apply(null, args);
      } catch (err) {
        throw (0, _errorTransform.errorTransform)(err);
      }
    }
  });
}, {
  isTransformFunction: true
});