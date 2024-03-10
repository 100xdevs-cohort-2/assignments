"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.divideDependencies = void 0;
var _dependenciesDivideScalarGenerated = require("./dependenciesDivideScalar.generated.js");
var _dependenciesEqualScalarGenerated = require("./dependenciesEqualScalar.generated.js");
var _dependenciesInvGenerated = require("./dependenciesInv.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesMultiplyGenerated = require("./dependenciesMultiply.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var divideDependencies = exports.divideDependencies = {
  divideScalarDependencies: _dependenciesDivideScalarGenerated.divideScalarDependencies,
  equalScalarDependencies: _dependenciesEqualScalarGenerated.equalScalarDependencies,
  invDependencies: _dependenciesInvGenerated.invDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  multiplyDependencies: _dependenciesMultiplyGenerated.multiplyDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createDivide: _factoriesAny.createDivide
};