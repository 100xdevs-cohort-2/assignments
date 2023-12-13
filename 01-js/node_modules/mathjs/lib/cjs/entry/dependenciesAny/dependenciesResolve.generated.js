"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveDependencies = void 0;
var _dependenciesConstantNodeGenerated = require("./dependenciesConstantNode.generated.js");
var _dependenciesFunctionNodeGenerated = require("./dependenciesFunctionNode.generated.js");
var _dependenciesOperatorNodeGenerated = require("./dependenciesOperatorNode.generated.js");
var _dependenciesParenthesisNodeGenerated = require("./dependenciesParenthesisNode.generated.js");
var _dependenciesParseGenerated = require("./dependenciesParse.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var resolveDependencies = exports.resolveDependencies = {
  ConstantNodeDependencies: _dependenciesConstantNodeGenerated.ConstantNodeDependencies,
  FunctionNodeDependencies: _dependenciesFunctionNodeGenerated.FunctionNodeDependencies,
  OperatorNodeDependencies: _dependenciesOperatorNodeGenerated.OperatorNodeDependencies,
  ParenthesisNodeDependencies: _dependenciesParenthesisNodeGenerated.ParenthesisNodeDependencies,
  parseDependencies: _dependenciesParseGenerated.parseDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createResolve: _factoriesAny.createResolve
};