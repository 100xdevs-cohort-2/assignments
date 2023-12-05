"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.derivativeDependencies = void 0;
var _dependenciesConstantNodeGenerated = require("./dependenciesConstantNode.generated.js");
var _dependenciesFunctionNodeGenerated = require("./dependenciesFunctionNode.generated.js");
var _dependenciesOperatorNodeGenerated = require("./dependenciesOperatorNode.generated.js");
var _dependenciesParenthesisNodeGenerated = require("./dependenciesParenthesisNode.generated.js");
var _dependenciesSymbolNodeGenerated = require("./dependenciesSymbolNode.generated.js");
var _dependenciesEqualGenerated = require("./dependenciesEqual.generated.js");
var _dependenciesIsZeroGenerated = require("./dependenciesIsZero.generated.js");
var _dependenciesNumericGenerated = require("./dependenciesNumeric.generated.js");
var _dependenciesParseGenerated = require("./dependenciesParse.generated.js");
var _dependenciesSimplifyGenerated = require("./dependenciesSimplify.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesNumber = require("../../factoriesNumber.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var derivativeDependencies = exports.derivativeDependencies = {
  ConstantNodeDependencies: _dependenciesConstantNodeGenerated.ConstantNodeDependencies,
  FunctionNodeDependencies: _dependenciesFunctionNodeGenerated.FunctionNodeDependencies,
  OperatorNodeDependencies: _dependenciesOperatorNodeGenerated.OperatorNodeDependencies,
  ParenthesisNodeDependencies: _dependenciesParenthesisNodeGenerated.ParenthesisNodeDependencies,
  SymbolNodeDependencies: _dependenciesSymbolNodeGenerated.SymbolNodeDependencies,
  equalDependencies: _dependenciesEqualGenerated.equalDependencies,
  isZeroDependencies: _dependenciesIsZeroGenerated.isZeroDependencies,
  numericDependencies: _dependenciesNumericGenerated.numericDependencies,
  parseDependencies: _dependenciesParseGenerated.parseDependencies,
  simplifyDependencies: _dependenciesSimplifyGenerated.simplifyDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createDerivative: _factoriesNumber.createDerivative
};