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
exports.simplifyCore = exports.simplifyConstant = exports.simplify = exports.reviver = exports.resolve = exports.rationalize = exports.parser = exports.parse = exports.help = exports.evaluate = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _configReadonly = require("./configReadonly.js");
var _factoriesNumber = require("../factoriesNumber.js");
var _pureFunctionsNumberGenerated = require("./pureFunctionsNumber.generated.js");
var _embeddedDocs = require("../expression/embeddedDocs/embeddedDocs.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var math = {}; // NOT pure!
var mathWithTransform = {}; // NOT pure!
var classes = {}; // NOT pure!

var Chain = exports.Chain = (0, _factoriesNumber.createChainClass)({
  math: math,
  typed: _pureFunctionsNumberGenerated.typed
});
var Node = exports.Node = (0, _factoriesNumber.createNode)({
  mathWithTransform: mathWithTransform
});
var ObjectNode = exports.ObjectNode = (0, _factoriesNumber.createObjectNode)({
  Node: Node
});
var RangeNode = exports.RangeNode = (0, _factoriesNumber.createRangeNode)({
  Node: Node
});
var RelationalNode = exports.RelationalNode = (0, _factoriesNumber.createRelationalNode)({
  Node: Node
});
var reviver = exports.reviver = (0, _factoriesNumber.createReviver)({
  classes: classes
});
var SymbolNode = exports.SymbolNode = (0, _factoriesNumber.createSymbolNode)({
  Node: Node,
  math: math
});
var AccessorNode = exports.AccessorNode = (0, _factoriesNumber.createAccessorNode)({
  Node: Node,
  subset: _pureFunctionsNumberGenerated.subset
});
var AssignmentNode = exports.AssignmentNode = (0, _factoriesNumber.createAssignmentNode)({
  matrix: _pureFunctionsNumberGenerated.matrix,
  Node: Node,
  subset: _pureFunctionsNumberGenerated.subset
});
var BlockNode = exports.BlockNode = (0, _factoriesNumber.createBlockNode)({
  Node: Node,
  ResultSet: _pureFunctionsNumberGenerated.ResultSet
});
var chain = exports.chain = (0, _factoriesNumber.createChain)({
  Chain: Chain,
  typed: _pureFunctionsNumberGenerated.typed
});
var ConditionalNode = exports.ConditionalNode = (0, _factoriesNumber.createConditionalNode)({
  Node: Node
});
var FunctionNode = exports.FunctionNode = (0, _factoriesNumber.createFunctionNode)({
  Node: Node,
  SymbolNode: SymbolNode,
  math: math
});
var IndexNode = exports.IndexNode = (0, _factoriesNumber.createIndexNode)({
  Node: Node,
  size: _pureFunctionsNumberGenerated.size
});
var OperatorNode = exports.OperatorNode = (0, _factoriesNumber.createOperatorNode)({
  Node: Node
});
var ConstantNode = exports.ConstantNode = (0, _factoriesNumber.createConstantNode)({
  Node: Node
});
var FunctionAssignmentNode = exports.FunctionAssignmentNode = (0, _factoriesNumber.createFunctionAssignmentNode)({
  Node: Node,
  typed: _pureFunctionsNumberGenerated.typed
});
var ParenthesisNode = exports.ParenthesisNode = (0, _factoriesNumber.createParenthesisNode)({
  Node: Node
});
var ArrayNode = exports.ArrayNode = (0, _factoriesNumber.createArrayNode)({
  Node: Node
});
var simplifyConstant = exports.simplifyConstant = (0, _factoriesNumber.createSimplifyConstant)({
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
  matrix: _pureFunctionsNumberGenerated.matrix,
  typed: _pureFunctionsNumberGenerated.typed
});
var parse = exports.parse = (0, _factoriesNumber.createParse)({
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
  numeric: _pureFunctionsNumberGenerated.numeric,
  typed: _pureFunctionsNumberGenerated.typed
});
var resolve = exports.resolve = (0, _factoriesNumber.createResolve)({
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  parse: parse,
  typed: _pureFunctionsNumberGenerated.typed
});
var simplifyCore = exports.simplifyCore = (0, _factoriesNumber.createSimplifyCore)({
  AccessorNode: AccessorNode,
  ArrayNode: ArrayNode,
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  IndexNode: IndexNode,
  ObjectNode: ObjectNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  add: _pureFunctionsNumberGenerated.add,
  divide: _pureFunctionsNumberGenerated.divide,
  equal: _pureFunctionsNumberGenerated.equal,
  isZero: _pureFunctionsNumberGenerated.isZero,
  multiply: _pureFunctionsNumberGenerated.multiply,
  parse: parse,
  pow: _pureFunctionsNumberGenerated.pow,
  subtract: _pureFunctionsNumberGenerated.subtract,
  typed: _pureFunctionsNumberGenerated.typed
});
var compile = exports.compile = (0, _factoriesNumber.createCompile)({
  parse: parse,
  typed: _pureFunctionsNumberGenerated.typed
});
var evaluate = exports.evaluate = (0, _factoriesNumber.createEvaluate)({
  parse: parse,
  typed: _pureFunctionsNumberGenerated.typed
});
var Help = exports.Help = (0, _factoriesNumber.createHelpClass)({
  parse: parse
});
var Parser = exports.Parser = (0, _factoriesNumber.createParserClass)({
  evaluate: evaluate
});
var simplify = exports.simplify = (0, _factoriesNumber.createSimplify)({
  AccessorNode: AccessorNode,
  ArrayNode: ArrayNode,
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  IndexNode: IndexNode,
  ObjectNode: ObjectNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  add: _pureFunctionsNumberGenerated.add,
  config: _configReadonly.config,
  divide: _pureFunctionsNumberGenerated.divide,
  equal: _pureFunctionsNumberGenerated.equal,
  isZero: _pureFunctionsNumberGenerated.isZero,
  mathWithTransform: mathWithTransform,
  matrix: _pureFunctionsNumberGenerated.matrix,
  multiply: _pureFunctionsNumberGenerated.multiply,
  parse: parse,
  pow: _pureFunctionsNumberGenerated.pow,
  resolve: resolve,
  simplifyConstant: simplifyConstant,
  simplifyCore: simplifyCore,
  subtract: _pureFunctionsNumberGenerated.subtract,
  typed: _pureFunctionsNumberGenerated.typed
});
var derivative = exports.derivative = (0, _factoriesNumber.createDerivative)({
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  config: _configReadonly.config,
  equal: _pureFunctionsNumberGenerated.equal,
  isZero: _pureFunctionsNumberGenerated.isZero,
  numeric: _pureFunctionsNumberGenerated.numeric,
  parse: parse,
  simplify: simplify,
  typed: _pureFunctionsNumberGenerated.typed
});
var rationalize = exports.rationalize = (0, _factoriesNumber.createRationalize)({
  AccessorNode: AccessorNode,
  ArrayNode: ArrayNode,
  ConstantNode: ConstantNode,
  FunctionNode: FunctionNode,
  IndexNode: IndexNode,
  ObjectNode: ObjectNode,
  OperatorNode: OperatorNode,
  ParenthesisNode: ParenthesisNode,
  SymbolNode: SymbolNode,
  add: _pureFunctionsNumberGenerated.add,
  config: _configReadonly.config,
  divide: _pureFunctionsNumberGenerated.divide,
  equal: _pureFunctionsNumberGenerated.equal,
  isZero: _pureFunctionsNumberGenerated.isZero,
  mathWithTransform: mathWithTransform,
  matrix: _pureFunctionsNumberGenerated.matrix,
  multiply: _pureFunctionsNumberGenerated.multiply,
  parse: parse,
  pow: _pureFunctionsNumberGenerated.pow,
  simplify: simplify,
  simplifyConstant: simplifyConstant,
  simplifyCore: simplifyCore,
  subtract: _pureFunctionsNumberGenerated.subtract,
  typed: _pureFunctionsNumberGenerated.typed
});
var help = exports.help = (0, _factoriesNumber.createHelp)({
  Help: Help,
  mathWithTransform: mathWithTransform,
  typed: _pureFunctionsNumberGenerated.typed
});
var parser = exports.parser = (0, _factoriesNumber.createParser)({
  Parser: Parser,
  typed: _pureFunctionsNumberGenerated.typed
});
(0, _extends2["default"])(math, {
  e: _pureFunctionsNumberGenerated.e,
  "false": _pureFunctionsNumberGenerated._false,
  index: _pureFunctionsNumberGenerated.index,
  Infinity: _pureFunctionsNumberGenerated._Infinity,
  LN10: _pureFunctionsNumberGenerated.LN10,
  LOG10E: _pureFunctionsNumberGenerated.LOG10E,
  matrix: _pureFunctionsNumberGenerated.matrix,
  NaN: _pureFunctionsNumberGenerated._NaN,
  "null": _pureFunctionsNumberGenerated._null,
  phi: _pureFunctionsNumberGenerated.phi,
  replacer: _pureFunctionsNumberGenerated.replacer,
  SQRT1_2: _pureFunctionsNumberGenerated.SQRT1_2,
  subset: _pureFunctionsNumberGenerated.subset,
  tau: _pureFunctionsNumberGenerated.tau,
  typed: _pureFunctionsNumberGenerated.typed,
  unaryPlus: _pureFunctionsNumberGenerated.unaryPlus,
  'E': _pureFunctionsNumberGenerated.e,
  version: _pureFunctionsNumberGenerated.version,
  xor: _pureFunctionsNumberGenerated.xor,
  abs: _pureFunctionsNumberGenerated.abs,
  acos: _pureFunctionsNumberGenerated.acos,
  acot: _pureFunctionsNumberGenerated.acot,
  acsc: _pureFunctionsNumberGenerated.acsc,
  add: _pureFunctionsNumberGenerated.add,
  and: _pureFunctionsNumberGenerated.and,
  asec: _pureFunctionsNumberGenerated.asec,
  asin: _pureFunctionsNumberGenerated.asin,
  atan: _pureFunctionsNumberGenerated.atan,
  atanh: _pureFunctionsNumberGenerated.atanh,
  bitAnd: _pureFunctionsNumberGenerated.bitAnd,
  bitOr: _pureFunctionsNumberGenerated.bitOr,
  "boolean": _pureFunctionsNumberGenerated["boolean"],
  cbrt: _pureFunctionsNumberGenerated.cbrt,
  combinations: _pureFunctionsNumberGenerated.combinations,
  compare: _pureFunctionsNumberGenerated.compare,
  compareText: _pureFunctionsNumberGenerated.compareText,
  cos: _pureFunctionsNumberGenerated.cos,
  cot: _pureFunctionsNumberGenerated.cot,
  csc: _pureFunctionsNumberGenerated.csc,
  cube: _pureFunctionsNumberGenerated.cube,
  divide: _pureFunctionsNumberGenerated.divide,
  equalScalar: _pureFunctionsNumberGenerated.equalScalar,
  erf: _pureFunctionsNumberGenerated.erf,
  exp: _pureFunctionsNumberGenerated.exp,
  filter: _pureFunctionsNumberGenerated.filter,
  forEach: _pureFunctionsNumberGenerated.forEach,
  format: _pureFunctionsNumberGenerated.format,
  gamma: _pureFunctionsNumberGenerated.gamma,
  isInteger: _pureFunctionsNumberGenerated.isInteger,
  isNegative: _pureFunctionsNumberGenerated.isNegative,
  isPositive: _pureFunctionsNumberGenerated.isPositive,
  isZero: _pureFunctionsNumberGenerated.isZero,
  LOG2E: _pureFunctionsNumberGenerated.LOG2E,
  largerEq: _pureFunctionsNumberGenerated.largerEq,
  leftShift: _pureFunctionsNumberGenerated.leftShift,
  log: _pureFunctionsNumberGenerated.log,
  log1p: _pureFunctionsNumberGenerated.log1p,
  map: _pureFunctionsNumberGenerated.map,
  mean: _pureFunctionsNumberGenerated.mean,
  mod: _pureFunctionsNumberGenerated.mod,
  multiply: _pureFunctionsNumberGenerated.multiply,
  not: _pureFunctionsNumberGenerated.not,
  number: _pureFunctionsNumberGenerated.number,
  or: _pureFunctionsNumberGenerated.or,
  pi: _pureFunctionsNumberGenerated.pi,
  pow: _pureFunctionsNumberGenerated.pow,
  random: _pureFunctionsNumberGenerated.random,
  reviver: reviver,
  rightLogShift: _pureFunctionsNumberGenerated.rightLogShift,
  SQRT2: _pureFunctionsNumberGenerated.SQRT2,
  sech: _pureFunctionsNumberGenerated.sech,
  sin: _pureFunctionsNumberGenerated.sin,
  size: _pureFunctionsNumberGenerated.size,
  smallerEq: _pureFunctionsNumberGenerated.smallerEq,
  square: _pureFunctionsNumberGenerated.square,
  string: _pureFunctionsNumberGenerated.string,
  subtract: _pureFunctionsNumberGenerated.subtract,
  tanh: _pureFunctionsNumberGenerated.tanh,
  typeOf: _pureFunctionsNumberGenerated.typeOf,
  unequal: _pureFunctionsNumberGenerated.unequal,
  xgcd: _pureFunctionsNumberGenerated.xgcd,
  acoth: _pureFunctionsNumberGenerated.acoth,
  addScalar: _pureFunctionsNumberGenerated.addScalar,
  asech: _pureFunctionsNumberGenerated.asech,
  bitNot: _pureFunctionsNumberGenerated.bitNot,
  chain: chain,
  combinationsWithRep: _pureFunctionsNumberGenerated.combinationsWithRep,
  cosh: _pureFunctionsNumberGenerated.cosh,
  csch: _pureFunctionsNumberGenerated.csch,
  divideScalar: _pureFunctionsNumberGenerated.divideScalar,
  equalText: _pureFunctionsNumberGenerated.equalText,
  expm1: _pureFunctionsNumberGenerated.expm1,
  isNumeric: _pureFunctionsNumberGenerated.isNumeric,
  LN2: _pureFunctionsNumberGenerated.LN2,
  lcm: _pureFunctionsNumberGenerated.lcm,
  log10: _pureFunctionsNumberGenerated.log10,
  multiplyScalar: _pureFunctionsNumberGenerated.multiplyScalar,
  nthRoot: _pureFunctionsNumberGenerated.nthRoot,
  pickRandom: _pureFunctionsNumberGenerated.pickRandom,
  randomInt: _pureFunctionsNumberGenerated.randomInt,
  rightArithShift: _pureFunctionsNumberGenerated.rightArithShift,
  sec: _pureFunctionsNumberGenerated.sec,
  sinh: _pureFunctionsNumberGenerated.sinh,
  sqrt: _pureFunctionsNumberGenerated.sqrt,
  tan: _pureFunctionsNumberGenerated.tan,
  unaryMinus: _pureFunctionsNumberGenerated.unaryMinus,
  acosh: _pureFunctionsNumberGenerated.acosh,
  apply: _pureFunctionsNumberGenerated.apply,
  asinh: _pureFunctionsNumberGenerated.asinh,
  bitXor: _pureFunctionsNumberGenerated.bitXor,
  clone: _pureFunctionsNumberGenerated.clone,
  coth: _pureFunctionsNumberGenerated.coth,
  equal: _pureFunctionsNumberGenerated.equal,
  factorial: _pureFunctionsNumberGenerated.factorial,
  hasNumericValue: _pureFunctionsNumberGenerated.hasNumericValue,
  isNaN: _pureFunctionsNumberGenerated.isNaN,
  larger: _pureFunctionsNumberGenerated.larger,
  log2: _pureFunctionsNumberGenerated.log2,
  mode: _pureFunctionsNumberGenerated.mode,
  norm: _pureFunctionsNumberGenerated.norm,
  partitionSelect: _pureFunctionsNumberGenerated.partitionSelect,
  print: _pureFunctionsNumberGenerated.print,
  round: _pureFunctionsNumberGenerated.round,
  smaller: _pureFunctionsNumberGenerated.smaller,
  subtractScalar: _pureFunctionsNumberGenerated.subtractScalar,
  "true": _pureFunctionsNumberGenerated._true,
  variance: _pureFunctionsNumberGenerated.variance,
  zeta: _pureFunctionsNumberGenerated.zeta,
  acsch: _pureFunctionsNumberGenerated.acsch,
  atan2: _pureFunctionsNumberGenerated.atan2,
  catalan: _pureFunctionsNumberGenerated.catalan,
  compareNatural: _pureFunctionsNumberGenerated.compareNatural,
  composition: _pureFunctionsNumberGenerated.composition,
  cumsum: _pureFunctionsNumberGenerated.cumsum,
  floor: _pureFunctionsNumberGenerated.floor,
  hypot: _pureFunctionsNumberGenerated.hypot,
  lgamma: _pureFunctionsNumberGenerated.lgamma,
  median: _pureFunctionsNumberGenerated.median,
  multinomial: _pureFunctionsNumberGenerated.multinomial,
  permutations: _pureFunctionsNumberGenerated.permutations,
  quantileSeq: _pureFunctionsNumberGenerated.quantileSeq,
  sign: _pureFunctionsNumberGenerated.sign,
  std: _pureFunctionsNumberGenerated.std,
  stirlingS2: _pureFunctionsNumberGenerated.stirlingS2,
  'PI': _pureFunctionsNumberGenerated.pi,
  ceil: _pureFunctionsNumberGenerated.ceil,
  deepEqual: _pureFunctionsNumberGenerated.deepEqual,
  fix: _pureFunctionsNumberGenerated.fix,
  isPrime: _pureFunctionsNumberGenerated.isPrime,
  numeric: _pureFunctionsNumberGenerated.numeric,
  prod: _pureFunctionsNumberGenerated.prod,
  simplifyConstant: simplifyConstant,
  bellNumbers: _pureFunctionsNumberGenerated.bellNumbers,
  gcd: _pureFunctionsNumberGenerated.gcd,
  mad: _pureFunctionsNumberGenerated.mad,
  range: _pureFunctionsNumberGenerated.range,
  sum: _pureFunctionsNumberGenerated.sum,
  corr: _pureFunctionsNumberGenerated.corr,
  max: _pureFunctionsNumberGenerated.max,
  parse: parse,
  resolve: resolve,
  simplifyCore: simplifyCore,
  compile: compile,
  evaluate: evaluate,
  simplify: simplify,
  derivative: derivative,
  min: _pureFunctionsNumberGenerated.min,
  rationalize: rationalize,
  help: help,
  parser: parser,
  config: _configReadonly.config
});
(0, _extends2["default"])(mathWithTransform, math, {
  cumsum: (0, _factoriesNumber.createCumSumTransform)({
    add: _pureFunctionsNumberGenerated.add,
    typed: _pureFunctionsNumberGenerated.typed,
    unaryPlus: _pureFunctionsNumberGenerated.unaryPlus
  }),
  apply: (0, _factoriesNumber.createApplyTransform)({
    isInteger: _pureFunctionsNumberGenerated.isInteger,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  filter: (0, _factoriesNumber.createFilterTransform)({
    typed: _pureFunctionsNumberGenerated.typed
  }),
  forEach: (0, _factoriesNumber.createForEachTransform)({
    typed: _pureFunctionsNumberGenerated.typed
  }),
  map: (0, _factoriesNumber.createMapTransform)({
    typed: _pureFunctionsNumberGenerated.typed
  }),
  mean: (0, _factoriesNumber.createMeanTransform)({
    add: _pureFunctionsNumberGenerated.add,
    divide: _pureFunctionsNumberGenerated.divide,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  subset: (0, _factoriesNumber.createSubsetTransform)({}),
  range: (0, _factoriesNumber.createRangeTransform)({
    matrix: _pureFunctionsNumberGenerated.matrix,
    add: _pureFunctionsNumberGenerated.add,
    config: _configReadonly.config,
    isPositive: _pureFunctionsNumberGenerated.isPositive,
    larger: _pureFunctionsNumberGenerated.larger,
    largerEq: _pureFunctionsNumberGenerated.largerEq,
    smaller: _pureFunctionsNumberGenerated.smaller,
    smallerEq: _pureFunctionsNumberGenerated.smallerEq,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  std: (0, _factoriesNumber.createStdTransform)({
    map: _pureFunctionsNumberGenerated.map,
    sqrt: _pureFunctionsNumberGenerated.sqrt,
    typed: _pureFunctionsNumberGenerated.typed,
    variance: _pureFunctionsNumberGenerated.variance
  }),
  sum: (0, _factoriesNumber.createSumTransform)({
    add: _pureFunctionsNumberGenerated.add,
    config: _configReadonly.config,
    numeric: _pureFunctionsNumberGenerated.numeric,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  max: (0, _factoriesNumber.createMaxTransform)({
    config: _configReadonly.config,
    larger: _pureFunctionsNumberGenerated.larger,
    numeric: _pureFunctionsNumberGenerated.numeric,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  min: (0, _factoriesNumber.createMinTransform)({
    config: _configReadonly.config,
    numeric: _pureFunctionsNumberGenerated.numeric,
    smaller: _pureFunctionsNumberGenerated.smaller,
    typed: _pureFunctionsNumberGenerated.typed
  }),
  variance: (0, _factoriesNumber.createVarianceTransform)({
    add: _pureFunctionsNumberGenerated.add,
    apply: _pureFunctionsNumberGenerated.apply,
    divide: _pureFunctionsNumberGenerated.divide,
    isNaN: _pureFunctionsNumberGenerated.isNaN,
    multiply: _pureFunctionsNumberGenerated.multiply,
    subtract: _pureFunctionsNumberGenerated.subtract,
    typed: _pureFunctionsNumberGenerated.typed
  })
});
(0, _extends2["default"])(classes, {
  Range: _pureFunctionsNumberGenerated.Range,
  ResultSet: _pureFunctionsNumberGenerated.ResultSet,
  Chain: Chain,
  Node: Node,
  ObjectNode: ObjectNode,
  RangeNode: RangeNode,
  RelationalNode: RelationalNode,
  SymbolNode: SymbolNode,
  AccessorNode: AccessorNode,
  AssignmentNode: AssignmentNode,
  BlockNode: BlockNode,
  ConditionalNode: ConditionalNode,
  FunctionNode: FunctionNode,
  IndexNode: IndexNode,
  OperatorNode: OperatorNode,
  ConstantNode: ConstantNode,
  FunctionAssignmentNode: FunctionAssignmentNode,
  ParenthesisNode: ParenthesisNode,
  ArrayNode: ArrayNode,
  Help: Help,
  Parser: Parser
});
Chain.createProxy(math);