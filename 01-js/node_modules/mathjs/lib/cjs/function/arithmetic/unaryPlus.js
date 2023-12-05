"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUnaryPlus = void 0;
var _factory = require("../../utils/factory.js");
var _collection = require("../../utils/collection.js");
var _index = require("../../plain/number/index.js");
var name = 'unaryPlus';
var dependencies = ['typed', 'config', 'BigNumber'];
var createUnaryPlus = exports.createUnaryPlus = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    BigNumber = _ref.BigNumber;
  /**
   * Unary plus operation.
   * Boolean values and strings will be converted to a number, numeric values will be returned as is.
   *
   * For matrices, the function is evaluated element wise.
   *
   * Syntax:
   *
   *    math.unaryPlus(x)
   *
   * Examples:
   *
   *    math.unaryPlus(3.5)      // returns 3.5
   *    math.unaryPlus(1)     // returns 1
   *
   * See also:
   *
   *    unaryMinus, add, subtract
   *
   * @param  {number | BigNumber | Fraction | string | Complex | Unit | Array | Matrix} x
   *            Input value
   * @return {number | BigNumber | Fraction | Complex | Unit | Array | Matrix}
   *            Returns the input value when numeric, converts to a number when input is non-numeric.
   */
  return typed(name, {
    number: _index.unaryPlusNumber,
    Complex: function Complex(x) {
      return x; // complex numbers are immutable
    },

    BigNumber: function BigNumber(x) {
      return x; // bignumbers are immutable
    },

    Fraction: function Fraction(x) {
      return x; // fractions are immutable
    },

    Unit: function Unit(x) {
      return x.clone();
    },
    // deep map collection, skip zeros since unaryPlus(0) = 0
    'Array | Matrix': typed.referToSelf(function (self) {
      return function (x) {
        return (0, _collection.deepMap)(x, self, true);
      };
    }),
    'boolean | string': function booleanString(x) {
      // convert to a number or bignumber
      return config.number === 'BigNumber' ? new BigNumber(+x) : +x;
    }
  });
});