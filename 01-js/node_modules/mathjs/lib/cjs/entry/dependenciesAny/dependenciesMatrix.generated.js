"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matrixDependencies = void 0;
var _dependenciesDenseMatrixClassGenerated = require("./dependenciesDenseMatrixClass.generated.js");
var _dependenciesMatrixClassGenerated = require("./dependenciesMatrixClass.generated.js");
var _dependenciesSparseMatrixClassGenerated = require("./dependenciesSparseMatrixClass.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var matrixDependencies = exports.matrixDependencies = {
  DenseMatrixDependencies: _dependenciesDenseMatrixClassGenerated.DenseMatrixDependencies,
  MatrixDependencies: _dependenciesMatrixClassGenerated.MatrixDependencies,
  SparseMatrixDependencies: _dependenciesSparseMatrixClassGenerated.SparseMatrixDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createMatrix: _factoriesAny.createMatrix
};