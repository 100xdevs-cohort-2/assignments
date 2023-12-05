"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPrint = void 0;
var _string = require("../../utils/string.js");
var _is = require("../../utils/is.js");
var _factory = require("../../utils/factory.js");
var _print2 = require("../../utils/print.js");
var name = 'print';
var dependencies = ['typed'];
var createPrint = exports.createPrint = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed;
  /**
   * Interpolate values into a string template.
   *
   * Syntax:
   *
   *     math.print(template, values)
   *     math.print(template, values, precision)
   *     math.print(template, values, options)
   *
   * Example usage:
   *
   *     // the following outputs: 'Lucy is 5 years old'
   *     math.print('Lucy is $age years old', {age: 5})
   *
   *     // the following outputs: 'The value of pi is 3.141592654'
   *     math.print('The value of pi is $pi', {pi: math.pi}, 10)
   *
   *     // the following outputs: 'hello Mary! The date is 2013-03-23'
   *     math.print('Hello $user.name! The date is $date', {
   *       user: {
   *         name: 'Mary',
   *       },
   *       date: new Date(2013, 2, 23).toISOString().substring(0, 10)
   *     })
   *
   *     // the following outputs: 'My favorite fruits are apples and bananas !'
   *     math.print('My favorite fruits are $0 and $1 !', [
   *       'apples',
   *       'bananas'
   *     ])
   *
   * See also:
   *
   *     format
   *
   * @param {string} template           A string containing variable placeholders.
   * @param {Object | Array | Matrix}   values An object or array containing variables
   *                                    which will be filled in in the template.
   * @param {number | Object} [options] Formatting options,
   *                                    or the number of digits to format numbers.
   *                                    See function math.format for a description
   *                                    of all options.
   * @return {string} Interpolated string
   */
  return typed(name, {
    // note: Matrix will be converted automatically to an Array
    'string, Object | Array': _print,
    'string, Object | Array, number | Object': _print
  });
});

/**
 * Interpolate values into a string template.
 * @param {string} template
 * @param {Object} values
 * @param {number | Object} [options]
 * @returns {string} Interpolated string
 * @private
 */
function _print(template, values, options) {
  return template.replace(_print2.printTemplate, function (original, key) {
    var keys = key.split('.');
    var value = values[keys.shift()];
    if (value !== undefined && value.isMatrix) {
      value = value.toArray();
    }
    while (keys.length && value !== undefined) {
      var k = keys.shift();
      value = k ? value[k] : value + '.';
    }
    if (value !== undefined) {
      if (!(0, _is.isString)(value)) {
        return (0, _string.format)(value, options);
      } else {
        return value;
      }
    }
    return original;
  });
}