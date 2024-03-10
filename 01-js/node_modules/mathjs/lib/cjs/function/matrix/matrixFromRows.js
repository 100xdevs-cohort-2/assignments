"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMatrixFromRows = void 0;
var _factory = require("../../utils/factory.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var name = 'matrixFromRows';
var dependencies = ['typed', 'matrix', 'flatten', 'size'];
var createMatrixFromRows = exports.createMatrixFromRows = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    flatten = _ref.flatten,
    size = _ref.size;
  /**
   * Create a dense matrix from vectors as individual rows.
   * If you pass column vectors, they will be transposed (but not conjugated!)
   *
   * Syntax:
   *
   *    math.matrixFromRows(...arr)
   *    math.matrixFromRows(row1, row2)
   *    math.matrixFromRows(row1, row2, row3)
   *
   * Examples:
   *
   *    math.matrixFromRows([1, 2, 3], [[4],[5],[6]])
   *    math.matrixFromRows(...vectors)
   *
   * See also:
   *
   *    matrix, matrixFromColumns, matrixFromFunction, zeros
   *
   * @param {... Array | Matrix} rows  Multiple rows
   * @return { number[][] | Matrix } if at least one of the arguments is an array, an array will be returned
   */
  return typed(name, {
    '...Array': function Array(arr) {
      return _createArray(arr);
    },
    '...Matrix': function Matrix(arr) {
      return matrix(_createArray(arr.map(function (m) {
        return m.toArray();
      })));
    }

    // TODO implement this properly for SparseMatrix
  });

  function _createArray(arr) {
    if (arr.length === 0) throw new TypeError('At least one row is needed to construct a matrix.');
    var N = checkVectorTypeAndReturnLength(arr[0]);
    var result = [];
    var _iterator = _createForOfIteratorHelper(arr),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var row = _step.value;
        var rowLength = checkVectorTypeAndReturnLength(row);
        if (rowLength !== N) {
          throw new TypeError('The vectors had different length: ' + (N | 0) + ' ≠ ' + (rowLength | 0));
        }
        result.push(flatten(row));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return result;
  }
  function checkVectorTypeAndReturnLength(vec) {
    var s = size(vec);
    if (s.length === 1) {
      // 1D vector
      return s[0];
    } else if (s.length === 2) {
      // 2D vector
      if (s[0] === 1) {
        // row vector
        return s[1];
      } else if (s[1] === 1) {
        // col vector
        return s[0];
      } else {
        throw new TypeError('At least one of the arguments is not a vector.');
      }
    } else {
      throw new TypeError('Only one- or two-dimensional vectors are supported.');
    }
  }
});