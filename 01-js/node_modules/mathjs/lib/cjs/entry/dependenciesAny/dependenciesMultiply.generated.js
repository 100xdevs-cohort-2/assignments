"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiplyDependencies = void 0;
var _dependenciesAddScalarGenerated = require("./dependenciesAddScalar.generated.js");
var _dependenciesDotGenerated = require("./dependenciesDot.generated.js");
var _dependenciesEqualScalarGenerated = require("./dependenciesEqualScalar.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesMultiplyScalarGenerated = require("./dependenciesMultiplyScalar.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var multiplyDependencies = exports.multiplyDependencies = {
  addScalarDependencies: _dependenciesAddScalarGenerated.addScalarDependencies,
  dotDependencies: _dependenciesDotGenerated.dotDependencies,
  equalScalarDependencies: _dependenciesEqualScalarGenerated.equalScalarDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  multiplyScalarDependencies: _dependenciesMultiplyScalarGenerated.multiplyScalarDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createMultiply: _factoriesAny.createMultiply
};