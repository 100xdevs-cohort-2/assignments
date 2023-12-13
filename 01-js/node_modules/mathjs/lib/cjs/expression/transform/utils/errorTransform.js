"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorTransform = errorTransform;
var _IndexError = require("../../../error/IndexError.js");
/**
 * Transform zero-based indices to one-based indices in errors
 * @param {Error} err
 * @returns {Error | IndexError} Returns the transformed error
 */
function errorTransform(err) {
  if (err && err.isIndexError) {
    return new _IndexError.IndexError(err.index + 1, err.min + 1, err.max !== undefined ? err.max + 1 : undefined);
  }
  return err;
}