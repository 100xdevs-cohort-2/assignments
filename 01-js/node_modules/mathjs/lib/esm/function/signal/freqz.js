import { factory } from '../../utils/factory.js';
var name = 'freqz';
var dependencies = ['typed', 'add', 'multiply', 'Complex', 'divide', 'matrix'];
export var createFreqz = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    add,
    multiply,
    Complex,
    divide,
    matrix
  } = _ref;
  /**
     * Calculates the frequency response of a filter given its numerator and denominator coefficients.
     *
     * Syntax:
     *    math.freqz(b, a)
     *    math.freqz(b, a, w)
     *
     * Examples:
     *   math.freqz([1, 2], [1, 2, 3], 4) // returns { h: [0.5 + 0i, 0.4768589245763655 + 0.2861153547458193i, 0.25000000000000006 + 0.75i, -0.770976571635189 + 0.4625859429811135i], w: [0, 0.7853981633974483, 1.5707963267948966, 2.356194490192345 ] }
     *   math.freqz([1, 2], [1, 2, 3], [0, 1]) // returns { h: [0.5 + 0i, 0.45436781 + 0.38598051i], w: [0, 1] }
     *
     * See also:
     *  zpk2tf
     *
     * @param {Array.<number>} b The numerator coefficients of the filter.
     * @param {Array.<number>} a The denominator coefficients of the filter.
     * @param {Array.<number>} [w] A vector of frequencies (in radians/sample) at which the frequency response is to be computed or the number of points to compute (if a number is not provided, the default is 512 points)
     * @returns {Object} An object with two properties: h, a vector containing the complex frequency response, and w, a vector containing the normalized frequencies (in radians/sample) at which the response was computed.
     *
     *
     */
  return typed(name, {
    'Array, Array': function ArrayArray(b, a) {
      var w = createBins(512);
      return _freqz(b, a, w);
    },
    'Array, Array, Array': function ArrayArrayArray(b, a, w) {
      return _freqz(b, a, w);
    },
    'Array, Array, number': function ArrayArrayNumber(b, a, w) {
      if (w < 0) {
        throw new Error('w must be a positive number');
      }
      var w2 = createBins(w);
      return _freqz(b, a, w2);
    },
    'Matrix, Matrix': function MatrixMatrix(b, a) {
      // console.log('here')
      var _w = createBins(512);
      var {
        w,
        h
      } = _freqz(b.valueOf(), a.valueOf(), _w);
      return {
        w: matrix(w),
        h: matrix(h)
      };
    },
    'Matrix, Matrix, Matrix': function MatrixMatrixMatrix(b, a, w) {
      var {
        h
      } = _freqz(b.valueOf(), a.valueOf(), w.valueOf());
      return {
        h: matrix(h),
        w: matrix(w)
      };
    },
    'Matrix, Matrix, number': function MatrixMatrixNumber(b, a, w) {
      if (w < 0) {
        throw new Error('w must be a positive number');
      }
      var _w = createBins(w);
      var {
        h
      } = _freqz(b.valueOf(), a.valueOf(), _w);
      return {
        h: matrix(h),
        w: matrix(_w)
      };
    }
  });
  function _freqz(b, a, w) {
    var num = [];
    var den = [];
    for (var i = 0; i < w.length; i++) {
      var sumNum = Complex(0, 0);
      var sumDen = Complex(0, 0);
      for (var j = 0; j < b.length; j++) {
        sumNum = add(sumNum, multiply(b[j], Complex(Math.cos(-j * w[i]), Math.sin(-j * w[i]))));
      }
      for (var _j = 0; _j < a.length; _j++) {
        sumDen = add(sumDen, multiply(a[_j], Complex(Math.cos(-_j * w[i]), Math.sin(-_j * w[i]))));
      }
      num.push(sumNum);
      den.push(sumDen);
    }
    var h = [];
    for (var _i = 0; _i < num.length; _i++) {
      h.push(divide(num[_i], den[_i]));
    }
    return {
      h,
      w
    };
  }
  function createBins(n) {
    var bins = [];
    for (var i = 0; i < n; i++) {
      bins.push(i / n * Math.PI);
    }
    return bins;
  }
});