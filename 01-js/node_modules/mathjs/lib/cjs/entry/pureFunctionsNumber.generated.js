"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.min = exports.median = exports.mean = exports.max = exports.matrix = exports.map = exports.mad = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.lgamma = exports.leftShift = exports.lcm = exports.largerEq = exports.larger = exports.isZero = exports.isPrime = exports.isPositive = exports.isNumeric = exports.isNegative = exports.isNaN = exports.isInteger = exports.index = exports.hypot = exports.hasNumericValue = exports.gcd = exports.gamma = exports.format = exports.forEach = exports.floor = exports.fix = exports.filter = exports.factorial = exports.expm1 = exports.exp = exports.erf = exports.equalText = exports.equalScalar = exports.equal = exports.e = exports.divideScalar = exports.divide = exports.deepEqual = exports.cumsum = exports.cube = exports.csch = exports.csc = exports.coth = exports.cot = exports.cosh = exports.cos = exports.corr = exports.composition = exports.compareText = exports.compareNatural = exports.compare = exports.combinationsWithRep = exports.combinations = exports.clone = exports.ceil = exports.cbrt = exports.catalan = exports["boolean"] = exports.bitXor = exports.bitOr = exports.bitNot = exports.bitAnd = exports.bellNumbers = exports.atanh = exports.atan2 = exports.atan = exports.asinh = exports.asin = exports.asech = exports.asec = exports.apply = exports.and = exports.addScalar = exports.add = exports.acsch = exports.acsc = exports.acoth = exports.acot = exports.acosh = exports.acos = exports.abs = exports._true = exports._null = exports._false = exports._NaN = exports._Infinity = exports.SQRT2 = exports.SQRT1_2 = exports.ResultSet = exports.Range = exports.LOG2E = exports.LOG10E = exports.LN2 = exports.LN10 = void 0;
exports.zeta = exports.xor = exports.xgcd = exports.version = exports.variance = exports.unequal = exports.unaryPlus = exports.unaryMinus = exports.typed = exports.typeOf = exports.tau = exports.tanh = exports.tan = exports.sum = exports.subtractScalar = exports.subtract = exports.subset = exports.string = exports.stirlingS2 = exports.std = exports.square = exports.sqrt = exports.smallerEq = exports.smaller = exports.size = exports.sinh = exports.sin = exports.sign = exports.sech = exports.sec = exports.round = exports.rightLogShift = exports.rightArithShift = exports.replacer = exports.range = exports.randomInt = exports.random = exports.quantileSeq = exports.prod = exports.print = exports.pow = exports.pickRandom = exports.pi = exports.phi = exports.permutations = exports.partitionSelect = exports.or = exports.numeric = exports.number = exports.nthRoot = exports.not = exports.norm = exports.multiplyScalar = exports.multiply = exports.multinomial = exports.mode = exports.mod = void 0;
var _configReadonly = require("./configReadonly.js");
var _factoriesNumber = require("../factoriesNumber.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var e = exports.e = /* #__PURE__ */(0, _factoriesNumber.createE)({
  config: _configReadonly.config
});
var _false = exports._false = /* #__PURE__ */(0, _factoriesNumber.createFalse)({});
var index = exports.index = /* #__PURE__ */(0, _factoriesNumber.createIndex)({});
var _Infinity = exports._Infinity = /* #__PURE__ */(0, _factoriesNumber.createInfinity)({
  config: _configReadonly.config
});
var LN10 = exports.LN10 = /* #__PURE__ */(0, _factoriesNumber.createLN10)({
  config: _configReadonly.config
});
var LOG10E = exports.LOG10E = /* #__PURE__ */(0, _factoriesNumber.createLOG10E)({
  config: _configReadonly.config
});
var matrix = exports.matrix = /* #__PURE__ */(0, _factoriesNumber.createMatrix)({});
var _NaN = exports._NaN = /* #__PURE__ */(0, _factoriesNumber.createNaN)({
  config: _configReadonly.config
});
var _null = exports._null = /* #__PURE__ */(0, _factoriesNumber.createNull)({});
var phi = exports.phi = /* #__PURE__ */(0, _factoriesNumber.createPhi)({
  config: _configReadonly.config
});
var Range = exports.Range = /* #__PURE__ */(0, _factoriesNumber.createRangeClass)({});
var replacer = exports.replacer = /* #__PURE__ */(0, _factoriesNumber.createReplacer)({});
var ResultSet = exports.ResultSet = /* #__PURE__ */(0, _factoriesNumber.createResultSet)({});
var SQRT1_2 = exports.SQRT1_2 = /* #__PURE__ */(0, _factoriesNumber.createSQRT1_2)({
  config: _configReadonly.config
});
var subset = exports.subset = /* #__PURE__ */(0, _factoriesNumber.createSubset)({});
var tau = exports.tau = /* #__PURE__ */(0, _factoriesNumber.createTau)({
  config: _configReadonly.config
});
var typed = exports.typed = /* #__PURE__ */(0, _factoriesNumber.createTyped)({});
var unaryPlus = exports.unaryPlus = /* #__PURE__ */(0, _factoriesNumber.createUnaryPlus)({
  typed: typed
});
var version = exports.version = /* #__PURE__ */(0, _factoriesNumber.createVersion)({});
var xor = exports.xor = /* #__PURE__ */(0, _factoriesNumber.createXor)({
  typed: typed
});
var abs = exports.abs = /* #__PURE__ */(0, _factoriesNumber.createAbs)({
  typed: typed
});
var acos = exports.acos = /* #__PURE__ */(0, _factoriesNumber.createAcos)({
  typed: typed
});
var acot = exports.acot = /* #__PURE__ */(0, _factoriesNumber.createAcot)({
  typed: typed
});
var acsc = exports.acsc = /* #__PURE__ */(0, _factoriesNumber.createAcsc)({
  typed: typed
});
var add = exports.add = /* #__PURE__ */(0, _factoriesNumber.createAdd)({
  typed: typed
});
var and = exports.and = /* #__PURE__ */(0, _factoriesNumber.createAnd)({
  typed: typed
});
var asec = exports.asec = /* #__PURE__ */(0, _factoriesNumber.createAsec)({
  typed: typed
});
var asin = exports.asin = /* #__PURE__ */(0, _factoriesNumber.createAsin)({
  typed: typed
});
var atan = exports.atan = /* #__PURE__ */(0, _factoriesNumber.createAtan)({
  typed: typed
});
var atanh = exports.atanh = /* #__PURE__ */(0, _factoriesNumber.createAtanh)({
  typed: typed
});
var bitAnd = exports.bitAnd = /* #__PURE__ */(0, _factoriesNumber.createBitAnd)({
  typed: typed
});
var bitOr = exports.bitOr = /* #__PURE__ */(0, _factoriesNumber.createBitOr)({
  typed: typed
});
var _boolean = exports["boolean"] = /* #__PURE__ */(0, _factoriesNumber.createBoolean)({
  typed: typed
});
var cbrt = exports.cbrt = /* #__PURE__ */(0, _factoriesNumber.createCbrt)({
  typed: typed
});
var combinations = exports.combinations = /* #__PURE__ */(0, _factoriesNumber.createCombinations)({
  typed: typed
});
var compare = exports.compare = /* #__PURE__ */(0, _factoriesNumber.createCompare)({
  config: _configReadonly.config,
  typed: typed
});
var compareText = exports.compareText = /* #__PURE__ */(0, _factoriesNumber.createCompareText)({
  typed: typed
});
var cos = exports.cos = /* #__PURE__ */(0, _factoriesNumber.createCos)({
  typed: typed
});
var cot = exports.cot = /* #__PURE__ */(0, _factoriesNumber.createCot)({
  typed: typed
});
var csc = exports.csc = /* #__PURE__ */(0, _factoriesNumber.createCsc)({
  typed: typed
});
var cube = exports.cube = /* #__PURE__ */(0, _factoriesNumber.createCube)({
  typed: typed
});
var divide = exports.divide = /* #__PURE__ */(0, _factoriesNumber.createDivide)({
  typed: typed
});
var equalScalar = exports.equalScalar = /* #__PURE__ */(0, _factoriesNumber.createEqualScalar)({
  config: _configReadonly.config,
  typed: typed
});
var erf = exports.erf = /* #__PURE__ */(0, _factoriesNumber.createErf)({
  typed: typed
});
var exp = exports.exp = /* #__PURE__ */(0, _factoriesNumber.createExp)({
  typed: typed
});
var filter = exports.filter = /* #__PURE__ */(0, _factoriesNumber.createFilter)({
  typed: typed
});
var forEach = exports.forEach = /* #__PURE__ */(0, _factoriesNumber.createForEach)({
  typed: typed
});
var format = exports.format = /* #__PURE__ */(0, _factoriesNumber.createFormat)({
  typed: typed
});
var gamma = exports.gamma = /* #__PURE__ */(0, _factoriesNumber.createGamma)({
  typed: typed
});
var isInteger = exports.isInteger = /* #__PURE__ */(0, _factoriesNumber.createIsInteger)({
  typed: typed
});
var isNegative = exports.isNegative = /* #__PURE__ */(0, _factoriesNumber.createIsNegative)({
  typed: typed
});
var isPositive = exports.isPositive = /* #__PURE__ */(0, _factoriesNumber.createIsPositive)({
  typed: typed
});
var isZero = exports.isZero = /* #__PURE__ */(0, _factoriesNumber.createIsZero)({
  typed: typed
});
var LOG2E = exports.LOG2E = /* #__PURE__ */(0, _factoriesNumber.createLOG2E)({
  config: _configReadonly.config
});
var largerEq = exports.largerEq = /* #__PURE__ */(0, _factoriesNumber.createLargerEq)({
  config: _configReadonly.config,
  typed: typed
});
var leftShift = exports.leftShift = /* #__PURE__ */(0, _factoriesNumber.createLeftShift)({
  typed: typed
});
var log = exports.log = /* #__PURE__ */(0, _factoriesNumber.createLog)({
  typed: typed
});
var log1p = exports.log1p = /* #__PURE__ */(0, _factoriesNumber.createLog1p)({
  typed: typed
});
var map = exports.map = /* #__PURE__ */(0, _factoriesNumber.createMap)({
  typed: typed
});
var mean = exports.mean = /* #__PURE__ */(0, _factoriesNumber.createMean)({
  add: add,
  divide: divide,
  typed: typed
});
var mod = exports.mod = /* #__PURE__ */(0, _factoriesNumber.createMod)({
  typed: typed
});
var multiply = exports.multiply = /* #__PURE__ */(0, _factoriesNumber.createMultiply)({
  typed: typed
});
var not = exports.not = /* #__PURE__ */(0, _factoriesNumber.createNot)({
  typed: typed
});
var number = exports.number = /* #__PURE__ */(0, _factoriesNumber.createNumber)({
  typed: typed
});
var or = exports.or = /* #__PURE__ */(0, _factoriesNumber.createOr)({
  typed: typed
});
var pi = exports.pi = /* #__PURE__ */(0, _factoriesNumber.createPi)({
  config: _configReadonly.config
});
var pow = exports.pow = /* #__PURE__ */(0, _factoriesNumber.createPow)({
  typed: typed
});
var random = exports.random = /* #__PURE__ */(0, _factoriesNumber.createRandom)({
  config: _configReadonly.config,
  typed: typed
});
var rightLogShift = exports.rightLogShift = /* #__PURE__ */(0, _factoriesNumber.createRightLogShift)({
  typed: typed
});
var SQRT2 = exports.SQRT2 = /* #__PURE__ */(0, _factoriesNumber.createSQRT2)({
  config: _configReadonly.config
});
var sech = exports.sech = /* #__PURE__ */(0, _factoriesNumber.createSech)({
  typed: typed
});
var sin = exports.sin = /* #__PURE__ */(0, _factoriesNumber.createSin)({
  typed: typed
});
var size = exports.size = /* #__PURE__ */(0, _factoriesNumber.createSize)({
  matrix: matrix,
  config: _configReadonly.config,
  typed: typed
});
var smallerEq = exports.smallerEq = /* #__PURE__ */(0, _factoriesNumber.createSmallerEq)({
  config: _configReadonly.config,
  typed: typed
});
var square = exports.square = /* #__PURE__ */(0, _factoriesNumber.createSquare)({
  typed: typed
});
var string = exports.string = /* #__PURE__ */(0, _factoriesNumber.createString)({
  typed: typed
});
var subtract = exports.subtract = /* #__PURE__ */(0, _factoriesNumber.createSubtract)({
  typed: typed
});
var tanh = exports.tanh = /* #__PURE__ */(0, _factoriesNumber.createTanh)({
  typed: typed
});
var typeOf = exports.typeOf = /* #__PURE__ */(0, _factoriesNumber.createTypeOf)({
  typed: typed
});
var unequal = exports.unequal = /* #__PURE__ */(0, _factoriesNumber.createUnequal)({
  equalScalar: equalScalar,
  typed: typed
});
var xgcd = exports.xgcd = /* #__PURE__ */(0, _factoriesNumber.createXgcd)({
  typed: typed
});
var acoth = exports.acoth = /* #__PURE__ */(0, _factoriesNumber.createAcoth)({
  typed: typed
});
var addScalar = exports.addScalar = /* #__PURE__ */(0, _factoriesNumber.createAddScalar)({
  typed: typed
});
var asech = exports.asech = /* #__PURE__ */(0, _factoriesNumber.createAsech)({
  typed: typed
});
var bitNot = exports.bitNot = /* #__PURE__ */(0, _factoriesNumber.createBitNot)({
  typed: typed
});
var combinationsWithRep = exports.combinationsWithRep = /* #__PURE__ */(0, _factoriesNumber.createCombinationsWithRep)({
  typed: typed
});
var cosh = exports.cosh = /* #__PURE__ */(0, _factoriesNumber.createCosh)({
  typed: typed
});
var csch = exports.csch = /* #__PURE__ */(0, _factoriesNumber.createCsch)({
  typed: typed
});
var divideScalar = exports.divideScalar = /* #__PURE__ */(0, _factoriesNumber.createDivideScalar)({
  typed: typed
});
var equalText = exports.equalText = /* #__PURE__ */(0, _factoriesNumber.createEqualText)({
  compareText: compareText,
  isZero: isZero,
  typed: typed
});
var expm1 = exports.expm1 = /* #__PURE__ */(0, _factoriesNumber.createExpm1)({
  typed: typed
});
var isNumeric = exports.isNumeric = /* #__PURE__ */(0, _factoriesNumber.createIsNumeric)({
  typed: typed
});
var LN2 = exports.LN2 = /* #__PURE__ */(0, _factoriesNumber.createLN2)({
  config: _configReadonly.config
});
var lcm = exports.lcm = /* #__PURE__ */(0, _factoriesNumber.createLcm)({
  typed: typed
});
var log10 = exports.log10 = /* #__PURE__ */(0, _factoriesNumber.createLog10)({
  typed: typed
});
var multiplyScalar = exports.multiplyScalar = /* #__PURE__ */(0, _factoriesNumber.createMultiplyScalar)({
  typed: typed
});
var nthRoot = exports.nthRoot = /* #__PURE__ */(0, _factoriesNumber.createNthRoot)({
  typed: typed
});
var pickRandom = exports.pickRandom = /* #__PURE__ */(0, _factoriesNumber.createPickRandom)({
  config: _configReadonly.config,
  typed: typed
});
var randomInt = exports.randomInt = /* #__PURE__ */(0, _factoriesNumber.createRandomInt)({
  config: _configReadonly.config,
  typed: typed
});
var rightArithShift = exports.rightArithShift = /* #__PURE__ */(0, _factoriesNumber.createRightArithShift)({
  typed: typed
});
var sec = exports.sec = /* #__PURE__ */(0, _factoriesNumber.createSec)({
  typed: typed
});
var sinh = exports.sinh = /* #__PURE__ */(0, _factoriesNumber.createSinh)({
  typed: typed
});
var sqrt = exports.sqrt = /* #__PURE__ */(0, _factoriesNumber.createSqrt)({
  typed: typed
});
var tan = exports.tan = /* #__PURE__ */(0, _factoriesNumber.createTan)({
  typed: typed
});
var unaryMinus = exports.unaryMinus = /* #__PURE__ */(0, _factoriesNumber.createUnaryMinus)({
  typed: typed
});
var acosh = exports.acosh = /* #__PURE__ */(0, _factoriesNumber.createAcosh)({
  typed: typed
});
var apply = exports.apply = /* #__PURE__ */(0, _factoriesNumber.createApply)({
  isInteger: isInteger,
  typed: typed
});
var asinh = exports.asinh = /* #__PURE__ */(0, _factoriesNumber.createAsinh)({
  typed: typed
});
var bitXor = exports.bitXor = /* #__PURE__ */(0, _factoriesNumber.createBitXor)({
  typed: typed
});
var clone = exports.clone = /* #__PURE__ */(0, _factoriesNumber.createClone)({
  typed: typed
});
var coth = exports.coth = /* #__PURE__ */(0, _factoriesNumber.createCoth)({
  typed: typed
});
var equal = exports.equal = /* #__PURE__ */(0, _factoriesNumber.createEqual)({
  equalScalar: equalScalar,
  typed: typed
});
var factorial = exports.factorial = /* #__PURE__ */(0, _factoriesNumber.createFactorial)({
  gamma: gamma,
  typed: typed
});
var hasNumericValue = exports.hasNumericValue = /* #__PURE__ */(0, _factoriesNumber.createHasNumericValue)({
  isNumeric: isNumeric,
  typed: typed
});
var isNaN = exports.isNaN = /* #__PURE__ */(0, _factoriesNumber.createIsNaN)({
  typed: typed
});
var larger = exports.larger = /* #__PURE__ */(0, _factoriesNumber.createLarger)({
  config: _configReadonly.config,
  typed: typed
});
var log2 = exports.log2 = /* #__PURE__ */(0, _factoriesNumber.createLog2)({
  typed: typed
});
var mode = exports.mode = /* #__PURE__ */(0, _factoriesNumber.createMode)({
  isNaN: isNaN,
  isNumeric: isNumeric,
  typed: typed
});
var norm = exports.norm = /* #__PURE__ */(0, _factoriesNumber.createNorm)({
  typed: typed
});
var partitionSelect = exports.partitionSelect = /* #__PURE__ */(0, _factoriesNumber.createPartitionSelect)({
  compare: compare,
  isNaN: isNaN,
  isNumeric: isNumeric,
  typed: typed
});
var print = exports.print = /* #__PURE__ */(0, _factoriesNumber.createPrint)({
  typed: typed
});
var round = exports.round = /* #__PURE__ */(0, _factoriesNumber.createRound)({
  typed: typed
});
var smaller = exports.smaller = /* #__PURE__ */(0, _factoriesNumber.createSmaller)({
  config: _configReadonly.config,
  typed: typed
});
var subtractScalar = exports.subtractScalar = /* #__PURE__ */(0, _factoriesNumber.createSubtractScalar)({
  typed: typed
});
var _true = exports._true = /* #__PURE__ */(0, _factoriesNumber.createTrue)({});
var variance = exports.variance = /* #__PURE__ */(0, _factoriesNumber.createVariance)({
  add: add,
  apply: apply,
  divide: divide,
  isNaN: isNaN,
  multiply: multiply,
  subtract: subtract,
  typed: typed
});
var zeta = exports.zeta = /* #__PURE__ */(0, _factoriesNumber.createZeta)({
  add: add,
  config: _configReadonly.config,
  divide: divide,
  equal: equal,
  factorial: factorial,
  gamma: gamma,
  isNegative: isNegative,
  multiply: multiply,
  pi: pi,
  pow: pow,
  sin: sin,
  smallerEq: smallerEq,
  subtract: subtract,
  typed: typed
});
var acsch = exports.acsch = /* #__PURE__ */(0, _factoriesNumber.createAcsch)({
  typed: typed
});
var atan2 = exports.atan2 = /* #__PURE__ */(0, _factoriesNumber.createAtan2)({
  typed: typed
});
var catalan = exports.catalan = /* #__PURE__ */(0, _factoriesNumber.createCatalan)({
  addScalar: addScalar,
  combinations: combinations,
  divideScalar: divideScalar,
  isInteger: isInteger,
  isNegative: isNegative,
  multiplyScalar: multiplyScalar,
  typed: typed
});
var compareNatural = exports.compareNatural = /* #__PURE__ */(0, _factoriesNumber.createCompareNatural)({
  compare: compare,
  typed: typed
});
var composition = exports.composition = /* #__PURE__ */(0, _factoriesNumber.createComposition)({
  addScalar: addScalar,
  combinations: combinations,
  isInteger: isInteger,
  isNegative: isNegative,
  isPositive: isPositive,
  larger: larger,
  typed: typed
});
var cumsum = exports.cumsum = /* #__PURE__ */(0, _factoriesNumber.createCumSum)({
  add: add,
  typed: typed,
  unaryPlus: unaryPlus
});
var floor = exports.floor = /* #__PURE__ */(0, _factoriesNumber.createFloor)({
  config: _configReadonly.config,
  round: round,
  typed: typed
});
var hypot = exports.hypot = /* #__PURE__ */(0, _factoriesNumber.createHypot)({
  abs: abs,
  addScalar: addScalar,
  divideScalar: divideScalar,
  isPositive: isPositive,
  multiplyScalar: multiplyScalar,
  smaller: smaller,
  sqrt: sqrt,
  typed: typed
});
var lgamma = exports.lgamma = /* #__PURE__ */(0, _factoriesNumber.createLgamma)({
  typed: typed
});
var median = exports.median = /* #__PURE__ */(0, _factoriesNumber.createMedian)({
  add: add,
  compare: compare,
  divide: divide,
  partitionSelect: partitionSelect,
  typed: typed
});
var multinomial = exports.multinomial = /* #__PURE__ */(0, _factoriesNumber.createMultinomial)({
  add: add,
  divide: divide,
  factorial: factorial,
  isInteger: isInteger,
  isPositive: isPositive,
  multiply: multiply,
  typed: typed
});
var permutations = exports.permutations = /* #__PURE__ */(0, _factoriesNumber.createPermutations)({
  factorial: factorial,
  typed: typed
});
var quantileSeq = exports.quantileSeq = /* #__PURE__ */(0, _factoriesNumber.createQuantileSeq)({
  add: add,
  compare: compare,
  divide: divide,
  isInteger: isInteger,
  larger: larger,
  multiply: multiply,
  partitionSelect: partitionSelect,
  smaller: smaller,
  smallerEq: smallerEq,
  subtract: subtract,
  typed: typed
});
var sign = exports.sign = /* #__PURE__ */(0, _factoriesNumber.createSign)({
  typed: typed
});
var std = exports.std = /* #__PURE__ */(0, _factoriesNumber.createStd)({
  map: map,
  sqrt: sqrt,
  typed: typed,
  variance: variance
});
var stirlingS2 = exports.stirlingS2 = /* #__PURE__ */(0, _factoriesNumber.createStirlingS2)({
  addScalar: addScalar,
  combinations: combinations,
  divideScalar: divideScalar,
  factorial: factorial,
  isInteger: isInteger,
  isNegative: isNegative,
  larger: larger,
  multiplyScalar: multiplyScalar,
  number: number,
  pow: pow,
  subtractScalar: subtractScalar,
  typed: typed
});
var ceil = exports.ceil = /* #__PURE__ */(0, _factoriesNumber.createCeil)({
  config: _configReadonly.config,
  round: round,
  typed: typed
});
var deepEqual = exports.deepEqual = /* #__PURE__ */(0, _factoriesNumber.createDeepEqual)({
  equal: equal,
  typed: typed
});
var fix = exports.fix = /* #__PURE__ */(0, _factoriesNumber.createFix)({
  ceil: ceil,
  floor: floor,
  typed: typed
});
var isPrime = exports.isPrime = /* #__PURE__ */(0, _factoriesNumber.createIsPrime)({
  typed: typed
});
var numeric = exports.numeric = /* #__PURE__ */(0, _factoriesNumber.createNumeric)({
  number: number
});
var prod = exports.prod = /* #__PURE__ */(0, _factoriesNumber.createProd)({
  config: _configReadonly.config,
  multiplyScalar: multiplyScalar,
  numeric: numeric,
  typed: typed
});
var bellNumbers = exports.bellNumbers = /* #__PURE__ */(0, _factoriesNumber.createBellNumbers)({
  addScalar: addScalar,
  isInteger: isInteger,
  isNegative: isNegative,
  stirlingS2: stirlingS2,
  typed: typed
});
var gcd = exports.gcd = /* #__PURE__ */(0, _factoriesNumber.createGcd)({
  typed: typed
});
var mad = exports.mad = /* #__PURE__ */(0, _factoriesNumber.createMad)({
  abs: abs,
  map: map,
  median: median,
  subtract: subtract,
  typed: typed
});
var range = exports.range = /* #__PURE__ */(0, _factoriesNumber.createRange)({
  matrix: matrix,
  add: add,
  config: _configReadonly.config,
  isPositive: isPositive,
  larger: larger,
  largerEq: largerEq,
  smaller: smaller,
  smallerEq: smallerEq,
  typed: typed
});
var sum = exports.sum = /* #__PURE__ */(0, _factoriesNumber.createSum)({
  add: add,
  config: _configReadonly.config,
  numeric: numeric,
  typed: typed
});
var corr = exports.corr = /* #__PURE__ */(0, _factoriesNumber.createCorr)({
  add: add,
  divide: divide,
  matrix: matrix,
  mean: mean,
  multiply: multiply,
  pow: pow,
  sqrt: sqrt,
  subtract: subtract,
  sum: sum,
  typed: typed
});
var max = exports.max = /* #__PURE__ */(0, _factoriesNumber.createMax)({
  config: _configReadonly.config,
  larger: larger,
  numeric: numeric,
  typed: typed
});
var min = exports.min = /* #__PURE__ */(0, _factoriesNumber.createMin)({
  config: _configReadonly.config,
  numeric: numeric,
  smaller: smaller,
  typed: typed
});