"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combinationsNumber = combinationsNumber;
var _number = require("../../utils/number.js");
var _product = require("../../utils/product.js");
function combinationsNumber(n, k) {
  if (!(0, _number.isInteger)(n) || n < 0) {
    throw new TypeError('Positive integer value expected in function combinations');
  }
  if (!(0, _number.isInteger)(k) || k < 0) {
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
    answer /= (0, _product.product)(nextdivisor, lastdivisor);
  }
  return answer;
}
combinationsNumber.signature = 'number, number';