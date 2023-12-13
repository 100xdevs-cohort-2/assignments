"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lastDimToZeroBase = lastDimToZeroBase;
var _is = require("../../../utils/is.js");
/**
 * Change last argument dim from one-based to zero-based.
 */
function lastDimToZeroBase(args) {
  if (args.length === 2 && (0, _is.isCollection)(args[0])) {
    args = args.slice();
    var dim = args[1];
    if ((0, _is.isNumber)(dim)) {
      args[1] = dim - 1;
    } else if ((0, _is.isBigNumber)(dim)) {
      args[1] = dim.minus(1);
    }
  }
  return args;
}