"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortDependencies = void 0;
var _dependenciesCompareGenerated = require("./dependenciesCompare.generated.js");
var _dependenciesCompareNaturalGenerated = require("./dependenciesCompareNatural.generated.js");
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var sortDependencies = exports.sortDependencies = {
  compareDependencies: _dependenciesCompareGenerated.compareDependencies,
  compareNaturalDependencies: _dependenciesCompareNaturalGenerated.compareNaturalDependencies,
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createSort: _factoriesAny.createSort
};