"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _mainNumber = require("./entry/mainNumber.js");
Object.keys(_mainNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mainNumber[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mainNumber[key];
    }
  });
});