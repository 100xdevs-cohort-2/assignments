"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lsolveDependencies = void 0;
var _dependenciesDenseMatrixClassGenerated = require("./dependenciesDenseMatrixClass.generated.js");
var _dependenciesDivideScalarGenerated = require("./dependenciesDivideScalar.generated.js");
var _dependenciesEqualScalarGenerated = require("./dependenciesEqualScalar.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesMultiplyScalarGenerated = require("./dependenciesMultiplyScalar.generated.js");
var _dependenciesSubtractScalarGenerated = require("./dependenciesSubtractScalar.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var lsolveDependencies = exports.lsolveDependencies = {
  DenseMatrixDependencies: _dependenciesDenseMatrixClassGenerated.DenseMatrixDependencies,
  divideScalarDependencies: _dependenciesDivideScalarGenerated.divideScalarDependencies,
  equalScalarDependencies: _dependenciesEqualScalarGenerated.equalScalarDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  multiplyScalarDependencies: _dependenciesMultiplyScalarGenerated.multiplyScalarDependencies,
  subtractScalarDependencies: _dependenciesSubtractScalarGenerated.subtractScalarDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createLsolve: _factoriesAny.createLsolve
};