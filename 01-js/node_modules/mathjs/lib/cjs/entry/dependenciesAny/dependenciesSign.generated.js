"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signDependencies = void 0;
var _dependenciesBigNumberClassGenerated = require("./dependenciesBigNumberClass.generated.js");
var _dependenciesFractionClassGenerated = require("./dependenciesFractionClass.generated.js");
var _dependenciesComplexGenerated = require("./dependenciesComplex.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var signDependencies = exports.signDependencies = {
  BigNumberDependencies: _dependenciesBigNumberClassGenerated.BigNumberDependencies,
  FractionDependencies: _dependenciesFractionClassGenerated.FractionDependencies,
  complexDependencies: _dependenciesComplexGenerated.complexDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createSign: _factoriesAny.createSign
};