"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csUnflip = csUnflip;
var _csFlip = require("./csFlip.js");
/**
 * Flips the value if it is negative of returns the same value otherwise.
 *
 * @param {Number}  i               The value to flip
 *
 * Reference: http://faculty.cse.tamu.edu/davis/publications.html
 */
function csUnflip(i) {
  // flip the value if it is negative
  return i < 0 ? (0, _csFlip.csFlip)(i) : i;
}