"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIfft = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var name = 'ifft';
var dependencies = ['typed', 'fft', 'dotDivide', 'conj'];
var createIfft = exports.createIfft = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    fft = _ref.fft,
    dotDivide = _ref.dotDivide,
    conj = _ref.conj;
  /**
   * Calculate N-dimensional inverse fourier transform
   *
   * Syntax:
   *
   *     math.ifft(arr)
   *
   * Examples:
   *
   *    math.ifft([[2, 2], [0, 0]]) // returns [[{re:1, im:0}, {re:0, im:0}], [{re:1, im:0}, {re:0, im:0}]]
   *
   * See Also:
   *
   *      fft
   *
   * @param {Array | Matrix} arr    An array or matrix
   * @return {Array | Matrix}       N-dimensional fourier transformation of the array
   */
  return typed(name, {
    'Array | Matrix': function ArrayMatrix(arr) {
      var size = (0, _is.isMatrix)(arr) ? arr.size() : (0, _array.arraySize)(arr);
      return dotDivide(conj(fft(conj(arr))), size.reduce(function (acc, curr) {
        return acc * curr;
      }, 1));
    }
  });
});