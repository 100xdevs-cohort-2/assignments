"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createZpk2tf = void 0;
var _factory = require("../../utils/factory.js");
var name = 'zpk2tf';
var dependencies = ['typed', 'add', 'multiply', 'Complex', 'number'];
var createZpk2tf = exports.createZpk2tf = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    add = _ref.add,
    multiply = _ref.multiply,
    Complex = _ref.Complex,
    number = _ref.number;
  /**
     * Compute the transfer function of a zero-pole-gain model.
     *
     * Syntax:
     *      math.zpk2tf(z, p, k)
     *
     * Examples:
     *    math.zpk2tf([1, 2], [-1, -2], 1)    // returns [[1, -3, 2], [1, 3, 2]]
     *
     * See also:
     *   freqz
     *
     * @param {Array} z Array of zeros values
     * @param {Array} p Array of poles values
     * @param {number} k Gain value
     * @return {Array} Two dimensional array containing the numerator (first row) and denominator (second row) polynomials
     *
     */
  return typed(name, {
    'Array,Array,number': function ArrayArrayNumber(z, p, k) {
      return _zpk2tf(z, p, k);
    },
    'Array,Array': function ArrayArray(z, p) {
      return _zpk2tf(z, p, 1);
    },
    'Matrix,Matrix,number': function MatrixMatrixNumber(z, p, k) {
      return _zpk2tf(z.valueOf(), p.valueOf(), k);
    },
    'Matrix,Matrix': function MatrixMatrix(z, p) {
      return _zpk2tf(z.valueOf(), p.valueOf(), 1);
    }
  });
  function _zpk2tf(z, p, k) {
    // if z is bignumber, convert it to number
    if (z.some(function (el) {
      return el.type === 'BigNumber';
    })) {
      z = z.map(function (el) {
        return number(el);
      });
    }
    // if p is bignumber, convert it to number
    if (p.some(function (el) {
      return el.type === 'BigNumber';
    })) {
      p = p.map(function (el) {
        return number(el);
      });
    }
    var num = [Complex(1, 0)];
    var den = [Complex(1, 0)];
    for (var i = 0; i < z.length; i++) {
      var zero = z[i];
      if (typeof zero === 'number') zero = Complex(zero, 0);
      num = _multiply(num, [Complex(1, 0), Complex(-zero.re, -zero.im)]);
    }
    for (var _i = 0; _i < p.length; _i++) {
      var pole = p[_i];
      if (typeof pole === 'number') pole = Complex(pole, 0);
      den = _multiply(den, [Complex(1, 0), Complex(-pole.re, -pole.im)]);
    }
    for (var _i2 = 0; _i2 < num.length; _i2++) {
      num[_i2] = multiply(num[_i2], k);
    }
    return [num, den];
  }
  function _multiply(a, b) {
    var c = [];
    for (var i = 0; i < a.length + b.length - 1; i++) {
      c[i] = Complex(0, 0);
      for (var j = 0; j < a.length; j++) {
        if (i - j >= 0 && i - j < b.length) {
          c[i] = add(c[i], multiply(a[j], b[i - j]));
        }
      }
    }
    return c;
  }
});