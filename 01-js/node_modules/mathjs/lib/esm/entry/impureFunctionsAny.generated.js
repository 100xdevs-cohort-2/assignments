import _extends from "@babel/runtime/helpers/extends";
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
import { config } from './configReadonly.js';
import { createNode, createObjectNode, createOperatorNode, createParenthesisNode, createRelationalNode, createArrayNode, createBlockNode, createConditionalNode, createConstantNode, createRangeNode, createReviver, createChainClass, createFunctionAssignmentNode, createChain, createIndexNode, createAccessorNode, createAssignmentNode, createSymbolNode, createFunctionNode, createParse, createResolve, createSimplifyConstant, createCompile, createHelpClass, createLeafCount, createSimplifyCore, createEvaluate, createHelp, createParserClass, createSimplify, createSymbolicEqual, createParser, createRationalize, createDerivative, createFilterTransform, createForEachTransform, createMapTransform, createApplyTransform, createConcatTransform, createMaxTransform, createPrintTransform, createDiffTransform, createMinTransform, createSubsetTransform, createCumSumTransform, createIndexTransform, createSumTransform, createRangeTransform, createRowTransform, createColumnTransform, createMeanTransform, createQuantileSeqTransform, createVarianceTransform, createStdTransform } from '../factoriesAny.js';
import { BigNumber, Complex, e, _false, fineStructure, Fraction, i, _Infinity, LN10, LOG10E, Matrix, _NaN, _null, phi, Range, ResultSet, SQRT1_2,
// eslint-disable-line camelcase
sackurTetrode, tau, _true, version, DenseMatrix, efimovFactor, LN2, pi, replacer, SQRT2, typed, unaryPlus, weakMixingAngle, abs, acos, acot, acsc, addScalar, arg, asech, asinh, atan, atanh, bignumber, bitNot, boolean, clone, combinations, complex, conj, cos, cot, csc, cube, equalScalar, erf, exp, expm1, filter, forEach, format, getMatrixDataType, hex, im, isInteger, isNegative, isPositive, isZero, LOG2E, lgamma, log10, log2, map, multiplyScalar, not, number, oct, pickRandom, print, random, re, sec, sign, sin, SparseMatrix, splitUnit, square, string, subtractScalar, tan, typeOf, acosh, acsch, apply, asec, bin, combinationsWithRep, cosh, csch, isNaN, isPrime, randomInt, sech, sinh, sparse, sqrt, tanh, unaryMinus, acoth, coth, fraction, isNumeric, matrix, matrixFromFunction, mode, numeric, prod, reshape, size, squeeze, transpose, xgcd, zeros, asin, cbrt, concat, count, ctranspose, diag, divideScalar, dotDivide, equal, flatten, hasNumericValue, identity, kron, largerEq, leftShift, lsolve, matrixFromColumns, nthRoot, ones, qr, resize, rightArithShift, round, smaller, subtract, to, unequal, usolve, xor, add, atan2, bitAnd, bitXor, catalan, compare, compareText, cumsum, deepEqual, diff, distance, dot, equalText, floor, gcd, hypot, ImmutableDenseMatrix, Index, larger, log, lsolveAll, matrixFromRows, min, mod, multiply, nthRoots, or, partitionSelect, rightLogShift, slu, subset, sum, trace, usolveAll, zpk2tf, bitOr, ceil, compareNatural, composition, cross, det, dotMultiply, FibonacciHeap, fix, index, intersect, invmod, lcm, log1p, max, setCartesian, setDistinct, setIsSubset, setPowerset, smallerEq, sort, and, range, row, setDifference, setMultiplicity, setSymDifference, Spa, column, inv, lup, pinv, pow, setIntersect, setUnion, sqrtm, Unit, vacuumImpedance, wienDisplacement, atomicMass, bohrMagneton, boltzmann, conductanceQuantum, coulomb, deuteronMass, dotPow, electricConstant, elementaryCharge, expm, faraday, fft, gamma, gravitationConstant, hartreeEnergy, ifft, klitzing, loschmidt, magneticConstant, molarMass, molarPlanckConstant, neutronMass, nuclearMagneton, planckCharge, planckLength, planckTemperature, protonMass, quantumOfCirculation, reducedPlanckConstant, rydberg, secondRadiation, speedOfLight, stefanBoltzmann, thomsonCrossSection, avogadro, bohrRadius, createUnit, divide, electronMass, factorial, firstRadiation, gravity, inverseConductanceQuantum, lusolve, magneticFluxQuantum, molarMassC12, multinomial, permutations, planckMass, polynomialRoot, setSize, solveODE, stirlingS2, unit, bellNumbers, eigs, fermiCoupling, gasConstant, mean, molarVolume, planckConstant, quantileSeq, variance, classicalElectronRadius, median, corr, freqz, mad, std, zeta, norm, rotationMatrix, kldivergence, planckTime, schur, rotate, sylvester, lyap } from './pureFunctionsAny.generated.js';
var math = {}; // NOT pure!
var mathWithTransform = {}; // NOT pure!
var classes = {}; // NOT pure!

export var Node = createNode({
  mathWithTransform
});
export var ObjectNode = createObjectNode({
  Node
});
export var OperatorNode = createOperatorNode({
  Node
});
export var ParenthesisNode = createParenthesisNode({
  Node
});
export var RelationalNode = createRelationalNode({
  Node
});
export var ArrayNode = createArrayNode({
  Node
});
export var BlockNode = createBlockNode({
  Node,
  ResultSet
});
export var ConditionalNode = createConditionalNode({
  Node
});
export var ConstantNode = createConstantNode({
  Node
});
export var RangeNode = createRangeNode({
  Node
});
export var reviver = createReviver({
  classes
});
export var Chain = createChainClass({
  math,
  typed
});
export var FunctionAssignmentNode = createFunctionAssignmentNode({
  Node,
  typed
});
export var chain = createChain({
  Chain,
  typed
});
export var IndexNode = createIndexNode({
  Node,
  size
});
export var AccessorNode = createAccessorNode({
  Node,
  subset
});
export var AssignmentNode = createAssignmentNode({
  matrix,
  Node,
  subset
});
export var SymbolNode = createSymbolNode({
  Unit,
  Node,
  math
});
export var FunctionNode = createFunctionNode({
  Node,
  SymbolNode,
  math
});
export var parse = createParse({
  AccessorNode,
  ArrayNode,
  AssignmentNode,
  BlockNode,
  ConditionalNode,
  ConstantNode,
  FunctionAssignmentNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  RangeNode,
  RelationalNode,
  SymbolNode,
  config,
  numeric,
  typed
});
export var resolve = createResolve({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  parse,
  typed
});
export var simplifyConstant = createSimplifyConstant({
  bignumber,
  fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  SymbolNode,
  config,
  mathWithTransform,
  matrix,
  typed
});
export var compile = createCompile({
  parse,
  typed
});
export var Help = createHelpClass({
  parse
});
export var leafCount = createLeafCount({
  parse,
  typed
});
export var simplifyCore = createSimplifyCore({
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  divide,
  equal,
  isZero,
  multiply,
  parse,
  pow,
  subtract,
  typed
});
export var evaluate = createEvaluate({
  parse,
  typed
});
export var help = createHelp({
  Help,
  mathWithTransform,
  typed
});
export var Parser = createParserClass({
  evaluate
});
export var simplify = createSimplify({
  bignumber,
  fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  config,
  divide,
  equal,
  isZero,
  mathWithTransform,
  matrix,
  multiply,
  parse,
  pow,
  resolve,
  simplifyConstant,
  simplifyCore,
  subtract,
  typed
});
export var symbolicEqual = createSymbolicEqual({
  OperatorNode,
  parse,
  simplify,
  typed
});
export var parser = createParser({
  Parser,
  typed
});
export var rationalize = createRationalize({
  bignumber,
  fraction,
  AccessorNode,
  ArrayNode,
  ConstantNode,
  FunctionNode,
  IndexNode,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  add,
  config,
  divide,
  equal,
  isZero,
  mathWithTransform,
  matrix,
  multiply,
  parse,
  pow,
  simplify,
  simplifyConstant,
  simplifyCore,
  subtract,
  typed
});
export var derivative = createDerivative({
  ConstantNode,
  FunctionNode,
  OperatorNode,
  ParenthesisNode,
  SymbolNode,
  config,
  equal,
  isZero,
  numeric,
  parse,
  simplify,
  typed
});
_extends(math, {
  e,
  false: _false,
  fineStructure,
  i,
  Infinity: _Infinity,
  LN10,
  LOG10E,
  NaN: _NaN,
  null: _null,
  phi,
  SQRT1_2,
  sackurTetrode,
  tau,
  true: _true,
  'E': e,
  version,
  efimovFactor,
  LN2,
  pi,
  replacer,
  reviver,
  SQRT2,
  typed,
  unaryPlus,
  'PI': pi,
  weakMixingAngle,
  abs,
  acos,
  acot,
  acsc,
  addScalar,
  arg,
  asech,
  asinh,
  atan,
  atanh,
  bignumber,
  bitNot,
  boolean,
  clone,
  combinations,
  complex,
  conj,
  cos,
  cot,
  csc,
  cube,
  equalScalar,
  erf,
  exp,
  expm1,
  filter,
  forEach,
  format,
  getMatrixDataType,
  hex,
  im,
  isInteger,
  isNegative,
  isPositive,
  isZero,
  LOG2E,
  lgamma,
  log10,
  log2,
  map,
  multiplyScalar,
  not,
  number,
  oct,
  pickRandom,
  print,
  random,
  re,
  sec,
  sign,
  sin,
  splitUnit,
  square,
  string,
  subtractScalar,
  tan,
  typeOf,
  acosh,
  acsch,
  apply,
  asec,
  bin,
  chain,
  combinationsWithRep,
  cosh,
  csch,
  isNaN,
  isPrime,
  randomInt,
  sech,
  sinh,
  sparse,
  sqrt,
  tanh,
  unaryMinus,
  acoth,
  coth,
  fraction,
  isNumeric,
  matrix,
  matrixFromFunction,
  mode,
  numeric,
  prod,
  reshape,
  size,
  squeeze,
  transpose,
  xgcd,
  zeros,
  asin,
  cbrt,
  concat,
  count,
  ctranspose,
  diag,
  divideScalar,
  dotDivide,
  equal,
  flatten,
  hasNumericValue,
  identity,
  kron,
  largerEq,
  leftShift,
  lsolve,
  matrixFromColumns,
  nthRoot,
  ones,
  qr,
  resize,
  rightArithShift,
  round,
  smaller,
  subtract,
  to,
  unequal,
  usolve,
  xor,
  add,
  atan2,
  bitAnd,
  bitXor,
  catalan,
  compare,
  compareText,
  cumsum,
  deepEqual,
  diff,
  distance,
  dot,
  equalText,
  floor,
  gcd,
  hypot,
  larger,
  log,
  lsolveAll,
  matrixFromRows,
  min,
  mod,
  multiply,
  nthRoots,
  or,
  partitionSelect,
  rightLogShift,
  slu,
  subset,
  sum,
  trace,
  usolveAll,
  zpk2tf,
  bitOr,
  ceil,
  compareNatural,
  composition,
  cross,
  det,
  dotMultiply,
  fix,
  index,
  intersect,
  invmod,
  lcm,
  log1p,
  max,
  setCartesian,
  setDistinct,
  setIsSubset,
  setPowerset,
  smallerEq,
  sort,
  and,
  range,
  row,
  setDifference,
  setMultiplicity,
  setSymDifference,
  column,
  inv,
  lup,
  pinv,
  pow,
  setIntersect,
  setUnion,
  sqrtm,
  vacuumImpedance,
  wienDisplacement,
  atomicMass,
  bohrMagneton,
  boltzmann,
  conductanceQuantum,
  coulomb,
  deuteronMass,
  dotPow,
  electricConstant,
  elementaryCharge,
  expm,
  faraday,
  fft,
  gamma,
  gravitationConstant,
  hartreeEnergy,
  ifft,
  klitzing,
  loschmidt,
  magneticConstant,
  molarMass,
  molarPlanckConstant,
  neutronMass,
  nuclearMagneton,
  planckCharge,
  planckLength,
  planckTemperature,
  protonMass,
  quantumOfCirculation,
  reducedPlanckConstant,
  rydberg,
  secondRadiation,
  speedOfLight,
  stefanBoltzmann,
  thomsonCrossSection,
  avogadro,
  bohrRadius,
  createUnit,
  divide,
  electronMass,
  factorial,
  firstRadiation,
  gravity,
  inverseConductanceQuantum,
  lusolve,
  magneticFluxQuantum,
  molarMassC12,
  multinomial,
  parse,
  permutations,
  planckMass,
  polynomialRoot,
  resolve,
  setSize,
  simplifyConstant,
  solveODE,
  stirlingS2,
  unit,
  bellNumbers,
  compile,
  eigs,
  fermiCoupling,
  gasConstant,
  leafCount,
  mean,
  molarVolume,
  planckConstant,
  quantileSeq,
  simplifyCore,
  variance,
  classicalElectronRadius,
  evaluate,
  help,
  median,
  simplify,
  symbolicEqual,
  corr,
  freqz,
  mad,
  parser,
  rationalize,
  std,
  zeta,
  derivative,
  norm,
  rotationMatrix,
  kldivergence,
  planckTime,
  schur,
  rotate,
  sylvester,
  lyap,
  config
});
_extends(mathWithTransform, math, {
  filter: createFilterTransform({
    typed
  }),
  forEach: createForEachTransform({
    typed
  }),
  map: createMapTransform({
    typed
  }),
  apply: createApplyTransform({
    isInteger,
    typed
  }),
  concat: createConcatTransform({
    isInteger,
    matrix,
    typed
  }),
  max: createMaxTransform({
    config,
    larger,
    numeric,
    typed
  }),
  print: createPrintTransform({
    add,
    matrix,
    typed,
    zeros
  }),
  diff: createDiffTransform({
    bignumber,
    matrix,
    number,
    subtract,
    typed
  }),
  min: createMinTransform({
    config,
    numeric,
    smaller,
    typed
  }),
  subset: createSubsetTransform({
    add,
    matrix,
    typed,
    zeros
  }),
  cumsum: createCumSumTransform({
    add,
    typed,
    unaryPlus
  }),
  index: createIndexTransform({
    Index,
    getMatrixDataType
  }),
  sum: createSumTransform({
    add,
    config,
    numeric,
    typed
  }),
  range: createRangeTransform({
    bignumber,
    matrix,
    add,
    config,
    isPositive,
    larger,
    largerEq,
    smaller,
    smallerEq,
    typed
  }),
  row: createRowTransform({
    Index,
    matrix,
    range,
    typed
  }),
  column: createColumnTransform({
    Index,
    matrix,
    range,
    typed
  }),
  mean: createMeanTransform({
    add,
    divide,
    typed
  }),
  quantileSeq: createQuantileSeqTransform({
    add,
    bignumber,
    compare,
    divide,
    isInteger,
    larger,
    multiply,
    partitionSelect,
    smaller,
    smallerEq,
    subtract,
    typed
  }),
  variance: createVarianceTransform({
    add,
    apply,
    divide,
    isNaN,
    multiply,
    subtract,
    typed
  }),
  std: createStdTransform({
    map,
    sqrt,
    typed,
    variance
  })
});
_extends(classes, {
  BigNumber,
  Complex,
  Fraction,
  Matrix,
  Node,
  ObjectNode,
  OperatorNode,
  ParenthesisNode,
  Range,
  RelationalNode,
  ResultSet,
  ArrayNode,
  BlockNode,
  ConditionalNode,
  ConstantNode,
  DenseMatrix,
  RangeNode,
  Chain,
  FunctionAssignmentNode,
  SparseMatrix,
  IndexNode,
  ImmutableDenseMatrix,
  Index,
  AccessorNode,
  AssignmentNode,
  FibonacciHeap,
  Spa,
  Unit,
  SymbolNode,
  FunctionNode,
  Help,
  Parser
});
Chain.createProxy(math);
export { embeddedDocs as docs } from '../expression/embeddedDocs/embeddedDocs.js';