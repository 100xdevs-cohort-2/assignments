"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTrigUnit = void 0;
var _factory = require("../../utils/factory.js");
var createTrigUnit = exports.createTrigUnit = /* #__PURE__ */(0, _factory.factory)('trigUnit', ['typed'], function (_ref) {
  var typed = _ref.typed;
  return {
    Unit: typed.referToSelf(function (self) {
      return function (x) {
        if (!x.hasBase(x.constructor.BASE_UNITS.ANGLE)) {
          throw new TypeError('Unit in function cot is no angle');
        }
        return typed.find(self, x.valueType())(x.value);
      };
    })
  };
});