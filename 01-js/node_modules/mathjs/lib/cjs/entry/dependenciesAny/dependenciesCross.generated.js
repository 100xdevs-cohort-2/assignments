"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crossDependencies = void 0;
var _dependenciesMatrixGenerated = require("./dependenciesMatrix.generated.js");
var _dependenciesMultiplyGenerated = require("./dependenciesMultiply.generated.js");
var _dependenciesSubtractGenerated = require("./dependenciesSubtract.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var crossDependencies = exports.crossDependencies = {
  matrixDependencies: _dependenciesMatrixGenerated.matrixDependencies,
  multiplyDependencies: _dependenciesMultiplyGenerated.multiplyDependencies,
  subtractDependencies: _dependenciesSubtractGenerated.subtractDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createCross: _factoriesAny.createCross
};