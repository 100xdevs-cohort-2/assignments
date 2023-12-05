"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isIntegerNumber = isIntegerNumber;
exports.isNaNNumber = isNaNNumber;
exports.isNegativeNumber = isNegativeNumber;
exports.isPositiveNumber = isPositiveNumber;
exports.isZeroNumber = isZeroNumber;
var _number = require("../../utils/number.js");
var n1 = 'number';
function isIntegerNumber(x) {
  return (0, _number.isInteger)(x);
}
isIntegerNumber.signature = n1;
function isNegativeNumber(x) {
  return x < 0;
}
isNegativeNumber.signature = n1;
function isPositiveNumber(x) {
  return x > 0;
}
isPositiveNumber.signature = n1;
function isZeroNumber(x) {
  return x === 0;
}
isZeroNumber.signature = n1;
function isNaNNumber(x) {
  return Number.isNaN(x);
}
isNaNNumber.signature = n1;