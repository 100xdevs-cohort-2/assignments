"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.splitUnitDocs = void 0;
var splitUnitDocs = exports.splitUnitDocs = {
  name: 'splitUnit',
  category: 'Construction',
  syntax: ['splitUnit(unit: Unit, parts: Unit[])'],
  description: 'Split a unit in an array of units whose sum is equal to the original unit.',
  examples: ['splitUnit(1 m, ["feet", "inch"])'],
  seealso: ['unit', 'createUnit']
};