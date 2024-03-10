"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRange = void 0;
var _factory = require("../../utils/factory.js");
var _noop = require("../../utils/noop.js");
var name = 'range';
var dependencies = ['typed', 'config', '?matrix', '?bignumber', 'smaller', 'smallerEq', 'larger', 'largerEq', 'add', 'isPositive'];
var createRange = exports.createRange = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    matrix = _ref.matrix,
    bignumber = _ref.bignumber,
    smaller = _ref.smaller,
    smallerEq = _ref.smallerEq,
    larger = _ref.larger,
    largerEq = _ref.largerEq,
    add = _ref.add,
    isPositive = _ref.isPositive;
  /**
   * Create an array from a range.
   * By default, the range end is excluded. This can be customized by providing
   * an extra parameter `includeEnd`.
   *
   * Syntax:
   *
   *     math.range(str [, includeEnd])               // Create a range from a string,
   *                                                  // where the string contains the
   *                                                  // start, optional step, and end,
   *                                                  // separated by a colon.
   *     math.range(start, end [, includeEnd])        // Create a range with start and
   *                                                  // end and a step size of 1.
   *     math.range(start, end, step [, includeEnd])  // Create a range with start, step,
   *                                                  // and end.
   *
   * Where:
   *
   * - `str: string`
   *   A string 'start:end' or 'start:step:end'
   * - `start: {number | BigNumber | Unit}`
   *   Start of the range
   * - `end: number | BigNumber | Unit`
   *   End of the range, excluded by default, included when parameter includeEnd=true
   * - `step: number | BigNumber | Unit`
   *   Step size. Default value is 1.
   * - `includeEnd: boolean`
   *   Option to specify whether to include the end or not. False by default.
   *
   * Examples:
   *
   *     math.range(2, 6)        // [2, 3, 4, 5]
   *     math.range(2, -3, -1)   // [2, 1, 0, -1, -2]
   *     math.range('2:1:6')     // [2, 3, 4, 5]
   *     math.range(2, 6, true)  // [2, 3, 4, 5, 6]
   *     math.range(math.unit(2, 'm'), math.unit(-3, 'm'), math.unit(-1, 'm')) // [2 m, 1 m, 0 m , -1 m, -2 m]
   *
   * See also:
   *
   *     ones, zeros, size, subset
   *
   * @param {*} args   Parameters describing the ranges `start`, `end`, and optional `step`.
   * @return {Array | Matrix} range
   */
  return typed(name, {
    // TODO: simplify signatures when typed-function supports default values and optional arguments

    // TODO: a number or boolean should not be converted to string here
    string: _strRange,
    'string, boolean': _strRange,
    'number, number': function numberNumber(start, end) {
      return _out(_range(start, end, 1, false));
    },
    'number, number, number': function numberNumberNumber(start, end, step) {
      return _out(_range(start, end, step, false));
    },
    'number, number, boolean': function numberNumberBoolean(start, end, includeEnd) {
      return _out(_range(start, end, 1, includeEnd));
    },
    'number, number, number, boolean': function numberNumberNumberBoolean(start, end, step, includeEnd) {
      return _out(_range(start, end, step, includeEnd));
    },
    'BigNumber, BigNumber': function BigNumberBigNumber(start, end) {
      var BigNumber = start.constructor;
      return _out(_range(start, end, new BigNumber(1), false));
    },
    'BigNumber, BigNumber, BigNumber': function BigNumberBigNumberBigNumber(start, end, step) {
      return _out(_range(start, end, step, false));
    },
    'BigNumber, BigNumber, boolean': function BigNumberBigNumberBoolean(start, end, includeEnd) {
      var BigNumber = start.constructor;
      return _out(_range(start, end, new BigNumber(1), includeEnd));
    },
    'BigNumber, BigNumber, BigNumber, boolean': function BigNumberBigNumberBigNumberBoolean(start, end, step, includeEnd) {
      return _out(_range(start, end, step, includeEnd));
    },
    'Unit, Unit, Unit': function UnitUnitUnit(start, end, step) {
      return _out(_range(start, end, step, false));
    },
    'Unit, Unit, Unit, boolean': function UnitUnitUnitBoolean(start, end, step, includeEnd) {
      return _out(_range(start, end, step, includeEnd));
    }
  });
  function _out(arr) {
    if (config.matrix === 'Matrix') {
      return matrix ? matrix(arr) : (0, _noop.noMatrix)();
    }
    return arr;
  }
  function _strRange(str, includeEnd) {
    var r = _parse(str);
    if (!r) {
      throw new SyntaxError('String "' + str + '" is no valid range');
    }
    if (config.number === 'BigNumber') {
      if (bignumber === undefined) {
        (0, _noop.noBignumber)();
      }
      return _out(_range(bignumber(r.start), bignumber(r.end), bignumber(r.step)), includeEnd);
    } else {
      return _out(_range(r.start, r.end, r.step, includeEnd));
    }
  }

  /**
   * Create a range with numbers or BigNumbers
   * @param {number | BigNumber | Unit} start
   * @param {number | BigNumber | Unit} end
   * @param {number | BigNumber | Unit} step
   * @param {boolean} includeEnd
   * @returns {Array} range
   * @private
   */
  function _range(start, end, step, includeEnd) {
    var array = [];
    var ongoing = isPositive(step) ? includeEnd ? smallerEq : smaller : includeEnd ? largerEq : larger;
    var x = start;
    while (ongoing(x, end)) {
      array.push(x);
      x = add(x, step);
    }
    return array;
  }

  /**
   * Parse a string into a range,
   * The string contains the start, optional step, and end, separated by a colon.
   * If the string does not contain a valid range, null is returned.
   * For example str='0:2:11'.
   * @param {string} str
   * @return {{start: number, end: number, step: number} | null} range Object containing properties start, end, step
   * @private
   */
  function _parse(str) {
    var args = str.split(':');

    // number
    var nums = args.map(function (arg) {
      // use Number and not parseFloat as Number returns NaN on invalid garbage in the string
      return Number(arg);
    });
    var invalid = nums.some(function (num) {
      return isNaN(num);
    });
    if (invalid) {
      return null;
    }
    switch (nums.length) {
      case 2:
        return {
          start: nums[0],
          end: nums[1],
          step: 1
        };
      case 3:
        return {
          start: nums[0],
          end: nums[2],
          step: nums[1]
        };
      default:
        return null;
    }
  }
});