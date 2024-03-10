"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._switch = _switch;
/**
 * Transpose a matrix
 * @param {Array} mat
 * @returns {Array} ret
 * @private
 */
function _switch(mat) {
  var I = mat.length;
  var J = mat[0].length;
  var i, j;
  var ret = [];
  for (j = 0; j < J; j++) {
    var tmp = [];
    for (i = 0; i < I; i++) {
      tmp.push(mat[i][j]);
    }
    ret.push(tmp);
  }
  return ret;
}