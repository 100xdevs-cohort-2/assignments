"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNumeric = void 0;
var _is = require("../../utils/is.js");
var _factory = require("../../utils/factory.js");
var _noop = require("../../utils/noop.js");
var name = 'numeric';
var dependencies = ['number', '?bignumber', '?fraction'];
var createNumeric = exports.createNumeric = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var _number = _ref.number,
    bignumber = _ref.bignumber,
    fraction = _ref.fraction;
  var validInputTypes = {
    string: true,
    number: true,
    BigNumber: true,
    Fraction: true
  };

  // Load the conversion functions for each output type
  var validOutputTypes = {
    number: function number(x) {
      return _number(x);
    },
    BigNumber: bignumber ? function (x) {
      return bignumber(x);
    } : _noop.noBignumber,
    Fraction: fraction ? function (x) {
      return fraction(x);
    } : _noop.noFraction
  };

  /**
   * Convert a numeric input to a specific numeric type: number, BigNumber, or Fraction.
   *
   * Syntax:
   *
   *    math.numeric(x)
   *
   * Examples:
   *
   *    math.numeric('4')                           // returns 4
   *    math.numeric('4', 'number')                 // returns 4
   *    math.numeric('4', 'BigNumber')              // returns BigNumber 4
   *    math.numeric('4', 'Fraction')               // returns Fraction 4
   *    math.numeric(4, 'Fraction')                 // returns Fraction 4
   *    math.numeric(math.fraction(2, 5), 'number') // returns 0.4
   *
   * See also:
   *
   *    number, fraction, bignumber, string, format
   *
   * @param {string | number | BigNumber | Fraction } value
   *              A numeric value or a string containing a numeric value
   * @param {string} outputType
   *              Desired numeric output type.
   *              Available values: 'number', 'BigNumber', or 'Fraction'
   * @return {number | BigNumber | Fraction}
   *              Returns an instance of the numeric in the requested type
   */
  return function numeric(value) {
    var outputType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'number';
    var check = arguments.length > 2 ? arguments[2] : undefined;
    if (check !== undefined) {
      throw new SyntaxError('numeric() takes one or two arguments');
    }
    var inputType = (0, _is.typeOf)(value);
    if (!(inputType in validInputTypes)) {
      throw new TypeError('Cannot convert ' + value + ' of type "' + inputType + '"; valid input types are ' + Object.keys(validInputTypes).join(', '));
    }
    if (!(outputType in validOutputTypes)) {
      throw new TypeError('Cannot convert ' + value + ' to type "' + outputType + '"; valid output types are ' + Object.keys(validOutputTypes).join(', '));
    }
    if (outputType === inputType) {
      return value;
    } else {
      return validOutputTypes[outputType](value);
    }
  };
});