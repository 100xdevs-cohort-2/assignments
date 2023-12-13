import { factory } from '../../utils/factory.js';
import { isNumber } from '../../utils/is.js';
var name = 'stirlingS2';
var dependencies = ['typed', 'addScalar', 'subtractScalar', 'multiplyScalar', 'divideScalar', 'pow', 'factorial', 'combinations', 'isNegative', 'isInteger', 'number', '?bignumber', 'larger'];
export var createStirlingS2 = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    addScalar,
    subtractScalar,
    multiplyScalar,
    divideScalar,
    pow,
    factorial,
    combinations,
    isNegative,
    isInteger,
    number,
    bignumber,
    larger
  } = _ref;
  var smallCache = [];
  var bigCache = [];
  /**
   * The Stirling numbers of the second kind, counts the number of ways to partition
   * a set of n labelled objects into k nonempty unlabelled subsets.
   * stirlingS2 only takes integer arguments.
   * The following condition must be enforced: k <= n.
   *
   *  If n = k or k = 1 <= n, then s(n,k) = 1
   *  If k = 0 < n, then s(n,k) = 0
   *
   * Note that if either n or k is supplied as a BigNumber, the result will be
   * as well.
   *
   * Syntax:
   *
   *   math.stirlingS2(n, k)
   *
   * Examples:
   *
   *    math.stirlingS2(5, 3) //returns 25
   *
   * See also:
   *
   *    bellNumbers
   *
   * @param {Number | BigNumber} n    Total number of objects in the set
   * @param {Number | BigNumber} k    Number of objects in the subset
   * @return {Number | BigNumber}     S(n,k)
   */
  return typed(name, {
    'number | BigNumber, number | BigNumber': function numberBigNumberNumberBigNumber(n, k) {
      if (!isInteger(n) || isNegative(n) || !isInteger(k) || isNegative(k)) {
        throw new TypeError('Non-negative integer value expected in function stirlingS2');
      } else if (larger(k, n)) {
        throw new TypeError('k must be less than or equal to n in function stirlingS2');
      }
      var big = !(isNumber(n) && isNumber(k));
      var cache = big ? bigCache : smallCache;
      var make = big ? bignumber : number;
      var nn = number(n);
      var nk = number(k);
      /* See if we already have the value: */
      if (cache[nn] && cache[nn].length > nk) {
        return cache[nn][nk];
      }
      /* Fill the cache */
      for (var m = 0; m <= nn; ++m) {
        if (!cache[m]) {
          cache[m] = [m === 0 ? make(1) : make(0)];
        }
        if (m === 0) continue;
        var row = cache[m];
        var prev = cache[m - 1];
        for (var i = row.length; i <= m && i <= nk; ++i) {
          if (i === m) {
            row[i] = 1;
          } else {
            row[i] = addScalar(multiplyScalar(make(i), prev[i]), prev[i - 1]);
          }
        }
      }
      return cache[nn][nk];
    }
  });
});