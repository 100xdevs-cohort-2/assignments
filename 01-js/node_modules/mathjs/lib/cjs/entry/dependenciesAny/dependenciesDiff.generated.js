"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diffDependencies = void 0;
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesNumberGenerated = require("./dependenciesNumber.generated.js");
var _dependenciesSubtractGenerated = require("./dependenciesSubtract.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var diffDependencies = exports.diffDependencies = {
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  numberDependencies: _dependenciesNumberGenerated.numberDependencies,
  subtractDependencies: _dependenciesSubtractGenerated.subtractDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createDiff: _factoriesAny.createDiff
};