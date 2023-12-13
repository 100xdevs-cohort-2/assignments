"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _config = require("../core/config.js");
var _config2 = require("../core/function/config.js");
// create a read-only version of config
var config = exports.config = /* #__PURE__ */function config(options) {
  if (options) {
    throw new Error('The global config is readonly. \n' + 'Please create a mathjs instance if you want to change the default configuration. \n' + 'Example:\n' + '\n' + '  import { create, all } from \'mathjs\';\n' + '  const mathjs = create(all);\n' + '  mathjs.config({ number: \'BigNumber\' });\n');
  }
  return Object.freeze(_config.DEFAULT_CONFIG);
};
(0, _extends2["default"])(config, _config.DEFAULT_CONFIG, {
  MATRIX_OPTIONS: _config2.MATRIX_OPTIONS,
  NUMBER_OPTIONS: _config2.NUMBER_OPTIONS
});