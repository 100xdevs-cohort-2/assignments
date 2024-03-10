"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csMarked = csMarked;
/**
 * Checks if the node at w[j] is marked
 *
 * @param {Array}   w               The array
 * @param {Number}  j               The array index
 *
 * Reference: http://faculty.cse.tamu.edu/davis/publications.html
 */
function csMarked(w, j) {
  // check node is marked
  return w[j] < 0;
}