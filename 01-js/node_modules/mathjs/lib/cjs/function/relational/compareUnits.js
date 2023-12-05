"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCompareUnits = void 0;
var _factory = require("../../utils/factory.js");
var createCompareUnits = exports.createCompareUnits = /* #__PURE__ */(0, _factory.factory)('compareUnits', ['typed'], function (_ref) {
  var typed = _ref.typed;
  return {
    'Unit, Unit': typed.referToSelf(function (self) {
      return function (x, y) {
        if (!x.equalBase(y)) {
          throw new Error('Cannot compare units with different base');
        }
        return typed.find(self, [x.valueType(), y.valueType()])(x.value, y.value);
      };
    })
  };
});