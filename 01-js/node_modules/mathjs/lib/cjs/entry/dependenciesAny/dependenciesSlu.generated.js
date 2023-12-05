"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sluDependencies = void 0;
var _dependenciesSparseMatrixClassGenerated = require("./dependenciesSparseMatrixClass.generated.js");
var _dependenciesAbsGenerated = require("./dependenciesAbs.generated.js");
var _dependenciesAddGenerated = require("./dependenciesAdd.generated.js");
var _dependenciesDivideScalarGenerated = require("./dependenciesDivideScalar.generated.js");
var _dependenciesLargerGenerated = require("./dependenciesLarger.generated.js");
var _dependenciesLargerEqGenerated = require("./dependenciesLargerEq.generated.js");
var _dependenciesMultiplyGenerated = require("./dependenciesMultiply.generated.js");
var _dependenciesSubtractGenerated = require("./dependenciesSubtract.generated.js");
var _dependenciesTransposeGenerated = require("./dependenciesTranspose.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var sluDependencies = exports.sluDependencies = {
  SparseMatrixDependencies: _dependenciesSparseMatrixClassGenerated.SparseMatrixDependencies,
  absDependencies: _dependenciesAbsGenerated.absDependencies,
  addDependencies: _dependenciesAddGenerated.addDependencies,
  divideScalarDependencies: _dependenciesDivideScalarGenerated.divideScalarDependencies,
  largerDependencies: _dependenciesLargerGenerated.largerDependencies,
  largerEqDependencies: _dependenciesLargerEqGenerated.largerEqDependencies,
  multiplyDependencies: _dependenciesMultiplyGenerated.multiplyDependencies,
  subtractDependencies: _dependenciesSubtractGenerated.subtractDependencies,
  transposeDependencies: _dependenciesTransposeGenerated.transposeDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createSlu: _factoriesAny.createSlu
};