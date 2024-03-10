"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitAndNumber = bitAndNumber;
exports.bitNotNumber = bitNotNumber;
exports.bitOrNumber = bitOrNumber;
exports.bitXorNumber = bitXorNumber;
exports.leftShiftNumber = leftShiftNumber;
exports.rightArithShiftNumber = rightArithShiftNumber;
exports.rightLogShiftNumber = rightLogShiftNumber;
var _number = require("../../utils/number.js");
var n1 = 'number';
var n2 = 'number, number';
function bitAndNumber(x, y) {
  if (!(0, _number.isInteger)(x) || !(0, _number.isInteger)(y)) {
    throw new Error('Integers expected in function bitAnd');
  }
  return x & y;
}
bitAndNumber.signature = n2;
function bitNotNumber(x) {
  if (!(0, _number.isInteger)(x)) {
    throw new Error('Integer expected in function bitNot');
  }
  return ~x;
}
bitNotNumber.signature = n1;
function bitOrNumber(x, y) {
  if (!(0, _number.isInteger)(x) || !(0, _number.isInteger)(y)) {
    throw new Error('Integers expected in function bitOr');
  }
  return x | y;
}
bitOrNumber.signature = n2;
function bitXorNumber(x, y) {
  if (!(0, _number.isInteger)(x) || !(0, _number.isInteger)(y)) {
    throw new Error('Integers expected in function bitXor');
  }
  return x ^ y;
}
bitXorNumber.signature = n2;
function leftShiftNumber(x, y) {
  if (!(0, _number.isInteger)(x) || !(0, _number.isInteger)(y)) {
    throw new Error('Integers expected in function leftShift');
  }
  return x << y;
}
leftShiftNumber.signature = n2;
function rightArithShiftNumber(x, y) {
  if (!(0, _number.isInteger)(x) || !(0, _number.isInteger)(y)) {
    throw new Error('Integers expected in function rightArithShift');
  }
  return x >> y;
}
rightArithShiftNumber.signature = n2;
function rightLogShiftNumber(x, y) {
  if (!(0, _number.isInteger)(x) || !(0, _number.isInteger)(y)) {
    throw new Error('Integers expected in function rightLogShift');
  }
  return x >>> y;
}
rightLogShiftNumber.signature = n2;