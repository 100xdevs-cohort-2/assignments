"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBoolean = void 0;
var _factory = require("../utils/factory.js");
var _collection = require("../utils/collection.js");
var name = 'boolean';
var dependencies = ['typed'];
var createBoolean = exports.createBoolean = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Create a boolean or convert a string or number to a boolean.
   * In case of a number, `true` is returned for non-zero numbers, and `false` in
   * case of zero.
   * Strings can be `'true'` or `'false'`, or can contain a number.
   * When value is a matrix, all elements will be converted to boolean.
   *
   * Syntax:
   *
   *    math.boolean(x)
   *
   * Examples:
   *
   *    math.boolean(0)     // returns false
   *    math.boolean(1)     // returns true
   *    math.boolean(-3)     // returns true
   *    math.boolean('true')     // returns true
   *    math.boolean('false')     // returns false
   *    math.boolean([1, 0, 1, 1])     // returns [true, false, true, true]
   *
   * See also:
   *
   *    bignumber, complex, index, matrix, string, unit
   *
   * @param {string | number | boolean | Array | Matrix | null} value  A value of any type
   * @return {boolean | Array | Matrix} The boolean value
   */
  return typed(name, {
    '': function _() {
      return false;
    },
    "boolean": function boolean(x) {
      return x;
    },
    number: function number(x) {
      return !!x;
    },
    "null": function _null(x) {
      return false;
    },
    BigNumber: function BigNumber(x) {
      return !x.isZero();
    },
    string: function string(x) {
      // try case insensitive
      var lcase = x.toLowerCase();
      if (lcase === 'true') {
        return true;
      } else if (lcase === 'false') {
        return false;
      }

      // test whether value is a valid number
      var num = Number(x);
      if (x !== '' && !isNaN(num)) {
        return !!num;
      }
      throw new Error('Cannot convert "' + x + '" to a boolean');
    },
    'Array | Matrix': typed.referToSelf(function (self) {
      return function (x) {
        return (0, _collection.deepMap)(x, self);
      };
    })
  });
});