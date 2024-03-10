"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csMark = csMark;
var _csFlip = require("./csFlip.js");
/**
 * Marks the node at w[j]
 *
 * @param {Array}   w               The array
 * @param {Number}  j               The array index
 *
 * Reference: http://faculty.cse.tamu.edu/davis/publications.html
 */
function csMark(w, j) {
  // mark w[j]
  w[j] = (0, _csFlip.csFlip)(w[j]);
}