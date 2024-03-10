"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComplex = void 0;
var _factory = require("../../../utils/factory.js");
var _collection = require("../../../utils/collection.js");
var name = 'complex';
var dependencies = ['typed', 'Complex'];
var createComplex = exports.createComplex = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    Complex = _ref.Complex;
  /**
   * Create a complex value or convert a value to a complex value.
   *
   * Syntax:
   *
   *     math.complex()                           // creates a complex value with zero
   *                                              // as real and imaginary part.
   *     math.complex(re : number, im : string)   // creates a complex value with provided
   *                                              // values for real and imaginary part.
   *     math.complex(re : number)                // creates a complex value with provided
   *                                              // real value and zero imaginary part.
   *     math.complex(complex : Complex)          // clones the provided complex value.
   *     math.complex(arg : string)               // parses a string into a complex value.
   *     math.complex(array : Array)              // converts the elements of the array
   *                                              // or matrix element wise into a
   *                                              // complex value.
   *     math.complex({re: number, im: number})   // creates a complex value with provided
   *                                              // values for real an imaginary part.
   *     math.complex({r: number, phi: number})   // creates a complex value with provided
   *                                              // polar coordinates
   *
   * Examples:
   *
   *    const a = math.complex(3, -4)     // a = Complex 3 - 4i
   *    a.re = 5                          // a = Complex 5 - 4i
   *    const i = a.im                    // Number -4
   *    const b = math.complex('2 + 6i')  // Complex 2 + 6i
   *    const c = math.complex()          // Complex 0 + 0i
   *    const d = math.add(a, b)          // Complex 5 + 2i
   *
   * See also:
   *
   *    bignumber, boolean, index, matrix, number, string, unit
   *
   * @param {* | Array | Matrix} [args]
   *            Arguments specifying the real and imaginary part of the complex number
   * @return {Complex | Array | Matrix} Returns a complex value
   */
  return typed('complex', {
    '': function _() {
      return Complex.ZERO;
    },
    number: function number(x) {
      return new Complex(x, 0);
    },
    'number, number': function numberNumber(re, im) {
      return new Complex(re, im);
    },
    // TODO: this signature should be redundant
    'BigNumber, BigNumber': function BigNumberBigNumber(re, im) {
      return new Complex(re.toNumber(), im.toNumber());
    },
    Fraction: function Fraction(x) {
      return new Complex(x.valueOf(), 0);
    },
    Complex: function Complex(x) {
      return x.clone();
    },
    string: function string(x) {
      return Complex(x); // for example '2 + 3i'
    },

    "null": function _null(x) {
      return Complex(0);
    },
    Object: function Object(x) {
      if ('re' in x && 'im' in x) {
        return new Complex(x.re, x.im);
      }
      if ('r' in x && 'phi' in x || 'abs' in x && 'arg' in x) {
        return new Complex(x);
      }
      throw new Error('Expected object with properties (re and im) or (r and phi) or (abs and arg)');
    },
    'Array | Matrix': typed.referToSelf(function (self) {
      return function (x) {
        return (0, _collection.deepMap)(x, self);
      };
    })
  });
});