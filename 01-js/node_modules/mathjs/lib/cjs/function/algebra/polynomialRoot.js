"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPolynomialRoot = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _factory = require("../../utils/factory.js");
var name = 'polynomialRoot';
var dependencies = ['typed', 'isZero', 'equalScalar', 'add', 'subtract', 'multiply', 'divide', 'sqrt', 'unaryMinus', 'cbrt', 'typeOf', 'im', 're'];
var createPolynomialRoot = exports.createPolynomialRoot = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    isZero = _ref.isZero,
    equalScalar = _ref.equalScalar,
    add = _ref.add,
    subtract = _ref.subtract,
    multiply = _ref.multiply,
    divide = _ref.divide,
    sqrt = _ref.sqrt,
    unaryMinus = _ref.unaryMinus,
    cbrt = _ref.cbrt,
    typeOf = _ref.typeOf,
    im = _ref.im,
    re = _ref.re;
  /**
   * Finds the numerical values of the distinct roots of a polynomial with real or complex coefficients.
   * Currently operates only on linear, quadratic, and cubic polynomials using the standard
   * formulas for the roots.
   *
   * Syntax:
   *
   *     math.polynomialRoot(constant, linearCoeff, quadraticCoeff, cubicCoeff)
   *
   * Examples:
   *     // linear
   *     math.polynomialRoot(6, 3)                                        // [-2]
   *     math.polynomialRoot(math.complex(6,3), 3)                        // [-2 - i]
   *     math.polynomialRoot(math.complex(6,3), math.complex(2,1))        // [-3 + 0i]
   *     // quadratic
   *     math.polynomialRoot(2, -3, 1)                                    // [2, 1]
   *     math.polynomialRoot(8, 8, 2)                                     // [-2]
   *     math.polynomialRoot(-2, 0, 1)                                    // [1.4142135623730951, -1.4142135623730951]
   *     math.polynomialRoot(2, -2, 1)                                    // [1 + i, 1 - i]
   *     math.polynomialRoot(math.complex(1,3), math.complex(-3, -2), 1)  // [2 + i, 1 + i]
   *     // cubic
   *     math.polynomialRoot(-6, 11, -6, 1)                               // [1, 3, 2]
   *     math.polynomialRoot(-8, 0, 0, 1)                                 // [-1 - 1.7320508075688774i, 2, -1 + 1.7320508075688774i]
   *     math.polynomialRoot(0, 8, 8, 2)                                  // [0, -2]
   *     math.polynomialRoot(1, 1, 1, 1)                                  // [-1 + 0i, 0 - i, 0 + i]
   *
   * See also:
   *     cbrt, sqrt
   *
   * @param {... number | Complex} coeffs
   *     The coefficients of the polynomial, starting with with the constant coefficent, followed
   *     by the linear coefficient and subsequent coefficients of increasing powers.
   * @return {Array} The distinct roots of the polynomial
   */

  return typed(name, {
    'number|Complex, ...number|Complex': function numberComplexNumberComplex(constant, restCoeffs) {
      var coeffs = [constant].concat((0, _toConsumableArray2["default"])(restCoeffs));
      while (coeffs.length > 0 && isZero(coeffs[coeffs.length - 1])) {
        coeffs.pop();
      }
      if (coeffs.length < 2) {
        throw new RangeError("Polynomial [".concat(constant, ", ").concat(restCoeffs, "] must have a non-zero non-constant coefficient"));
      }
      switch (coeffs.length) {
        case 2:
          // linear
          return [unaryMinus(divide(coeffs[0], coeffs[1]))];
        case 3:
          {
            // quadratic
            var _coeffs = (0, _slicedToArray2["default"])(coeffs, 3),
              c = _coeffs[0],
              b = _coeffs[1],
              a = _coeffs[2];
            var denom = multiply(2, a);
            var d1 = multiply(b, b);
            var d2 = multiply(4, a, c);
            if (equalScalar(d1, d2)) return [divide(unaryMinus(b), denom)];
            var discriminant = sqrt(subtract(d1, d2));
            return [divide(subtract(discriminant, b), denom), divide(subtract(unaryMinus(discriminant), b), denom)];
          }
        case 4:
          {
            // cubic, cf. https://en.wikipedia.org/wiki/Cubic_equation
            var _coeffs2 = (0, _slicedToArray2["default"])(coeffs, 4),
              d = _coeffs2[0],
              _c = _coeffs2[1],
              _b = _coeffs2[2],
              _a = _coeffs2[3];
            var _denom = unaryMinus(multiply(3, _a));
            var D0_1 = multiply(_b, _b);
            var D0_2 = multiply(3, _a, _c);
            var D1_1 = add(multiply(2, _b, _b, _b), multiply(27, _a, _a, d));
            var D1_2 = multiply(9, _a, _b, _c);
            if (equalScalar(D0_1, D0_2) && equalScalar(D1_1, D1_2)) {
              return [divide(_b, _denom)];
            }
            var Delta0 = subtract(D0_1, D0_2);
            var Delta1 = subtract(D1_1, D1_2);
            var discriminant1 = add(multiply(18, _a, _b, _c, d), multiply(_b, _b, _c, _c));
            var discriminant2 = add(multiply(4, _b, _b, _b, d), multiply(4, _a, _c, _c, _c), multiply(27, _a, _a, d, d));
            if (equalScalar(discriminant1, discriminant2)) {
              return [divide(subtract(multiply(4, _a, _b, _c), add(multiply(9, _a, _a, d), multiply(_b, _b, _b))), multiply(_a, Delta0)),
              // simple root
              divide(subtract(multiply(9, _a, d), multiply(_b, _c)), multiply(2, Delta0)) // double root
              ];
            }
            // OK, we have three distinct roots
            var Ccubed;
            if (equalScalar(D0_1, D0_2)) {
              Ccubed = Delta1;
            } else {
              Ccubed = divide(add(Delta1, sqrt(subtract(multiply(Delta1, Delta1), multiply(4, Delta0, Delta0, Delta0)))), 2);
            }
            var allRoots = true;
            var rawRoots = cbrt(Ccubed, allRoots).toArray().map(function (C) {
              return divide(add(_b, C, divide(Delta0, C)), _denom);
            });
            return rawRoots.map(function (r) {
              if (typeOf(r) === 'Complex' && equalScalar(re(r), re(r) + im(r))) {
                return re(r);
              }
              return r;
            });
          }
        default:
          throw new RangeError("only implemented for cubic or lower-order polynomials, not ".concat(coeffs));
      }
    }
  });
});