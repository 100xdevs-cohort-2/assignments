"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acosNumber = acosNumber;
exports.acoshNumber = acoshNumber;
exports.acotNumber = acotNumber;
exports.acothNumber = acothNumber;
exports.acscNumber = acscNumber;
exports.acschNumber = acschNumber;
exports.asecNumber = asecNumber;
exports.asechNumber = asechNumber;
exports.asinNumber = asinNumber;
exports.asinhNumber = asinhNumber;
exports.atan2Number = atan2Number;
exports.atanNumber = atanNumber;
exports.atanhNumber = atanhNumber;
exports.cosNumber = cosNumber;
exports.coshNumber = coshNumber;
exports.cotNumber = cotNumber;
exports.cothNumber = cothNumber;
exports.cscNumber = cscNumber;
exports.cschNumber = cschNumber;
exports.secNumber = secNumber;
exports.sechNumber = sechNumber;
exports.sinNumber = sinNumber;
exports.sinhNumber = sinhNumber;
exports.tanNumber = tanNumber;
exports.tanhNumber = tanhNumber;
var _number = require("../../utils/number.js");
var n1 = 'number';
var n2 = 'number, number';
function acosNumber(x) {
  return Math.acos(x);
}
acosNumber.signature = n1;
function acoshNumber(x) {
  return (0, _number.acosh)(x);
}
acoshNumber.signature = n1;
function acotNumber(x) {
  return Math.atan(1 / x);
}
acotNumber.signature = n1;
function acothNumber(x) {
  return isFinite(x) ? (Math.log((x + 1) / x) + Math.log(x / (x - 1))) / 2 : 0;
}
acothNumber.signature = n1;
function acscNumber(x) {
  return Math.asin(1 / x);
}
acscNumber.signature = n1;
function acschNumber(x) {
  var xInv = 1 / x;
  return Math.log(xInv + Math.sqrt(xInv * xInv + 1));
}
acschNumber.signature = n1;
function asecNumber(x) {
  return Math.acos(1 / x);
}
asecNumber.signature = n1;
function asechNumber(x) {
  var xInv = 1 / x;
  var ret = Math.sqrt(xInv * xInv - 1);
  return Math.log(ret + xInv);
}
asechNumber.signature = n1;
function asinNumber(x) {
  return Math.asin(x);
}
asinNumber.signature = n1;
function asinhNumber(x) {
  return (0, _number.asinh)(x);
}
asinhNumber.signature = n1;
function atanNumber(x) {
  return Math.atan(x);
}
atanNumber.signature = n1;
function atan2Number(y, x) {
  return Math.atan2(y, x);
}
atan2Number.signature = n2;
function atanhNumber(x) {
  return (0, _number.atanh)(x);
}
atanhNumber.signature = n1;
function cosNumber(x) {
  return Math.cos(x);
}
cosNumber.signature = n1;
function coshNumber(x) {
  return (0, _number.cosh)(x);
}
coshNumber.signature = n1;
function cotNumber(x) {
  return 1 / Math.tan(x);
}
cotNumber.signature = n1;
function cothNumber(x) {
  var e = Math.exp(2 * x);
  return (e + 1) / (e - 1);
}
cothNumber.signature = n1;
function cscNumber(x) {
  return 1 / Math.sin(x);
}
cscNumber.signature = n1;
function cschNumber(x) {
  // consider values close to zero (+/-)
  if (x === 0) {
    return Number.POSITIVE_INFINITY;
  } else {
    return Math.abs(2 / (Math.exp(x) - Math.exp(-x))) * (0, _number.sign)(x);
  }
}
cschNumber.signature = n1;
function secNumber(x) {
  return 1 / Math.cos(x);
}
secNumber.signature = n1;
function sechNumber(x) {
  return 2 / (Math.exp(x) + Math.exp(-x));
}
sechNumber.signature = n1;
function sinNumber(x) {
  return Math.sin(x);
}
sinNumber.signature = n1;
function sinhNumber(x) {
  return (0, _number.sinh)(x);
}
sinhNumber.signature = n1;
function tanNumber(x) {
  return Math.tan(x);
}
tanNumber.signature = n1;
function tanhNumber(x) {
  return (0, _number.tanh)(x);
}
tanhNumber.signature = n1;