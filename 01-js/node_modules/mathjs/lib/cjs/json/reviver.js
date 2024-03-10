"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReviver = void 0;
var _factory = require("../utils/factory.js");
var name = 'reviver';
var dependencies = ['classes'];
var createReviver = exports.createReviver = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var classes = _ref.classes;
  /**
   * Instantiate mathjs data types from their JSON representation
   * @param {string} key
   * @param {*} value
   * @returns {*} Returns the revived object
   */
  return function reviver(key, value) {
    var constructor = classes[value && value.mathjs];
    if (constructor && typeof constructor.fromJSON === 'function') {
      return constructor.fromJSON(value);
    }
    return value;
  };
});