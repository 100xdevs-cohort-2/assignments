"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.kronDependencies = void 0;
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesMultiplyScalarGenerated = require("./dependenciesMultiplyScalar.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var kronDependencies = exports.kronDependencies = {
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  multiplyScalarDependencies: _dependenciesMultiplyScalarGenerated.multiplyScalarDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createKron: _factoriesAny.createKron
};