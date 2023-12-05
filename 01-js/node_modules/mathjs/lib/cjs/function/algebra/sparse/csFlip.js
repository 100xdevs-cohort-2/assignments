"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csFlip = csFlip;
/**
 * This function "flips" its input about the integer -1.
 *
 * @param {Number}  i               The value to flip
 *
 * Reference: http://faculty.cse.tamu.edu/davis/publications.html
 */
function csFlip(i) {
  // flip the value
  return -i - 2;
}