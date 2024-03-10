"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNorm = void 0;
var _factory = require("../../utils/factory.js");
var name = 'norm';
var dependencies = ['typed', 'abs', 'add', 'pow', 'conj', 'sqrt', 'multiply', 'equalScalar', 'larger', 'smaller', 'matrix', 'ctranspose', 'eigs'];
var createNorm = exports.createNorm = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    abs = _ref.abs,
    add = _ref.add,
    pow = _ref.pow,
    conj = _ref.conj,
    sqrt = _ref.sqrt,
    multiply = _ref.multiply,
    equalScalar = _ref.equalScalar,
    larger = _ref.larger,
    smaller = _ref.smaller,
    matrix = _ref.matrix,
    ctranspose = _ref.ctranspose,
    eigs = _ref.eigs;
  /**
   * Calculate the norm of a number, vector or matrix.
   *
   * The second parameter p is optional. If not provided, it defaults to 2.
   *
   * Syntax:
   *
   *    math.norm(x)
   *    math.norm(x, p)
   *
   * Examples:
   *
   *    math.abs(-3.5)                         // returns 3.5
   *    math.norm(-3.5)                        // returns 3.5
   *
   *    math.norm(math.complex(3, -4))         // returns 5
   *
   *    math.norm([1, 2, -3], Infinity)        // returns 3
   *    math.norm([1, 2, -3], -Infinity)       // returns 1
   *
   *    math.norm([3, 4], 2)                   // returns 5
   *
   *    math.norm([[1, 2], [3, 4]], 1)          // returns 6
   *    math.norm([[1, 2], [3, 4]], 'inf')     // returns 7
   *    math.norm([[1, 2], [3, 4]], 'fro')     // returns 5.477225575051661
   *
   * See also:
   *
   *    abs, hypot
   *
   * @param  {number | BigNumber | Complex | Array | Matrix} x
   *            Value for which to calculate the norm
   * @param  {number | BigNumber | string} [p=2]
   *            Vector space.
   *            Supported numbers include Infinity and -Infinity.
   *            Supported strings are: 'inf', '-inf', and 'fro' (The Frobenius norm)
   * @return {number | BigNumber} the p-norm
   */
  return typed(name, {
    number: Math.abs,
    Complex: function Complex(x) {
      return x.abs();
    },
    BigNumber: function BigNumber(x) {
      // norm(x) = abs(x)
      return x.abs();
    },
    "boolean": function boolean(x) {
      // norm(x) = abs(x)
      return Math.abs(x);
    },
    Array: function Array(x) {
      return _norm(matrix(x), 2);
    },
    Matrix: function Matrix(x) {
      return _norm(x, 2);
    },
    'Array, number | BigNumber | string': function ArrayNumberBigNumberString(x, p) {
      return _norm(matrix(x), p);
    },
    'Matrix, number | BigNumber | string': function MatrixNumberBigNumberString(x, p) {
      return _norm(x, p);
    }
  });

  /**
   * Calculate the plus infinity norm for a vector
   * @param {Matrix} x
   * @returns {number} Returns the norm
   * @private
   */
  function _vectorNormPlusInfinity(x) {
    // norm(x, Infinity) = max(abs(x))
    var pinf = 0;
    // skip zeros since abs(0) === 0
    x.forEach(function (value) {
      var v = abs(value);
      if (larger(v, pinf)) {
        pinf = v;
      }
    }, true);
    return pinf;
  }

  /**
   * Calculate the minus infinity norm for a vector
   * @param {Matrix} x
   * @returns {number} Returns the norm
   * @private
   */
  function _vectorNormMinusInfinity(x) {
    // norm(x, -Infinity) = min(abs(x))
    var ninf;
    // skip zeros since abs(0) === 0
    x.forEach(function (value) {
      var v = abs(value);
      if (!ninf || smaller(v, ninf)) {
        ninf = v;
      }
    }, true);
    return ninf || 0;
  }

  /**
   * Calculate the norm for a vector
   * @param {Matrix} x
   * @param {number | string} p
   * @returns {number} Returns the norm
   * @private
   */
  function _vectorNorm(x, p) {
    // check p
    if (p === Number.POSITIVE_INFINITY || p === 'inf') {
      return _vectorNormPlusInfinity(x);
    }
    if (p === Number.NEGATIVE_INFINITY || p === '-inf') {
      return _vectorNormMinusInfinity(x);
    }
    if (p === 'fro') {
      return _norm(x, 2);
    }
    if (typeof p === 'number' && !isNaN(p)) {
      // check p != 0
      if (!equalScalar(p, 0)) {
        // norm(x, p) = sum(abs(xi) ^ p) ^ 1/p
        var n = 0;
        // skip zeros since abs(0) === 0
        x.forEach(function (value) {
          n = add(pow(abs(value), p), n);
        }, true);
        return pow(n, 1 / p);
      }
      return Number.POSITIVE_INFINITY;
    }
    // invalid parameter value
    throw new Error('Unsupported parameter value');
  }

  /**
   * Calculate the Frobenius norm for a matrix
   * @param {Matrix} x
   * @returns {number} Returns the norm
   * @private
   */
  function _matrixNormFrobenius(x) {
    // norm(x) = sqrt(sum(diag(x'x)))
    var fro = 0;
    x.forEach(function (value, index) {
      fro = add(fro, multiply(value, conj(value)));
    });
    return abs(sqrt(fro));
  }

  /**
   * Calculate the norm L1 for a matrix
   * @param {Matrix} x
   * @returns {number} Returns the norm
   * @private
   */
  function _matrixNormOne(x) {
    // norm(x) = the largest column sum
    var c = [];
    // result
    var maxc = 0;
    // skip zeros since abs(0) == 0
    x.forEach(function (value, index) {
      var j = index[1];
      var cj = add(c[j] || 0, abs(value));
      if (larger(cj, maxc)) {
        maxc = cj;
      }
      c[j] = cj;
    }, true);
    return maxc;
  }

  /**
   * Calculate the norm L2 for a matrix
   * @param {Matrix} x
   * @returns {number} Returns the norm
   * @private
   */
  function _matrixNormTwo(x) {
    // norm(x) = sqrt( max eigenvalue of A*.A)
    var sizeX = x.size();
    if (sizeX[0] !== sizeX[1]) {
      throw new RangeError('Invalid matrix dimensions');
    }
    var tx = ctranspose(x);
    var squaredX = multiply(tx, x);
    var eigenVals = eigs(squaredX).values.toArray();
    var rho = eigenVals[eigenVals.length - 1];
    return abs(sqrt(rho));
  }

  /**
   * Calculate the infinity norm for a matrix
   * @param {Matrix} x
   * @returns {number} Returns the norm
   * @private
   */
  function _matrixNormInfinity(x) {
    // norm(x) = the largest row sum
    var r = [];
    // result
    var maxr = 0;
    // skip zeros since abs(0) == 0
    x.forEach(function (value, index) {
      var i = index[0];
      var ri = add(r[i] || 0, abs(value));
      if (larger(ri, maxr)) {
        maxr = ri;
      }
      r[i] = ri;
    }, true);
    return maxr;
  }

  /**
   * Calculate the norm for a 2D Matrix (M*N)
   * @param {Matrix} x
   * @param {number | string} p
   * @returns {number} Returns the norm
   * @private
   */
  function _matrixNorm(x, p) {
    // check p
    if (p === 1) {
      return _matrixNormOne(x);
    }
    if (p === Number.POSITIVE_INFINITY || p === 'inf') {
      return _matrixNormInfinity(x);
    }
    if (p === 'fro') {
      return _matrixNormFrobenius(x);
    }
    if (p === 2) {
      return _matrixNormTwo(x);
    } // invalid parameter value

    throw new Error('Unsupported parameter value ' + p);
  }

  /**
   * Calculate the norm for an array
   * @param {Matrix} x
   * @param {number | string} p
   * @returns {number} Returns the norm
   * @private
   */
  function _norm(x, p) {
    // size
    var sizeX = x.size();

    // check if it is a vector
    if (sizeX.length === 1) {
      return _vectorNorm(x, p);
    }
    // MxN matrix
    if (sizeX.length === 2) {
      if (sizeX[0] && sizeX[1]) {
        return _matrixNorm(x, p);
      } else {
        throw new RangeError('Invalid matrix dimensions');
      }
    }
  }
});