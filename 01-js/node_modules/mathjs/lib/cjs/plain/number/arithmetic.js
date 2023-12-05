"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.absNumber = absNumber;
exports.addNumber = addNumber;
exports.cbrtNumber = cbrtNumber;
exports.cubeNumber = cubeNumber;
exports.divideNumber = divideNumber;
exports.expNumber = expNumber;
exports.expm1Number = expm1Number;
exports.gcdNumber = gcdNumber;
exports.lcmNumber = lcmNumber;
exports.log10Number = log10Number;
exports.log1pNumber = log1pNumber;
exports.log2Number = log2Number;
exports.logNumber = logNumber;
exports.modNumber = modNumber;
exports.multiplyNumber = multiplyNumber;
exports.normNumber = normNumber;
exports.nthRootNumber = nthRootNumber;
exports.powNumber = powNumber;
exports.roundNumber = roundNumber;
exports.signNumber = signNumber;
exports.sqrtNumber = sqrtNumber;
exports.squareNumber = squareNumber;
exports.subtractNumber = subtractNumber;
exports.unaryMinusNumber = unaryMinusNumber;
exports.unaryPlusNumber = unaryPlusNumber;
exports.xgcdNumber = xgcdNumber;
var _number = require("../../utils/number.js");
var n1 = 'number';
var n2 = 'number, number';
function absNumber(a) {
  return Math.abs(a);
}
absNumber.signature = n1;
function addNumber(a, b) {
  return a + b;
}
addNumber.signature = n2;
function subtractNumber(a, b) {
  return a - b;
}
subtractNumber.signature = n2;
function multiplyNumber(a, b) {
  return a * b;
}
multiplyNumber.signature = n2;
function divideNumber(a, b) {
  return a / b;
}
divideNumber.signature = n2;
function unaryMinusNumber(x) {
  return -x;
}
unaryMinusNumber.signature = n1;
function unaryPlusNumber(x) {
  return x;
}
unaryPlusNumber.signature = n1;
function cbrtNumber(x) {
  return (0, _number.cbrt)(x);
}
cbrtNumber.signature = n1;
function cubeNumber(x) {
  return x * x * x;
}
cubeNumber.signature = n1;
function expNumber(x) {
  return Math.exp(x);
}
expNumber.signature = n1;
function expm1Number(x) {
  return (0, _number.expm1)(x);
}
expm1Number.signature = n1;

/**
 * Calculate gcd for numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} Returns the greatest common denominator of a and b
 */
function gcdNumber(a, b) {
  if (!(0, _number.isInteger)(a) || !(0, _number.isInteger)(b)) {
    throw new Error('Parameters in function gcd must be integer numbers');
  }

  // https://en.wikipedia.org/wiki/Euclidean_algorithm
  var r;
  while (b !== 0) {
    r = a % b;
    a = b;
    b = r;
  }
  return a < 0 ? -a : a;
}
gcdNumber.signature = n2;

/**
 * Calculate lcm for two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number} Returns the least common multiple of a and b
 */
function lcmNumber(a, b) {
  if (!(0, _number.isInteger)(a) || !(0, _number.isInteger)(b)) {
    throw new Error('Parameters in function lcm must be integer numbers');
  }
  if (a === 0 || b === 0) {
    return 0;
  }

  // https://en.wikipedia.org/wiki/Euclidean_algorithm
  // evaluate lcm here inline to reduce overhead
  var t;
  var prod = a * b;
  while (b !== 0) {
    t = b;
    b = a % t;
    a = t;
  }
  return Math.abs(prod / a);
}
lcmNumber.signature = n2;

/**
 * Calculate the logarithm of a value, optionally to a given base.
 * @param {number} x
 * @param {number | null | undefined} base
 * @return {number}
 */
function logNumber(x, y) {
  if (y) {
    return Math.log(x) / Math.log(y);
  }
  return Math.log(x);
}

/**
 * Calculate the 10-base logarithm of a number
 * @param {number} x
 * @return {number}
 */
function log10Number(x) {
  return (0, _number.log10)(x);
}
log10Number.signature = n1;

/**
 * Calculate the 2-base logarithm of a number
 * @param {number} x
 * @return {number}
 */
function log2Number(x) {
  return (0, _number.log2)(x);
}
log2Number.signature = n1;

/**
 * Calculate the natural logarithm of a `number+1`
 * @param {number} x
 * @returns {number}
 */
function log1pNumber(x) {
  return (0, _number.log1p)(x);
}
log1pNumber.signature = n1;

/**
 * Calculate the modulus of two numbers
 * @param {number} x
 * @param {number} y
 * @returns {number} res
 * @private
 */
function modNumber(x, y) {
  // We don't use JavaScript's % operator here as this doesn't work
  // correctly for x < 0 and x === 0
  // see https://en.wikipedia.org/wiki/Modulo_operation
  return y === 0 ? x : x - y * Math.floor(x / y);
}
modNumber.signature = n2;

/**
 * Calculate the nth root of a, solve x^root == a
 * http://rosettacode.org/wiki/Nth_root#JavaScript
 * @param {number} a
 * @param {number} [2] root
 * @private
 */
function nthRootNumber(a) {
  var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var inv = root < 0;
  if (inv) {
    root = -root;
  }
  if (root === 0) {
    throw new Error('Root must be non-zero');
  }
  if (a < 0 && Math.abs(root) % 2 !== 1) {
    throw new Error('Root must be odd when a is negative.');
  }

  // edge cases zero and infinity
  if (a === 0) {
    return inv ? Infinity : 0;
  }
  if (!isFinite(a)) {
    return inv ? 0 : a;
  }
  var x = Math.pow(Math.abs(a), 1 / root);
  // If a < 0, we require that root is an odd integer,
  // so (-1) ^ (1/root) = -1
  x = a < 0 ? -x : x;
  return inv ? 1 / x : x;

  // Very nice algorithm, but fails with nthRoot(-2, 3).
  // Newton's method has some well-known problems at times:
  // https://en.wikipedia.org/wiki/Newton%27s_method#Failure_analysis
  /*
  let x = 1 // Initial guess
  let xPrev = 1
  let i = 0
  const iMax = 10000
  do {
    const delta = (a / Math.pow(x, root - 1) - x) / root
    xPrev = x
    x = x + delta
    i++
  }
  while (xPrev !== x && i < iMax)
   if (xPrev !== x) {
    throw new Error('Function nthRoot failed to converge')
  }
   return inv ? 1 / x : x
  */
}

function signNumber(x) {
  return (0, _number.sign)(x);
}
signNumber.signature = n1;
function sqrtNumber(x) {
  return Math.sqrt(x);
}
sqrtNumber.signature = n1;
function squareNumber(x) {
  return x * x;
}
squareNumber.signature = n1;

/**
 * Calculate xgcd for two numbers
 * @param {number} a
 * @param {number} b
 * @return {number} result
 * @private
 */
function xgcdNumber(a, b) {
  // source: https://en.wikipedia.org/wiki/Extended_Euclidean_algorithm
  var t; // used to swap two variables
  var q; // quotient
  var r; // remainder
  var x = 0;
  var lastx = 1;
  var y = 1;
  var lasty = 0;
  if (!(0, _number.isInteger)(a) || !(0, _number.isInteger)(b)) {
    throw new Error('Parameters in function xgcd must be integer numbers');
  }
  while (b) {
    q = Math.floor(a / b);
    r = a - q * b;
    t = x;
    x = lastx - q * x;
    lastx = t;
    t = y;
    y = lasty - q * y;
    lasty = t;
    a = b;
    b = r;
  }
  var res;
  if (a < 0) {
    res = [-a, -lastx, -lasty];
  } else {
    res = [a, a ? lastx : 0, lasty];
  }
  return res;
}
xgcdNumber.signature = n2;

/**
 * Calculates the power of x to y, x^y, for two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} res
 */
function powNumber(x, y) {
  // x^Infinity === 0 if -1 < x < 1
  // A real number 0 is returned instead of complex(0)
  if (x * x < 1 && y === Infinity || x * x > 1 && y === -Infinity) {
    return 0;
  }
  return Math.pow(x, y);
}
powNumber.signature = n2;

/**
 * round a number to the given number of decimals, or to zero if decimals is
 * not provided
 * @param {number} value
 * @param {number} decimals       number of decimals, between 0 and 15 (0 by default)
 * @return {number} roundedValue
 */
function roundNumber(value) {
  var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!(0, _number.isInteger)(decimals) || decimals < 0 || decimals > 15) {
    throw new Error('Number of decimals in function round must be an integer from 0 to 15 inclusive');
  }
  return parseFloat((0, _number.toFixed)(value, decimals));
}

/**
 * Calculate the norm of a number, the absolute value.
 * @param {number} x
 * @return {number}
 */
function normNumber(x) {
  return Math.abs(x);
}
normNumber.signature = n1;