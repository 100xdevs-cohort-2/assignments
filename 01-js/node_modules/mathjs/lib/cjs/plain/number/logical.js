"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.andNumber = andNumber;
exports.notNumber = notNumber;
exports.orNumber = orNumber;
exports.xorNumber = xorNumber;
var n1 = 'number';
var n2 = 'number, number';
function notNumber(x) {
  return !x;
}
notNumber.signature = n1;
function orNumber(x, y) {
  return !!(x || y);
}
orNumber.signature = n2;
function xorNumber(x, y) {
  return !!x !== !!y;
}
xorNumber.signature = n2;
function andNumber(x, y) {
  return !!(x && y);
}
andNumber.signature = n2;