"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derivative = exports.compile = exports.chain = exports.SymbolNode = exports.RelationalNode = exports.RangeNode = exports.Parser = exports.ParenthesisNode = exports.OperatorNode = exports.ObjectNode = exports.Node = exports.IndexNode = exports.Help = exports.FunctionNode = exports.FunctionAssignmentNode = exports.ConstantNode = exports.ConditionalNode = exports.Chain = exports.BlockNode = exports.AssignmentNode = exports.ArrayNode = exports.AccessorNode = void 0;
Object.defineProperty(exports, "docs", {
  enumerable: true,
  get: function get() {
    return _embeddedDocs.embeddedDocs;
  }
});
exports.symbolicEqual = exports.simplifyCore = exports.simplifyConstant = exports.simplify = exports.reviver = exports.resolve = exports.rationalize = exports.parser = exports.parse = exports.leafCount = exports.help = exports.evaluate = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _configReadonly = require("./configReadonly.js");
var _factoriesAny = require("../factoriesAny.js");
var _pureFunctionsAnyGenerated = require("./pureFunctionsAny.generated.js");
var _embeddedDocs = require("../expression/embeddedDocs/embeddedDocs.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var math = {}; // NOT pure!
var mathWithTransform = {}; // NOT pure!
var classes = {}; // NOT pure!

var Node = exports.Node = (0, _factoriesAny.createNode)({
  mathWithTransform: mathWithTransform
});
var ObjectNode = exports.ObjectNode = (0, _factoriesAny.createObjectNode)({
  Node: Node
});
var OperatorNode = exports.OperatorNode = (0, _factoriesAny.createOperatorNode)({
  Node: Node
});
var ParenthesisNode = exports.ParenthesisNode = (0, _factoriesAny.createParenthesisNode)({
  Node: Node
});
var RelationalNode = exports.RelationalNode = (0, _factoriesAny.createRelationalNode)({
  Node: Node
});
var ArrayNode = exports.ArrayNode = (0, _factoriesAny.createArrayNode)({
  Node: Node
});
var BlockNode = exports.BlockNode = (0, _factoriesAny.createBlockNode)({
  Node: Node,
  ResultSet: _pureFunctionsAnyGenerated.ResultSet
});
var ConditionalNode = exports.ConditionalNode = (0, _factoriesAny.createConditionalNode)({
  Node: Node
});
var ConstantNode = exports.ConstantNode = (0, _factoriesAny.createConstantNode)({
  Node: Node
});
var RangeNode = exports.RangeNode = (0, _factoriesAny.createRangeNode)({
  Node: Node
});
var reviver = exports.reviver = (0, _factoriesAny.createReviver)({
  classes: classes
});
var Chain = exports.Chain = (0, _factoriesAny.createChainClass)({
  math: math,
  typed: _pureFunctionsAnyGenerated.typed
});
var FunctionAssignmentNode = exports.FunctionAssignmentNode = (0, _factoriesAny.createFunctionAssignmentNode)({
  Node: Node,
  typed: _pureFunctionsAnyGenerated.typed
});
var chain = exports.chain = (0, _factoriesAny.createChain)({
  Chain: Chain,
  typed: _pureFunctionsAnyGenerated.typed
});
var IndexNode = exports.IndexNode = (0, _factoriesAny.createIndexNode)({
  Node: Node,
  size: _pureFunctionsAnyGenerated.size
});
var AccessorNode = exports.AccessorNode = (0, _factoriesAny.createAccessorNode)({
  Node: Node,
  subset: _pureFunctionsAnyGenerated.subset
});
var AssignmentNode = exports.AssignmentNode = (0, _factoriesAny.createAssignmentNode)({
  matrix: _pureFunctionsAnyGenerated.matrix,
  Node: Node,
  subset: _pureFunctionsAnyGenerated.subset
});
var SymbolNode = exports.SymbolNode = (0, _factoriesAny.createSymbolNode)({
  Unit: _pureFunctionsAnyGenerated.Unit,
  Node: Node,
  math: math
});
var FunctionNode = exports.FunctionNode = (0, _factoriesAny.createFunctionNode)({
  Node: Node,
  SymbolNode: SymbolNode,
  math: math
});
var parse = exports.parse = (0, _factoriesAny.createParse)({
  AccessorNode: AccessorNode,
  ArrayNode: ArrayNode,
  AssignmentNode: AssignmentNode,
  BlockNode: BlockNode,
  ConditionalNode: ConditionalNode,
  ConstantNode: ConstantNode,
  FunctionAssignmentNode: FunctionAssignmentNode,
  FunctionNode: FunctionNode,
  IndexNode: IndexNode,
  ObjectNode: ObjectNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  RangeNode: RangeNode,
  RelationalNode: RelationalNode,
  SymbolNode: SymbolNode,
  config: _configReadonly.config,
  numeric: _pureFunctionsAnyGenerated.numeric,
  typed: _pureFunctionsAnyGenerated.typed
});
var resolve = exports.resolve = (0, _factoriesAny.createResolve)({
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  parse: parse,
  typed: _pureFunctionsAnyGenerated.typed
});
var simplifyConstant = exports.simplifyConstant = (0, _factoriesAny.createSimplifyConstant)({
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  fraction: _pureFunctionsAnyGenerated.fraction,
  AccessorNode: AccessorNode,
  ArrayNode: ArrayNode,
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  IndexNode: IndexNode,
  ObjectNode: ObjectNode,
  OperatorNode: OperatorNode,
  SymbolNode: SymbolNode,
  config: _configReadonly.config,
  mathWithTransform: mathWithTransform,
  matrix: _pureFunctionsAnyGenerated.matrix,
  typed: _pureFunctionsAnyGenerated.typed
});
var compile = exports.compile = (0, _factoriesAny.createCompile)({
  parse: parse,
  typed: _pureFunctionsAnyGenerated.typed
});
var Help = exports.Help = (0, _factoriesAny.createHelpClass)({
  parse: parse
});
var leafCount = exports.leafCount = (0, _factoriesAny.createLeafCount)({
  parse: parse,
  typed: _pureFunctionsAnyGenerated.typed
});
var simplifyCore = exports.simplifyCore = (0, _factoriesAny.createSimplifyCore)({
  AccessorNode: AccessorNode,
  ArrayNode: ArrayNode,
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  IndexNode: IndexNode,
  ObjectNode: ObjectNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  add: _pureFunctionsAnyGenerated.add,
  divide: _pureFunctionsAnyGenerated.divide,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  multiply: _pureFunctionsAnyGenerated.multiply,
  parse: parse,
  pow: _pureFunctionsAnyGenerated.pow,
  subtract: _pureFunctionsAnyGenerated.subtract,
  typed: _pureFunctionsAnyGenerated.typed
});
var evaluate = exports.evaluate = (0, _factoriesAny.createEvaluate)({
  parse: parse,
  typed: _pureFunctionsAnyGenerated.typed
});
var help = exports.help = (0, _factoriesAny.createHelp)({
  Help: Help,
  mathWithTransform: mathWithTransform,
  typed: _pureFunctionsAnyGenerated.typed
});
var Parser = exports.Parser = (0, _factoriesAny.createParserClass)({
  evaluate: evaluate
});
var simplify = exports.simplify = (0, _factoriesAny.createSimplify)({
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  fraction: _pureFunctionsAnyGenerated.fraction,
  AccessorNode: AccessorNode,
  ArrayNode: ArrayNode,
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  IndexNode: IndexNode,
  ObjectNode: ObjectNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  add: _pureFunctionsAnyGenerated.add,
  config: _configReadonly.config,
  divide: _pureFunctionsAnyGenerated.divide,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  mathWithTransform: mathWithTransform,
  matrix: _pureFunctionsAnyGenerated.matrix,
  multiply: _pureFunctionsAnyGenerated.multiply,
  parse: parse,
  pow: _pureFunctionsAnyGenerated.pow,
  resolve: resolve,
  simplifyConstant: simplifyConstant,
  simplifyCore: simplifyCore,
  subtract: _pureFunctionsAnyGenerated.subtract,
  typed: _pureFunctionsAnyGenerated.typed
});
var symbolicEqual = exports.symbolicEqual = (0, _factoriesAny.createSymbolicEqual)({
  OperatorNode: OperatorNode,
  parse: parse,
  simplify: simplify,
  typed: _pureFunctionsAnyGenerated.typed
});
var parser = exports.parser = (0, _factoriesAny.createParser)({
  Parser: Parser,
  typed: _pureFunctionsAnyGenerated.typed
});
var rationalize = exports.rationalize = (0, _factoriesAny.createRationalize)({
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  fraction: _pureFunctionsAnyGenerated.fraction,
  AccessorNode: AccessorNode,
  ArrayNode: ArrayNode,
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  IndexNode: IndexNode,
  ObjectNode: ObjectNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  add: _pureFunctionsAnyGenerated.add,
  config: _configReadonly.config,
  divide: _pureFunctionsAnyGenerated.divide,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  mathWithTransform: mathWithTransform,
  matrix: _pureFunctionsAnyGenerated.matrix,
  multiply: _pureFunctionsAnyGenerated.multiply,
  parse: parse,
  pow: _pureFunctionsAnyGenerated.pow,
  simplify: simplify,
  simplifyConstant: simplifyConstant,
  simplifyCore: simplifyCore,
  subtract: _pureFunctionsAnyGenerated.subtract,
  typed: _pureFunctionsAnyGenerated.typed
});
var derivative = exports.derivative = (0, _factoriesAny.createDerivative)({
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  config: _configReadonly.config,
  equal: _pureFunctionsAnyGenerated.equal,
  isZero: _pureFunctionsAnyGenerated.isZero,
  numeric: _pureFunctionsAnyGenerated.numeric,
  parse: parse,
  simplify: simplify,
  typed: _pureFunctionsAnyGenerated.typed
});
(0, _extends2["default"])(math, {
  e: _pureFunctionsAnyGenerated.e,
  "false": _pureFunctionsAnyGenerated._false,
  fineStructure: _pureFunctionsAnyGenerated.fineStructure,
  i: _pureFunctionsAnyGenerated.i,
  Infinity: _pureFunctionsAnyGenerated._Infinity,
  LN10: _pureFunctionsAnyGenerated.LN10,
  LOG10E: _pureFunctionsAnyGenerated.LOG10E,
  NaN: _pureFunctionsAnyGenerated._NaN,
  "null": _pureFunctionsAnyGenerated._null,
  phi: _pureFunctionsAnyGenerated.phi,
  SQRT1_2: _pureFunctionsAnyGenerated.SQRT1_2,
  sackurTetrode: _pureFunctionsAnyGenerated.sackurTetrode,
  tau: _pureFunctionsAnyGenerated.tau,
  "true": _pureFunctionsAnyGenerated._true,
  'E': _pureFunctionsAnyGenerated.e,
  version: _pureFunctionsAnyGenerated.version,
  efimovFactor: _pureFunctionsAnyGenerated.efimovFactor,
  LN2: _pureFunctionsAnyGenerated.LN2,
  pi: _pureFunctionsAnyGenerated.pi,
  replacer: _pureFunctionsAnyGenerated.replacer,
  reviver: reviver,
  SQRT2: _pureFunctionsAnyGenerated.SQRT2,
  typed: _pureFunctionsAnyGenerated.typed,
  unaryPlus: _pureFunctionsAnyGenerated.unaryPlus,
  'PI': _pureFunctionsAnyGenerated.pi,
  weakMixingAngle: _pureFunctionsAnyGenerated.weakMixingAngle,
  abs: _pureFunctionsAnyGenerated.abs,
  acos: _pureFunctionsAnyGenerated.acos,
  acot: _pureFunctionsAnyGenerated.acot,
  acsc: _pureFunctionsAnyGenerated.acsc,
  addScalar: _pureFunctionsAnyGenerated.addScalar,
  arg: _pureFunctionsAnyGenerated.arg,
  asech: _pureFunctionsAnyGenerated.asech,
  asinh: _pureFunctionsAnyGenerated.asinh,
  atan: _pureFunctionsAnyGenerated.atan,
  atanh: _pureFunctionsAnyGenerated.atanh,
  bignumber: _pureFunctionsAnyGenerated.bignumber,
  bitNot: _pureFunctionsAnyGenerated.bitNot,
  "boolean": _pureFunctionsAnyGenerated["boolean"],
  clone: _pureFunctionsAnyGenerated.clone,
  combinations: _pureFunctionsAnyGenerated.combinations,
  complex: _pureFunctionsAnyGenerated.complex,
  conj: _pureFunctionsAnyGenerated.conj,
  cos: _pureFunctionsAnyGenerated.cos,
  cot: _pureFunctionsAnyGenerated.cot,
  csc: _pureFunctionsAnyGenerated.csc,
  cube: _pureFunctionsAnyGenerated.cube,
  equalScalar: _pureFunctionsAnyGenerated.equalScalar,
  erf: _pureFunctionsAnyGenerated.erf,
  exp: _pureFunctionsAnyGenerated.exp,
  expm1: _pureFunctionsAnyGenerated.expm1,
  filter: _pureFunctionsAnyGenerated.filter,
  forEach: _pureFunctionsAnyGenerated.forEach,
  format: _pureFunctionsAnyGenerated.format,
  getMatrixDataType: _pureFunctionsAnyGenerated.getMatrixDataType,
  hex: _pureFunctionsAnyGenerated.hex,
  im: _pureFunctionsAnyGenerated.im,
  isInteger: _pureFunctionsAnyGenerated.isInteger,
  isNegative: _pureFunctionsAnyGenerated.isNegative,
  isPositive: _pureFunctionsAnyGenerated.isPositive,
  isZero: _pureFunctionsAnyGenerated.isZero,
  LOG2E: _pureFunctionsAnyGenerated.LOG2E,
  lgamma: _pureFunctionsAnyGenerated.lgamma,
  log10: _pureFunctionsAnyGenerated.log10,
  log2: _pureFunctionsAnyGenerated.log2,
  map: _pureFunctionsAnyGenerated.map,
  multiplyScalar: _pureFunctionsAnyGenerated.multiplyScalar,
  not: _pureFunctionsAnyGenerated.not,
  number: _pureFunctionsAnyGenerated.number,
  oct: _pureFunctionsAnyGenerated.oct,
  pickRandom: _pureFunctionsAnyGenerated.pickRandom,
  print: _pureFunctionsAnyGenerated.print,
  random: _pureFunctionsAnyGenerated.random,
  re: _pureFunctionsAnyGenerated.re,
  sec: _pureFunctionsAnyGenerated.sec,
  sign: _pureFunctionsAnyGenerated.sign,
  sin: _pureFunctionsAnyGenerated.sin,
  splitUnit: _pureFunctionsAnyGenerated.splitUnit,
  square: _pureFunctionsAnyGenerated.square,
  string: _pureFunctionsAnyGenerated.string,
  subtractScalar: _pureFunctionsAnyGenerated.subtractScalar,
  tan: _pureFunctionsAnyGenerated.tan,
  typeOf: _pureFunctionsAnyGenerated.typeOf,
  acosh: _pureFunctionsAnyGenerated.acosh,
  acsch: _pureFunctionsAnyGenerated.acsch,
  apply: _pureFunctionsAnyGenerated.apply,
  asec: _pureFunctionsAnyGenerated.asec,
  bin: _pureFunctionsAnyGenerated.bin,
  chain: chain,
  combinationsWithRep: _pureFunctionsAnyGenerated.combinationsWithRep,
  cosh: _pureFunctionsAnyGenerated.cosh,
  csch: _pureFunctionsAnyGenerated.csch,
  isNaN: _pureFunctionsAnyGenerated.isNaN,
  isPrime: _pureFunctionsAnyGenerated.isPrime,
  randomInt: _pureFunctionsAnyGenerated.randomInt,
  sech: _pureFunctionsAnyGenerated.sech,
  sinh: _pureFunctionsAnyGenerated.sinh,
  sparse: _pureFunctionsAnyGenerated.sparse,
  sqrt: _pureFunctionsAnyGenerated.sqrt,
  tanh: _pureFunctionsAnyGenerated.tanh,
  unaryMinus: _pureFunctionsAnyGenerated.unaryMinus,
  acoth: _pureFunctionsAnyGenerated.acoth,
  coth: _pureFunctionsAnyGenerated.coth,
  fraction: _pureFunctionsAnyGenerated.fraction,
  isNumeric: _pureFunctionsAnyGenerated.isNumeric,
  matrix: _pureFunctionsAnyGenerated.matrix,
  matrixFromFunction: _pureFunctionsAnyGenerated.matrixFromFunction,
  mode: _pureFunctionsAnyGenerated.mode,
  numeric: _pureFunctionsAnyGenerated.numeric,
  prod: _pureFunctionsAnyGenerated.prod,
  reshape: _pureFunctionsAnyGenerated.reshape,
  size: _pureFunctionsAnyGenerated.size,
  squeeze: _pureFunctionsAnyGenerated.squeeze,
  transpose: _pureFunctionsAnyGenerated.transpose,
  xgcd: _pureFunctionsAnyGenerated.xgcd,
  zeros: _pureFunctionsAnyGenerated.zeros,
  asin: _pureFunctionsAnyGenerated.asin,
  cbrt: _pureFunctionsAnyGenerated.cbrt,
  concat: _pureFunctionsAnyGenerated.concat,
  count: _pureFunctionsAnyGenerated.count,
  ctranspose: _pureFunctionsAnyGenerated.ctranspose,
  diag: _pureFunctionsAnyGenerated.diag,
  divideScalar: _pureFunctionsAnyGenerated.divideScalar,
  dotDivide: _pureFunctionsAnyGenerated.dotDivide,
  equal: _pureFunctionsAnyGenerated.equal,
  flatten: _pureFunctionsAnyGenerated.flatten,
  hasNumericValue: _pureFunctionsAnyGenerated.hasNumericValue,
  identity: _pureFunctionsAnyGenerated.identity,
  kron: _pureFunctionsAnyGenerated.kron,
  largerEq: _pureFunctionsAnyGenerated.largerEq,
  leftShift: _pureFunctionsAnyGenerated.leftShift,
  lsolve: _pureFunctionsAnyGenerated.lsolve,
  matrixFromColumns: _pureFunctionsAnyGenerated.matrixFromColumns,
  nthRoot: _pureFunctionsAnyGenerated.nthRoot,
  ones: _pureFunctionsAnyGenerated.ones,
  qr: _pureFunctionsAnyGenerated.qr,
  resize: _pureFunctionsAnyGenerated.resize,
  rightArithShift: _pureFunctionsAnyGenerated.rightArithShift,
  round: _pureFunctionsAnyGenerated.round,
  smaller: _pureFunctionsAnyGenerated.smaller,
  subtract: _pureFunctionsAnyGenerated.subtract,
  to: _pureFunctionsAnyGenerated.to,
  unequal: _pureFunctionsAnyGenerated.unequal,
  usolve: _pureFunctionsAnyGenerated.usolve,
  xor: _pureFunctionsAnyGenerated.xor,
  add: _pureFunctionsAnyGenerated.add,
  atan2: _pureFunctionsAnyGenerated.atan2,
  bitAnd: _pureFunctionsAnyGenerated.bitAnd,
  bitXor: _pureFunctionsAnyGenerated.bitXor,
  catalan: _pureFunctionsAnyGenerated.catalan,
  compare: _pureFunctionsAnyGenerated.compare,
  compareText: _pureFunctionsAnyGenerated.compareText,
  cumsum: _pureFunctionsAnyGenerated.cumsum,
  deepEqual: _pureFunctionsAnyGenerated.deepEqual,
  diff: _pureFunctionsAnyGenerated.diff,
  distance: _pureFunctionsAnyGenerated.distance,
  dot: _pureFunctionsAnyGenerated.dot,
  equalText: _pureFunctionsAnyGenerated.equalText,
  floor: _pureFunctionsAnyGenerated.floor,
  gcd: _pureFunctionsAnyGenerated.gcd,
  hypot: _pureFunctionsAnyGenerated.hypot,
  larger: _pureFunctionsAnyGenerated.larger,
  log: _pureFunctionsAnyGenerated.log,
  lsolveAll: _pureFunctionsAnyGenerated.lsolveAll,
  matrixFromRows: _pureFunctionsAnyGenerated.matrixFromRows,
  min: _pureFunctionsAnyGenerated.min,
  mod: _pureFunctionsAnyGenerated.mod,
  multiply: _pureFunctionsAnyGenerated.multiply,
  nthRoots: _pureFunctionsAnyGenerated.nthRoots,
  or: _pureFunctionsAnyGenerated.or,
  partitionSelect: _pureFunctionsAnyGenerated.partitionSelect,
  rightLogShift: _pureFunctionsAnyGenerated.rightLogShift,
  slu: _pureFunctionsAnyGenerated.slu,
  subset: _pureFunctionsAnyGenerated.subset,
  sum: _pureFunctionsAnyGenerated.sum,
  trace: _pureFunctionsAnyGenerated.trace,
  usolveAll: _pureFunctionsAnyGenerated.usolveAll,
  zpk2tf: _pureFunctionsAnyGenerated.zpk2tf,
  bitOr: _pureFunctionsAnyGenerated.bitOr,
  ceil: _pureFunctionsAnyGenerated.ceil,
  compareNatural: _pureFunctionsAnyGenerated.compareNatural,
  composition: _pureFunctionsAnyGenerated.composition,
  cross: _pureFunctionsAnyGenerated.cross,
  det: _pureFunctionsAnyGenerated.det,
  dotMultiply: _pureFunctionsAnyGenerated.dotMultiply,
  fix: _pureFunctionsAnyGenerated.fix,
  index: _pureFunctionsAnyGenerated.index,
  intersect: _pureFunctionsAnyGenerated.intersect,
  invmod: _pureFunctionsAnyGenerated.invmod,
  lcm: _pureFunctionsAnyGenerated.lcm,
  log1p: _pureFunctionsAnyGenerated.log1p,
  max: _pureFunctionsAnyGenerated.max,
  setCartesian: _pureFunctionsAnyGenerated.setCartesian,
  setDistinct: _pureFunctionsAnyGenerated.setDistinct,
  setIsSubset: _pureFunctionsAnyGenerated.setIsSubset,
  setPowerset: _pureFunctionsAnyGenerated.setPowerset,
  smallerEq: _pureFunctionsAnyGenerated.smallerEq,
  sort: _pureFunctionsAnyGenerated.sort,
  and: _pureFunctionsAnyGenerated.and,
  range: _pureFunctionsAnyGenerated.range,
  row: _pureFunctionsAnyGenerated.row,
  setDifference: _pureFunctionsAnyGenerated.setDifference,
  setMultiplicity: _pureFunctionsAnyGenerated.setMultiplicity,
  setSymDifference: _pureFunctionsAnyGenerated.setSymDifference,
  column: _pureFunctionsAnyGenerated.column,
  inv: _pureFunctionsAnyGenerated.inv,
  lup: _pureFunctionsAnyGenerated.lup,
  pinv: _pureFunctionsAnyGenerated.pinv,
  pow: _pureFunctionsAnyGenerated.pow,
  setIntersect: _pureFunctionsAnyGenerated.setIntersect,
  setUnion: _pureFunctionsAnyGenerated.setUnion,
  sqrtm: _pureFunctionsAnyGenerated.sqrtm,
  vacuumImpedance: _pureFunctionsAnyGenerated.vacuumImpedance,
  wienDisplacement: _pureFunctionsAnyGenerated.wienDisplacement,
  atomicMass: _pureFunctionsAnyGenerated.atomicMass,
  bohrMagneton: _pureFunctionsAnyGenerated.bohrMagneton,
  boltzmann: _pureFunctionsAnyGenerated.boltzmann,
  conductanceQuantum: _pureFunctionsAnyGenerated.conductanceQuantum,
  coulomb: _pureFunctionsAnyGenerated.coulomb,
  deuteronMass: _pureFunctionsAnyGenerated.deuteronMass,
  dotPow: _pureFunctionsAnyGenerated.dotPow,
  electricConstant: _pureFunctionsAnyGenerated.electricConstant,
  elementaryCharge: _pureFunctionsAnyGenerated.elementaryCharge,
  expm: _pureFunctionsAnyGenerated.expm,
  faraday: _pureFunctionsAnyGenerated.faraday,
  fft: _pureFunctionsAnyGenerated.fft,
  gamma: _pureFunctionsAnyGenerated.gamma,
  gravitationConstant: _pureFunctionsAnyGenerated.gravitationConstant,
  hartreeEnergy: _pureFunctionsAnyGenerated.hartreeEnergy,
  ifft: _pureFunctionsAnyGenerated.ifft,
  klitzing: _pureFunctionsAnyGenerated.klitzing,
  loschmidt: _pureFunctionsAnyGenerated.loschmidt,
  magneticConstant: _pureFunctionsAnyGenerated.magneticConstant,
  molarMass: _pureFunctionsAnyGenerated.molarMass,
  molarPlanckConstant: _pureFunctionsAnyGenerated.molarPlanckConstant,
  neutronMass: _pureFunctionsAnyGenerated.neutronMass,
  nuclearMagneton: _pureFunctionsAnyGenerated.nuclearMagneton,
  planckCharge: _pureFunctionsAnyGenerated.planckCharge,
  planckLength: _pureFunctionsAnyGenerated.planckLength,
  planckTemperature: _pureFunctionsAnyGenerated.planckTemperature,
  protonMass: _pureFunctionsAnyGenerated.protonMass,
  quantumOfCirculation: _pureFunctionsAnyGenerated.quantumOfCirculation,
  reducedPlanckConstant: _pureFunctionsAnyGenerated.reducedPlanckConstant,
  rydberg: _pureFunctionsAnyGenerated.rydberg,
  secondRadiation: _pureFunctionsAnyGenerated.secondRadiation,
  speedOfLight: _pureFunctionsAnyGenerated.speedOfLight,
  stefanBoltzmann: _pureFunctionsAnyGenerated.stefanBoltzmann,
  thomsonCrossSection: _pureFunctionsAnyGenerated.thomsonCrossSection,
  avogadro: _pureFunctionsAnyGenerated.avogadro,
  bohrRadius: _pureFunctionsAnyGenerated.bohrRadius,
  createUnit: _pureFunctionsAnyGenerated.createUnit,
  divide: _pureFunctionsAnyGenerated.divide,
  electronMass: _pureFunctionsAnyGenerated.electronMass,
  factorial: _pureFunctionsAnyGenerated.factorial,
  firstRadiation: _pureFunctionsAnyGenerated.firstRadiation,
  gravity: _pureFunctionsAnyGenerated.gravity,
  inverseConductanceQuantum: _pureFunctionsAnyGenerated.inverseConductanceQuantum,
  lusolve: _pureFunctionsAnyGenerated.lusolve,
  magneticFluxQuantum: _pureFunctionsAnyGenerated.magneticFluxQuantum,
  molarMassC12: _pureFunctionsAnyGenerated.molarMassC12,
  multinomial: _pureFunctionsAnyGenerated.multinomial,
  parse: parse,
  permutations: _pureFunctionsAnyGenerated.permutations,
  planckMass: _pureFunctionsAnyGenerated.planckMass,
  polynomialRoot: _pureFunctionsAnyGenerated.polynomialRoot,
  resolve: resolve,
  setSize: _pureFunctionsAnyGenerated.setSize,
  simplifyConstant: simplifyConstant,
  solveODE: _pureFunctionsAnyGenerated.solveODE,
  stirlingS2: _pureFunctionsAnyGenerated.stirlingS2,
  unit: _pureFunctionsAnyGenerated.unit,
  bellNumbers: _pureFunctionsAnyGenerated.bellNumbers,
  compile: compile,
  eigs: _pureFunctionsAnyGenerated.eigs,
  fermiCoupling: _pureFunctionsAnyGenerated.fermiCoupling,
  gasConstant: _pureFunctionsAnyGenerated.gasConstant,
  leafCount: leafCount,
  mean: _pureFunctionsAnyGenerated.mean,
  molarVolume: _pureFunctionsAnyGenerated.molarVolume,
  planckConstant: _pureFunctionsAnyGenerated.planckConstant,
  quantileSeq: _pureFunctionsAnyGenerated.quantileSeq,
  simplifyCore: simplifyCore,
  variance: _pureFunctionsAnyGenerated.variance,
  classicalElectronRadius: _pureFunctionsAnyGenerated.classicalElectronRadius,
  evaluate: evaluate,
  help: help,
  median: _pureFunctionsAnyGenerated.median,
  simplify: simplify,
  symbolicEqual: symbolicEqual,
  corr: _pureFunctionsAnyGenerated.corr,
  freqz: _pureFunctionsAnyGenerated.freqz,
  mad: _pureFunctionsAnyGenerated.mad,
  parser: parser,
  rationalize: rationalize,
  std: _pureFunctionsAnyGenerated.std,
  zeta: _pureFunctionsAnyGenerated.zeta,
  derivative: derivative,
  norm: _pureFunctionsAnyGenerated.norm,
  rotationMatrix: _pureFunctionsAnyGenerated.rotationMatrix,
  kldivergence: _pureFunctionsAnyGenerated.kldivergence,
  planckTime: _pureFunctionsAnyGenerated.planckTime,
  schur: _pureFunctionsAnyGenerated.schur,
  rotate: _pureFunctionsAnyGenerated.rotate,
  sylvester: _pureFunctionsAnyGenerated.sylvester,
  lyap: _pureFunctionsAnyGenerated.lyap,
  config: _configReadonly.config
});
(0, _extends2["default"])(mathWithTransform, math, {
  filter: (0, _factoriesAny.createFilterTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  forEach: (0, _factoriesAny.createForEachTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  map: (0, _factoriesAny.createMapTransform)({
    typed: _pureFunctionsAnyGenerated.typed
  }),
  apply: (0, _factoriesAny.createApplyTransform)({
    isInteger: _pureFunctionsAnyGenerated.isInteger,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  concat: (0, _factoriesAny.createConcatTransform)({
    isInteger: _pureFunctionsAnyGenerated.isInteger,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  max: (0, _factoriesAny.createMaxTransform)({
    config: _configReadonly.config,
    larger: _pureFunctionsAnyGenerated.larger,
    numeric: _pureFunctionsAnyGenerated.numeric,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  print: (0, _factoriesAny.createPrintTransform)({
    add: _pureFunctionsAnyGenerated.add,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed,
    zeros: _pureFunctionsAnyGenerated.zeros
  }),
  diff: (0, _factoriesAny.createDiffTransform)({
    bignumber: _pureFunctionsAnyGenerated.bignumber,
    matrix: _pureFunctionsAnyGenerated.matrix,
    number: _pureFunctionsAnyGenerated.number,
    subtract: _pureFunctionsAnyGenerated.subtract,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  min: (0, _factoriesAny.createMinTransform)({
    config: _configReadonly.config,
    numeric: _pureFunctionsAnyGenerated.numeric,
    smaller: _pureFunctionsAnyGenerated.smaller,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  subset: (0, _factoriesAny.createSubsetTransform)({
    add: _pureFunctionsAnyGenerated.add,
    matrix: _pureFunctionsAnyGenerated.matrix,
    typed: _pureFunctionsAnyGenerated.typed,
    zeros: _pureFunctionsAnyGenerated.zeros
  }),
  cumsum: (0, _factoriesAny.createCumSumTransform)({
    add: _pureFunctionsAnyGenerated.add,
    typed: _pureFunctionsAnyGenerated.typed,
    unaryPlus: _pureFunctionsAnyGenerated.unaryPlus
  }),
  index: (0, _factoriesAny.createIndexTransform)({
    Index: _pureFunctionsAnyGenerated.Index,
    getMatrixDataType: _pureFunctionsAnyGenerated.getMatrixDataType
  }),
  sum: (0, _factoriesAny.createSumTransform)({
    add: _pureFunctionsAnyGenerated.add,
    config: _configReadonly.config,
    numeric: _pureFunctionsAnyGenerated.numeric,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  range: (0, _factoriesAny.createRangeTransform)({
    bignumber: _pureFunctionsAnyGenerated.bignumber,
    matrix: _pureFunctionsAnyGenerated.matrix,
    add: _pureFunctionsAnyGenerated.add,
    config: _configReadonly.config,
    isPositive: _pureFunctionsAnyGenerated.isPositive,
    larger: _pureFunctionsAnyGenerated.larger,
    largerEq: _pureFunctionsAnyGenerated.largerEq,
    smaller: _pureFunctionsAnyGenerated.smaller,
    smallerEq: _pureFunctionsAnyGenerated.smallerEq,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  row: (0, _factoriesAny.createRowTransform)({
    Index: _pureFunctionsAnyGenerated.Index,
    matrix: _pureFunctionsAnyGenerated.matrix,
    range: _pureFunctionsAnyGenerated.range,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  column: (0, _factoriesAny.createColumnTransform)({
    Index: _pureFunctionsAnyGenerated.Index,
    matrix: _pureFunctionsAnyGenerated.matrix,
    range: _pureFunctionsAnyGenerated.range,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  mean: (0, _factoriesAny.createMeanTransform)({
    add: _pureFunctionsAnyGenerated.add,
    divide: _pureFunctionsAnyGenerated.divide,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  quantileSeq: (0, _factoriesAny.createQuantileSeqTransform)({
    add: _pureFunctionsAnyGenerated.add,
    bignumber: _pureFunctionsAnyGenerated.bignumber,
    compare: _pureFunctionsAnyGenerated.compare,
    divide: _pureFunctionsAnyGenerated.divide,
    isInteger: _pureFunctionsAnyGenerated.isInteger,
    larger: _pureFunctionsAnyGenerated.larger,
    multiply: _pureFunctionsAnyGenerated.multiply,
    partitionSelect: _pureFunctionsAnyGenerated.partitionSelect,
    smaller: _pureFunctionsAnyGenerated.smaller,
    smallerEq: _pureFunctionsAnyGenerated.smallerEq,
    subtract: _pureFunctionsAnyGenerated.subtract,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  variance: (0, _factoriesAny.createVarianceTransform)({
    add: _pureFunctionsAnyGenerated.add,
    apply: _pureFunctionsAnyGenerated.apply,
    divide: _pureFunctionsAnyGenerated.divide,
    isNaN: _pureFunctionsAnyGenerated.isNaN,
    multiply: _pureFunctionsAnyGenerated.multiply,
    subtract: _pureFunctionsAnyGenerated.subtract,
    typed: _pureFunctionsAnyGenerated.typed
  }),
  std: (0, _factoriesAny.createStdTransform)({
    map: _pureFunctionsAnyGenerated.map,
    sqrt: _pureFunctionsAnyGenerated.sqrt,
    typed: _pureFunctionsAnyGenerated.typed,
    variance: _pureFunctionsAnyGenerated.variance
  })
});
(0, _extends2["default"])(classes, {
  BigNumber: _pureFunctionsAnyGenerated.BigNumber,
  Complex: _pureFunctionsAnyGenerated.Complex,
  Fraction: _pureFunctionsAnyGenerated.Fraction,
  Matrix: _pureFunctionsAnyGenerated.Matrix,
  Node: Node,
  ObjectNode: ObjectNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  Range: _pureFunctionsAnyGenerated.Range,
  RelationalNode: RelationalNode,
  ResultSet: _pureFunctionsAnyGenerated.ResultSet,
  ArrayNode: ArrayNode,
  BlockNode: BlockNode,
  ConditionalNode: ConditionalNode,
  ConstantNode: ConstantNode,
  DenseMatrix: _pureFunctionsAnyGenerated.DenseMatrix,
  RangeNode: RangeNode,
  Chain: Chain,
  FunctionAssignmentNode: FunctionAssignmentNode,
  SparseMatrix: _pureFunctionsAnyGenerated.SparseMatrix,
  IndexNode: IndexNode,
  ImmutableDenseMatrix: _pureFunctionsAnyGenerated.ImmutableDenseMatrix,
  Index: _pureFunctionsAnyGenerated.Index,
  AccessorNode: AccessorNode,
  AssignmentNode: AssignmentNode,
  FibonacciHeap: _pureFunctionsAnyGenerated.FibonacciHeap,
  Spa: _pureFunctionsAnyGenerated.Spa,
  Unit: _pureFunctionsAnyGenerated.Unit,
  SymbolNode: SymbolNode,
  FunctionNode: FunctionNode,
  Help: Help,
  Parser: Parser
});
Chain.createProxy(math);