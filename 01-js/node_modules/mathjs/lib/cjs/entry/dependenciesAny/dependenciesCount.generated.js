"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countDependencies = void 0;
var _dependenciesProdGenerated = require("./dependenciesProd.generated.js");
var _dependenciesSizeGenerated = require("./dependenciesSize.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesAny = require("../../factoriesAny.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var countDependencies = exports.countDependencies = {
  prodDependencies: _dependenciesProdGenerated.prodDependencies,
  sizeDependencies: _dependenciesSizeGenerated.sizeDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createCount: _factoriesAny.createCount
};