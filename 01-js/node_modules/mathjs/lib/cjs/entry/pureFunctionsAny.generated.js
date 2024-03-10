"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.efimovFactor = exports.e = exports.dotPow = exports.dotMultiply = exports.dotDivide = exports.dot = exports.divideScalar = exports.divide = exports.distance = exports.diff = exports.diag = exports.deuteronMass = exports.det = exports.deepEqual = exports.cumsum = exports.cube = exports.ctranspose = exports.csch = exports.csc = exports.cross = exports.createUnit = exports.count = exports.coulomb = exports.coth = exports.cot = exports.cosh = exports.cos = exports.corr = exports.conj = exports.conductanceQuantum = exports.concat = exports.composition = exports.complex = exports.compareText = exports.compareNatural = exports.compare = exports.combinationsWithRep = exports.combinations = exports.column = exports.clone = exports.classicalElectronRadius = exports.ceil = exports.cbrt = exports.catalan = exports["boolean"] = exports.boltzmann = exports.bohrRadius = exports.bohrMagneton = exports.bitXor = exports.bitOr = exports.bitNot = exports.bitAnd = exports.bin = exports.bignumber = exports.bellNumbers = exports.avogadro = exports.atomicMass = exports.atanh = exports.atan2 = exports.atan = exports.asinh = exports.asin = exports.asech = exports.asec = exports.arg = exports.apply = exports.and = exports.addScalar = exports.add = exports.acsch = exports.acsc = exports.acoth = exports.acot = exports.acosh = exports.acos = exports.abs = exports._true = exports._null = exports._false = exports._NaN = exports._Infinity = exports.Unit = exports.SparseMatrix = exports.Spa = exports.SQRT2 = exports.SQRT1_2 = exports.ResultSet = exports.Range = exports.Matrix = exports.LOG2E = exports.LOG10E = exports.LN2 = exports.LN10 = exports.Index = exports.ImmutableDenseMatrix = exports.Fraction = exports.FibonacciHeap = exports.DenseMatrix = exports.Complex = exports.BigNumber = void 0;
exports.ones = exports.oct = exports.numeric = exports.number = exports.nuclearMagneton = exports.nthRoots = exports.nthRoot = exports.not = exports.norm = exports.neutronMass = exports.multiplyScalar = exports.multiply = exports.multinomial = exports.molarVolume = exports.molarPlanckConstant = exports.molarMassC12 = exports.molarMass = exports.mode = exports.mod = exports.min = exports.median = exports.mean = exports.max = exports.matrixFromRows = exports.matrixFromFunction = exports.matrixFromColumns = exports.matrix = exports.map = exports.magneticFluxQuantum = exports.magneticConstant = exports.mad = exports.lyap = exports.lusolve = exports.lup = exports.lsolveAll = exports.lsolve = exports.loschmidt = exports.log2 = exports.log1p = exports.log10 = exports.log = exports.lgamma = exports.leftShift = exports.lcm = exports.largerEq = exports.larger = exports.kron = exports.klitzing = exports.kldivergence = exports.isZero = exports.isPrime = exports.isPositive = exports.isNumeric = exports.isNegative = exports.isNaN = exports.isInteger = exports.invmod = exports.inverseConductanceQuantum = exports.inv = exports.intersect = exports.index = exports.im = exports.ifft = exports.identity = exports.i = exports.hypot = exports.hex = exports.hasNumericValue = exports.hartreeEnergy = exports.gravity = exports.gravitationConstant = exports.getMatrixDataType = exports.gcd = exports.gasConstant = exports.gamma = exports.freqz = exports.fraction = exports.format = exports.forEach = exports.floor = exports.flatten = exports.fix = exports.firstRadiation = exports.fineStructure = exports.filter = exports.fft = exports.fermiCoupling = exports.faraday = exports.factorial = exports.expm1 = exports.expm = exports.exp = exports.erf = exports.equalText = exports.equalScalar = exports.equal = exports.elementaryCharge = exports.electronMass = exports.electricConstant = exports.eigs = void 0;
exports.zeta = exports.zeros = exports.xor = exports.xgcd = exports.wienDisplacement = exports.weakMixingAngle = exports.version = exports.variance = exports.vacuumImpedance = exports.usolveAll = exports.usolve = exports.unit = exports.unequal = exports.unaryPlus = exports.unaryMinus = exports.typed = exports.typeOf = exports.transpose = exports.trace = exports.to = exports.thomsonCrossSection = exports.tau = exports.tanh = exports.tan = exports.sylvester = exports.sum = exports.subtractScalar = exports.subtract = exports.subset = exports.string = exports.stirlingS2 = exports.stefanBoltzmann = exports.std = exports.squeeze = exports.square = exports.sqrtm = exports.sqrt = exports.splitUnit = exports.speedOfLight = exports.sparse = exports.sort = exports.solveODE = exports.smallerEq = exports.smaller = exports.slu = exports.size = exports.sinh = exports.sin = exports.sign = exports.setUnion = exports.setSymDifference = exports.setSize = exports.setPowerset = exports.setMultiplicity = exports.setIsSubset = exports.setIntersect = exports.setDistinct = exports.setDifference = exports.setCartesian = exports.secondRadiation = exports.sech = exports.sec = exports.schur = exports.sackurTetrode = exports.rydberg = exports.row = exports.round = exports.rotationMatrix = exports.rotate = exports.rightLogShift = exports.rightArithShift = exports.resize = exports.reshape = exports.replacer = exports.reducedPlanckConstant = exports.re = exports.range = exports.randomInt = exports.random = exports.quantumOfCirculation = exports.quantileSeq = exports.qr = exports.protonMass = exports.prod = exports.print = exports.pow = exports.polynomialRoot = exports.planckTime = exports.planckTemperature = exports.planckMass = exports.planckLength = exports.planckConstant = exports.planckCharge = exports.pinv = exports.pickRandom = exports.pi = exports.phi = exports.permutations = exports.partitionSelect = exports.or = void 0;
exports.zpk2tf = void 0;
var _configReadonly = require("./configReadonly.js");
var _factoriesAny = require("../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var BigNumber = exports.BigNumber = /* #__PURE__ */(0, _factoriesAny.createBigNumberClass)({
  config: _configReadonly.config
});
var Complex = exports.Complex = /* #__PURE__ */(0, _factoriesAny.createComplexClass)({});
var e = exports.e = /* #__PURE__ */(0, _factoriesAny.createE)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var _false = exports._false = /* #__PURE__ */(0, _factoriesAny.createFalse)({});
var fineStructure = exports.fineStructure = /* #__PURE__ */(0, _factoriesAny.createFineStructure)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var Fraction = exports.Fraction = /* #__PURE__ */(0, _factoriesAny.createFractionClass)({});
var i = exports.i = /* #__PURE__ */(0, _factoriesAny.createI)({
  Complex: Complex
});
var _Infinity = exports._Infinity = /* #__PURE__ */(0, _factoriesAny.createInfinity)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var LN10 = exports.LN10 = /* #__PURE__ */(0, _factoriesAny.createLN10)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var LOG10E = exports.LOG10E = /* #__PURE__ */(0, _factoriesAny.createLOG10E)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var Matrix = exports.Matrix = /* #__PURE__ */(0, _factoriesAny.createMatrixClass)({});
var _NaN = exports._NaN = /* #__PURE__ */(0, _factoriesAny.createNaN)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var _null = exports._null = /* #__PURE__ */(0, _factoriesAny.createNull)({});
var phi = exports.phi = /* #__PURE__ */(0, _factoriesAny.createPhi)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var Range = exports.Range = /* #__PURE__ */(0, _factoriesAny.createRangeClass)({});
var ResultSet = exports.ResultSet = /* #__PURE__ */(0, _factoriesAny.createResultSet)({});
var SQRT1_2 = exports.SQRT1_2 = /* #__PURE__ */(0, _factoriesAny.createSQRT1_2)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var sackurTetrode = exports.sackurTetrode = /* #__PURE__ */(0, _factoriesAny.createSackurTetrode)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var tau = exports.tau = /* #__PURE__ */(0, _factoriesAny.createTau)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var _true = exports._true = /* #__PURE__ */(0, _factoriesAny.createTrue)({});
var version = exports.version = /* #__PURE__ */(0, _factoriesAny.createVersion)({});
var DenseMatrix = exports.DenseMatrix = /* #__PURE__ */(0, _factoriesAny.createDenseMatrixClass)({
  Matrix: Matrix
});
var efimovFactor = exports.efimovFactor = /* #__PURE__ */(0, _factoriesAny.createEfimovFactor)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var LN2 = exports.LN2 = /* #__PURE__ */(0, _factoriesAny.createLN2)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var pi = exports.pi = /* #__PURE__ */(0, _factoriesAny.createPi)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var replacer = exports.replacer = /* #__PURE__ */(0, _factoriesAny.createReplacer)({});
var SQRT2 = exports.SQRT2 = /* #__PURE__ */(0, _factoriesAny.createSQRT2)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var typed = exports.typed = /* #__PURE__ */(0, _factoriesAny.createTyped)({
  BigNumber: BigNumber,
  Complex: Complex,
  DenseMatrix: DenseMatrix,
  Fraction: Fraction
});
var unaryPlus = exports.unaryPlus = /* #__PURE__ */(0, _factoriesAny.createUnaryPlus)({
  BigNumber: BigNumber,
  config: _configReadonly.config,
  typed: typed
});
var weakMixingAngle = exports.weakMixingAngle = /* #__PURE__ */(0, _factoriesAny.createWeakMixingAngle)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var abs = exports.abs = /* #__PURE__ */(0, _factoriesAny.createAbs)({
  typed: typed
});
var acos = exports.acos = /* #__PURE__ */(0, _factoriesAny.createAcos)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
var acot = exports.acot = /* #__PURE__ */(0, _factoriesAny.createAcot)({
  BigNumber: BigNumber,
  typed: typed
});
var acsc = exports.acsc = /* #__PURE__ */(0, _factoriesAny.createAcsc)({
  BigNumber: BigNumber,
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
var addScalar = exports.addScalar = /* #__PURE__ */(0, _factoriesAny.createAddScalar)({
  typed: typed
});
var arg = exports.arg = /* #__PURE__ */(0, _factoriesAny.createArg)({
  typed: typed
});
var asech = exports.asech = /* #__PURE__ */(0, _factoriesAny.createAsech)({
  BigNumber: BigNumber,
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
var asinh = exports.asinh = /* #__PURE__ */(0, _factoriesAny.createAsinh)({
  typed: typed
});
var atan = exports.atan = /* #__PURE__ */(0, _factoriesAny.createAtan)({
  typed: typed
});
var atanh = exports.atanh = /* #__PURE__ */(0, _factoriesAny.createAtanh)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
var bignumber = exports.bignumber = /* #__PURE__ */(0, _factoriesAny.createBignumber)({
  BigNumber: BigNumber,
  typed: typed
});
var bitNot = exports.bitNot = /* #__PURE__ */(0, _factoriesAny.createBitNot)({
  typed: typed
});
var _boolean = exports["boolean"] = /* #__PURE__ */(0, _factoriesAny.createBoolean)({
  typed: typed
});
var clone = exports.clone = /* #__PURE__ */(0, _factoriesAny.createClone)({
  typed: typed
});
var combinations = exports.combinations = /* #__PURE__ */(0, _factoriesAny.createCombinations)({
  typed: typed
});
var complex = exports.complex = /* #__PURE__ */(0, _factoriesAny.createComplex)({
  Complex: Complex,
  typed: typed
});
var conj = exports.conj = /* #__PURE__ */(0, _factoriesAny.createConj)({
  typed: typed
});
var cos = exports.cos = /* #__PURE__ */(0, _factoriesAny.createCos)({
  typed: typed
});
var cot = exports.cot = /* #__PURE__ */(0, _factoriesAny.createCot)({
  BigNumber: BigNumber,
  typed: typed
});
var csc = exports.csc = /* #__PURE__ */(0, _factoriesAny.createCsc)({
  BigNumber: BigNumber,
  typed: typed
});
var cube = exports.cube = /* #__PURE__ */(0, _factoriesAny.createCube)({
  typed: typed
});
var equalScalar = exports.equalScalar = /* #__PURE__ */(0, _factoriesAny.createEqualScalar)({
  config: _configReadonly.config,
  typed: typed
});
var erf = exports.erf = /* #__PURE__ */(0, _factoriesAny.createErf)({
  typed: typed
});
var exp = exports.exp = /* #__PURE__ */(0, _factoriesAny.createExp)({
  typed: typed
});
var expm1 = exports.expm1 = /* #__PURE__ */(0, _factoriesAny.createExpm1)({
  Complex: Complex,
  typed: typed
});
var filter = exports.filter = /* #__PURE__ */(0, _factoriesAny.createFilter)({
  typed: typed
});
var forEach = exports.forEach = /* #__PURE__ */(0, _factoriesAny.createForEach)({
  typed: typed
});
var format = exports.format = /* #__PURE__ */(0, _factoriesAny.createFormat)({
  typed: typed
});
var getMatrixDataType = exports.getMatrixDataType = /* #__PURE__ */(0, _factoriesAny.createGetMatrixDataType)({
  typed: typed
});
var hex = exports.hex = /* #__PURE__ */(0, _factoriesAny.createHex)({
  format: format,
  typed: typed
});
var im = exports.im = /* #__PURE__ */(0, _factoriesAny.createIm)({
  typed: typed
});
var isInteger = exports.isInteger = /* #__PURE__ */(0, _factoriesAny.createIsInteger)({
  typed: typed
});
var isNegative = exports.isNegative = /* #__PURE__ */(0, _factoriesAny.createIsNegative)({
  typed: typed
});
var isPositive = exports.isPositive = /* #__PURE__ */(0, _factoriesAny.createIsPositive)({
  typed: typed
});
var isZero = exports.isZero = /* #__PURE__ */(0, _factoriesAny.createIsZero)({
  typed: typed
});
var LOG2E = exports.LOG2E = /* #__PURE__ */(0, _factoriesAny.createLOG2E)({
  BigNumber: BigNumber,
  config: _configReadonly.config
});
var lgamma = exports.lgamma = /* #__PURE__ */(0, _factoriesAny.createLgamma)({
  Complex: Complex,
  typed: typed
});
var log10 = exports.log10 = /* #__PURE__ */(0, _factoriesAny.createLog10)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
var log2 = exports.log2 = /* #__PURE__ */(0, _factoriesAny.createLog2)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
var map = exports.map = /* #__PURE__ */(0, _factoriesAny.createMap)({
  typed: typed
});
var multiplyScalar = exports.multiplyScalar = /* #__PURE__ */(0, _factoriesAny.createMultiplyScalar)({
  typed: typed
});
var not = exports.not = /* #__PURE__ */(0, _factoriesAny.createNot)({
  typed: typed
});
var number = exports.number = /* #__PURE__ */(0, _factoriesAny.createNumber)({
  typed: typed
});
var oct = exports.oct = /* #__PURE__ */(0, _factoriesAny.createOct)({
  format: format,
  typed: typed
});
var pickRandom = exports.pickRandom = /* #__PURE__ */(0, _factoriesAny.createPickRandom)({
  config: _configReadonly.config,
  typed: typed
});
var print = exports.print = /* #__PURE__ */(0, _factoriesAny.createPrint)({
  typed: typed
});
var random = exports.random = /* #__PURE__ */(0, _factoriesAny.createRandom)({
  config: _configReadonly.config,
  typed: typed
});
var re = exports.re = /* #__PURE__ */(0, _factoriesAny.createRe)({
  typed: typed
});
var sec = exports.sec = /* #__PURE__ */(0, _factoriesAny.createSec)({
  BigNumber: BigNumber,
  typed: typed
});
var sign = exports.sign = /* #__PURE__ */(0, _factoriesAny.createSign)({
  BigNumber: BigNumber,
  Fraction: Fraction,
  complex: complex,
  typed: typed
});
var sin = exports.sin = /* #__PURE__ */(0, _factoriesAny.createSin)({
  typed: typed
});
var SparseMatrix = exports.SparseMatrix = /* #__PURE__ */(0, _factoriesAny.createSparseMatrixClass)({
  Matrix: Matrix,
  equalScalar: equalScalar,
  typed: typed
});
var splitUnit = exports.splitUnit = /* #__PURE__ */(0, _factoriesAny.createSplitUnit)({
  typed: typed
});
var square = exports.square = /* #__PURE__ */(0, _factoriesAny.createSquare)({
  typed: typed
});
var string = exports.string = /* #__PURE__ */(0, _factoriesAny.createString)({
  typed: typed
});
var subtractScalar = exports.subtractScalar = /* #__PURE__ */(0, _factoriesAny.createSubtractScalar)({
  typed: typed
});
var tan = exports.tan = /* #__PURE__ */(0, _factoriesAny.createTan)({
  typed: typed
});
var typeOf = exports.typeOf = /* #__PURE__ */(0, _factoriesAny.createTypeOf)({
  typed: typed
});
var acosh = exports.acosh = /* #__PURE__ */(0, _factoriesAny.createAcosh)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
var acsch = exports.acsch = /* #__PURE__ */(0, _factoriesAny.createAcsch)({
  BigNumber: BigNumber,
  typed: typed
});
var apply = exports.apply = /* #__PURE__ */(0, _factoriesAny.createApply)({
  isInteger: isInteger,
  typed: typed
});
var asec = exports.asec = /* #__PURE__ */(0, _factoriesAny.createAsec)({
  BigNumber: BigNumber,
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
var bin = exports.bin = /* #__PURE__ */(0, _factoriesAny.createBin)({
  format: format,
  typed: typed
});
var combinationsWithRep = exports.combinationsWithRep = /* #__PURE__ */(0, _factoriesAny.createCombinationsWithRep)({
  typed: typed
});
var cosh = exports.cosh = /* #__PURE__ */(0, _factoriesAny.createCosh)({
  typed: typed
});
var csch = exports.csch = /* #__PURE__ */(0, _factoriesAny.createCsch)({
  BigNumber: BigNumber,
  typed: typed
});
var isNaN = exports.isNaN = /* #__PURE__ */(0, _factoriesAny.createIsNaN)({
  typed: typed
});
var isPrime = exports.isPrime = /* #__PURE__ */(0, _factoriesAny.createIsPrime)({
  typed: typed
});
var randomInt = exports.randomInt = /* #__PURE__ */(0, _factoriesAny.createRandomInt)({
  config: _configReadonly.config,
  typed: typed
});
var sech = exports.sech = /* #__PURE__ */(0, _factoriesAny.createSech)({
  BigNumber: BigNumber,
  typed: typed
});
var sinh = exports.sinh = /* #__PURE__ */(0, _factoriesAny.createSinh)({
  typed: typed
});
var sparse = exports.sparse = /* #__PURE__ */(0, _factoriesAny.createSparse)({
  SparseMatrix: SparseMatrix,
  typed: typed
});
var sqrt = exports.sqrt = /* #__PURE__ */(0, _factoriesAny.createSqrt)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
var tanh = exports.tanh = /* #__PURE__ */(0, _factoriesAny.createTanh)({
  typed: typed
});
var unaryMinus = exports.unaryMinus = /* #__PURE__ */(0, _factoriesAny.createUnaryMinus)({
  typed: typed
});
var acoth = exports.acoth = /* #__PURE__ */(0, _factoriesAny.createAcoth)({
  BigNumber: BigNumber,
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
var coth = exports.coth = /* #__PURE__ */(0, _factoriesAny.createCoth)({
  BigNumber: BigNumber,
  typed: typed
});
var fraction = exports.fraction = /* #__PURE__ */(0, _factoriesAny.createFraction)({
  Fraction: Fraction,
  typed: typed
});
var isNumeric = exports.isNumeric = /* #__PURE__ */(0, _factoriesAny.createIsNumeric)({
  typed: typed
});
var matrix = exports.matrix = /* #__PURE__ */(0, _factoriesAny.createMatrix)({
  DenseMatrix: DenseMatrix,
  Matrix: Matrix,
  SparseMatrix: SparseMatrix,
  typed: typed
});
var matrixFromFunction = exports.matrixFromFunction = /* #__PURE__ */(0, _factoriesAny.createMatrixFromFunction)({
  isZero: isZero,
  matrix: matrix,
  typed: typed
});
var mode = exports.mode = /* #__PURE__ */(0, _factoriesAny.createMode)({
  isNaN: isNaN,
  isNumeric: isNumeric,
  typed: typed
});
var numeric = exports.numeric = /* #__PURE__ */(0, _factoriesAny.createNumeric)({
  bignumber: bignumber,
  fraction: fraction,
  number: number
});
var prod = exports.prod = /* #__PURE__ */(0, _factoriesAny.createProd)({
  config: _configReadonly.config,
  multiplyScalar: multiplyScalar,
  numeric: numeric,
  typed: typed
});
var reshape = exports.reshape = /* #__PURE__ */(0, _factoriesAny.createReshape)({
  isInteger: isInteger,
  matrix: matrix,
  typed: typed
});
var size = exports.size = /* #__PURE__ */(0, _factoriesAny.createSize)({
  matrix: matrix,
  config: _configReadonly.config,
  typed: typed
});
var squeeze = exports.squeeze = /* #__PURE__ */(0, _factoriesAny.createSqueeze)({
  matrix: matrix,
  typed: typed
});
var transpose = exports.transpose = /* #__PURE__ */(0, _factoriesAny.createTranspose)({
  matrix: matrix,
  typed: typed
});
var xgcd = exports.xgcd = /* #__PURE__ */(0, _factoriesAny.createXgcd)({
  BigNumber: BigNumber,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
var zeros = exports.zeros = /* #__PURE__ */(0, _factoriesAny.createZeros)({
  BigNumber: BigNumber,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
var asin = exports.asin = /* #__PURE__ */(0, _factoriesAny.createAsin)({
  Complex: Complex,
  config: _configReadonly.config,
  typed: typed
});
var cbrt = exports.cbrt = /* #__PURE__ */(0, _factoriesAny.createCbrt)({
  BigNumber: BigNumber,
  Complex: Complex,
  Fraction: Fraction,
  config: _configReadonly.config,
  isNegative: isNegative,
  matrix: matrix,
  typed: typed,
  unaryMinus: unaryMinus
});
var concat = exports.concat = /* #__PURE__ */(0, _factoriesAny.createConcat)({
  isInteger: isInteger,
  matrix: matrix,
  typed: typed
});
var count = exports.count = /* #__PURE__ */(0, _factoriesAny.createCount)({
  prod: prod,
  size: size,
  typed: typed
});
var ctranspose = exports.ctranspose = /* #__PURE__ */(0, _factoriesAny.createCtranspose)({
  conj: conj,
  transpose: transpose,
  typed: typed
});
var diag = exports.diag = /* #__PURE__ */(0, _factoriesAny.createDiag)({
  DenseMatrix: DenseMatrix,
  SparseMatrix: SparseMatrix,
  matrix: matrix,
  typed: typed
});
var divideScalar = exports.divideScalar = /* #__PURE__ */(0, _factoriesAny.createDivideScalar)({
  numeric: numeric,
  typed: typed
});
var dotDivide = exports.dotDivide = /* #__PURE__ */(0, _factoriesAny.createDotDivide)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
var equal = exports.equal = /* #__PURE__ */(0, _factoriesAny.createEqual)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
var flatten = exports.flatten = /* #__PURE__ */(0, _factoriesAny.createFlatten)({
  matrix: matrix,
  typed: typed
});
var hasNumericValue = exports.hasNumericValue = /* #__PURE__ */(0, _factoriesAny.createHasNumericValue)({
  isNumeric: isNumeric,
  typed: typed
});
var identity = exports.identity = /* #__PURE__ */(0, _factoriesAny.createIdentity)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  SparseMatrix: SparseMatrix,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
var kron = exports.kron = /* #__PURE__ */(0, _factoriesAny.createKron)({
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  typed: typed
});
var largerEq = exports.largerEq = /* #__PURE__ */(0, _factoriesAny.createLargerEq)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
var leftShift = exports.leftShift = /* #__PURE__ */(0, _factoriesAny.createLeftShift)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed,
  zeros: zeros
});
var lsolve = exports.lsolve = /* #__PURE__ */(0, _factoriesAny.createLsolve)({
  DenseMatrix: DenseMatrix,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  subtractScalar: subtractScalar,
  typed: typed
});
var matrixFromColumns = exports.matrixFromColumns = /* #__PURE__ */(0, _factoriesAny.createMatrixFromColumns)({
  flatten: flatten,
  matrix: matrix,
  size: size,
  typed: typed
});
var nthRoot = exports.nthRoot = /* #__PURE__ */(0, _factoriesAny.createNthRoot)({
  BigNumber: BigNumber,
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
var ones = exports.ones = /* #__PURE__ */(0, _factoriesAny.createOnes)({
  BigNumber: BigNumber,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
var qr = exports.qr = /* #__PURE__ */(0, _factoriesAny.createQr)({
  addScalar: addScalar,
  complex: complex,
  conj: conj,
  divideScalar: divideScalar,
  equal: equal,
  identity: identity,
  isZero: isZero,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  sign: sign,
  sqrt: sqrt,
  subtractScalar: subtractScalar,
  typed: typed,
  unaryMinus: unaryMinus,
  zeros: zeros
});
var resize = exports.resize = /* #__PURE__ */(0, _factoriesAny.createResize)({
  config: _configReadonly.config,
  matrix: matrix
});
var rightArithShift = exports.rightArithShift = /* #__PURE__ */(0, _factoriesAny.createRightArithShift)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed,
  zeros: zeros
});
var round = exports.round = /* #__PURE__ */(0, _factoriesAny.createRound)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed,
  zeros: zeros
});
var smaller = exports.smaller = /* #__PURE__ */(0, _factoriesAny.createSmaller)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
var subtract = exports.subtract = /* #__PURE__ */(0, _factoriesAny.createSubtract)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  subtractScalar: subtractScalar,
  typed: typed,
  unaryMinus: unaryMinus
});
var to = exports.to = /* #__PURE__ */(0, _factoriesAny.createTo)({
  concat: concat,
  matrix: matrix,
  typed: typed
});
var unequal = exports.unequal = /* #__PURE__ */(0, _factoriesAny.createUnequal)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  config: _configReadonly.config,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
var usolve = exports.usolve = /* #__PURE__ */(0, _factoriesAny.createUsolve)({
  DenseMatrix: DenseMatrix,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  subtractScalar: subtractScalar,
  typed: typed
});
var xor = exports.xor = /* #__PURE__ */(0, _factoriesAny.createXor)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  matrix: matrix,
  typed: typed
});
var add = exports.add = /* #__PURE__ */(0, _factoriesAny.createAdd)({
  DenseMatrix: DenseMatrix,
  SparseMatrix: SparseMatrix,
  addScalar: addScalar,
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
var atan2 = exports.atan2 = /* #__PURE__ */(0, _factoriesAny.createAtan2)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
var bitAnd = exports.bitAnd = /* #__PURE__ */(0, _factoriesAny.createBitAnd)({
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
var bitXor = exports.bitXor = /* #__PURE__ */(0, _factoriesAny.createBitXor)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  matrix: matrix,
  typed: typed
});
var catalan = exports.catalan = /* #__PURE__ */(0, _factoriesAny.createCatalan)({
  addScalar: addScalar,
  combinations: combinations,
  divideScalar: divideScalar,
  isInteger: isInteger,
  isNegative: isNegative,
  multiplyScalar: multiplyScalar,
  typed: typed
});
var compare = exports.compare = /* #__PURE__ */(0, _factoriesAny.createCompare)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  Fraction: Fraction,
  concat: concat,
  config: _configReadonly.config,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
var compareText = exports.compareText = /* #__PURE__ */(0, _factoriesAny.createCompareText)({
  concat: concat,
  matrix: matrix,
  typed: typed
});
var cumsum = exports.cumsum = /* #__PURE__ */(0, _factoriesAny.createCumSum)({
  add: add,
  typed: typed,
  unaryPlus: unaryPlus
});
var deepEqual = exports.deepEqual = /* #__PURE__ */(0, _factoriesAny.createDeepEqual)({
  equal: equal,
  typed: typed
});
var diff = exports.diff = /* #__PURE__ */(0, _factoriesAny.createDiff)({
  matrix: matrix,
  number: number,
  subtract: subtract,
  typed: typed
});
var distance = exports.distance = /* #__PURE__ */(0, _factoriesAny.createDistance)({
  abs: abs,
  addScalar: addScalar,
  deepEqual: deepEqual,
  divideScalar: divideScalar,
  multiplyScalar: multiplyScalar,
  sqrt: sqrt,
  subtractScalar: subtractScalar,
  typed: typed
});
var dot = exports.dot = /* #__PURE__ */(0, _factoriesAny.createDot)({
  addScalar: addScalar,
  conj: conj,
  multiplyScalar: multiplyScalar,
  size: size,
  typed: typed
});
var equalText = exports.equalText = /* #__PURE__ */(0, _factoriesAny.createEqualText)({
  compareText: compareText,
  isZero: isZero,
  typed: typed
});
var floor = exports.floor = /* #__PURE__ */(0, _factoriesAny.createFloor)({
  DenseMatrix: DenseMatrix,
  config: _configReadonly.config,
  equalScalar: equalScalar,
  matrix: matrix,
  round: round,
  typed: typed,
  zeros: zeros
});
var gcd = exports.gcd = /* #__PURE__ */(0, _factoriesAny.createGcd)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  concat: concat,
  config: _configReadonly.config,
  equalScalar: equalScalar,
  matrix: matrix,
  round: round,
  typed: typed,
  zeros: zeros
});
var hypot = exports.hypot = /* #__PURE__ */(0, _factoriesAny.createHypot)({
  abs: abs,
  addScalar: addScalar,
  divideScalar: divideScalar,
  isPositive: isPositive,
  multiplyScalar: multiplyScalar,
  smaller: smaller,
  sqrt: sqrt,
  typed: typed
});
var ImmutableDenseMatrix = exports.ImmutableDenseMatrix = /* #__PURE__ */(0, _factoriesAny.createImmutableDenseMatrixClass)({
  DenseMatrix: DenseMatrix,
  smaller: smaller
});
var Index = exports.Index = /* #__PURE__ */(0, _factoriesAny.createIndexClass)({
  ImmutableDenseMatrix: ImmutableDenseMatrix,
  getMatrixDataType: getMatrixDataType
});
var larger = exports.larger = /* #__PURE__ */(0, _factoriesAny.createLarger)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
var log = exports.log = /* #__PURE__ */(0, _factoriesAny.createLog)({
  Complex: Complex,
  config: _configReadonly.config,
  divideScalar: divideScalar,
  typed: typed
});
var lsolveAll = exports.lsolveAll = /* #__PURE__ */(0, _factoriesAny.createLsolveAll)({
  DenseMatrix: DenseMatrix,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  subtractScalar: subtractScalar,
  typed: typed
});
var matrixFromRows = exports.matrixFromRows = /* #__PURE__ */(0, _factoriesAny.createMatrixFromRows)({
  flatten: flatten,
  matrix: matrix,
  size: size,
  typed: typed
});
var min = exports.min = /* #__PURE__ */(0, _factoriesAny.createMin)({
  config: _configReadonly.config,
  numeric: numeric,
  smaller: smaller,
  typed: typed
});
var mod = exports.mod = /* #__PURE__ */(0, _factoriesAny.createMod)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  config: _configReadonly.config,
  equalScalar: equalScalar,
  matrix: matrix,
  round: round,
  typed: typed,
  zeros: zeros
});
var multiply = exports.multiply = /* #__PURE__ */(0, _factoriesAny.createMultiply)({
  addScalar: addScalar,
  dot: dot,
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  typed: typed
});
var nthRoots = exports.nthRoots = /* #__PURE__ */(0, _factoriesAny.createNthRoots)({
  Complex: Complex,
  config: _configReadonly.config,
  divideScalar: divideScalar,
  typed: typed
});
var or = exports.or = /* #__PURE__ */(0, _factoriesAny.createOr)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
var partitionSelect = exports.partitionSelect = /* #__PURE__ */(0, _factoriesAny.createPartitionSelect)({
  compare: compare,
  isNaN: isNaN,
  isNumeric: isNumeric,
  typed: typed
});
var rightLogShift = exports.rightLogShift = /* #__PURE__ */(0, _factoriesAny.createRightLogShift)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed,
  zeros: zeros
});
var slu = exports.slu = /* #__PURE__ */(0, _factoriesAny.createSlu)({
  SparseMatrix: SparseMatrix,
  abs: abs,
  add: add,
  divideScalar: divideScalar,
  larger: larger,
  largerEq: largerEq,
  multiply: multiply,
  subtract: subtract,
  transpose: transpose,
  typed: typed
});
var subset = exports.subset = /* #__PURE__ */(0, _factoriesAny.createSubset)({
  add: add,
  matrix: matrix,
  typed: typed,
  zeros: zeros
});
var sum = exports.sum = /* #__PURE__ */(0, _factoriesAny.createSum)({
  add: add,
  config: _configReadonly.config,
  numeric: numeric,
  typed: typed
});
var trace = exports.trace = /* #__PURE__ */(0, _factoriesAny.createTrace)({
  add: add,
  matrix: matrix,
  typed: typed
});
var usolveAll = exports.usolveAll = /* #__PURE__ */(0, _factoriesAny.createUsolveAll)({
  DenseMatrix: DenseMatrix,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  subtractScalar: subtractScalar,
  typed: typed
});
var zpk2tf = exports.zpk2tf = /* #__PURE__ */(0, _factoriesAny.createZpk2tf)({
  Complex: Complex,
  add: add,
  multiply: multiply,
  number: number,
  typed: typed
});
var bitOr = exports.bitOr = /* #__PURE__ */(0, _factoriesAny.createBitOr)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
var ceil = exports.ceil = /* #__PURE__ */(0, _factoriesAny.createCeil)({
  DenseMatrix: DenseMatrix,
  config: _configReadonly.config,
  equalScalar: equalScalar,
  matrix: matrix,
  round: round,
  typed: typed,
  zeros: zeros
});
var compareNatural = exports.compareNatural = /* #__PURE__ */(0, _factoriesAny.createCompareNatural)({
  compare: compare,
  typed: typed
});
var composition = exports.composition = /* #__PURE__ */(0, _factoriesAny.createComposition)({
  addScalar: addScalar,
  combinations: combinations,
  isInteger: isInteger,
  isNegative: isNegative,
  isPositive: isPositive,
  larger: larger,
  typed: typed
});
var cross = exports.cross = /* #__PURE__ */(0, _factoriesAny.createCross)({
  matrix: matrix,
  multiply: multiply,
  subtract: subtract,
  typed: typed
});
var det = exports.det = /* #__PURE__ */(0, _factoriesAny.createDet)({
  divideScalar: divideScalar,
  isZero: isZero,
  matrix: matrix,
  multiply: multiply,
  subtractScalar: subtractScalar,
  typed: typed,
  unaryMinus: unaryMinus
});
var dotMultiply = exports.dotMultiply = /* #__PURE__ */(0, _factoriesAny.createDotMultiply)({
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  typed: typed
});
var FibonacciHeap = exports.FibonacciHeap = /* #__PURE__ */(0, _factoriesAny.createFibonacciHeapClass)({
  larger: larger,
  smaller: smaller
});
var fix = exports.fix = /* #__PURE__ */(0, _factoriesAny.createFix)({
  Complex: Complex,
  DenseMatrix: DenseMatrix,
  ceil: ceil,
  equalScalar: equalScalar,
  floor: floor,
  matrix: matrix,
  typed: typed,
  zeros: zeros
});
var index = exports.index = /* #__PURE__ */(0, _factoriesAny.createIndex)({
  Index: Index,
  typed: typed
});
var intersect = exports.intersect = /* #__PURE__ */(0, _factoriesAny.createIntersect)({
  abs: abs,
  add: add,
  addScalar: addScalar,
  config: _configReadonly.config,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  flatten: flatten,
  isNumeric: isNumeric,
  isZero: isZero,
  matrix: matrix,
  multiply: multiply,
  multiplyScalar: multiplyScalar,
  smaller: smaller,
  subtract: subtract,
  typed: typed
});
var invmod = exports.invmod = /* #__PURE__ */(0, _factoriesAny.createInvmod)({
  BigNumber: BigNumber,
  add: add,
  config: _configReadonly.config,
  equal: equal,
  isInteger: isInteger,
  mod: mod,
  smaller: smaller,
  typed: typed,
  xgcd: xgcd
});
var lcm = exports.lcm = /* #__PURE__ */(0, _factoriesAny.createLcm)({
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  typed: typed
});
var log1p = exports.log1p = /* #__PURE__ */(0, _factoriesAny.createLog1p)({
  Complex: Complex,
  config: _configReadonly.config,
  divideScalar: divideScalar,
  log: log,
  typed: typed
});
var max = exports.max = /* #__PURE__ */(0, _factoriesAny.createMax)({
  config: _configReadonly.config,
  larger: larger,
  numeric: numeric,
  typed: typed
});
var setCartesian = exports.setCartesian = /* #__PURE__ */(0, _factoriesAny.createSetCartesian)({
  DenseMatrix: DenseMatrix,
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
var setDistinct = exports.setDistinct = /* #__PURE__ */(0, _factoriesAny.createSetDistinct)({
  DenseMatrix: DenseMatrix,
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
var setIsSubset = exports.setIsSubset = /* #__PURE__ */(0, _factoriesAny.createSetIsSubset)({
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
var setPowerset = exports.setPowerset = /* #__PURE__ */(0, _factoriesAny.createSetPowerset)({
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
var smallerEq = exports.smallerEq = /* #__PURE__ */(0, _factoriesAny.createSmallerEq)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  config: _configReadonly.config,
  matrix: matrix,
  typed: typed
});
var sort = exports.sort = /* #__PURE__ */(0, _factoriesAny.createSort)({
  compare: compare,
  compareNatural: compareNatural,
  matrix: matrix,
  typed: typed
});
var and = exports.and = /* #__PURE__ */(0, _factoriesAny.createAnd)({
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  not: not,
  typed: typed,
  zeros: zeros
});
var range = exports.range = /* #__PURE__ */(0, _factoriesAny.createRange)({
  bignumber: bignumber,
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
var row = exports.row = /* #__PURE__ */(0, _factoriesAny.createRow)({
  Index: Index,
  matrix: matrix,
  range: range,
  typed: typed
});
var setDifference = exports.setDifference = /* #__PURE__ */(0, _factoriesAny.createSetDifference)({
  DenseMatrix: DenseMatrix,
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
var setMultiplicity = exports.setMultiplicity = /* #__PURE__ */(0, _factoriesAny.createSetMultiplicity)({
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
var setSymDifference = exports.setSymDifference = /* #__PURE__ */(0, _factoriesAny.createSetSymDifference)({
  Index: Index,
  concat: concat,
  setDifference: setDifference,
  size: size,
  subset: subset,
  typed: typed
});
var Spa = exports.Spa = /* #__PURE__ */(0, _factoriesAny.createSpaClass)({
  FibonacciHeap: FibonacciHeap,
  addScalar: addScalar,
  equalScalar: equalScalar
});
var column = exports.column = /* #__PURE__ */(0, _factoriesAny.createColumn)({
  Index: Index,
  matrix: matrix,
  range: range,
  typed: typed
});
var inv = exports.inv = /* #__PURE__ */(0, _factoriesAny.createInv)({
  abs: abs,
  addScalar: addScalar,
  det: det,
  divideScalar: divideScalar,
  identity: identity,
  matrix: matrix,
  multiply: multiply,
  typed: typed,
  unaryMinus: unaryMinus
});
var lup = exports.lup = /* #__PURE__ */(0, _factoriesAny.createLup)({
  DenseMatrix: DenseMatrix,
  Spa: Spa,
  SparseMatrix: SparseMatrix,
  abs: abs,
  addScalar: addScalar,
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  larger: larger,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  subtractScalar: subtractScalar,
  typed: typed,
  unaryMinus: unaryMinus
});
var pinv = exports.pinv = /* #__PURE__ */(0, _factoriesAny.createPinv)({
  Complex: Complex,
  add: add,
  ctranspose: ctranspose,
  deepEqual: deepEqual,
  divideScalar: divideScalar,
  dot: dot,
  dotDivide: dotDivide,
  equal: equal,
  inv: inv,
  matrix: matrix,
  multiply: multiply,
  typed: typed
});
var pow = exports.pow = /* #__PURE__ */(0, _factoriesAny.createPow)({
  Complex: Complex,
  config: _configReadonly.config,
  fraction: fraction,
  identity: identity,
  inv: inv,
  matrix: matrix,
  multiply: multiply,
  number: number,
  typed: typed
});
var setIntersect = exports.setIntersect = /* #__PURE__ */(0, _factoriesAny.createSetIntersect)({
  DenseMatrix: DenseMatrix,
  Index: Index,
  compareNatural: compareNatural,
  size: size,
  subset: subset,
  typed: typed
});
var setUnion = exports.setUnion = /* #__PURE__ */(0, _factoriesAny.createSetUnion)({
  Index: Index,
  concat: concat,
  setIntersect: setIntersect,
  setSymDifference: setSymDifference,
  size: size,
  subset: subset,
  typed: typed
});
var sqrtm = exports.sqrtm = /* #__PURE__ */(0, _factoriesAny.createSqrtm)({
  abs: abs,
  add: add,
  identity: identity,
  inv: inv,
  map: map,
  max: max,
  multiply: multiply,
  size: size,
  sqrt: sqrt,
  subtract: subtract,
  typed: typed
});
var Unit = exports.Unit = /* #__PURE__ */(0, _factoriesAny.createUnitClass)({
  BigNumber: BigNumber,
  Complex: Complex,
  Fraction: Fraction,
  abs: abs,
  addScalar: addScalar,
  config: _configReadonly.config,
  divideScalar: divideScalar,
  equal: equal,
  fix: fix,
  format: format,
  isNumeric: isNumeric,
  multiplyScalar: multiplyScalar,
  number: number,
  pow: pow,
  round: round,
  subtractScalar: subtractScalar
});
var vacuumImpedance = exports.vacuumImpedance = /* #__PURE__ */(0, _factoriesAny.createVacuumImpedance)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var wienDisplacement = exports.wienDisplacement = /* #__PURE__ */(0, _factoriesAny.createWienDisplacement)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var atomicMass = exports.atomicMass = /* #__PURE__ */(0, _factoriesAny.createAtomicMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var bohrMagneton = exports.bohrMagneton = /* #__PURE__ */(0, _factoriesAny.createBohrMagneton)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var boltzmann = exports.boltzmann = /* #__PURE__ */(0, _factoriesAny.createBoltzmann)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var conductanceQuantum = exports.conductanceQuantum = /* #__PURE__ */(0, _factoriesAny.createConductanceQuantum)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var coulomb = exports.coulomb = /* #__PURE__ */(0, _factoriesAny.createCoulomb)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var deuteronMass = exports.deuteronMass = /* #__PURE__ */(0, _factoriesAny.createDeuteronMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var dotPow = exports.dotPow = /* #__PURE__ */(0, _factoriesAny.createDotPow)({
  DenseMatrix: DenseMatrix,
  concat: concat,
  equalScalar: equalScalar,
  matrix: matrix,
  pow: pow,
  typed: typed
});
var electricConstant = exports.electricConstant = /* #__PURE__ */(0, _factoriesAny.createElectricConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var elementaryCharge = exports.elementaryCharge = /* #__PURE__ */(0, _factoriesAny.createElementaryCharge)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var expm = exports.expm = /* #__PURE__ */(0, _factoriesAny.createExpm)({
  abs: abs,
  add: add,
  identity: identity,
  inv: inv,
  multiply: multiply,
  typed: typed
});
var faraday = exports.faraday = /* #__PURE__ */(0, _factoriesAny.createFaraday)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var fft = exports.fft = /* #__PURE__ */(0, _factoriesAny.createFft)({
  addScalar: addScalar,
  ceil: ceil,
  conj: conj,
  divideScalar: divideScalar,
  dotDivide: dotDivide,
  exp: exp,
  i: i,
  log2: log2,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  pow: pow,
  tau: tau,
  typed: typed
});
var gamma = exports.gamma = /* #__PURE__ */(0, _factoriesAny.createGamma)({
  BigNumber: BigNumber,
  Complex: Complex,
  config: _configReadonly.config,
  multiplyScalar: multiplyScalar,
  pow: pow,
  typed: typed
});
var gravitationConstant = exports.gravitationConstant = /* #__PURE__ */(0, _factoriesAny.createGravitationConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var hartreeEnergy = exports.hartreeEnergy = /* #__PURE__ */(0, _factoriesAny.createHartreeEnergy)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var ifft = exports.ifft = /* #__PURE__ */(0, _factoriesAny.createIfft)({
  conj: conj,
  dotDivide: dotDivide,
  fft: fft,
  typed: typed
});
var klitzing = exports.klitzing = /* #__PURE__ */(0, _factoriesAny.createKlitzing)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var loschmidt = exports.loschmidt = /* #__PURE__ */(0, _factoriesAny.createLoschmidt)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var magneticConstant = exports.magneticConstant = /* #__PURE__ */(0, _factoriesAny.createMagneticConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var molarMass = exports.molarMass = /* #__PURE__ */(0, _factoriesAny.createMolarMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var molarPlanckConstant = exports.molarPlanckConstant = /* #__PURE__ */(0, _factoriesAny.createMolarPlanckConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var neutronMass = exports.neutronMass = /* #__PURE__ */(0, _factoriesAny.createNeutronMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var nuclearMagneton = exports.nuclearMagneton = /* #__PURE__ */(0, _factoriesAny.createNuclearMagneton)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var planckCharge = exports.planckCharge = /* #__PURE__ */(0, _factoriesAny.createPlanckCharge)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var planckLength = exports.planckLength = /* #__PURE__ */(0, _factoriesAny.createPlanckLength)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var planckTemperature = exports.planckTemperature = /* #__PURE__ */(0, _factoriesAny.createPlanckTemperature)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var protonMass = exports.protonMass = /* #__PURE__ */(0, _factoriesAny.createProtonMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var quantumOfCirculation = exports.quantumOfCirculation = /* #__PURE__ */(0, _factoriesAny.createQuantumOfCirculation)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var reducedPlanckConstant = exports.reducedPlanckConstant = /* #__PURE__ */(0, _factoriesAny.createReducedPlanckConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var rydberg = exports.rydberg = /* #__PURE__ */(0, _factoriesAny.createRydberg)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var secondRadiation = exports.secondRadiation = /* #__PURE__ */(0, _factoriesAny.createSecondRadiation)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var speedOfLight = exports.speedOfLight = /* #__PURE__ */(0, _factoriesAny.createSpeedOfLight)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var stefanBoltzmann = exports.stefanBoltzmann = /* #__PURE__ */(0, _factoriesAny.createStefanBoltzmann)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var thomsonCrossSection = exports.thomsonCrossSection = /* #__PURE__ */(0, _factoriesAny.createThomsonCrossSection)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var avogadro = exports.avogadro = /* #__PURE__ */(0, _factoriesAny.createAvogadro)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var bohrRadius = exports.bohrRadius = /* #__PURE__ */(0, _factoriesAny.createBohrRadius)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var createUnit = exports.createUnit = /* #__PURE__ */(0, _factoriesAny.createCreateUnit)({
  Unit: Unit,
  typed: typed
});
var divide = exports.divide = /* #__PURE__ */(0, _factoriesAny.createDivide)({
  divideScalar: divideScalar,
  equalScalar: equalScalar,
  inv: inv,
  matrix: matrix,
  multiply: multiply,
  typed: typed
});
var electronMass = exports.electronMass = /* #__PURE__ */(0, _factoriesAny.createElectronMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var factorial = exports.factorial = /* #__PURE__ */(0, _factoriesAny.createFactorial)({
  gamma: gamma,
  typed: typed
});
var firstRadiation = exports.firstRadiation = /* #__PURE__ */(0, _factoriesAny.createFirstRadiation)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var gravity = exports.gravity = /* #__PURE__ */(0, _factoriesAny.createGravity)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var inverseConductanceQuantum = exports.inverseConductanceQuantum = /* #__PURE__ */(0, _factoriesAny.createInverseConductanceQuantum)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var lusolve = exports.lusolve = /* #__PURE__ */(0, _factoriesAny.createLusolve)({
  DenseMatrix: DenseMatrix,
  lsolve: lsolve,
  lup: lup,
  matrix: matrix,
  slu: slu,
  typed: typed,
  usolve: usolve
});
var magneticFluxQuantum = exports.magneticFluxQuantum = /* #__PURE__ */(0, _factoriesAny.createMagneticFluxQuantum)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var molarMassC12 = exports.molarMassC12 = /* #__PURE__ */(0, _factoriesAny.createMolarMassC12)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var multinomial = exports.multinomial = /* #__PURE__ */(0, _factoriesAny.createMultinomial)({
  add: add,
  divide: divide,
  factorial: factorial,
  isInteger: isInteger,
  isPositive: isPositive,
  multiply: multiply,
  typed: typed
});
var permutations = exports.permutations = /* #__PURE__ */(0, _factoriesAny.createPermutations)({
  factorial: factorial,
  typed: typed
});
var planckMass = exports.planckMass = /* #__PURE__ */(0, _factoriesAny.createPlanckMass)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var polynomialRoot = exports.polynomialRoot = /* #__PURE__ */(0, _factoriesAny.createPolynomialRoot)({
  add: add,
  cbrt: cbrt,
  divide: divide,
  equalScalar: equalScalar,
  im: im,
  isZero: isZero,
  multiply: multiply,
  re: re,
  sqrt: sqrt,
  subtract: subtract,
  typeOf: typeOf,
  typed: typed,
  unaryMinus: unaryMinus
});
var setSize = exports.setSize = /* #__PURE__ */(0, _factoriesAny.createSetSize)({
  compareNatural: compareNatural,
  typed: typed
});
var solveODE = exports.solveODE = /* #__PURE__ */(0, _factoriesAny.createSolveODE)({
  abs: abs,
  add: add,
  bignumber: bignumber,
  divide: divide,
  isNegative: isNegative,
  isPositive: isPositive,
  larger: larger,
  map: map,
  matrix: matrix,
  max: max,
  multiply: multiply,
  smaller: smaller,
  subtract: subtract,
  typed: typed,
  unaryMinus: unaryMinus
});
var stirlingS2 = exports.stirlingS2 = /* #__PURE__ */(0, _factoriesAny.createStirlingS2)({
  bignumber: bignumber,
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
var unit = exports.unit = /* #__PURE__ */(0, _factoriesAny.createUnitFunction)({
  Unit: Unit,
  typed: typed
});
var bellNumbers = exports.bellNumbers = /* #__PURE__ */(0, _factoriesAny.createBellNumbers)({
  addScalar: addScalar,
  isInteger: isInteger,
  isNegative: isNegative,
  stirlingS2: stirlingS2,
  typed: typed
});
var eigs = exports.eigs = /* #__PURE__ */(0, _factoriesAny.createEigs)({
  abs: abs,
  add: add,
  addScalar: addScalar,
  atan: atan,
  bignumber: bignumber,
  column: column,
  complex: complex,
  config: _configReadonly.config,
  cos: cos,
  diag: diag,
  divideScalar: divideScalar,
  dot: dot,
  equal: equal,
  flatten: flatten,
  im: im,
  inv: inv,
  larger: larger,
  matrix: matrix,
  matrixFromColumns: matrixFromColumns,
  multiply: multiply,
  multiplyScalar: multiplyScalar,
  number: number,
  qr: qr,
  re: re,
  reshape: reshape,
  sin: sin,
  size: size,
  smaller: smaller,
  sqrt: sqrt,
  subtract: subtract,
  typed: typed,
  usolve: usolve,
  usolveAll: usolveAll
});
var fermiCoupling = exports.fermiCoupling = /* #__PURE__ */(0, _factoriesAny.createFermiCoupling)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var gasConstant = exports.gasConstant = /* #__PURE__ */(0, _factoriesAny.createGasConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var mean = exports.mean = /* #__PURE__ */(0, _factoriesAny.createMean)({
  add: add,
  divide: divide,
  typed: typed
});
var molarVolume = exports.molarVolume = /* #__PURE__ */(0, _factoriesAny.createMolarVolume)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var planckConstant = exports.planckConstant = /* #__PURE__ */(0, _factoriesAny.createPlanckConstant)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var quantileSeq = exports.quantileSeq = /* #__PURE__ */(0, _factoriesAny.createQuantileSeq)({
  bignumber: bignumber,
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
var variance = exports.variance = /* #__PURE__ */(0, _factoriesAny.createVariance)({
  add: add,
  apply: apply,
  divide: divide,
  isNaN: isNaN,
  multiply: multiply,
  subtract: subtract,
  typed: typed
});
var classicalElectronRadius = exports.classicalElectronRadius = /* #__PURE__ */(0, _factoriesAny.createClassicalElectronRadius)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var median = exports.median = /* #__PURE__ */(0, _factoriesAny.createMedian)({
  add: add,
  compare: compare,
  divide: divide,
  partitionSelect: partitionSelect,
  typed: typed
});
var corr = exports.corr = /* #__PURE__ */(0, _factoriesAny.createCorr)({
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
var freqz = exports.freqz = /* #__PURE__ */(0, _factoriesAny.createFreqz)({
  Complex: Complex,
  add: add,
  divide: divide,
  matrix: matrix,
  multiply: multiply,
  typed: typed
});
var mad = exports.mad = /* #__PURE__ */(0, _factoriesAny.createMad)({
  abs: abs,
  map: map,
  median: median,
  subtract: subtract,
  typed: typed
});
var std = exports.std = /* #__PURE__ */(0, _factoriesAny.createStd)({
  map: map,
  sqrt: sqrt,
  typed: typed,
  variance: variance
});
var zeta = exports.zeta = /* #__PURE__ */(0, _factoriesAny.createZeta)({
  BigNumber: BigNumber,
  Complex: Complex,
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
var norm = exports.norm = /* #__PURE__ */(0, _factoriesAny.createNorm)({
  abs: abs,
  add: add,
  conj: conj,
  ctranspose: ctranspose,
  eigs: eigs,
  equalScalar: equalScalar,
  larger: larger,
  matrix: matrix,
  multiply: multiply,
  pow: pow,
  smaller: smaller,
  sqrt: sqrt,
  typed: typed
});
var rotationMatrix = exports.rotationMatrix = /* #__PURE__ */(0, _factoriesAny.createRotationMatrix)({
  BigNumber: BigNumber,
  DenseMatrix: DenseMatrix,
  SparseMatrix: SparseMatrix,
  addScalar: addScalar,
  config: _configReadonly.config,
  cos: cos,
  matrix: matrix,
  multiplyScalar: multiplyScalar,
  norm: norm,
  sin: sin,
  typed: typed,
  unaryMinus: unaryMinus
});
var kldivergence = exports.kldivergence = /* #__PURE__ */(0, _factoriesAny.createKldivergence)({
  divide: divide,
  dotDivide: dotDivide,
  isNumeric: isNumeric,
  log: log,
  map: map,
  matrix: matrix,
  multiply: multiply,
  sum: sum,
  typed: typed
});
var planckTime = exports.planckTime = /* #__PURE__ */(0, _factoriesAny.createPlanckTime)({
  BigNumber: BigNumber,
  Unit: Unit,
  config: _configReadonly.config
});
var schur = exports.schur = /* #__PURE__ */(0, _factoriesAny.createSchur)({
  identity: identity,
  matrix: matrix,
  multiply: multiply,
  norm: norm,
  qr: qr,
  subtract: subtract,
  typed: typed
});
var rotate = exports.rotate = /* #__PURE__ */(0, _factoriesAny.createRotate)({
  multiply: multiply,
  rotationMatrix: rotationMatrix,
  typed: typed
});
var sylvester = exports.sylvester = /* #__PURE__ */(0, _factoriesAny.createSylvester)({
  abs: abs,
  add: add,
  concat: concat,
  identity: identity,
  index: index,
  lusolve: lusolve,
  matrix: matrix,
  matrixFromColumns: matrixFromColumns,
  multiply: multiply,
  range: range,
  schur: schur,
  subset: subset,
  subtract: subtract,
  transpose: transpose,
  typed: typed
});
var lyap = exports.lyap = /* #__PURE__ */(0, _factoriesAny.createLyap)({
  matrix: matrix,
  multiply: multiply,
  sylvester: sylvester,
  transpose: transpose,
  typed: typed
});