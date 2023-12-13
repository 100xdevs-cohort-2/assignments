"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComplexEigs = createComplexEigs;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _object = require("../../../utils/object.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function createComplexEigs(_ref) {
  var addScalar = _ref.addScalar,
    subtract = _ref.subtract,
    flatten = _ref.flatten,
    multiply = _ref.multiply,
    multiplyScalar = _ref.multiplyScalar,
    divideScalar = _ref.divideScalar,
    sqrt = _ref.sqrt,
    abs = _ref.abs,
    bignumber = _ref.bignumber,
    diag = _ref.diag,
    size = _ref.size,
    reshape = _ref.reshape,
    inv = _ref.inv,
    qr = _ref.qr,
    usolve = _ref.usolve,
    usolveAll = _ref.usolveAll,
    equal = _ref.equal,
    complex = _ref.complex,
    larger = _ref.larger,
    smaller = _ref.smaller,
    matrixFromColumns = _ref.matrixFromColumns,
    dot = _ref.dot;
  /**
   * @param {number[][]} arr the matrix to find eigenvalues of
   * @param {number} N size of the matrix
   * @param {number|BigNumber} prec precision, anything lower will be considered zero
   * @param {'number'|'BigNumber'|'Complex'} type
   * @param {boolean} findVectors should we find eigenvectors?
   *
   * @returns {{ values: number[], vectors: number[][] }}
   */
  function complexEigs(arr, N, prec, type) {
    var findVectors = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    // TODO check if any row/col are zero except the diagonal

    // make sure corresponding rows and columns have similar magnitude
    // important because of numerical stability
    // MODIFIES arr by side effect!
    var R = balance(arr, N, prec, type, findVectors);

    // R is the row transformation matrix
    // arr = A' = R A R^-1, A is the original matrix
    // (if findVectors is false, R is undefined)
    // (And so to return to original matrix: A = R^-1 arr R)

    // TODO if magnitudes of elements vary over many orders,
    // move greatest elements to the top left corner

    // using similarity transformations, reduce the matrix
    // to Hessenberg form (upper triangular plus one subdiagonal row)
    // updates the transformation matrix R with new row operationsq
    // MODIFIES arr by side effect!
    reduceToHessenberg(arr, N, prec, type, findVectors, R);
    // still true that original A = R^-1 arr R)

    // find eigenvalues
    var _iterateUntilTriangul = iterateUntilTriangular(arr, N, prec, type, findVectors),
      values = _iterateUntilTriangul.values,
      C = _iterateUntilTriangul.C;

    // values is the list of eigenvalues, C is the column
    // transformation matrix that transforms arr, the hessenberg
    // matrix, to upper triangular
    // (So U = C^-1 arr C and the relationship between current arr
    // and original A is unchanged.)

    if (findVectors) {
      var eigenvectors = findEigenvectors(arr, N, C, R, values, prec, type);
      return {
        values: values,
        eigenvectors: eigenvectors
      };
    }
    return {
      values: values
    };
  }

  /**
   * @param {number[][]} arr
   * @param {number} N
   * @param {number} prec
   * @param {'number'|'BigNumber'|'Complex'} type
   * @returns {number[][]}
   */
  function balance(arr, N, prec, type, findVectors) {
    var big = type === 'BigNumber';
    var cplx = type === 'Complex';
    var realzero = big ? bignumber(0) : 0;
    var one = big ? bignumber(1) : cplx ? complex(1) : 1;
    var realone = big ? bignumber(1) : 1;

    // base of the floating-point arithmetic
    var radix = big ? bignumber(10) : 2;
    var radixSq = multiplyScalar(radix, radix);

    // the diagonal transformation matrix R
    var Rdiag;
    if (findVectors) {
      Rdiag = Array(N).fill(one);
    }

    // this isn't the only time we loop thru the matrix...
    var last = false;
    while (!last) {
      // ...haha I'm joking! unless...
      last = true;
      for (var i = 0; i < N; i++) {
        // compute the taxicab norm of i-th column and row
        // TODO optimize for complex numbers
        var colNorm = realzero;
        var rowNorm = realzero;
        for (var j = 0; j < N; j++) {
          if (i === j) continue;
          colNorm = addScalar(colNorm, abs(arr[j][i]));
          rowNorm = addScalar(rowNorm, abs(arr[i][j]));
        }
        if (!equal(colNorm, 0) && !equal(rowNorm, 0)) {
          // find integer power closest to balancing the matrix
          // (we want to scale only by integer powers of radix,
          // so that we don't lose any precision due to round-off)

          var f = realone;
          var c = colNorm;
          var rowDivRadix = divideScalar(rowNorm, radix);
          var rowMulRadix = multiplyScalar(rowNorm, radix);
          while (smaller(c, rowDivRadix)) {
            c = multiplyScalar(c, radixSq);
            f = multiplyScalar(f, radix);
          }
          while (larger(c, rowMulRadix)) {
            c = divideScalar(c, radixSq);
            f = divideScalar(f, radix);
          }

          // check whether balancing is needed
          // condition = (c + rowNorm) / f < 0.95 * (colNorm + rowNorm)
          var condition = smaller(divideScalar(addScalar(c, rowNorm), f), multiplyScalar(addScalar(colNorm, rowNorm), 0.95));

          // apply balancing similarity transformation
          if (condition) {
            // we should loop once again to check whether
            // another rebalancing is needed
            last = false;
            var g = divideScalar(1, f);
            for (var _j = 0; _j < N; _j++) {
              if (i === _j) {
                continue;
              }
              arr[i][_j] = multiplyScalar(arr[i][_j], g);
              arr[_j][i] = multiplyScalar(arr[_j][i], f);
            }

            // keep track of transformations
            if (findVectors) {
              Rdiag[i] = multiplyScalar(Rdiag[i], g);
            }
          }
        }
      }
    }

    // return the diagonal row transformation matrix
    return findVectors ? diag(Rdiag) : null;
  }

  /**
   * @param {number[][]} arr
   * @param {number} N
   * @param {number} prec
   * @param {'number'|'BigNumber'|'Complex'} type
   * @param {boolean} findVectors
   * @param {number[][]} R the row transformation matrix that will be modified
   */
  function reduceToHessenberg(arr, N, prec, type, findVectors, R) {
    var big = type === 'BigNumber';
    var cplx = type === 'Complex';
    var zero = big ? bignumber(0) : cplx ? complex(0) : 0;
    if (big) {
      prec = bignumber(prec);
    }
    for (var i = 0; i < N - 2; i++) {
      // Find the largest subdiag element in the i-th col

      var maxIndex = 0;
      var max = zero;
      for (var j = i + 1; j < N; j++) {
        var el = arr[j][i];
        if (smaller(abs(max), abs(el))) {
          max = el;
          maxIndex = j;
        }
      }

      // This col is pivoted, no need to do anything
      if (smaller(abs(max), prec)) {
        continue;
      }
      if (maxIndex !== i + 1) {
        // Interchange maxIndex-th and (i+1)-th row
        var tmp1 = arr[maxIndex];
        arr[maxIndex] = arr[i + 1];
        arr[i + 1] = tmp1;

        // Interchange maxIndex-th and (i+1)-th column
        for (var _j2 = 0; _j2 < N; _j2++) {
          var tmp2 = arr[_j2][maxIndex];
          arr[_j2][maxIndex] = arr[_j2][i + 1];
          arr[_j2][i + 1] = tmp2;
        }

        // keep track of transformations
        if (findVectors) {
          var tmp3 = R[maxIndex];
          R[maxIndex] = R[i + 1];
          R[i + 1] = tmp3;
        }
      }

      // Reduce following rows and columns
      for (var _j3 = i + 2; _j3 < N; _j3++) {
        var n = divideScalar(arr[_j3][i], max);
        if (n === 0) {
          continue;
        }

        // from j-th row subtract n-times (i+1)th row
        for (var k = 0; k < N; k++) {
          arr[_j3][k] = subtract(arr[_j3][k], multiplyScalar(n, arr[i + 1][k]));
        }

        // to (i+1)th column add n-times j-th column
        for (var _k = 0; _k < N; _k++) {
          arr[_k][i + 1] = addScalar(arr[_k][i + 1], multiplyScalar(n, arr[_k][_j3]));
        }

        // keep track of transformations
        if (findVectors) {
          for (var _k2 = 0; _k2 < N; _k2++) {
            R[_j3][_k2] = subtract(R[_j3][_k2], multiplyScalar(n, R[i + 1][_k2]));
          }
        }
      }
    }
    return R;
  }

  /**
   * @returns {{values: values, C: Matrix}}
   * @see Press, Wiliams: Numerical recipes in Fortran 77
   * @see https://en.wikipedia.org/wiki/QR_algorithm
   */
  function iterateUntilTriangular(A, N, prec, type, findVectors) {
    var big = type === 'BigNumber';
    var cplx = type === 'Complex';
    var one = big ? bignumber(1) : cplx ? complex(1) : 1;
    if (big) {
      prec = bignumber(prec);
    }

    // The Francis Algorithm
    // The core idea of this algorithm is that doing successive
    // A' = QtAQ transformations will eventually converge to block-
    // upper-triangular with diagonal blocks either 1x1 or 2x2.
    // The Q here is the one from the QR decomposition, A = QR.
    // Since the eigenvalues of a block-upper-triangular matrix are
    // the eigenvalues of its diagonal blocks and we know how to find
    // eigenvalues of a 2x2 matrix, we know the eigenvalues of A.

    var arr = (0, _object.clone)(A);

    // the list of converged eigenvalues
    var lambdas = [];

    // size of arr, which will get smaller as eigenvalues converge
    var n = N;

    // the diagonal of the block-diagonal matrix that turns
    // converged 2x2 matrices into upper triangular matrices
    var Sdiag = [];

    // N×N matrix describing the overall transformation done during the QR algorithm
    var Qtotal = findVectors ? diag(Array(N).fill(one)) : undefined;

    // nxn matrix describing the QR transformations done since last convergence
    var Qpartial = findVectors ? diag(Array(n).fill(one)) : undefined;

    // last eigenvalue converged before this many steps
    var lastConvergenceBefore = 0;
    while (lastConvergenceBefore <= 100) {
      lastConvergenceBefore += 1;

      // TODO if the convergence is slow, do something clever

      // Perform the factorization

      var k = arr[n - 1][n - 1]; // TODO this is apparently a somewhat
      // old-fashioned choice; ideally set close to an eigenvalue, or
      // perhaps better yet switch to the implicit QR version that is sometimes
      // specifically called the "Francis algorithm" that is alluded to
      // in the following TODO. (Or perhaps we switch to an independently
      // optimized third-party package for the linear algebra operations...)

      for (var i = 0; i < n; i++) {
        arr[i][i] = subtract(arr[i][i], k);
      }

      // TODO do an implicit QR transformation
      var _qr = qr(arr),
        Q = _qr.Q,
        R = _qr.R;
      arr = multiply(R, Q);
      for (var _i = 0; _i < n; _i++) {
        arr[_i][_i] = addScalar(arr[_i][_i], k);
      }

      // keep track of transformations
      if (findVectors) {
        Qpartial = multiply(Qpartial, Q);
      }

      // The rightmost diagonal element converged to an eigenvalue
      if (n === 1 || smaller(abs(arr[n - 1][n - 2]), prec)) {
        lastConvergenceBefore = 0;
        lambdas.push(arr[n - 1][n - 1]);

        // keep track of transformations
        if (findVectors) {
          Sdiag.unshift([[1]]);
          inflateMatrix(Qpartial, N);
          Qtotal = multiply(Qtotal, Qpartial);
          if (n > 1) {
            Qpartial = diag(Array(n - 1).fill(one));
          }
        }

        // reduce the matrix size
        n -= 1;
        arr.pop();
        for (var _i2 = 0; _i2 < n; _i2++) {
          arr[_i2].pop();
        }

        // The rightmost diagonal 2x2 block converged
      } else if (n === 2 || smaller(abs(arr[n - 2][n - 3]), prec)) {
        lastConvergenceBefore = 0;
        var ll = eigenvalues2x2(arr[n - 2][n - 2], arr[n - 2][n - 1], arr[n - 1][n - 2], arr[n - 1][n - 1]);
        lambdas.push.apply(lambdas, (0, _toConsumableArray2["default"])(ll));

        // keep track of transformations
        if (findVectors) {
          Sdiag.unshift(jordanBase2x2(arr[n - 2][n - 2], arr[n - 2][n - 1], arr[n - 1][n - 2], arr[n - 1][n - 1], ll[0], ll[1], prec, type));
          inflateMatrix(Qpartial, N);
          Qtotal = multiply(Qtotal, Qpartial);
          if (n > 2) {
            Qpartial = diag(Array(n - 2).fill(one));
          }
        }

        // reduce the matrix size
        n -= 2;
        arr.pop();
        arr.pop();
        for (var _i3 = 0; _i3 < n; _i3++) {
          arr[_i3].pop();
          arr[_i3].pop();
        }
      }
      if (n === 0) {
        break;
      }
    }

    // standard sorting
    lambdas.sort(function (a, b) {
      return +subtract(abs(a), abs(b));
    });

    // the algorithm didn't converge
    if (lastConvergenceBefore > 100) {
      var err = Error('The eigenvalues failed to converge. Only found these eigenvalues: ' + lambdas.join(', '));
      err.values = lambdas;
      err.vectors = [];
      throw err;
    }

    // combine the overall QR transformation Qtotal with the subsequent
    // transformation S that turns the diagonal 2x2 blocks to upper triangular
    var C = findVectors ? multiply(Qtotal, blockDiag(Sdiag, N)) : undefined;
    return {
      values: lambdas,
      C: C
    };
  }

  /**
   * @param {Matrix} A hessenberg-form matrix
   * @param {number} N size of A
   * @param {Matrix} C column transformation matrix that turns A into upper triangular
   * @param {Matrix} R similarity that turns original matrix into A
   * @param {number[]} values array of eigenvalues of A
   * @param {'number'|'BigNumber'|'Complex'} type
   * @returns {number[][]} eigenvalues
   */
  function findEigenvectors(A, N, C, R, values, prec, type) {
    var Cinv = inv(C);
    var U = multiply(Cinv, A, C);
    var big = type === 'BigNumber';
    var cplx = type === 'Complex';
    var zero = big ? bignumber(0) : cplx ? complex(0) : 0;
    var one = big ? bignumber(1) : cplx ? complex(1) : 1;

    // turn values into a kind of "multiset"
    // this way it is easier to find eigenvectors
    var uniqueValues = [];
    var multiplicities = [];
    var _iterator = _createForOfIteratorHelper(values),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var lambda = _step.value;
        var _i4 = indexOf(uniqueValues, lambda, equal);
        if (_i4 === -1) {
          uniqueValues.push(lambda);
          multiplicities.push(1);
        } else {
          multiplicities[_i4] += 1;
        }
      }

      // find eigenvectors by solving U − lambdaE = 0
      // TODO replace with an iterative eigenvector algorithm
      // (this one might fail for imprecise eigenvalues)
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    var vectors = [];
    var len = uniqueValues.length;
    var b = Array(N).fill(zero);
    var E = diag(Array(N).fill(one));
    var _loop = function _loop() {
      var lambda = uniqueValues[i];
      var S = subtract(U, multiply(lambda, E)); // the characteristic matrix

      var solutions = usolveAll(S, b);
      solutions.shift(); // ignore the null vector

      // looks like we missed something, try inverse iteration
      // But if that fails, just presume that the original matrix truly
      // was defective.
      while (solutions.length < multiplicities[i]) {
        var approxVec = inverseIterate(S, N, solutions, prec, type);
        if (approxVec === null) {
          break;
        } // no more vectors were found
        solutions.push(approxVec);
      }

      // Transform back into original array coordinates
      var correction = multiply(inv(R), C);
      solutions = solutions.map(function (v) {
        return multiply(correction, v);
      });
      vectors.push.apply(vectors, (0, _toConsumableArray2["default"])(solutions.map(function (v) {
        return {
          value: lambda,
          vector: flatten(v)
        };
      })));
    };
    for (var i = 0; i < len; i++) {
      _loop();
    }
    return vectors;
  }

  /**
   * Compute the eigenvalues of an 2x2 matrix
   * @return {[number,number]}
   */
  function eigenvalues2x2(a, b, c, d) {
    // lambda_+- = 1/2 trA +- 1/2 sqrt( tr^2 A - 4 detA )
    var trA = addScalar(a, d);
    var detA = subtract(multiplyScalar(a, d), multiplyScalar(b, c));
    var x = multiplyScalar(trA, 0.5);
    var y = multiplyScalar(sqrt(subtract(multiplyScalar(trA, trA), multiplyScalar(4, detA))), 0.5);
    return [addScalar(x, y), subtract(x, y)];
  }

  /**
   * For an 2x2 matrix compute the transformation matrix S,
   * so that SAS^-1 is an upper triangular matrix
   * @return {[[number,number],[number,number]]}
   * @see https://math.berkeley.edu/~ogus/old/Math_54-05/webfoils/jordan.pdf
   * @see http://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
   */
  function jordanBase2x2(a, b, c, d, l1, l2, prec, type) {
    var big = type === 'BigNumber';
    var cplx = type === 'Complex';
    var zero = big ? bignumber(0) : cplx ? complex(0) : 0;
    var one = big ? bignumber(1) : cplx ? complex(1) : 1;

    // matrix is already upper triangular
    // return an identity matrix
    if (smaller(abs(c), prec)) {
      return [[one, zero], [zero, one]];
    }

    // matrix is diagonalizable
    // return its eigenvectors as columns
    if (larger(abs(subtract(l1, l2)), prec)) {
      return [[subtract(l1, d), subtract(l2, d)], [c, c]];
    }

    // matrix is not diagonalizable
    // compute diagonal elements of N = A - lambdaI
    var na = subtract(a, l1);
    var nd = subtract(d, l1);

    // col(N,2) = 0  implies  S = ( col(N,1), e_1 )
    // col(N,2) != 0 implies  S = ( col(N,2), e_2 )

    if (smaller(abs(b), prec) && smaller(abs(nd), prec)) {
      return [[na, one], [c, zero]];
    } else {
      return [[b, zero], [nd, one]];
    }
  }

  /**
   * Enlarge the matrix from nxn to NxN, setting the new
   * elements to 1 on diagonal and 0 elsewhere
   */
  function inflateMatrix(arr, N) {
    // add columns
    for (var i = 0; i < arr.length; i++) {
      var _arr$i;
      (_arr$i = arr[i]).push.apply(_arr$i, (0, _toConsumableArray2["default"])(Array(N - arr[i].length).fill(0)));
    }

    // add rows
    for (var _i5 = arr.length; _i5 < N; _i5++) {
      arr.push(Array(N).fill(0));
      arr[_i5][_i5] = 1;
    }
    return arr;
  }

  /**
   * Create a block-diagonal matrix with the given square matrices on the diagonal
   * @param {Matrix[] | number[][][]} arr array of matrices to be placed on the diagonal
   * @param {number} N the size of the resulting matrix
   */
  function blockDiag(arr, N) {
    var M = [];
    for (var i = 0; i < N; i++) {
      M[i] = Array(N).fill(0);
    }
    var I = 0;
    var _iterator2 = _createForOfIteratorHelper(arr),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var sub = _step2.value;
        var n = sub.length;
        for (var _i6 = 0; _i6 < n; _i6++) {
          for (var j = 0; j < n; j++) {
            M[I + _i6][I + j] = sub[_i6][j];
          }
        }
        I += n;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    return M;
  }

  /**
   * Finds the index of an element in an array using a custom equality function
   * @template T
   * @param {Array<T>} arr array in which to search
   * @param {T} el the element to find
   * @param {function(T, T): boolean} fn the equality function, first argument is an element of `arr`, the second is always `el`
   * @returns {number} the index of `el`, or -1 when it's not in `arr`
   */
  function indexOf(arr, el, fn) {
    for (var i = 0; i < arr.length; i++) {
      if (fn(arr[i], el)) {
        return i;
      }
    }
    return -1;
  }

  /**
   * Provided a near-singular upper-triangular matrix A and a list of vectors,
   * finds an eigenvector of A with the smallest eigenvalue, which is orthogonal
   * to each vector in the list
   * @template T
   * @param {T[][]} A near-singular square matrix
   * @param {number} N dimension
   * @param {T[][]} orthog list of vectors
   * @param {number} prec epsilon
   * @param {'number'|'BigNumber'|'Complex'} type
   * @return {T[] | null} eigenvector
   *
   * @see Numerical Recipes for Fortran 77 – 11.7 Eigenvalues or Eigenvectors by Inverse Iteration
   */
  function inverseIterate(A, N, orthog, prec, type) {
    var largeNum = type === 'BigNumber' ? bignumber(1000) : 1000;
    var b; // the vector

    // you better choose a random vector before I count to five
    var i = 0;
    for (; i < 5; ++i) {
      b = randomOrthogonalVector(N, orthog, type);
      try {
        b = usolve(A, b);
      } catch (_unused) {
        // That direction didn't work, likely because the original matrix
        // was defective. But still make the full number of tries...
        continue;
      }
      if (larger(norm(b), largeNum)) {
        break;
      }
    }
    if (i >= 5) {
      return null; // couldn't find any orthogonal vector in the image
    }

    // you better converge before I count to ten
    i = 0;
    while (true) {
      var c = usolve(A, b);
      if (smaller(norm(orthogonalComplement(b, [c])), prec)) {
        break;
      }
      if (++i >= 10) {
        return null;
      }
      b = normalize(c);
    }
    return b;
  }

  /**
   * Generates a random unit vector of dimension N, orthogonal to each vector in the list
   * @template T
   * @param {number} N dimension
   * @param {T[][]} orthog list of vectors
   * @param {'number'|'BigNumber'|'Complex'} type
   * @returns {T[]} random vector
   */
  function randomOrthogonalVector(N, orthog, type) {
    var big = type === 'BigNumber';
    var cplx = type === 'Complex';

    // generate random vector with the correct type
    var v = Array(N).fill(0).map(function (_) {
      return 2 * Math.random() - 1;
    });
    if (big) {
      v = v.map(function (n) {
        return bignumber(n);
      });
    }
    if (cplx) {
      v = v.map(function (n) {
        return complex(n);
      });
    }

    // project to orthogonal complement
    v = orthogonalComplement(v, orthog);

    // normalize
    return normalize(v, type);
  }

  /**
   * Project vector v to the orthogonal complement of an array of vectors
   */
  function orthogonalComplement(v, orthog) {
    var vectorShape = size(v);
    var _iterator3 = _createForOfIteratorHelper(orthog),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var w = _step3.value;
        w = reshape(w, vectorShape); // make sure this is just a vector computation
        // v := v − (w, v)/|w|^2 w
        v = subtract(v, multiply(divideScalar(dot(w, v), dot(w, w)), w));
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return v;
  }

  /**
   * Calculate the norm of a vector.
   * We can't use math.norm because factory can't handle circular dependency.
   * Seriously, I'm really fed up with factory.
   */
  function norm(v) {
    return abs(sqrt(dot(v, v)));
  }

  /**
   * Normalize a vector
   * @template T
   * @param {T[]} v
   * @param {'number'|'BigNumber'|'Complex'} type
   * @returns {T[]} normalized vec
   */
  function normalize(v, type) {
    var big = type === 'BigNumber';
    var cplx = type === 'Complex';
    var one = big ? bignumber(1) : cplx ? complex(1) : 1;
    return multiply(divideScalar(one, norm(v)), v);
  }
  return complexEigs;
}