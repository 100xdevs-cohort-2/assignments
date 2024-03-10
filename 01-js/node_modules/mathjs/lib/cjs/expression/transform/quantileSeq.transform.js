"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createQuantileSeqTransform = void 0;
var _factory = require("../../utils/factory.js");
var _quantileSeq = require("../../function/statistics/quantileSeq.js");
var _lastDimToZeroBase = require("./utils/lastDimToZeroBase.js");
var name = 'quantileSeq';
var dependencies = ['typed', 'bignumber', 'add', 'subtract', 'divide', 'multiply', 'partitionSelect', 'compare', 'isInteger', 'smaller', 'smallerEq', 'larger'];

/**
 * Attach a transform function to math.quantileSeq
 * Adds a property transform containing the transform function.
 *
 * This transform changed the `dim` parameter of function std
 * from one-based to zero based
 */
var createQuantileSeqTransform = exports.createQuantileSeqTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    bignumber = _ref.bignumber,
    add = _ref.add,
    subtract = _ref.subtract,
    divide = _ref.divide,
    multiply = _ref.multiply,
    partitionSelect = _ref.partitionSelect,
    compare = _ref.compare,
    isInteger = _ref.isInteger,
    smaller = _ref.smaller,
    smallerEq = _ref.smallerEq,
    larger = _ref.larger;
  var quantileSeq = (0, _quantileSeq.createQuantileSeq)({
    typed: typed,
    bignumber: bignumber,
    add: add,
    subtract: subtract,
    divide: divide,
    multiply: multiply,
    partitionSelect: partitionSelect,
    compare: compare,
    isInteger: isInteger,
    smaller: smaller,
    smallerEq: smallerEq,
    larger: larger
  });
  return typed('quantileSeq', {
    'Array | Matrix, number | BigNumber': quantileSeq,
    'Array | Matrix, number | BigNumber, number': function ArrayMatrixNumberBigNumberNumber(arr, prob, dim) {
      return quantileSeq(arr, prob, dimToZeroBase(dim));
    },
    'Array | Matrix, number | BigNumber, boolean': quantileSeq,
    'Array | Matrix, number | BigNumber, boolean, number': function ArrayMatrixNumberBigNumberBooleanNumber(arr, prob, sorted, dim) {
      return quantileSeq(arr, prob, sorted, dimToZeroBase(dim));
    },
    'Array | Matrix, Array | Matrix': quantileSeq,
    'Array | Matrix, Array | Matrix, number': function ArrayMatrixArrayMatrixNumber(data, prob, dim) {
      return quantileSeq(data, prob, dimToZeroBase(dim));
    },
    'Array | Matrix, Array | Matrix, boolean': quantileSeq,
    'Array | Matrix, Array | Matrix, boolean, number': function ArrayMatrixArrayMatrixBooleanNumber(data, prob, sorted, dim) {
      return quantileSeq(data, prob, sorted, dimToZeroBase(dim));
    }
  });
  function dimToZeroBase(dim) {
    // TODO: find a better way, maybe lastDimToZeroBase could apply to more cases.
    return (0, _lastDimToZeroBase.lastDimToZeroBase)([[], dim])[1];
  }
}, {
  isTransformFunction: true
});