"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  bignumber: true
};
exports.bignumber = bignumber;
var _decimal = _interopRequireDefault(require("decimal.js"));
var _arithmetic = require("./arithmetic.js");
Object.keys(_arithmetic).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _arithmetic[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _arithmetic[key];
    }
  });
});
// TODO: this is ugly. Instead, be able to pass your own isBigNumber function to typed?
var BigNumber = _decimal["default"].clone();
BigNumber.prototype.isBigNumber = true;
function bignumber(x) {
  return new BigNumber(x);
}