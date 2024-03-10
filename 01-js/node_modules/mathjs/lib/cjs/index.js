"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _mainAny = require("./entry/mainAny.js");
Object.keys(_mainAny).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _mainAny[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _mainAny[key];
    }
  });
});