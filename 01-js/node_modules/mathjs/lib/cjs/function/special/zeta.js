"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createZeta = void 0;
var _factory = require("../../utils/factory.js");
var name = 'zeta';
var dependencies = ['typed', 'config', 'multiply', 'pow', 'divide', 'factorial', 'equal', 'smallerEq', 'isNegative', 'gamma', 'sin', 'subtract', 'add', '?Complex', '?BigNumber', 'pi'];
var createZeta = exports.createZeta = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    multiply = _ref.multiply,
    pow = _ref.pow,
    divide = _ref.divide,
    factorial = _ref.factorial,
    equal = _ref.equal,
    smallerEq = _ref.smallerEq,
    isNegative = _ref.isNegative,
    gamma = _ref.gamma,
    sin = _ref.sin,
    subtract = _ref.subtract,
    add = _ref.add,
    Complex = _ref.Complex,
    _BigNumber = _ref.BigNumber,
    pi = _ref.pi;
  /**
   * Compute the Riemann Zeta function of a value using an infinite series for
   * all of the complex plane using Riemann's Functional equation.
   *
   * Based off the paper by Xavier Gourdon and Pascal Sebah
   * ( http://numbers.computation.free.fr/Constants/Miscellaneous/zetaevaluations.pdf )
   *
   * Implementation and slight modification by Anik Patel
   *
   * Note: the implementation is accurate up to about 6 digits.
   *
   * Syntax:
   *
   *    math.zeta(n)
   *
   * Examples:
   *
   *    math.zeta(5)       // returns 1.0369277551433895
   *    math.zeta(-0.5)    // returns -0.2078862249773449
   *    math.zeta(math.i)  // returns 0.0033002236853253153 - 0.4181554491413212i
   *
   * See also:
   *    erf
   *
   * @param {number | Complex | BigNumber} s   A Real, Complex or BigNumber parameter to the Riemann Zeta Function
   * @return {number | Complex | BigNumber}    The Riemann Zeta of `s`
   */
  return typed(name, {
    number: function number(s) {
      return zetaNumeric(s, function (value) {
        return value;
      }, function () {
        return 20;
      });
    },
    BigNumber: function BigNumber(s) {
      return zetaNumeric(s, function (value) {
        return new _BigNumber(value);
      }, function () {
        // epsilon is for example 1e-12. Extract the positive exponent 12 from that
        return Math.abs(Math.log10(config.epsilon));
      });
    },
    Complex: zetaComplex
  });

  /**
   * @param {number | BigNumber} s
   * @param {(value: number) => number | BigNumber} createValue
   * @param {(value: number | BigNumber | Complex) => number} determineDigits
   * @returns {number | BigNumber}
   */
  function zetaNumeric(s, createValue, determineDigits) {
    if (equal(s, 0)) {
      return createValue(-0.5);
    }
    if (equal(s, 1)) {
      return createValue(NaN);
    }
    if (!isFinite(s)) {
      return isNegative(s) ? createValue(NaN) : createValue(1);
    }
    return zeta(s, createValue, determineDigits, function (s) {
      return s;
    });
  }

  /**
   * @param {Complex} s
   * @returns {Complex}
   */
  function zetaComplex(s) {
    if (s.re === 0 && s.im === 0) {
      return new Complex(-0.5);
    }
    if (s.re === 1) {
      return new Complex(NaN, NaN);
    }
    if (s.re === Infinity && s.im === 0) {
      return new Complex(1);
    }
    if (s.im === Infinity || s.re === -Infinity) {
      return new Complex(NaN, NaN);
    }
    return zeta(s, function (value) {
      return value;
    }, function (s) {
      return Math.round(1.3 * 15 + 0.9 * Math.abs(s.im));
    }, function (s) {
      return s.re;
    });
  }

  /**
   * @param {number | BigNumber | Complex} s
   * @param {(value: number) => number | BigNumber | Complex} createValue
   * @param {(value: number | BigNumber | Complex) => number} determineDigits
   * @param {(value: number | BigNumber | Complex) => number} getRe
   * @returns {*|number}
   */
  function zeta(s, createValue, determineDigits, getRe) {
    var n = determineDigits(s);
    if (getRe(s) > -(n - 1) / 2) {
      return f(s, createValue(n), createValue);
    } else {
      // Function Equation for reflection to x < 1
      var c = multiply(pow(2, s), pow(createValue(pi), subtract(s, 1)));
      c = multiply(c, sin(multiply(divide(createValue(pi), 2), s)));
      c = multiply(c, gamma(subtract(1, s)));
      return multiply(c, zeta(subtract(1, s), createValue, determineDigits, getRe));
    }
  }

  /**
   * Calculate a portion of the sum
   * @param {number | BigNumber} k   a positive integer
   * @param {number | BigNumber} n   a positive integer
   * @return {number}    the portion of the sum
   **/
  function d(k, n) {
    var S = k;
    for (var j = k; smallerEq(j, n); j = add(j, 1)) {
      var factor = divide(multiply(factorial(add(n, subtract(j, 1))), pow(4, j)), multiply(factorial(subtract(n, j)), factorial(multiply(2, j))));
      S = add(S, factor);
    }
    return multiply(n, S);
  }

  /**
   * Calculate the positive Riemann Zeta function
   * @param {number} s   a real or complex number with s.re > 1
   * @param {number} n   a positive integer
   * @param {(number) => number | BigNumber | Complex} createValue
   * @return {number}    Riemann Zeta of s
   **/
  function f(s, n, createValue) {
    var c = divide(1, multiply(d(createValue(0), n), subtract(1, pow(2, subtract(1, s)))));
    var S = createValue(0);
    for (var k = createValue(1); smallerEq(k, n); k = add(k, 1)) {
      S = add(S, divide(multiply(Math.pow(-1, k - 1), d(k, n)), pow(k, s)));
    }
    return multiply(c, S);
  }
});