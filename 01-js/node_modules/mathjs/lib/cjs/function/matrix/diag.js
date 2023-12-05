"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDiag = void 0;
var _is = require("../../utils/is.js");
var _array = require("../../utils/array.js");
var _number = require("../../utils/number.js");
var _factory = require("../../utils/factory.js");
var name = 'diag';
var dependencies = ['typed', 'matrix', 'DenseMatrix', 'SparseMatrix'];
var createDiag = exports.createDiag = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    DenseMatrix = _ref.DenseMatrix,
    SparseMatrix = _ref.SparseMatrix;
  /**
   * Create a diagonal matrix or retrieve the diagonal of a matrix
   *
   * When `x` is a vector, a matrix with vector `x` on the diagonal will be returned.
   * When `x` is a two dimensional matrix, the matrixes `k`th diagonal will be returned as vector.
   * When k is positive, the values are placed on the super diagonal.
   * When k is negative, the values are placed on the sub diagonal.
   *
   * Syntax:
   *
   *     math.diag(X)
   *     math.diag(X, format)
   *     math.diag(X, k)
   *     math.diag(X, k, format)
   *
   * Examples:
   *
   *     // create a diagonal matrix
   *     math.diag([1, 2, 3])      // returns [[1, 0, 0], [0, 2, 0], [0, 0, 3]]
   *     math.diag([1, 2, 3], 1)   // returns [[0, 1, 0, 0], [0, 0, 2, 0], [0, 0, 0, 3]]
   *     math.diag([1, 2, 3], -1)  // returns [[0, 0, 0], [1, 0, 0], [0, 2, 0], [0, 0, 3]]
   *
   *    // retrieve the diagonal from a matrix
   *    const a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
   *    math.diag(a)   // returns [1, 5, 9]
   *
   * See also:
   *
   *     ones, zeros, identity
   *
   * @param {Matrix | Array} x          A two dimensional matrix or a vector
   * @param {number | BigNumber} [k=0]  The diagonal where the vector will be filled
   *                                    in or retrieved.
   * @param {string} [format='dense']   The matrix storage format.
   *
   * @returns {Matrix | Array} Diagonal matrix from input vector, or diagonal from input matrix.
   */
  return typed(name, {
    // FIXME: simplify this huge amount of signatures as soon as typed-function supports optional arguments

    Array: function Array(x) {
      return _diag(x, 0, (0, _array.arraySize)(x), null);
    },
    'Array, number': function ArrayNumber(x, k) {
      return _diag(x, k, (0, _array.arraySize)(x), null);
    },
    'Array, BigNumber': function ArrayBigNumber(x, k) {
      return _diag(x, k.toNumber(), (0, _array.arraySize)(x), null);
    },
    'Array, string': function ArrayString(x, format) {
      return _diag(x, 0, (0, _array.arraySize)(x), format);
    },
    'Array, number, string': function ArrayNumberString(x, k, format) {
      return _diag(x, k, (0, _array.arraySize)(x), format);
    },
    'Array, BigNumber, string': function ArrayBigNumberString(x, k, format) {
      return _diag(x, k.toNumber(), (0, _array.arraySize)(x), format);
    },
    Matrix: function Matrix(x) {
      return _diag(x, 0, x.size(), x.storage());
    },
    'Matrix, number': function MatrixNumber(x, k) {
      return _diag(x, k, x.size(), x.storage());
    },
    'Matrix, BigNumber': function MatrixBigNumber(x, k) {
      return _diag(x, k.toNumber(), x.size(), x.storage());
    },
    'Matrix, string': function MatrixString(x, format) {
      return _diag(x, 0, x.size(), format);
    },
    'Matrix, number, string': function MatrixNumberString(x, k, format) {
      return _diag(x, k, x.size(), format);
    },
    'Matrix, BigNumber, string': function MatrixBigNumberString(x, k, format) {
      return _diag(x, k.toNumber(), x.size(), format);
    }
  });

  /**
   * Creeate diagonal matrix from a vector or vice versa
   * @param {Array | Matrix} x
   * @param {number} k
   * @param {string} format Storage format for matrix. If null,
   *                          an Array is returned
   * @returns {Array | Matrix}
   * @private
   */
  function _diag(x, k, size, format) {
    if (!(0, _number.isInteger)(k)) {
      throw new TypeError('Second parameter in function diag must be an integer');
    }
    var kSuper = k > 0 ? k : 0;
    var kSub = k < 0 ? -k : 0;

    // check dimensions
    switch (size.length) {
      case 1:
        return _createDiagonalMatrix(x, k, format, size[0], kSub, kSuper);
      case 2:
        return _getDiagonal(x, k, format, size, kSub, kSuper);
    }
    throw new RangeError('Matrix for function diag must be 2 dimensional');
  }
  function _createDiagonalMatrix(x, k, format, l, kSub, kSuper) {
    // matrix size
    var ms = [l + kSub, l + kSuper];
    if (format && format !== 'sparse' && format !== 'dense') {
      throw new TypeError("Unknown matrix type ".concat(format, "\""));
    }

    // create diagonal matrix
    var m = format === 'sparse' ? SparseMatrix.diagonal(ms, x, k) : DenseMatrix.diagonal(ms, x, k);
    // check we need to return a matrix
    return format !== null ? m : m.valueOf();
  }
  function _getDiagonal(x, k, format, s, kSub, kSuper) {
    // check x is a Matrix
    if ((0, _is.isMatrix)(x)) {
      // get diagonal matrix
      var dm = x.diagonal(k);
      // check we need to return a matrix
      if (format !== null) {
        // check we need to change matrix format
        if (format !== dm.storage()) {
          return matrix(dm, format);
        }
        return dm;
      }
      return dm.valueOf();
    }
    // vector size
    var n = Math.min(s[0] - kSub, s[1] - kSuper);
    // diagonal values
    var vector = [];
    // loop diagonal
    for (var i = 0; i < n; i++) {
      vector[i] = x[i + kSub][i + kSuper];
    }
    // check we need to return a matrix
    return format !== null ? matrix(vector) : vector;
  }
});