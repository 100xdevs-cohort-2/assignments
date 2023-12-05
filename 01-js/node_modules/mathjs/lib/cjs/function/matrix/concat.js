"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConcat = void 0;
var _is = require("../../utils/is.js");
var _object = require("../../utils/object.js");
var _array = require("../../utils/array.js");
var _IndexError = require("../../error/IndexError.js");
var _DimensionError = require("../../error/DimensionError.js");
var _factory = require("../../utils/factory.js");
var name = 'concat';
var dependencies = ['typed', 'matrix', 'isInteger'];
var createConcat = exports.createConcat = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    isInteger = _ref.isInteger;
  /**
   * Concatenate two or more matrices.
   *
   * Syntax:
   *
   *     math.concat(A, B, C, ...)
   *     math.concat(A, B, C, ..., dim)
   *
   * Where:
   *
   * - `dim: number` is a zero-based dimension over which to concatenate the matrices.
   *   By default the last dimension of the matrices.
   *
   * Examples:
   *
   *    const A = [[1, 2], [5, 6]]
   *    const B = [[3, 4], [7, 8]]
   *
   *    math.concat(A, B)                  // returns [[1, 2, 3, 4], [5, 6, 7, 8]]
   *    math.concat(A, B, 0)               // returns [[1, 2], [5, 6], [3, 4], [7, 8]]
   *    math.concat('hello', ' ', 'world') // returns 'hello world'
   *
   * See also:
   *
   *    size, squeeze, subset, transpose
   *
   * @param {... Array | Matrix} args     Two or more matrices
   * @return {Array | Matrix} Concatenated matrix
   */
  return typed(name, {
    // TODO: change signature to '...Array | Matrix, dim?' when supported
    '...Array | Matrix | number | BigNumber': function ArrayMatrixNumberBigNumber(args) {
      var i;
      var len = args.length;
      var dim = -1; // zero-based dimension
      var prevDim;
      var asMatrix = false;
      var matrices = []; // contains multi dimensional arrays

      for (i = 0; i < len; i++) {
        var arg = args[i];

        // test whether we need to return a Matrix (if not we return an Array)
        if ((0, _is.isMatrix)(arg)) {
          asMatrix = true;
        }
        if ((0, _is.isNumber)(arg) || (0, _is.isBigNumber)(arg)) {
          if (i !== len - 1) {
            throw new Error('Dimension must be specified as last argument');
          }

          // last argument contains the dimension on which to concatenate
          prevDim = dim;
          dim = arg.valueOf(); // change BigNumber to number

          if (!isInteger(dim)) {
            throw new TypeError('Integer number expected for dimension');
          }
          if (dim < 0 || i > 0 && dim > prevDim) {
            // TODO: would be more clear when throwing a DimensionError here
            throw new _IndexError.IndexError(dim, prevDim + 1);
          }
        } else {
          // this is a matrix or array
          var m = (0, _object.clone)(arg).valueOf();
          var size = (0, _array.arraySize)(m);
          matrices[i] = m;
          prevDim = dim;
          dim = size.length - 1;

          // verify whether each of the matrices has the same number of dimensions
          if (i > 0 && dim !== prevDim) {
            throw new _DimensionError.DimensionError(prevDim + 1, dim + 1);
          }
        }
      }
      if (matrices.length === 0) {
        throw new SyntaxError('At least one matrix expected');
      }
      var res = matrices.shift();
      while (matrices.length) {
        res = (0, _array.concat)(res, matrices.shift(), dim);
      }
      return asMatrix ? matrix(res) : res;
    },
    '...string': function string(args) {
      return args.join('');
    }
  });
});