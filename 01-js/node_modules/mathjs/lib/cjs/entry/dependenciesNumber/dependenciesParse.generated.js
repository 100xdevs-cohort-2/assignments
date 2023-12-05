"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseDependencies = void 0;
var _dependenciesAccessorNodeGenerated = require("./dependenciesAccessorNode.generated.js");
var _dependenciesArrayNodeGenerated = require("./dependenciesArrayNode.generated.js");
var _dependenciesAssignmentNodeGenerated = require("./dependenciesAssignmentNode.generated.js");
var _dependenciesBlockNodeGenerated = require("./dependenciesBlockNode.generated.js");
var _dependenciesConditionalNodeGenerated = require("./dependenciesConditionalNode.generated.js");
var _dependenciesConstantNodeGenerated = require("./dependenciesConstantNode.generated.js");
var _dependenciesFunctionAssignmentNodeGenerated = require("./dependenciesFunctionAssignmentNode.generated.js");
var _dependenciesFunctionNodeGenerated = require("./dependenciesFunctionNode.generated.js");
var _dependenciesIndexNodeGenerated = require("./dependenciesIndexNode.generated.js");
var _dependenciesObjectNodeGenerated = require("./dependenciesObjectNode.generated.js");
var _dependenciesOperatorNodeGenerated = require("./dependenciesOperatorNode.generated.js");
var _dependenciesParenthesisNodeGenerated = require("./dependenciesParenthesisNode.generated.js");
var _dependenciesRangeNodeGenerated = require("./dependenciesRangeNode.generated.js");
var _dependenciesRelationalNodeGenerated = require("./dependenciesRelationalNode.generated.js");
var _dependenciesSymbolNodeGenerated = require("./dependenciesSymbolNode.generated.js");
var _dependenciesNumericGenerated = require("./dependenciesNumeric.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesNumber = require("../../factoriesNumber.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var parseDependencies = exports.parseDependencies = {
  AccessorNodeDependencies: _dependenciesAccessorNodeGenerated.AccessorNodeDependencies,
  ArrayNodeDependencies: _dependenciesArrayNodeGenerated.ArrayNodeDependencies,
  AssignmentNodeDependencies: _dependenciesAssignmentNodeGenerated.AssignmentNodeDependencies,
  BlockNodeDependencies: _dependenciesBlockNodeGenerated.BlockNodeDependencies,
  ConditionalNodeDependencies: _dependenciesConditionalNodeGenerated.ConditionalNodeDependencies,
  ConstantNodeDependencies: _dependenciesConstantNodeGenerated.ConstantNodeDependencies,
  FunctionAssignmentNodeDependencies: _dependenciesFunctionAssignmentNodeGenerated.FunctionAssignmentNodeDependencies,
  FunctionNodeDependencies: _dependenciesFunctionNodeGenerated.FunctionNodeDependencies,
  IndexNodeDependencies: _dependenciesIndexNodeGenerated.IndexNodeDependencies,
  ObjectNodeDependencies: _dependenciesObjectNodeGenerated.ObjectNodeDependencies,
  OperatorNodeDependencies: _dependenciesOperatorNodeGenerated.OperatorNodeDependencies,
  ParenthesisNodeDependencies: _dependenciesParenthesisNodeGenerated.ParenthesisNodeDependencies,
  RangeNodeDependencies: _dependenciesRangeNodeGenerated.RangeNodeDependencies,
  RelationalNodeDependencies: _dependenciesRelationalNodeGenerated.RelationalNodeDependencies,
  SymbolNodeDependencies: _dependenciesSymbolNodeGenerated.SymbolNodeDependencies,
  numericDependencies: _dependenciesNumericGenerated.numericDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createParse: _factoriesNumber.createParse
};