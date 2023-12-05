"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInvmod = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _factory = require("../../utils/factory.js");
var name = 'invmod';
var dependencies = ['typed', 'config', 'BigNumber', 'xgcd', 'equal', 'smaller', 'mod', 'add', 'isInteger'];
var createInvmod = exports.createInvmod = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    BigNumber = _ref.BigNumber,
    xgcd = _ref.xgcd,
    equal = _ref.equal,
    smaller = _ref.smaller,
    mod = _ref.mod,
    add = _ref.add,
    isInteger = _ref.isInteger;
  /**
   * Calculate the (modular) multiplicative inverse of a modulo b. Solution to the equation `ax ≣ 1 (mod b)`
   * See https://en.wikipedia.org/wiki/Modular_multiplicative_inverse.
   *
   * Syntax:
   *
   *    math.invmod(a, b)
   *
   * Examples:
   *
   *    math.invmod(8, 12)             // returns NaN
   *    math.invmod(7, 13)             // returns 2
   *    math.invmod(15151, 15122)      // returns 10429
   *
   * See also:
   *
   *    gcd, xgcd
   *
   * @param {number | BigNumber} a  An integer number
   * @param {number | BigNumber} b  An integer number
   * @return {number | BigNumber }  Returns an integer number
   *                              where `invmod(a,b)*a ≣ 1 (mod b)`
   */
  return typed(name, {
    'number, number': invmod,
    'BigNumber, BigNumber': invmod
  });
  function invmod(a, b) {
    if (!isInteger(a) || !isInteger(b)) throw new Error('Parameters in function invmod must be integer numbers');
    a = mod(a, b);
    if (equal(b, 0)) throw new Error('Divisor must be non zero');
    var res = xgcd(a, b);
    res = res.valueOf();
    var _res = res,
      _res2 = (0, _slicedToArray2["default"])(_res, 2),
      gcd = _res2[0],
      inv = _res2[1];
    if (!equal(gcd, BigNumber(1))) return NaN;
    inv = mod(inv, b);
    if (smaller(inv, BigNumber(0))) inv = add(inv, b);
    return inv;
  }
});