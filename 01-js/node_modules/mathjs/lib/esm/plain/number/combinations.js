import { isInteger } from '../../utils/number.js';
import { product } from '../../utils/product.js';
export function combinationsNumber(n, k) {
  if (!isInteger(n) || n < 0) {
    throw new TypeError('Positive integer value expected in function combinations');
  }
  if (!isInteger(k) || k < 0) {
    throw new TypeError('Positive integer value expected in function combinations');
  }
  if (k > n) {
    throw new TypeError('k must be less than or equal to n');
  }
  var nMinusk = n - k;
  var answer = 1;
  var firstnumerator = k < nMinusk ? nMinusk + 1 : k + 1;
  var nextdivisor = 2;
  var lastdivisor = k < nMinusk ? k : nMinusk;
  // balance multiplications and divisions to try to keep intermediate values
  // in exact-integer range as long as possible
  for (var nextnumerator = firstnumerator; nextnumerator <= n; ++nextnumerator) {
    answer *= nextnumerator;
    while (nextdivisor <= lastdivisor && answer % nextdivisor === 0) {
      answer /= nextdivisor;
      ++nextdivisor;
    }
  }
  // for big n, k, floating point may have caused weirdness in remainder
  if (nextdivisor <= lastdivisor) {
    answer /= product(nextdivisor, lastdivisor);
  }
  return answer;
}
combinationsNumber.signature = 'number, number';