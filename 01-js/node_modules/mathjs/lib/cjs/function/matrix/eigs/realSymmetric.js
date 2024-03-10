"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRealSymmetric = createRealSymmetric;
var _object = require("../../../utils/object.js");
function createRealSymmetric(_ref) {
  var config = _ref.config,
    addScalar = _ref.addScalar,
    subtract = _ref.subtract,
    abs = _ref.abs,
    atan = _ref.atan,
    cos = _ref.cos,
    sin = _ref.sin,
    multiplyScalar = _ref.multiplyScalar,
    inv = _ref.inv,
    bignumber = _ref.bignumber,
    multiply = _ref.multiply,
    add = _ref.add;
  /**
   * @param {number[] | BigNumber[]} arr
   * @param {number} N
   * @param {number} prec
   * @param {'number' | 'BigNumber'} type
   */
  function main(arr, N) {
    var prec = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config.epsilon;
    var type = arguments.length > 3 ? arguments[3] : undefined;
    var computeVectors = arguments.length > 4 ? arguments[4] : undefined;
    if (type === 'number') {
      return diag(arr, prec, computeVectors);
    }
    if (type === 'BigNumber') {
      return diagBig(arr, prec, computeVectors);
    }
    throw TypeError('Unsupported data type: ' + type);
  }

  // diagonalization implementation for number (efficient)
  function diag(x, precision, computeVectors) {
    var N = x.length;
    var e0 = Math.abs(precision / N);
    var psi;
    var Sij;
    if (computeVectors) {
      Sij = new Array(N);
      // Sij is Identity Matrix
      for (var i = 0; i < N; i++) {
        Sij[i] = Array(N).fill(0);
        Sij[i][i] = 1.0;
      }
    }
    // initial error
    var Vab = getAij(x);
    while (Math.abs(Vab[1]) >= Math.abs(e0)) {
      var _i = Vab[0][0];
      var j = Vab[0][1];
      psi = getTheta(x[_i][_i], x[j][j], x[_i][j]);
      x = x1(x, psi, _i, j);
      if (computeVectors) Sij = Sij1(Sij, psi, _i, j);
      Vab = getAij(x);
    }
    var Ei = Array(N).fill(0); // eigenvalues
    for (var _i2 = 0; _i2 < N; _i2++) {
      Ei[_i2] = x[_i2][_i2];
    }
    return sorting((0, _object.clone)(Ei), Sij, computeVectors);
  }

  // diagonalization implementation for bigNumber
  function diagBig(x, precision, computeVectors) {
    var N = x.length;
    var e0 = abs(precision / N);
    var psi;
    var Sij;
    if (computeVectors) {
      Sij = new Array(N);
      // Sij is Identity Matrix
      for (var i = 0; i < N; i++) {
        Sij[i] = Array(N).fill(0);
        Sij[i][i] = 1.0;
      }
    }
    // initial error
    var Vab = getAijBig(x);
    while (abs(Vab[1]) >= abs(e0)) {
      var _i3 = Vab[0][0];
      var j = Vab[0][1];
      psi = getThetaBig(x[_i3][_i3], x[j][j], x[_i3][j]);
      x = x1Big(x, psi, _i3, j);
      if (computeVectors) Sij = Sij1Big(Sij, psi, _i3, j);
      Vab = getAijBig(x);
    }
    var Ei = Array(N).fill(0); // eigenvalues
    for (var _i4 = 0; _i4 < N; _i4++) {
      Ei[_i4] = x[_i4][_i4];
    }
    // return [clone(Ei), clone(Sij)]
    return sorting((0, _object.clone)(Ei), Sij, computeVectors);
  }

  // get angle
  function getTheta(aii, ajj, aij) {
    var denom = ajj - aii;
    if (Math.abs(denom) <= config.epsilon) {
      return Math.PI / 4.0;
    } else {
      return 0.5 * Math.atan(2.0 * aij / (ajj - aii));
    }
  }

  // get angle
  function getThetaBig(aii, ajj, aij) {
    var denom = subtract(ajj, aii);
    if (abs(denom) <= config.epsilon) {
      return bignumber(-1).acos().div(4);
    } else {
      return multiplyScalar(0.5, atan(multiply(2.0, aij, inv(denom))));
    }
  }

  // update eigvec
  function Sij1(Sij, theta, i, j) {
    var N = Sij.length;
    var c = Math.cos(theta);
    var s = Math.sin(theta);
    var Ski = Array(N).fill(0);
    var Skj = Array(N).fill(0);
    for (var k = 0; k < N; k++) {
      Ski[k] = c * Sij[k][i] - s * Sij[k][j];
      Skj[k] = s * Sij[k][i] + c * Sij[k][j];
    }
    for (var _k = 0; _k < N; _k++) {
      Sij[_k][i] = Ski[_k];
      Sij[_k][j] = Skj[_k];
    }
    return Sij;
  }
  // update eigvec for overlap
  function Sij1Big(Sij, theta, i, j) {
    var N = Sij.length;
    var c = cos(theta);
    var s = sin(theta);
    var Ski = Array(N).fill(bignumber(0));
    var Skj = Array(N).fill(bignumber(0));
    for (var k = 0; k < N; k++) {
      Ski[k] = subtract(multiplyScalar(c, Sij[k][i]), multiplyScalar(s, Sij[k][j]));
      Skj[k] = addScalar(multiplyScalar(s, Sij[k][i]), multiplyScalar(c, Sij[k][j]));
    }
    for (var _k2 = 0; _k2 < N; _k2++) {
      Sij[_k2][i] = Ski[_k2];
      Sij[_k2][j] = Skj[_k2];
    }
    return Sij;
  }

  // update matrix
  function x1Big(Hij, theta, i, j) {
    var N = Hij.length;
    var c = bignumber(cos(theta));
    var s = bignumber(sin(theta));
    var c2 = multiplyScalar(c, c);
    var s2 = multiplyScalar(s, s);
    var Aki = Array(N).fill(bignumber(0));
    var Akj = Array(N).fill(bignumber(0));
    // 2cs Hij
    var csHij = multiply(bignumber(2), c, s, Hij[i][j]);
    //  Aii
    var Aii = addScalar(subtract(multiplyScalar(c2, Hij[i][i]), csHij), multiplyScalar(s2, Hij[j][j]));
    var Ajj = add(multiplyScalar(s2, Hij[i][i]), csHij, multiplyScalar(c2, Hij[j][j]));
    // 0  to i
    for (var k = 0; k < N; k++) {
      Aki[k] = subtract(multiplyScalar(c, Hij[i][k]), multiplyScalar(s, Hij[j][k]));
      Akj[k] = addScalar(multiplyScalar(s, Hij[i][k]), multiplyScalar(c, Hij[j][k]));
    }
    // Modify Hij
    Hij[i][i] = Aii;
    Hij[j][j] = Ajj;
    Hij[i][j] = bignumber(0);
    Hij[j][i] = bignumber(0);
    // 0  to i
    for (var _k3 = 0; _k3 < N; _k3++) {
      if (_k3 !== i && _k3 !== j) {
        Hij[i][_k3] = Aki[_k3];
        Hij[_k3][i] = Aki[_k3];
        Hij[j][_k3] = Akj[_k3];
        Hij[_k3][j] = Akj[_k3];
      }
    }
    return Hij;
  }

  // update matrix
  function x1(Hij, theta, i, j) {
    var N = Hij.length;
    var c = Math.cos(theta);
    var s = Math.sin(theta);
    var c2 = c * c;
    var s2 = s * s;
    var Aki = Array(N).fill(0);
    var Akj = Array(N).fill(0);
    //  Aii
    var Aii = c2 * Hij[i][i] - 2 * c * s * Hij[i][j] + s2 * Hij[j][j];
    var Ajj = s2 * Hij[i][i] + 2 * c * s * Hij[i][j] + c2 * Hij[j][j];
    // 0  to i
    for (var k = 0; k < N; k++) {
      Aki[k] = c * Hij[i][k] - s * Hij[j][k];
      Akj[k] = s * Hij[i][k] + c * Hij[j][k];
    }
    // Modify Hij
    Hij[i][i] = Aii;
    Hij[j][j] = Ajj;
    Hij[i][j] = 0;
    Hij[j][i] = 0;
    // 0  to i
    for (var _k4 = 0; _k4 < N; _k4++) {
      if (_k4 !== i && _k4 !== j) {
        Hij[i][_k4] = Aki[_k4];
        Hij[_k4][i] = Aki[_k4];
        Hij[j][_k4] = Akj[_k4];
        Hij[_k4][j] = Akj[_k4];
      }
    }
    return Hij;
  }

  // get max off-diagonal value from Upper Diagonal
  function getAij(Mij) {
    var N = Mij.length;
    var maxMij = 0;
    var maxIJ = [0, 1];
    for (var i = 0; i < N; i++) {
      for (var j = i + 1; j < N; j++) {
        if (Math.abs(maxMij) < Math.abs(Mij[i][j])) {
          maxMij = Math.abs(Mij[i][j]);
          maxIJ = [i, j];
        }
      }
    }
    return [maxIJ, maxMij];
  }

  // get max off-diagonal value from Upper Diagonal
  function getAijBig(Mij) {
    var N = Mij.length;
    var maxMij = 0;
    var maxIJ = [0, 1];
    for (var i = 0; i < N; i++) {
      for (var j = i + 1; j < N; j++) {
        if (abs(maxMij) < abs(Mij[i][j])) {
          maxMij = abs(Mij[i][j]);
          maxIJ = [i, j];
        }
      }
    }
    return [maxIJ, maxMij];
  }

  // sort results
  function sorting(E, S, computeVectors) {
    var N = E.length;
    var values = Array(N);
    var vecs;
    if (computeVectors) {
      vecs = Array(N);
      for (var k = 0; k < N; k++) {
        vecs[k] = Array(N);
      }
    }
    for (var i = 0; i < N; i++) {
      var minID = 0;
      var minE = E[0];
      for (var j = 0; j < E.length; j++) {
        if (abs(E[j]) < abs(minE)) {
          minID = j;
          minE = E[minID];
        }
      }
      values[i] = E.splice(minID, 1)[0];
      if (computeVectors) {
        for (var _k5 = 0; _k5 < N; _k5++) {
          vecs[i][_k5] = S[_k5][minID];
          S[_k5].splice(minID, 1);
        }
      }
    }
    if (!computeVectors) return {
      values: values
    };
    var eigenvectors = vecs.map(function (vector, i) {
      return {
        value: values[i],
        vector: vector
      };
    });
    return {
      values: values,
      eigenvectors: eigenvectors
    };
  }
  return main;
}