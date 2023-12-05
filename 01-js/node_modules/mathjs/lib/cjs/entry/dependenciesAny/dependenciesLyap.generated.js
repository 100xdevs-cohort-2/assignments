"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lyapDependencies = void 0;
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesMultiplyGenerated = require("./dependenciesMultiply.generated.js");
var _dependenciesSylvesterGenerated = require("./dependenciesSylvester.generated.js");
var _dependenciesTransposeGenerated = require("./dependenciesTranspose.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var lyapDependencies = exports.lyapDependencies = {
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  multiplyDependencies: _dependenciesMultiplyGenerated.multiplyDependencies,
  sylvesterDependencies: _dependenciesSylvesterGenerated.sylvesterDependencies,
  transposeDependencies: _dependenciesTransposeGenerated.transposeDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createLyap: _factoriesAny.createLyap
};