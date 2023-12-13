"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEigs = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _factory = require("../../utils/factory.js");
var _string = require("../../utils/string.js");
var _complexEigs = require("./eigs/complexEigs.js");
var _realSymmetric = require("./eigs/realSymmetric.js");
var _is = require("../../utils/is.js");
var name = 'eigs';

// The absolute state of math.js's dependency system:
var dependencies = ['config', 'typed', 'matrix', 'addScalar', 'equal', 'subtract', 'abs', 'atan', 'cos', 'sin', 'multiplyScalar', 'divideScalar', 'inv', 'bignumber', 'multiply', 'add', 'larger', 'column', 'flatten', 'number', 'complex', 'sqrt', 'diag', 'size', 'reshape', 'qr', 'usolve', 'usolveAll', 'im', 're', 'smaller', 'matrixFromColumns', 'dot'];
var createEigs = exports.createEigs = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var config = _ref.config,
    typed = _ref.typed,
    matrix = _ref.matrix,
    addScalar = _ref.addScalar,
    subtract = _ref.subtract,
    equal = _ref.equal,
    abs = _ref.abs,
    atan = _ref.atan,
    cos = _ref.cos,
    sin = _ref.sin,
    multiplyScalar = _ref.multiplyScalar,
    divideScalar = _ref.divideScalar,
    inv = _ref.inv,
    bignumber = _ref.bignumber,
    multiply = _ref.multiply,
    add = _ref.add,
    larger = _ref.larger,
    column = _ref.column,
    flatten = _ref.flatten,
    number = _ref.number,
    complex = _ref.complex,
    sqrt = _ref.sqrt,
    diag = _ref.diag,
    size = _ref.size,
    reshape = _ref.reshape,
    qr = _ref.qr,
    usolve = _ref.usolve,
    usolveAll = _ref.usolveAll,
    im = _ref.im,
    re = _ref.re,
    smaller = _ref.smaller,
    matrixFromColumns = _ref.matrixFromColumns,
    dot = _ref.dot;
  var doRealSymmetric = (0, _realSymmetric.createRealSymmetric)({
    config: config,
    addScalar: addScalar,
    subtract: subtract,
    column: column,
    flatten: flatten,
    equal: equal,
    abs: abs,
    atan: atan,
    cos: cos,
    sin: sin,
    multiplyScalar: multiplyScalar,
    inv: inv,
    bignumber: bignumber,
    complex: complex,
    multiply: multiply,
    add: add
  });
  var doComplexEigs = (0, _complexEigs.createComplexEigs)({
    config: config,
    addScalar: addScalar,
    subtract: subtract,
    multiply: multiply,
    multiplyScalar: multiplyScalar,
    flatten: flatten,
    divideScalar: divideScalar,
    sqrt: sqrt,
    abs: abs,
    bignumber: bignumber,
    diag: diag,
    size: size,
    reshape: reshape,
    qr: qr,
    inv: inv,
    usolve: usolve,
    usolveAll: usolveAll,
    equal: equal,
    complex: complex,
    larger: larger,
    smaller: smaller,
    matrixFromColumns: matrixFromColumns,
    dot: dot
  });

  /**
   * Compute eigenvalues and optionally eigenvectors of a square matrix.
   * The eigenvalues are sorted by their absolute value, ascending, and
   * returned as a vector in the `values` property of the returned project.
   * An eigenvalue with algebraic multiplicity k will be listed k times, so
   * that the returned `values` vector always has length equal to the size
   * of the input matrix.
   *
   * The `eigenvectors` property of the return value provides the eigenvectors.
   * It is an array of plain objects: the `value` property of each gives the
   * associated eigenvalue, and the `vector` property gives the eigenvector
   * itself. Note that the same `value` property will occur as many times in
   * the list provided by `eigenvectors` as the geometric multiplicity of
   * that value.
   *
   * If the algorithm fails to converge, it will throw an error –
   * in that case, however, you may still find useful information
   * in `err.values` and `err.vectors`.
   *
   * Note that the 'precision' option does not directly specify the _accuracy_
   * of the returned eigenvalues. Rather, it determines how small an entry
   * of the iterative approximations to an upper triangular matrix must be
   * in order to be considered zero. The actual accuracy of the returned
   * eigenvalues may be greater or less than the precision, depending on the
   * conditioning of the matrix and how far apart or close the actual
   * eigenvalues are. Note that currently, relatively simple, "traditional"
   * methods of eigenvalue computation are being used; this is not a modern,
   * high-precision eigenvalue computation. That said, it should typically
   * produce fairly reasonable results.
   *
   * Syntax:
   *
   *     math.eigs(x, [prec])
   *     math.eigs(x, {options})
   *
   * Examples:
   *
   *     const { eigs, multiply, column, transpose, matrixFromColumns } = math
   *     const H = [[5, 2.3], [2.3, 1]]
   *     const ans = eigs(H) // returns {values: [E1,E2...sorted], eigenvectors: [{value: E1, vector: v2}, {value: e, vector: v2}, ...]
   *     const E = ans.values
   *     const V = ans.eigenvectors
   *     multiply(H, V[0].vector)) // returns multiply(E[0], V[0].vector))
   *     const U = matrixFromColumns(...V.map(obj => obj.vector))
   *     const UTxHxU = multiply(transpose(U), H, U) // diagonalizes H if possible
   *     E[0] == UTxHxU[0][0]  // returns true always
   *
   *     // Compute only approximate eigenvalues:
   *     const {values} = eigs(H, {eigenvectors: false, precision: 1e-6})
   *
   * See also:
   *
   *     inv
   *
   * @param {Array | Matrix} x  Matrix to be diagonalized
   *
   * @param {number | BigNumber | OptsObject} [opts] Object with keys `precision`, defaulting to config.epsilon, and `eigenvectors`, defaulting to true and specifying whether to compute eigenvectors. If just a number, specifies precision.
   * @return {{values: Array|Matrix, eigenvectors?: Array<EVobj>}} Object containing an array of eigenvalues and an array of {value: number|BigNumber, vector: Array|Matrix} objects. The eigenvectors property is undefined if eigenvectors were not requested.
   *
   */
  return typed('eigs', {
    // The conversion to matrix in the first two implementations,
    // just to convert back to an array right away in
    // computeValuesAndVectors, is unfortunate, and should perhaps be
    // streamlined. It is done because the Matrix object carries some
    // type information about its entries, and so constructing the matrix
    // is a roundabout way of doing type detection.
    Array: function Array(x) {
      return doEigs(matrix(x));
    },
    'Array, number|BigNumber': function ArrayNumberBigNumber(x, prec) {
      return doEigs(matrix(x), {
        precision: prec
      });
    },
    'Array, Object': function ArrayObject(x, opts) {
      return doEigs(matrix(x), opts);
    },
    Matrix: function Matrix(mat) {
      return doEigs(mat, {
        matricize: true
      });
    },
    'Matrix, number|BigNumber': function MatrixNumberBigNumber(mat, prec) {
      return doEigs(mat, {
        precision: prec,
        matricize: true
      });
    },
    'Matrix, Object': function MatrixObject(mat, opts) {
      var useOpts = {
        matricize: true
      };
      (0, _extends2["default"])(useOpts, opts);
      return doEigs(mat, useOpts);
    }
  });
  function doEigs(mat) {
    var _opts$precision;
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var computeVectors = 'eigenvectors' in opts ? opts.eigenvectors : true;
    var prec = (_opts$precision = opts.precision) !== null && _opts$precision !== void 0 ? _opts$precision : config.epsilon;
    var result = computeValuesAndVectors(mat, prec, computeVectors);
    if (opts.matricize) {
      result.values = matrix(result.values);
      if (computeVectors) {
        result.eigenvectors = result.eigenvectors.map(function (_ref2) {
          var value = _ref2.value,
            vector = _ref2.vector;
          return {
            value: value,
            vector: matrix(vector)
          };
        });
      }
    }
    if (computeVectors) {
      Object.defineProperty(result, 'vectors', {
        enumerable: false,
        // to make sure that the eigenvectors can still be
        // converted to string.
        get: function get() {
          throw new Error('eigs(M).vectors replaced with eigs(M).eigenvectors');
        }
      });
    }
    return result;
  }
  function computeValuesAndVectors(mat, prec, computeVectors) {
    var arr = mat.toArray(); // NOTE: arr is guaranteed to be unaliased
    // and so safe to modify in place
    var asize = mat.size();
    if (asize.length !== 2 || asize[0] !== asize[1]) {
      throw new RangeError("Matrix must be square (size: ".concat((0, _string.format)(asize), ")"));
    }
    var N = asize[0];
    if (isReal(arr, N, prec)) {
      coerceReal(arr, N); // modifies arr by side effect

      if (isSymmetric(arr, N, prec)) {
        var _type = coerceTypes(mat, arr, N); // modifies arr by side effect
        return doRealSymmetric(arr, N, prec, _type, computeVectors);
      }
    }
    var type = coerceTypes(mat, arr, N); // modifies arr by side effect
    return doComplexEigs(arr, N, prec, type, computeVectors);
  }

  /** @return {boolean} */
  function isSymmetric(arr, N, prec) {
    for (var i = 0; i < N; i++) {
      for (var j = i; j < N; j++) {
        // TODO proper comparison of bignum and frac
        if (larger(bignumber(abs(subtract(arr[i][j], arr[j][i]))), prec)) {
          return false;
        }
      }
    }
    return true;
  }

  /** @return {boolean} */
  function isReal(arr, N, prec) {
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        // TODO proper comparison of bignum and frac
        if (larger(bignumber(abs(im(arr[i][j]))), prec)) {
          return false;
        }
      }
    }
    return true;
  }
  function coerceReal(arr, N) {
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        arr[i][j] = re(arr[i][j]);
      }
    }
  }

  /** @return {'number' | 'BigNumber' | 'Complex'} */
  function coerceTypes(mat, arr, N) {
    /** @type {string} */
    var type = mat.datatype();
    if (type === 'number' || type === 'BigNumber' || type === 'Complex') {
      return type;
    }
    var hasNumber = false;
    var hasBig = false;
    var hasComplex = false;
    for (var i = 0; i < N; i++) {
      for (var j = 0; j < N; j++) {
        var el = arr[i][j];
        if ((0, _is.isNumber)(el) || (0, _is.isFraction)(el)) {
          hasNumber = true;
        } else if ((0, _is.isBigNumber)(el)) {
          hasBig = true;
        } else if ((0, _is.isComplex)(el)) {
          hasComplex = true;
        } else {
          throw TypeError('Unsupported type in Matrix: ' + (0, _is.typeOf)(el));
        }
      }
    }
    if (hasBig && hasComplex) {
      console.warn('Complex BigNumbers not supported, this operation will lose precission.');
    }
    if (hasComplex) {
      for (var _i = 0; _i < N; _i++) {
        for (var _j = 0; _j < N; _j++) {
          arr[_i][_j] = complex(arr[_i][_j]);
        }
      }
      return 'Complex';
    }
    if (hasBig) {
      for (var _i2 = 0; _i2 < N; _i2++) {
        for (var _j2 = 0; _j2 < N; _j2++) {
          arr[_i2][_j2] = bignumber(arr[_i2][_j2]);
        }
      }
      return 'BigNumber';
    }
    if (hasNumber) {
      for (var _i3 = 0; _i3 < N; _i3++) {
        for (var _j3 = 0; _j3 < N; _j3++) {
          arr[_i3][_j3] = number(arr[_i3][_j3]);
        }
      }
      return 'number';
    } else {
      throw TypeError('Matrix contains unsupported types only.');
    }
  }
});