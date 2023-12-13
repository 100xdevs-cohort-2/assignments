"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.concatDependencies = void 0;
var _dependenciesIsIntegerGenerated = require("./dependenciesIsInteger.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var concatDependencies = exports.concatDependencies = {
  isIntegerDependencies: _dependenciesIsIntegerGenerated.isIntegerDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createConcat: _factoriesAny.createConcat
};