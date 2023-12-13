"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smallerDependencies = void 0;
var _dependenciesDenseMatrixClassGenerated = require("./dependenciesDenseMatrixClass.generated.js");
var _dependenciesConcatGenerated = require("./dependenciesConcat.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var smallerDependencies = exports.smallerDependencies = {
  DenseMatrixDependencies: _dependenciesDenseMatrixClassGenerated.DenseMatrixDependencies,
  concatDependencies: _dependenciesConcatGenerated.concatDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createSmaller: _factoriesAny.createSmaller
};