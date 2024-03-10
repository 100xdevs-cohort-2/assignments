"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.simplifyCoreDependencies = void 0;
var _dependenciesAccessorNodeGenerated = require("./dependenciesAccessorNode.generated.js");
var _dependenciesArrayNodeGenerated = require("./dependenciesArrayNode.generated.js");
var _dependenciesConstantNodeGenerated = require("./dependenciesConstantNode.generated.js");
var _dependenciesFunctionNodeGenerated = require("./dependenciesFunctionNode.generated.js");
var _dependenciesIndexNodeGenerated = require("./dependenciesIndexNode.generated.js");
var _dependenciesObjectNodeGenerated = require("./dependenciesObjectNode.generated.js");
var _dependenciesOperatorNodeGenerated = require("./dependenciesOperatorNode.generated.js");
var _dependenciesParenthesisNodeGenerated = require("./dependenciesParenthesisNode.generated.js");
var _dependenciesSymbolNodeGenerated = require("./dependenciesSymbolNode.generated.js");
var _dependenciesAddGenerated = require("./dependenciesAdd.generated.js");
var _dependenciesDivideGenerated = require("./dependenciesDivide.generated.js");
var _dependenciesEqualGenerated = require("./dependenciesEqual.generated.js");
var _dependenciesIsZeroGenerated = require("./dependenciesIsZero.generated.js");
var _dependenciesMultiplyGenerated = require("./dependenciesMultiply.generated.js");
var _dependenciesParseGenerated = require("./dependenciesParse.generated.js");
var _dependenciesPowGenerated = require("./dependenciesPow.generated.js");
var _dependenciesSubtractGenerated = require("./dependenciesSubtract.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesNumber = require("../../factoriesNumber.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var simplifyCoreDependencies = exports.simplifyCoreDependencies = {
  AccessorNodeDependencies: _dependenciesAccessorNodeGenerated.AccessorNodeDependencies,
  ArrayNodeDependencies: _dependenciesArrayNodeGenerated.ArrayNodeDependencies,
  ConstantNodeDependencies: _dependenciesConstantNodeGenerated.ConstantNodeDependencies,
  FunctionNodeDependencies: _dependenciesFunctionNodeGenerated.FunctionNodeDependencies,
  IndexNodeDependencies: _dependenciesIndexNodeGenerated.IndexNodeDependencies,
  ObjectNodeDependencies: _dependenciesObjectNodeGenerated.ObjectNodeDependencies,
  OperatorNodeDependencies: _dependenciesOperatorNodeGenerated.OperatorNodeDependencies,
  ParenthesisNodeDependencies: _dependenciesParenthesisNodeGenerated.ParenthesisNodeDependencies,
  SymbolNodeDependencies: _dependenciesSymbolNodeGenerated.SymbolNodeDependencies,
  addDependencies: _dependenciesAddGenerated.addDependencies,
  divideDependencies: _dependenciesDivideGenerated.divideDependencies,
  equalDependencies: _dependenciesEqualGenerated.equalDependencies,
  isZeroDependencies: _dependenciesIsZeroGenerated.isZeroDependencies,
  multiplyDependencies: _dependenciesMultiplyGenerated.multiplyDependencies,
  parseDependencies: _dependenciesParseGenerated.parseDependencies,
  powDependencies: _dependenciesPowGenerated.powDependencies,
  subtractDependencies: _dependenciesSubtractGenerated.subtractDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createSimplifyCore: _factoriesNumber.createSimplifyCore
};