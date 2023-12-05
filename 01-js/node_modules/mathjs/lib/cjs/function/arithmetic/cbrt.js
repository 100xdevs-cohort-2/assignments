"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCbrt = void 0;
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _index = require("../../plain/number/index.js");
var name = 'cbrt';
var dependencies = ['config', 'typed', 'isNegative', 'unaryMinus', 'matrix', 'Complex', 'BigNumber', 'Fraction'];
var createCbrt = exports.createCbrt = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var config = _ref.config,
    typed = _ref.typed,
    isNegative = _ref.isNegative,
    unaryMinus = _ref.unaryMinus,
    matrix = _ref.matrix,
    Complex = _ref.Complex,
    BigNumber = _ref.BigNumber,
    Fraction = _ref.Fraction;
  /**
   * Calculate the cubic root of a value.
   *
   * To avoid confusion with the matrix cube root, this function does not
   * apply to matrices. For a matrix, to take the cube root elementwise,
   * see the examples.
   *
   * Syntax:
   *
   *    math.cbrt(x)
   *    math.cbrt(x, allRoots)
   *
   * Examples:
   *
   *    math.cbrt(27)                  // returns 3
   *    math.cube(3)                   // returns 27
   *    math.cbrt(-64)                 // returns -4
   *    math.cbrt(math.unit('27 m^3')) // returns Unit 3 m
   *    math.map([27, 64, 125], x => math.cbrt(x))       // returns [3, 4, 5]
   *
   *    const x = math.complex('8i')
   *    math.cbrt(x)                   // returns Complex 1.7320508075689 + i
   *    math.cbrt(x, true)             // returns Matrix [
   *                                    //    1.7320508075689 + i
   *                                    //   -1.7320508075689 + i
   *                                    //   -2i
   *                                    // ]
   *
   * See also:
   *
   *    square, sqrt, cube
   *
   * @param {number | BigNumber | Complex | Unit} x
   *            Value for which to calculate the cubic root.
   * @param {boolean} [allRoots]  Optional, false by default. Only applicable
   *            when `x` is a number or complex number. If true, all complex
   *            roots are returned, if false (default) the principal root is
   *            returned.
   * @return {number | BigNumber | Complex | Unit}
   *            Returns the cubic root of `x`
   */
  return typed(name, {
    number: _index.cbrtNumber,
    // note: signature 'number, boolean' is also supported,
    //       created by typed as it knows how to convert number to Complex

    Complex: _cbrtComplex,
    'Complex, boolean': _cbrtComplex,
    BigNumber: function BigNumber(x) {
      return x.cbrt();
    },
    Unit: _cbrtUnit
  });

  /**
   * Calculate the cubic root for a complex number
   * @param {Complex} x
   * @param {boolean} [allRoots]   If true, the function will return an array
   *                               with all three roots. If false or undefined,
   *                               the principal root is returned.
   * @returns {Complex | Array.<Complex> | Matrix.<Complex>} Returns the cubic root(s) of x
   * @private
   */
  function _cbrtComplex(x, allRoots) {
    // https://www.wikiwand.com/en/Cube_root#/Complex_numbers

    var arg3 = x.arg() / 3;
    var abs = x.abs();

    // principal root:
    var principal = new Complex((0, _index.cbrtNumber)(abs), 0).mul(new Complex(0, arg3).exp());
    if (allRoots) {
      var all = [principal, new Complex((0, _index.cbrtNumber)(abs), 0).mul(new Complex(0, arg3 + Math.PI * 2 / 3).exp()), new Complex((0, _index.cbrtNumber)(abs), 0).mul(new Complex(0, arg3 - Math.PI * 2 / 3).exp())];
      return config.matrix === 'Array' ? all : matrix(all);
    } else {
      return principal;
    }
  }

  /**
   * Calculate the cubic root for a Unit
   * @param {Unit} x
   * @return {Unit} Returns the cubic root of x
   * @private
   */
  function _cbrtUnit(x) {
    if (x.value && (0, _is.isComplex)(x.value)) {
      var result = x.clone();
      result.value = 1.0;
      result = result.pow(1.0 / 3); // Compute the units
      result.value = _cbrtComplex(x.value); // Compute the value
      return result;
    } else {
      var negate = isNegative(x.value);
      if (negate) {
        x.value = unaryMinus(x.value);
      }

      // TODO: create a helper function for this
      var third;
      if ((0, _is.isBigNumber)(x.value)) {
        third = new BigNumber(1).div(3);
      } else if ((0, _is.isFraction)(x.value)) {
        third = new Fraction(1, 3);
      } else {
        third = 1 / 3;
      }
      var _result = x.pow(third);
      if (negate) {
        _result.value = unaryMinus(_result.value);
      }
      return _result;
    }
  }
});