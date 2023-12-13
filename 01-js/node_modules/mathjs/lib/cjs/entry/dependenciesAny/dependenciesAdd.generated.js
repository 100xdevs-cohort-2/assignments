"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addDependencies = void 0;
var _dependenciesDenseMatrixClassGenerated = require("./dependenciesDenseMatrixClass.generated.js");
var _dependenciesSparseMatrixClassGenerated = require("./dependenciesSparseMatrixClass.generated.js");
var _dependenciesAddScalarGenerated = require("./dependenciesAddScalar.generated.js");
var _dependenciesConcatGenerated = require("./dependenciesConcat.generated.js");
var _dependenciesEqualScalarGenerated = require("./dependenciesEqualScalar.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var addDependencies = exports.addDependencies = {
  DenseMatrixDependencies: _dependenciesDenseMatrixClassGenerated.DenseMatrixDependencies,
  SparseMatrixDependencies: _dependenciesSparseMatrixClassGenerated.SparseMatrixDependencies,
  addScalarDependencies: _dependenciesAddScalarGenerated.addScalarDependencies,
  concatDependencies: _dependenciesConcatGenerated.concatDependencies,
  equalScalarDependencies: _dependenciesEqualScalarGenerated.equalScalarDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createAdd: _factoriesAny.createAdd
};