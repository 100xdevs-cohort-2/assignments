"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unitDocs = void 0;
var unitDocs = exports.unitDocs = {
  name: 'unit',
  category: 'Construction',
  syntax: ['value unit', 'unit(value, unit)', 'unit(string)'],
  description: 'Create a unit.',
  examples: ['5.5 mm', '3 inch', 'unit(7.1, "kilogram")', 'unit("23 deg")'],
  seealso: ['bignumber', 'boolean', 'complex', 'index', 'matrix', 'number', 'string']
};