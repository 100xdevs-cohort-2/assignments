"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReplacer = void 0;
var _factory = require("../utils/factory.js");
var name = 'replacer';
var dependencies = [];
var createReplacer = exports.createReplacer = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function () {
  /**
   * Stringify data types into their JSON representation.
   * Most data types can be serialized using their `.toJSON` method,
   * but not all, for example the number `Infinity`. For these cases you have
   * to use the replacer. Example usage:
   *
   *     JSON.stringify([2, Infinity], math.replacer)
   *
   * @param {string} key
   * @param {*} value
   * @returns {*} Returns the replaced object
   */
  return function replacer(key, value) {
    // the numeric values Infinitiy, -Infinity, and NaN cannot be serialized to JSON
    if (typeof value === 'number' && (!isFinite(value) || isNaN(value))) {
      return {
        mathjs: 'number',
        value: String(value)
      };
    }
    return value;
  };
});