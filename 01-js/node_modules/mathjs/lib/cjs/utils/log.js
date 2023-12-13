"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warnOnce = void 0;
/**
 * Log a console.warn message only once
 */
var warnOnce = exports.warnOnce = function () {
  var messages = {};
  return function warnOnce() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var message = args.join(', ');
    if (!messages[message]) {
      var _console;
      messages[message] = true;
      (_console = console).warn.apply(_console, ['Warning:'].concat(args));
    }
  };
}();