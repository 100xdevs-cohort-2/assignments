"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fixDependencies = void 0;
var _dependenciesCeilGenerated = require("./dependenciesCeil.generated.js");
var _dependenciesFloorGenerated = require("./dependenciesFloor.generated.js");
var _dependenciesTypedGenerated = require("./dependenciesTyped.generated.js");
var _factoriesNumber = require("../../factoriesNumber.js");
/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */

var fixDependencies = exports.fixDependencies = {
  ceilDependencies: _dependenciesCeilGenerated.ceilDependencies,
  floorDependencies: _dependenciesFloorGenerated.floorDependencies,
  typedDependencies: _dependenciesTypedGenerated.typedDependencies,
  createFix: _factoriesNumber.createFix
};