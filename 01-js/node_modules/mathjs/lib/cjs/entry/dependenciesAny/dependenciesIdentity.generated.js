"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.identityDependencies = void 0;
var _dependenciesBigNumberClassGenerated = require("./dependenciesBigNumberClass.generated.js");
var _dependenciesDenseMatrixClassGenerated = require("./dependenciesDenseMatrixClass.generated.js");
var _dependenciesSparseMatrixClassGenerated = require("./dependenciesSparseMatrixClass.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var identityDependencies = exports.identityDependencies = {
  BigNumberDependencies: _dependenciesBigNumberClassGenerated.BigNumberDependencies,
  DenseMatrixDependencies: _dependenciesDenseMatrixClassGenerated.DenseMatrixDependencies,
  SparseMatrixDependencies: _dependenciesSparseMatrixClassGenerated.SparseMatrixDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createIdentity: _factoriesAny.createIdentity
};