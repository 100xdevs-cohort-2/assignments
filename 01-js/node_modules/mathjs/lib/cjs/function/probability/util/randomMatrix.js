"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomMatrix = randomMatrix;
/**
 * This is a util function for generating a random matrix recursively.
 * @param {number[]} size
 * @param {function} random
 * @returns {Array}
 */
function randomMatrix(size, random) {
  var data = [];
  size = size.slice(0);
  if (size.length > 1) {
    for (var i = 0, length = size.shift(); i < length; i++) {
      data.push(randomMatrix(size, random));
    }
  } else {
    for (var _i = 0, _length = size.shift(); _i < _length; _i++) {
      data.push(random());
    }
  }
  return data;
}