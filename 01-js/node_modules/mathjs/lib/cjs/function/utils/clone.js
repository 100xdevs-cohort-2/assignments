"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createClone = void 0;
var _object = require("../../utils/object.js");
var _factory = require("../../utils/factory.js");
var name = 'clone';
var dependencies = ['typed'];
var createClone = exports.createClone = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Clone an object. Will make a deep copy of the data.
   *
   * Syntax:
   *
   *     math.clone(x)
   *
   * Examples:
   *
   *    math.clone(3.5)                   // returns number 3.5
   *    math.clone(math.complex('2-4i'))  // returns Complex 2 - 4i
   *    math.clone(math.unit(45, 'deg'))  // returns Unit 45 deg
   *    math.clone([[1, 2], [3, 4]])      // returns Array [[1, 2], [3, 4]]
   *    math.clone("hello world")         // returns string "hello world"
   *
   * @param {*} x   Object to be cloned
   * @return {*} A clone of object x
   */
  return typed(name, {
    any: _object.clone
  });
});