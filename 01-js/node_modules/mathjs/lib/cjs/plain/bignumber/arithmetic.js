"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.absBigNumber = absBigNumber;
exports.addBigNumber = addBigNumber;
exports.divideBigNumber = divideBigNumber;
exports.multiplyBigNumber = multiplyBigNumber;
exports.subtractBigNumber = subtractBigNumber;
var signature1 = 'BigNumber';
var signature2 = 'BigNumber, BigNumber';
function absBigNumber(a) {
  return a.abs();
}
absBigNumber.signature = signature1;
function addBigNumber(a, b) {
  return a.add(b);
}
addBigNumber.signature = signature2;
function subtractBigNumber(a, b) {
  return a.sub(b);
}
subtractBigNumber.signature = signature2;
function multiplyBigNumber(a, b) {
  return a.mul(b);
}
multiplyBigNumber.signature = signature2;
function divideBigNumber(a, b) {
  return a.div(b);
}
divideBigNumber.signature = signature2;