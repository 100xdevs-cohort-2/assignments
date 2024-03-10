"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.embeddedDocs = void 0;
var _e = require("./constants/e.js");
var _false = require("./constants/false.js");
var _i = require("./constants/i.js");
var _Infinity = require("./constants/Infinity.js");
var _LN = require("./constants/LN10.js");
var _LN2 = require("./constants/LN2.js");
var _LOG10E = require("./constants/LOG10E.js");
var _LOG2E = require("./constants/LOG2E.js");
var _NaN = require("./constants/NaN.js");
var _null = require("./constants/null.js");
var _phi = require("./constants/phi.js");
var _pi = require("./constants/pi.js");
var _SQRT1_ = require("./constants/SQRT1_2.js");
var _SQRT = require("./constants/SQRT2.js");
var _tau = require("./constants/tau.js");
var _true = require("./constants/true.js");
var _version = require("./constants/version.js");
var _bignumber = require("./construction/bignumber.js");
var _boolean = require("./construction/boolean.js");
var _complex = require("./construction/complex.js");
var _createUnit = require("./construction/createUnit.js");
var _fraction = require("./construction/fraction.js");
var _index = require("./construction/index.js");
var _matrix = require("./construction/matrix.js");
var _number = require("./construction/number.js");
var _sparse = require("./construction/sparse.js");
var _splitUnit = require("./construction/splitUnit.js");
var _string = require("./construction/string.js");
var _unit = require("./construction/unit.js");
var _config = require("./core/config.js");
var _import = require("./core/import.js");
var _typed = require("./core/typed.js");
var _derivative = require("./function/algebra/derivative.js");
var _leafCount = require("./function/algebra/leafCount.js");
var _lsolve = require("./function/algebra/lsolve.js");
var _lsolveAll = require("./function/algebra/lsolveAll.js");
var _lup = require("./function/algebra/lup.js");
var _lusolve = require("./function/algebra/lusolve.js");
var _polynomialRoot = require("./function/algebra/polynomialRoot.js");
var _qr = require("./function/algebra/qr.js");
var _rationalize = require("./function/algebra/rationalize.js");
var _resolve = require("./function/algebra/resolve.js");
var _simplify = require("./function/algebra/simplify.js");
var _simplifyConstant = require("./function/algebra/simplifyConstant.js");
var _simplifyCore = require("./function/algebra/simplifyCore.js");
var _slu = require("./function/algebra/slu.js");
var _symbolicEqual = require("./function/algebra/symbolicEqual.js");
var _usolve = require("./function/algebra/usolve.js");
var _usolveAll = require("./function/algebra/usolveAll.js");
var _abs = require("./function/arithmetic/abs.js");
var _add = require("./function/arithmetic/add.js");
var _cbrt = require("./function/arithmetic/cbrt.js");
var _ceil = require("./function/arithmetic/ceil.js");
var _cube = require("./function/arithmetic/cube.js");
var _divide = require("./function/arithmetic/divide.js");
var _dotDivide = require("./function/arithmetic/dotDivide.js");
var _dotMultiply = require("./function/arithmetic/dotMultiply.js");
var _dotPow = require("./function/arithmetic/dotPow.js");
var _exp = require("./function/arithmetic/exp.js");
var _expm = require("./function/arithmetic/expm.js");
var _expm2 = require("./function/arithmetic/expm1.js");
var _fix = require("./function/arithmetic/fix.js");
var _floor = require("./function/arithmetic/floor.js");
var _gcd = require("./function/arithmetic/gcd.js");
var _hypot = require("./function/arithmetic/hypot.js");
var _invmod = require("./function/arithmetic/invmod.js");
var _lcm = require("./function/arithmetic/lcm.js");
var _log = require("./function/arithmetic/log.js");
var _log2 = require("./function/arithmetic/log10.js");
var _log1p = require("./function/arithmetic/log1p.js");
var _log3 = require("./function/arithmetic/log2.js");
var _mod = require("./function/arithmetic/mod.js");
var _multiply = require("./function/arithmetic/multiply.js");
var _norm = require("./function/arithmetic/norm.js");
var _nthRoot = require("./function/arithmetic/nthRoot.js");
var _nthRoots = require("./function/arithmetic/nthRoots.js");
var _pow = require("./function/arithmetic/pow.js");
var _round = require("./function/arithmetic/round.js");
var _sign = require("./function/arithmetic/sign.js");
var _sqrt = require("./function/arithmetic/sqrt.js");
var _sqrtm = require("./function/arithmetic/sqrtm.js");
var _sylvester = require("./function/algebra/sylvester.js");
var _schur = require("./function/algebra/schur.js");
var _lyap = require("./function/algebra/lyap.js");
var _square = require("./function/arithmetic/square.js");
var _subtract = require("./function/arithmetic/subtract.js");
var _unaryMinus = require("./function/arithmetic/unaryMinus.js");
var _unaryPlus = require("./function/arithmetic/unaryPlus.js");
var _xgcd = require("./function/arithmetic/xgcd.js");
var _bitAnd = require("./function/bitwise/bitAnd.js");
var _bitNot = require("./function/bitwise/bitNot.js");
var _bitOr = require("./function/bitwise/bitOr.js");
var _bitXor = require("./function/bitwise/bitXor.js");
var _leftShift = require("./function/bitwise/leftShift.js");
var _rightArithShift = require("./function/bitwise/rightArithShift.js");
var _rightLogShift = require("./function/bitwise/rightLogShift.js");
var _bellNumbers = require("./function/combinatorics/bellNumbers.js");
var _catalan = require("./function/combinatorics/catalan.js");
var _composition = require("./function/combinatorics/composition.js");
var _stirlingS = require("./function/combinatorics/stirlingS2.js");
var _arg = require("./function/complex/arg.js");
var _conj = require("./function/complex/conj.js");
var _im = require("./function/complex/im.js");
var _re = require("./function/complex/re.js");
var _evaluate = require("./function/expression/evaluate.js");
var _help = require("./function/expression/help.js");
var _distance = require("./function/geometry/distance.js");
var _intersect = require("./function/geometry/intersect.js");
var _and = require("./function/logical/and.js");
var _not = require("./function/logical/not.js");
var _or = require("./function/logical/or.js");
var _xor = require("./function/logical/xor.js");
var _column = require("./function/matrix/column.js");
var _concat = require("./function/matrix/concat.js");
var _count = require("./function/matrix/count.js");
var _cross = require("./function/matrix/cross.js");
var _ctranspose = require("./function/matrix/ctranspose.js");
var _det = require("./function/matrix/det.js");
var _diag = require("./function/matrix/diag.js");
var _diff = require("./function/matrix/diff.js");
var _dot = require("./function/matrix/dot.js");
var _eigs = require("./function/matrix/eigs.js");
var _filter = require("./function/matrix/filter.js");
var _flatten = require("./function/matrix/flatten.js");
var _forEach = require("./function/matrix/forEach.js");
var _getMatrixDataType = require("./function/matrix/getMatrixDataType.js");
var _identity = require("./function/matrix/identity.js");
var _inv = require("./function/matrix/inv.js");
var _pinv = require("./function/matrix/pinv.js");
var _kron = require("./function/matrix/kron.js");
var _map = require("./function/matrix/map.js");
var _matrixFromColumns = require("./function/matrix/matrixFromColumns.js");
var _matrixFromFunction = require("./function/matrix/matrixFromFunction.js");
var _matrixFromRows = require("./function/matrix/matrixFromRows.js");
var _ones = require("./function/matrix/ones.js");
var _partitionSelect = require("./function/matrix/partitionSelect.js");
var _range = require("./function/matrix/range.js");
var _reshape = require("./function/matrix/reshape.js");
var _resize = require("./function/matrix/resize.js");
var _rotate = require("./function/matrix/rotate.js");
var _rotationMatrix = require("./function/matrix/rotationMatrix.js");
var _row = require("./function/matrix/row.js");
var _size = require("./function/matrix/size.js");
var _sort = require("./function/matrix/sort.js");
var _squeeze = require("./function/matrix/squeeze.js");
var _subset = require("./function/matrix/subset.js");
var _trace = require("./function/matrix/trace.js");
var _transpose = require("./function/matrix/transpose.js");
var _zeros = require("./function/matrix/zeros.js");
var _fft = require("./function/matrix/fft.js");
var _ifft = require("./function/matrix/ifft.js");
var _combinations = require("./function/probability/combinations.js");
var _combinationsWithRep = require("./function/probability/combinationsWithRep.js");
var _factorial = require("./function/probability/factorial.js");
var _gamma = require("./function/probability/gamma.js");
var _lgamma = require("./function/probability/lgamma.js");
var _kldivergence = require("./function/probability/kldivergence.js");
var _multinomial = require("./function/probability/multinomial.js");
var _permutations = require("./function/probability/permutations.js");
var _pickRandom = require("./function/probability/pickRandom.js");
var _random = require("./function/probability/random.js");
var _randomInt = require("./function/probability/randomInt.js");
var _compare = require("./function/relational/compare.js");
var _compareNatural = require("./function/relational/compareNatural.js");
var _compareText = require("./function/relational/compareText.js");
var _deepEqual = require("./function/relational/deepEqual.js");
var _equal = require("./function/relational/equal.js");
var _equalText = require("./function/relational/equalText.js");
var _larger = require("./function/relational/larger.js");
var _largerEq = require("./function/relational/largerEq.js");
var _smaller = require("./function/relational/smaller.js");
var _smallerEq = require("./function/relational/smallerEq.js");
var _unequal = require("./function/relational/unequal.js");
var _setCartesian = require("./function/set/setCartesian.js");
var _setDifference = require("./function/set/setDifference.js");
var _setDistinct = require("./function/set/setDistinct.js");
var _setIntersect = require("./function/set/setIntersect.js");
var _setIsSubset = require("./function/set/setIsSubset.js");
var _setMultiplicity = require("./function/set/setMultiplicity.js");
var _setPowerset = require("./function/set/setPowerset.js");
var _setSize = require("./function/set/setSize.js");
var _setSymDifference = require("./function/set/setSymDifference.js");
var _setUnion = require("./function/set/setUnion.js");
var _zpk2tf = require("./function/signal/zpk2tf.js");
var _freqz = require("./function/signal/freqz.js");
var _erf = require("./function/special/erf.js");
var _zeta = require("./function/special/zeta.js");
var _mad = require("./function/statistics/mad.js");
var _max = require("./function/statistics/max.js");
var _mean = require("./function/statistics/mean.js");
var _median = require("./function/statistics/median.js");
var _min = require("./function/statistics/min.js");
var _mode = require("./function/statistics/mode.js");
var _prod = require("./function/statistics/prod.js");
var _quantileSeq = require("./function/statistics/quantileSeq.js");
var _std = require("./function/statistics/std.js");
var _cumsum = require("./function/statistics/cumsum.js");
var _sum = require("./function/statistics/sum.js");
var _variance = require("./function/statistics/variance.js");
var _corr = require("./function/statistics/corr.js");
var _acos = require("./function/trigonometry/acos.js");
var _acosh = require("./function/trigonometry/acosh.js");
var _acot = require("./function/trigonometry/acot.js");
var _acoth = require("./function/trigonometry/acoth.js");
var _acsc = require("./function/trigonometry/acsc.js");
var _acsch = require("./function/trigonometry/acsch.js");
var _asec = require("./function/trigonometry/asec.js");
var _asech = require("./function/trigonometry/asech.js");
var _asin = require("./function/trigonometry/asin.js");
var _asinh = require("./function/trigonometry/asinh.js");
var _atan = require("./function/trigonometry/atan.js");
var _atan2 = require("./function/trigonometry/atan2.js");
var _atanh = require("./function/trigonometry/atanh.js");
var _cos = require("./function/trigonometry/cos.js");
var _cosh = require("./function/trigonometry/cosh.js");
var _cot = require("./function/trigonometry/cot.js");
var _coth = require("./function/trigonometry/coth.js");
var _csc = require("./function/trigonometry/csc.js");
var _csch = require("./function/trigonometry/csch.js");
var _sec = require("./function/trigonometry/sec.js");
var _sech = require("./function/trigonometry/sech.js");
var _sin = require("./function/trigonometry/sin.js");
var _sinh = require("./function/trigonometry/sinh.js");
var _tan = require("./function/trigonometry/tan.js");
var _tanh = require("./function/trigonometry/tanh.js");
var _to = require("./function/units/to.js");
var _bin = require("./function/utils/bin.js");
var _clone = require("./function/utils/clone.js");
var _format = require("./function/utils/format.js");
var _hasNumericValue = require("./function/utils/hasNumericValue.js");
var _hex = require("./function/utils/hex.js");
var _isInteger = require("./function/utils/isInteger.js");
var _isNaN = require("./function/utils/isNaN.js");
var _isNegative = require("./function/utils/isNegative.js");
var _isNumeric = require("./function/utils/isNumeric.js");
var _isPositive = require("./function/utils/isPositive.js");
var _isPrime = require("./function/utils/isPrime.js");
var _isZero = require("./function/utils/isZero.js");
var _numeric = require("./function/utils/numeric.js");
var _oct = require("./function/utils/oct.js");
var _print = require("./function/utils/print.js");
var _typeOf = require("./function/utils/typeOf.js");
var _solveODE = require("./function/numeric/solveODE.js");
var embeddedDocs = exports.embeddedDocs = {
  // construction functions
  bignumber: _bignumber.bignumberDocs,
  "boolean": _boolean.booleanDocs,
  complex: _complex.complexDocs,
  createUnit: _createUnit.createUnitDocs,
  fraction: _fraction.fractionDocs,
  index: _index.indexDocs,
  matrix: _matrix.matrixDocs,
  number: _number.numberDocs,
  sparse: _sparse.sparseDocs,
  splitUnit: _splitUnit.splitUnitDocs,
  string: _string.stringDocs,
  unit: _unit.unitDocs,
  // constants
  e: _e.eDocs,
  E: _e.eDocs,
  "false": _false.falseDocs,
  i: _i.iDocs,
  Infinity: _Infinity.InfinityDocs,
  LN2: _LN2.LN2Docs,
  LN10: _LN.LN10Docs,
  LOG2E: _LOG2E.LOG2EDocs,
  LOG10E: _LOG10E.LOG10EDocs,
  NaN: _NaN.NaNDocs,
  "null": _null.nullDocs,
  pi: _pi.piDocs,
  PI: _pi.piDocs,
  phi: _phi.phiDocs,
  SQRT1_2: _SQRT1_.SQRT12Docs,
  SQRT2: _SQRT.SQRT2Docs,
  tau: _tau.tauDocs,
  "true": _true.trueDocs,
  version: _version.versionDocs,
  // physical constants
  // TODO: more detailed docs for physical constants
  speedOfLight: {
    description: 'Speed of light in vacuum',
    examples: ['speedOfLight']
  },
  gravitationConstant: {
    description: 'Newtonian constant of gravitation',
    examples: ['gravitationConstant']
  },
  planckConstant: {
    description: 'Planck constant',
    examples: ['planckConstant']
  },
  reducedPlanckConstant: {
    description: 'Reduced Planck constant',
    examples: ['reducedPlanckConstant']
  },
  magneticConstant: {
    description: 'Magnetic constant (vacuum permeability)',
    examples: ['magneticConstant']
  },
  electricConstant: {
    description: 'Electric constant (vacuum permeability)',
    examples: ['electricConstant']
  },
  vacuumImpedance: {
    description: 'Characteristic impedance of vacuum',
    examples: ['vacuumImpedance']
  },
  coulomb: {
    description: 'Coulomb\'s constant',
    examples: ['coulomb']
  },
  elementaryCharge: {
    description: 'Elementary charge',
    examples: ['elementaryCharge']
  },
  bohrMagneton: {
    description: 'Borh magneton',
    examples: ['bohrMagneton']
  },
  conductanceQuantum: {
    description: 'Conductance quantum',
    examples: ['conductanceQuantum']
  },
  inverseConductanceQuantum: {
    description: 'Inverse conductance quantum',
    examples: ['inverseConductanceQuantum']
  },
  // josephson: {description: 'Josephson constant', examples: ['josephson']},
  magneticFluxQuantum: {
    description: 'Magnetic flux quantum',
    examples: ['magneticFluxQuantum']
  },
  nuclearMagneton: {
    description: 'Nuclear magneton',
    examples: ['nuclearMagneton']
  },
  klitzing: {
    description: 'Von Klitzing constant',
    examples: ['klitzing']
  },
  bohrRadius: {
    description: 'Borh radius',
    examples: ['bohrRadius']
  },
  classicalElectronRadius: {
    description: 'Classical electron radius',
    examples: ['classicalElectronRadius']
  },
  electronMass: {
    description: 'Electron mass',
    examples: ['electronMass']
  },
  fermiCoupling: {
    description: 'Fermi coupling constant',
    examples: ['fermiCoupling']
  },
  fineStructure: {
    description: 'Fine-structure constant',
    examples: ['fineStructure']
  },
  hartreeEnergy: {
    description: 'Hartree energy',
    examples: ['hartreeEnergy']
  },
  protonMass: {
    description: 'Proton mass',
    examples: ['protonMass']
  },
  deuteronMass: {
    description: 'Deuteron Mass',
    examples: ['deuteronMass']
  },
  neutronMass: {
    description: 'Neutron mass',
    examples: ['neutronMass']
  },
  quantumOfCirculation: {
    description: 'Quantum of circulation',
    examples: ['quantumOfCirculation']
  },
  rydberg: {
    description: 'Rydberg constant',
    examples: ['rydberg']
  },
  thomsonCrossSection: {
    description: 'Thomson cross section',
    examples: ['thomsonCrossSection']
  },
  weakMixingAngle: {
    description: 'Weak mixing angle',
    examples: ['weakMixingAngle']
  },
  efimovFactor: {
    description: 'Efimov factor',
    examples: ['efimovFactor']
  },
  atomicMass: {
    description: 'Atomic mass constant',
    examples: ['atomicMass']
  },
  avogadro: {
    description: 'Avogadro\'s number',
    examples: ['avogadro']
  },
  boltzmann: {
    description: 'Boltzmann constant',
    examples: ['boltzmann']
  },
  faraday: {
    description: 'Faraday constant',
    examples: ['faraday']
  },
  firstRadiation: {
    description: 'First radiation constant',
    examples: ['firstRadiation']
  },
  loschmidt: {
    description: 'Loschmidt constant at T=273.15 K and p=101.325 kPa',
    examples: ['loschmidt']
  },
  gasConstant: {
    description: 'Gas constant',
    examples: ['gasConstant']
  },
  molarPlanckConstant: {
    description: 'Molar Planck constant',
    examples: ['molarPlanckConstant']
  },
  molarVolume: {
    description: 'Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa',
    examples: ['molarVolume']
  },
  sackurTetrode: {
    description: 'Sackur-Tetrode constant at T=1 K and p=101.325 kPa',
    examples: ['sackurTetrode']
  },
  secondRadiation: {
    description: 'Second radiation constant',
    examples: ['secondRadiation']
  },
  stefanBoltzmann: {
    description: 'Stefan-Boltzmann constant',
    examples: ['stefanBoltzmann']
  },
  wienDisplacement: {
    description: 'Wien displacement law constant',
    examples: ['wienDisplacement']
  },
  // spectralRadiance: {description: 'First radiation constant for spectral radiance', examples: ['spectralRadiance']},

  molarMass: {
    description: 'Molar mass constant',
    examples: ['molarMass']
  },
  molarMassC12: {
    description: 'Molar mass constant of carbon-12',
    examples: ['molarMassC12']
  },
  gravity: {
    description: 'Standard acceleration of gravity (standard acceleration of free-fall on Earth)',
    examples: ['gravity']
  },
  planckLength: {
    description: 'Planck length',
    examples: ['planckLength']
  },
  planckMass: {
    description: 'Planck mass',
    examples: ['planckMass']
  },
  planckTime: {
    description: 'Planck time',
    examples: ['planckTime']
  },
  planckCharge: {
    description: 'Planck charge',
    examples: ['planckCharge']
  },
  planckTemperature: {
    description: 'Planck temperature',
    examples: ['planckTemperature']
  },
  // functions - algebra
  derivative: _derivative.derivativeDocs,
  lsolve: _lsolve.lsolveDocs,
  lsolveAll: _lsolveAll.lsolveAllDocs,
  lup: _lup.lupDocs,
  lusolve: _lusolve.lusolveDocs,
  leafCount: _leafCount.leafCountDocs,
  polynomialRoot: _polynomialRoot.polynomialRootDocs,
  resolve: _resolve.resolveDocs,
  simplify: _simplify.simplifyDocs,
  simplifyConstant: _simplifyConstant.simplifyConstantDocs,
  simplifyCore: _simplifyCore.simplifyCoreDocs,
  symbolicEqual: _symbolicEqual.symbolicEqualDocs,
  rationalize: _rationalize.rationalizeDocs,
  slu: _slu.sluDocs,
  usolve: _usolve.usolveDocs,
  usolveAll: _usolveAll.usolveAllDocs,
  qr: _qr.qrDocs,
  // functions - arithmetic
  abs: _abs.absDocs,
  add: _add.addDocs,
  cbrt: _cbrt.cbrtDocs,
  ceil: _ceil.ceilDocs,
  cube: _cube.cubeDocs,
  divide: _divide.divideDocs,
  dotDivide: _dotDivide.dotDivideDocs,
  dotMultiply: _dotMultiply.dotMultiplyDocs,
  dotPow: _dotPow.dotPowDocs,
  exp: _exp.expDocs,
  expm: _expm.expmDocs,
  expm1: _expm2.expm1Docs,
  fix: _fix.fixDocs,
  floor: _floor.floorDocs,
  gcd: _gcd.gcdDocs,
  hypot: _hypot.hypotDocs,
  lcm: _lcm.lcmDocs,
  log: _log.logDocs,
  log2: _log3.log2Docs,
  log1p: _log1p.log1pDocs,
  log10: _log2.log10Docs,
  mod: _mod.modDocs,
  multiply: _multiply.multiplyDocs,
  norm: _norm.normDocs,
  nthRoot: _nthRoot.nthRootDocs,
  nthRoots: _nthRoots.nthRootsDocs,
  pow: _pow.powDocs,
  round: _round.roundDocs,
  sign: _sign.signDocs,
  sqrt: _sqrt.sqrtDocs,
  sqrtm: _sqrtm.sqrtmDocs,
  square: _square.squareDocs,
  subtract: _subtract.subtractDocs,
  unaryMinus: _unaryMinus.unaryMinusDocs,
  unaryPlus: _unaryPlus.unaryPlusDocs,
  xgcd: _xgcd.xgcdDocs,
  invmod: _invmod.invmodDocs,
  // functions - bitwise
  bitAnd: _bitAnd.bitAndDocs,
  bitNot: _bitNot.bitNotDocs,
  bitOr: _bitOr.bitOrDocs,
  bitXor: _bitXor.bitXorDocs,
  leftShift: _leftShift.leftShiftDocs,
  rightArithShift: _rightArithShift.rightArithShiftDocs,
  rightLogShift: _rightLogShift.rightLogShiftDocs,
  // functions - combinatorics
  bellNumbers: _bellNumbers.bellNumbersDocs,
  catalan: _catalan.catalanDocs,
  composition: _composition.compositionDocs,
  stirlingS2: _stirlingS.stirlingS2Docs,
  // functions - core
  config: _config.configDocs,
  "import": _import.importDocs,
  typed: _typed.typedDocs,
  // functions - complex
  arg: _arg.argDocs,
  conj: _conj.conjDocs,
  re: _re.reDocs,
  im: _im.imDocs,
  // functions - expression
  evaluate: _evaluate.evaluateDocs,
  help: _help.helpDocs,
  // functions - geometry
  distance: _distance.distanceDocs,
  intersect: _intersect.intersectDocs,
  // functions - logical
  and: _and.andDocs,
  not: _not.notDocs,
  or: _or.orDocs,
  xor: _xor.xorDocs,
  // functions - matrix
  concat: _concat.concatDocs,
  count: _count.countDocs,
  cross: _cross.crossDocs,
  column: _column.columnDocs,
  ctranspose: _ctranspose.ctransposeDocs,
  det: _det.detDocs,
  diag: _diag.diagDocs,
  diff: _diff.diffDocs,
  dot: _dot.dotDocs,
  getMatrixDataType: _getMatrixDataType.getMatrixDataTypeDocs,
  identity: _identity.identityDocs,
  filter: _filter.filterDocs,
  flatten: _flatten.flattenDocs,
  forEach: _forEach.forEachDocs,
  inv: _inv.invDocs,
  pinv: _pinv.pinvDocs,
  eigs: _eigs.eigsDocs,
  kron: _kron.kronDocs,
  matrixFromFunction: _matrixFromFunction.matrixFromFunctionDocs,
  matrixFromRows: _matrixFromRows.matrixFromRowsDocs,
  matrixFromColumns: _matrixFromColumns.matrixFromColumnsDocs,
  map: _map.mapDocs,
  ones: _ones.onesDocs,
  partitionSelect: _partitionSelect.partitionSelectDocs,
  range: _range.rangeDocs,
  resize: _resize.resizeDocs,
  reshape: _reshape.reshapeDocs,
  rotate: _rotate.rotateDocs,
  rotationMatrix: _rotationMatrix.rotationMatrixDocs,
  row: _row.rowDocs,
  size: _size.sizeDocs,
  sort: _sort.sortDocs,
  squeeze: _squeeze.squeezeDocs,
  subset: _subset.subsetDocs,
  trace: _trace.traceDocs,
  transpose: _transpose.transposeDocs,
  zeros: _zeros.zerosDocs,
  fft: _fft.fftDocs,
  ifft: _ifft.ifftDocs,
  sylvester: _sylvester.sylvesterDocs,
  schur: _schur.schurDocs,
  lyap: _lyap.lyapDocs,
  // functions - numeric
  solveODE: _solveODE.solveODEDocs,
  // functions - probability
  combinations: _combinations.combinationsDocs,
  combinationsWithRep: _combinationsWithRep.combinationsWithRepDocs,
  // distribution: distributionDocs,
  factorial: _factorial.factorialDocs,
  gamma: _gamma.gammaDocs,
  kldivergence: _kldivergence.kldivergenceDocs,
  lgamma: _lgamma.lgammaDocs,
  multinomial: _multinomial.multinomialDocs,
  permutations: _permutations.permutationsDocs,
  pickRandom: _pickRandom.pickRandomDocs,
  random: _random.randomDocs,
  randomInt: _randomInt.randomIntDocs,
  // functions - relational
  compare: _compare.compareDocs,
  compareNatural: _compareNatural.compareNaturalDocs,
  compareText: _compareText.compareTextDocs,
  deepEqual: _deepEqual.deepEqualDocs,
  equal: _equal.equalDocs,
  equalText: _equalText.equalTextDocs,
  larger: _larger.largerDocs,
  largerEq: _largerEq.largerEqDocs,
  smaller: _smaller.smallerDocs,
  smallerEq: _smallerEq.smallerEqDocs,
  unequal: _unequal.unequalDocs,
  // functions - set
  setCartesian: _setCartesian.setCartesianDocs,
  setDifference: _setDifference.setDifferenceDocs,
  setDistinct: _setDistinct.setDistinctDocs,
  setIntersect: _setIntersect.setIntersectDocs,
  setIsSubset: _setIsSubset.setIsSubsetDocs,
  setMultiplicity: _setMultiplicity.setMultiplicityDocs,
  setPowerset: _setPowerset.setPowersetDocs,
  setSize: _setSize.setSizeDocs,
  setSymDifference: _setSymDifference.setSymDifferenceDocs,
  setUnion: _setUnion.setUnionDocs,
  // functions - signal
  zpk2tf: _zpk2tf.zpk2tfDocs,
  freqz: _freqz.freqzDocs,
  // functions - special
  erf: _erf.erfDocs,
  zeta: _zeta.zetaDocs,
  // functions - statistics
  cumsum: _cumsum.cumSumDocs,
  mad: _mad.madDocs,
  max: _max.maxDocs,
  mean: _mean.meanDocs,
  median: _median.medianDocs,
  min: _min.minDocs,
  mode: _mode.modeDocs,
  prod: _prod.prodDocs,
  quantileSeq: _quantileSeq.quantileSeqDocs,
  std: _std.stdDocs,
  sum: _sum.sumDocs,
  variance: _variance.varianceDocs,
  corr: _corr.corrDocs,
  // functions - trigonometry
  acos: _acos.acosDocs,
  acosh: _acosh.acoshDocs,
  acot: _acot.acotDocs,
  acoth: _acoth.acothDocs,
  acsc: _acsc.acscDocs,
  acsch: _acsch.acschDocs,
  asec: _asec.asecDocs,
  asech: _asech.asechDocs,
  asin: _asin.asinDocs,
  asinh: _asinh.asinhDocs,
  atan: _atan.atanDocs,
  atanh: _atanh.atanhDocs,
  atan2: _atan2.atan2Docs,
  cos: _cos.cosDocs,
  cosh: _cosh.coshDocs,
  cot: _cot.cotDocs,
  coth: _coth.cothDocs,
  csc: _csc.cscDocs,
  csch: _csch.cschDocs,
  sec: _sec.secDocs,
  sech: _sech.sechDocs,
  sin: _sin.sinDocs,
  sinh: _sinh.sinhDocs,
  tan: _tan.tanDocs,
  tanh: _tanh.tanhDocs,
  // functions - units
  to: _to.toDocs,
  // functions - utils
  clone: _clone.cloneDocs,
  format: _format.formatDocs,
  bin: _bin.binDocs,
  oct: _oct.octDocs,
  hex: _hex.hexDocs,
  isNaN: _isNaN.isNaNDocs,
  isInteger: _isInteger.isIntegerDocs,
  isNegative: _isNegative.isNegativeDocs,
  isNumeric: _isNumeric.isNumericDocs,
  hasNumericValue: _hasNumericValue.hasNumericValueDocs,
  isPositive: _isPositive.isPositiveDocs,
  isPrime: _isPrime.isPrimeDocs,
  isZero: _isZero.isZeroDocs,
  print: _print.printDocs,
  typeOf: _typeOf.typeOfDocs,
  numeric: _numeric.numericDocs
};