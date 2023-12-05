"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.complexEquals = complexEquals;
var _number = require("./number.js");
/**
 * Test whether two complex values are equal provided a given epsilon.
 * Does not use or change the global Complex.EPSILON setting
 * @param {Complex} x
 * @param {Complex} y
 * @param {number} epsilon
 * @returns {boolean}
 */
function complexEquals(x, y, epsilon) {
  return (0, _number.nearlyEqual)(x.re, y.re, epsilon) && (0, _number.nearlyEqual)(x.im, y.im, epsilon);
}