import { factory } from '../../../utils/factory.js';
import { deepMap } from '../../../utils/collection.js';
var name = 'bignumber';
var dependencies = ['typed', 'BigNumber'];
export var createBignumber = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    BigNumber
  } = _ref;
  /**
   * Create a BigNumber, which can store numbers with arbitrary precision.
   * When a matrix is provided, all elements will be converted to BigNumber.
   *
   * Syntax:
   *
   *    math.bignumber(x)
   *
   * Examples:
   *
   *    0.1 + 0.2                                  // returns number 0.30000000000000004
   *    math.bignumber(0.1) + math.bignumber(0.2)  // returns BigNumber 0.3
   *
   *
   *    7.2e500                                    // returns number Infinity
   *    math.bignumber('7.2e500')                  // returns BigNumber 7.2e500
   *
   * See also:
   *
   *    boolean, complex, index, matrix, string, unit
   *
   * @param {number | string | Fraction | BigNumber | Array | Matrix | boolean | null} [value]  Value for the big number,
   *                                                    0 by default.
   * @returns {BigNumber} The created bignumber
   */
  return typed('bignumber', {
    '': function _() {
      return new BigNumber(0);
    },
    number: function number(x) {
      // convert to string to prevent errors in case of >15 digits
      return new BigNumber(x + '');
    },
    string: function string(x) {
      var wordSizeSuffixMatch = x.match(/(0[box][0-9a-fA-F]*)i([0-9]*)/);
      if (wordSizeSuffixMatch) {
        // x has a word size suffix
        var size = wordSizeSuffixMatch[2];
        var n = BigNumber(wordSizeSuffixMatch[1]);
        var twoPowSize = new BigNumber(2).pow(Number(size));
        if (n.gt(twoPowSize.sub(1))) {
          throw new SyntaxError("String \"".concat(x, "\" is out of range"));
        }
        var twoPowSizeSubOne = new BigNumber(2).pow(Number(size) - 1);
        if (n.gte(twoPowSizeSubOne)) {
          return n.sub(twoPowSize);
        } else {
          return n;
        }
      }
      return new BigNumber(x);
    },
    BigNumber: function BigNumber(x) {
      // we assume a BigNumber is immutable
      return x;
    },
    Unit: typed.referToSelf(self => x => {
      var clone = x.clone();
      clone.value = self(x.value);
      return clone;
    }),
    Fraction: function Fraction(x) {
      return new BigNumber(x.n).div(x.d).times(x.s);
    },
    null: function _null(x) {
      return new BigNumber(0);
    },
    'Array | Matrix': typed.referToSelf(self => x => deepMap(x, self))
  });
});