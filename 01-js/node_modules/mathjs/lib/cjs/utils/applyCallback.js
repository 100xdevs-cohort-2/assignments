"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyCallback = applyCallback;
var _typedFunction = _interopRequireDefault(require("typed-function"));
var _is = require("./is.js");
/**
 * Invoke a callback for functions like map and filter with a matching number of arguments
 * @param {function} callback
 * @param {any} value
 * @param {number | number[]} index
 * @param {Array} array
 * @param {string} mappingFnName   The name of the function that is invoking these callbacks, for example "map" or "filter"
 * @returns {*}
 */
function applyCallback(callback, value, index, array, mappingFnName) {
  if (_typedFunction["default"].isTypedFunction(callback)) {
    // invoke the typed callback function with the matching number of arguments only

    var args3 = [value, index, array];
    var signature3 = _typedFunction["default"].resolve(callback, args3);
    if (signature3) {
      return tryWithArgs(signature3.implementation, args3);
    }
    var args2 = [value, index];
    var signature2 = _typedFunction["default"].resolve(callback, args2);
    if (signature2) {
      return tryWithArgs(signature2.implementation, args2);
    }
    var args1 = [value];
    var signature1 = _typedFunction["default"].resolve(callback, args1);
    if (signature1) {
      return tryWithArgs(signature1.implementation, args1);
    }

    // fallback (will throw an exception)
    return tryWithArgs(callback, args3);
  } else {
    // A regular JavaScript function
    return callback(value, index, array);
  }

  /**
   * @param {function} signature The selected signature of the typed-function
   * @param {Array} args List with arguments to apply to the selected signature
   * @returns {*} Returns the return value of the invoked signature
   * @throws {TypeError} Throws an error when no matching signature was found
   */
  function tryWithArgs(signature, args) {
    try {
      return signature.apply(signature, args);
    } catch (err) {
      var _err$data;
      // Enrich the error message so the user understands that it took place inside the callback function
      if (err instanceof TypeError && ((_err$data = err.data) === null || _err$data === void 0 ? void 0 : _err$data.category) === 'wrongType') {
        var argsDesc = [];
        argsDesc.push("value: ".concat((0, _is.typeOf)(value)));
        if (args.length >= 2) {
          argsDesc.push("index: ".concat((0, _is.typeOf)(index)));
        }
        if (args.length >= 3) {
          argsDesc.push("array: ".concat((0, _is.typeOf)(array)));
        }
        throw new TypeError("Function ".concat(mappingFnName, " cannot apply callback arguments ") + "".concat(callback.name, "(").concat(argsDesc.join(', '), ") at index ").concat(JSON.stringify(index)));
      } else {
        throw new TypeError("Function ".concat(mappingFnName, " cannot apply callback arguments ") + "to function ".concat(callback.name, ": ").concat(err.message));
      }
    }
  }
}