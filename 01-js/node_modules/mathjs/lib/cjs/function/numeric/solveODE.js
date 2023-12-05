"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSolveODE = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _is = require("../../utils/is.js");
var _factory = require("../../utils/factory.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var name = 'solveODE';
var dependencies = ['typed', 'add', 'subtract', 'multiply', 'divide', 'max', 'map', 'abs', 'isPositive', 'isNegative', 'larger', 'smaller', 'matrix', 'bignumber', 'unaryMinus'];
var createSolveODE = exports.createSolveODE = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    add = _ref.add,
    subtract = _ref.subtract,
    multiply = _ref.multiply,
    divide = _ref.divide,
    max = _ref.max,
    map = _ref.map,
    abs = _ref.abs,
    isPositive = _ref.isPositive,
    isNegative = _ref.isNegative,
    larger = _ref.larger,
    smaller = _ref.smaller,
    matrix = _ref.matrix,
    bignumber = _ref.bignumber,
    unaryMinus = _ref.unaryMinus;
  /**
     * Numerical Integration of Ordinary Differential Equations
     *
     * Two variable step methods are provided:
     * - "RK23": Bogacki–Shampine method
     * - "RK45": Dormand-Prince method RK5(4)7M (default)
     *
     * The arguments are expected as follows.
     *
     * - `func` should be the forcing function `f(t, y)`
     * - `tspan` should be a vector of two numbers or units `[tStart, tEnd]`
     * - `y0` the initial state values, should be a scalar or a flat array
     * - `options` should be an object with the following information:
     *   - `method` ('RK45'): ['RK23', 'RK45']
     *   - `tol` (1e-3): Numeric tolerance of the method, the solver keeps the error estimates less than this value
     *   - `firstStep`: Initial step size
     *   - `minStep`: minimum step size of the method
     *   - `maxStep`: maximum step size of the method
     *   - `minDelta` (0.2): minimum ratio of change for the step
     *   - `maxDelta` (5): maximum ratio of change for the step
     *   - `maxIter` (1e4): maximum number of iterations
     *
     * The returned value is an object with `{t, y}` please note that even though `t` means time, it can represent any other independant variable like `x`:
     * - `t` an array of size `[n]`
     * - `y` the states array can be in two ways
     *   - **if `y0` is a scalar:** returns an array-like of size `[n]`
     *   - **if `y0` is a flat array-like of size [m]:** returns an array like of size `[n, m]`
     *
     * Syntax:
     *
     *     math.solveODE(func, tspan, y0)
     *     math.solveODE(func, tspan, y0, options)
     *
     * Examples:
     *
     *     function func(t, y) {return y}
     *     const tspan = [0, 4]
     *     const y0 = 1
     *     math.solveODE(func, tspan, y0)
     *     math.solveODE(func, tspan, [1, 2])
     *     math.solveODE(func, tspan, y0, { method:"RK23", maxStep:0.1 })
     *
     * See also:
     *
     *     derivative, simplifyCore
     *
     * @param {function} func The forcing function f(t,y)
     * @param {Array | Matrix} tspan The time span
     * @param {number | BigNumber | Unit | Array | Matrix} y0 The initial value
     * @param {Object} [options] Optional configuration options
     * @return {Object} Return an object with t and y values as arrays
     */

  function _rk(butcherTableau) {
    // generates an adaptive runge kutta method from it's butcher tableau

    return function (f, tspan, y0, options) {
      // adaptive runge kutta methods
      var wrongTSpan = !(tspan.length === 2 && (tspan.every(isNumOrBig) || tspan.every(_is.isUnit)));
      if (wrongTSpan) {
        throw new Error('"tspan" must be an Array of two numeric values or two units [tStart, tEnd]');
      }
      var t0 = tspan[0]; // initial time
      var tf = tspan[1]; // final time
      var isForwards = larger(tf, t0);
      var firstStep = options.firstStep;
      if (firstStep !== undefined && !isPositive(firstStep)) {
        throw new Error('"firstStep" must be positive');
      }
      var maxStep = options.maxStep;
      if (maxStep !== undefined && !isPositive(maxStep)) {
        throw new Error('"maxStep" must be positive');
      }
      var minStep = options.minStep;
      if (minStep && isNegative(minStep)) {
        throw new Error('"minStep" must be positive or zero');
      }
      var timeVars = [t0, tf, firstStep, minStep, maxStep].filter(function (x) {
        return x !== undefined;
      });
      if (!(timeVars.every(isNumOrBig) || timeVars.every(_is.isUnit))) {
        throw new Error('Inconsistent type of "t" dependant variables');
      }
      var steps = 1; // divide time in this number of steps
      var tol = options.tol ? options.tol : 1e-4; // define a tolerance (must be an option)
      var minDelta = options.minDelta ? options.minDelta : 0.2;
      var maxDelta = options.maxDelta ? options.maxDelta : 5;
      var maxIter = options.maxIter ? options.maxIter : 10000; // stop inifite evaluation if something goes wrong
      var hasBigNumbers = [t0, tf].concat((0, _toConsumableArray2["default"])(y0), [maxStep, minStep]).some(_is.isBigNumber);
      var _ref2 = hasBigNumbers ? [bignumber(butcherTableau.a), bignumber(butcherTableau.c), bignumber(butcherTableau.b), bignumber(butcherTableau.bp)] : [butcherTableau.a, butcherTableau.c, butcherTableau.b, butcherTableau.bp],
        _ref3 = (0, _slicedToArray2["default"])(_ref2, 4),
        a = _ref3[0],
        c = _ref3[1],
        b = _ref3[2],
        bp = _ref3[3];
      var h = firstStep ? isForwards ? firstStep : unaryMinus(firstStep) : divide(subtract(tf, t0), steps); // define the first step size
      var t = [t0]; // start the time array
      var y = [y0]; // start the solution array

      var deltaB = subtract(b, bp); // b - bp

      var n = 0;
      var iter = 0;
      var ongoing = _createOngoing(isForwards);
      var trimStep = _createTrimStep(isForwards);
      // iterate unitil it reaches either the final time or maximum iterations
      while (ongoing(t[n], tf)) {
        var k = [];

        // trim the time step so that it doesn't overshoot
        h = trimStep(t[n], tf, h);

        // calculate the first value of k
        k.push(f(t[n], y[n]));

        // calculate the rest of the values of k
        for (var i = 1; i < c.length; ++i) {
          k.push(f(add(t[n], multiply(c[i], h)), add(y[n], multiply(h, a[i], k))));
        }

        // estimate the error by comparing solutions of different orders
        var TE = max(abs(map(multiply(deltaB, k), function (X) {
          return (0, _is.isUnit)(X) ? X.value : X;
        })));
        if (TE < tol && tol / TE > 1 / 4) {
          // push solution if within tol
          t.push(add(t[n], h));
          y.push(add(y[n], multiply(h, b, k)));
          n++;
        }

        // estimate the delta value that will affect the step size
        var delta = 0.84 * Math.pow(tol / TE, 1 / 5);
        if (smaller(delta, minDelta)) {
          delta = minDelta;
        } else if (larger(delta, maxDelta)) {
          delta = maxDelta;
        }
        delta = hasBigNumbers ? bignumber(delta) : delta;
        h = multiply(h, delta);
        if (maxStep && larger(abs(h), maxStep)) {
          h = isForwards ? maxStep : unaryMinus(maxStep);
        } else if (minStep && smaller(abs(h), minStep)) {
          h = isForwards ? minStep : unaryMinus(minStep);
        }
        iter++;
        if (iter > maxIter) {
          throw new Error('Maximum number of iterations reached, try changing options');
        }
      }
      return {
        t: t,
        y: y
      };
    };
  }
  function _rk23(f, tspan, y0, options) {
    // Bogacki–Shampine method

    // Define the butcher table
    var a = [[], [1 / 2], [0, 3 / 4], [2 / 9, 1 / 3, 4 / 9]];
    var c = [null, 1 / 2, 3 / 4, 1];
    var b = [2 / 9, 1 / 3, 4 / 9, 0];
    var bp = [7 / 24, 1 / 4, 1 / 3, 1 / 8];
    var butcherTableau = {
      a: a,
      c: c,
      b: b,
      bp: bp
    };

    // Solve an adaptive step size rk method
    return _rk(butcherTableau)(f, tspan, y0, options);
  }
  function _rk45(f, tspan, y0, options) {
    // Dormand Prince method

    // Define the butcher tableau
    var a = [[], [1 / 5], [3 / 40, 9 / 40], [44 / 45, -56 / 15, 32 / 9], [19372 / 6561, -25360 / 2187, 64448 / 6561, -212 / 729], [9017 / 3168, -355 / 33, 46732 / 5247, 49 / 176, -5103 / 18656], [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84]];
    var c = [null, 1 / 5, 3 / 10, 4 / 5, 8 / 9, 1, 1];
    var b = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84, 0];
    var bp = [5179 / 57600, 0, 7571 / 16695, 393 / 640, -92097 / 339200, 187 / 2100, 1 / 40];
    var butcherTableau = {
      a: a,
      c: c,
      b: b,
      bp: bp
    };

    // Solve an adaptive step size rk method
    return _rk(butcherTableau)(f, tspan, y0, options);
  }
  function _solveODE(f, tspan, y0, opt) {
    var method = opt.method ? opt.method : 'RK45';
    var methods = {
      RK23: _rk23,
      RK45: _rk45
    };
    if (method.toUpperCase() in methods) {
      var methodOptions = _objectSpread({}, opt); // clone the options object
      delete methodOptions.method; // delete the method as it won't be needed
      return methods[method.toUpperCase()](f, tspan, y0, methodOptions);
    } else {
      // throw an error indicating there is no such method
      var methodsWithQuotes = Object.keys(methods).map(function (x) {
        return "\"".concat(x, "\"");
      });
      // generates a string of methods like: "BDF", "RK23" and "RK45"
      var availableMethodsString = "".concat(methodsWithQuotes.slice(0, -1).join(', '), " and ").concat(methodsWithQuotes.slice(-1));
      throw new Error("Unavailable method \"".concat(method, "\". Available methods are ").concat(availableMethodsString));
    }
  }
  function _createOngoing(isForwards) {
    // returns the correct function to test if it's still iterating
    return isForwards ? smaller : larger;
  }
  function _createTrimStep(isForwards) {
    var outOfBounds = isForwards ? larger : smaller;
    return function (t, tf, h) {
      var next = add(t, h);
      return outOfBounds(next, tf) ? subtract(tf, t) : h;
    };
  }
  function isNumOrBig(x) {
    // checks if it's a number or bignumber
    return (0, _is.isBigNumber)(x) || (0, _is.isNumber)(x);
  }
  function _matrixSolveODE(f, T, y0, options) {
    // receives matrices and returns matrices
    var sol = _solveODE(f, T.toArray(), y0.toArray(), options);
    return {
      t: matrix(sol.t),
      y: matrix(sol.y)
    };
  }
  return typed('solveODE', {
    'function, Array, Array, Object': _solveODE,
    'function, Matrix, Matrix, Object': _matrixSolveODE,
    'function, Array, Array': function functionArrayArray(f, T, y0) {
      return _solveODE(f, T, y0, {});
    },
    'function, Matrix, Matrix': function functionMatrixMatrix(f, T, y0) {
      return _matrixSolveODE(f, T, y0, {});
    },
    'function, Array, number | BigNumber | Unit': function functionArrayNumberBigNumberUnit(f, T, y0) {
      var sol = _solveODE(f, T, [y0], {});
      return {
        t: sol.t,
        y: sol.y.map(function (Y) {
          return Y[0];
        })
      };
    },
    'function, Matrix, number | BigNumber | Unit': function functionMatrixNumberBigNumberUnit(f, T, y0) {
      var sol = _solveODE(f, T.toArray(), [y0], {});
      return {
        t: matrix(sol.t),
        y: matrix(sol.y.map(function (Y) {
          return Y[0];
        }))
      };
    },
    'function, Array, number | BigNumber | Unit, Object': function functionArrayNumberBigNumberUnitObject(f, T, y0, options) {
      var sol = _solveODE(f, T, [y0], options);
      return {
        t: sol.t,
        y: sol.y.map(function (Y) {
          return Y[0];
        })
      };
    },
    'function, Matrix, number | BigNumber | Unit, Object': function functionMatrixNumberBigNumberUnitObject(f, T, y0, options) {
      var sol = _solveODE(f, T.toArray(), [y0], options);
      return {
        t: matrix(sol.t),
        y: matrix(sol.y.map(function (Y) {
          return Y[0];
        }))
      };
    }
  });
});