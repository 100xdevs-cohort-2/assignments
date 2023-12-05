"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFractionClass = void 0;
var _fraction = _interopRequireDefault(require("fraction.js"));
var _factory = require("../../utils/factory.js");
var name = 'Fraction';
var dependencies = [];
var createFractionClass = exports.createFractionClass = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function () {
  /**
   * Attach type information
   */
  Object.defineProperty(_fraction["default"], 'name', {
    value: 'Fraction'
  });
  _fraction["default"].prototype.constructor = _fraction["default"];
  _fraction["default"].prototype.type = 'Fraction';
  _fraction["default"].prototype.isFraction = true;

  /**
   * Get a JSON representation of a Fraction containing type information
   * @returns {Object} Returns a JSON object structured as:
   *                   `{"mathjs": "Fraction", "n": 3, "d": 8}`
   */
  _fraction["default"].prototype.toJSON = function () {
    return {
      mathjs: 'Fraction',
      n: this.s * this.n,
      d: this.d
    };
  };

  /**
   * Instantiate a Fraction from a JSON object
   * @param {Object} json  a JSON object structured as:
   *                       `{"mathjs": "Fraction", "n": 3, "d": 8}`
   * @return {BigNumber}
   */
  _fraction["default"].fromJSON = function (json) {
    return new _fraction["default"](json);
  };
  return _fraction["default"];
}, {
  isClass: true
});