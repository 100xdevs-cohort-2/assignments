import { arraySize } from '../../utils/array.js';
import { factory } from '../../utils/factory.js';
import { isMatrix } from '../../utils/is.js';
var name = 'ifft';
var dependencies = ['typed', 'fft', 'dotDivide', 'conj'];
export var createIfft = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    fft,
    dotDivide,
    conj
  } = _ref;
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
      var size = isMatrix(arr) ? arr.size() : arraySize(arr);
      return dotDivide(conj(fft(conj(arr))), size.reduce((acc, curr) => acc * curr, 1));
    }
  });
});