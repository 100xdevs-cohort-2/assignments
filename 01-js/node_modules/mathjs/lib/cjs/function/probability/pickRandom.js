"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPickRandom = void 0;
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _seededRNG = require("./util/seededRNG.js");
var name = 'pickRandom';
var dependencies = ['typed', 'config', '?on'];
var createPickRandom = exports.createPickRandom = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    config = _ref.config,
    on = _ref.on;
  // seeded pseudo random number generator
  var rng = (0, _seededRNG.createRng)(config.randomSeed);
  if (on) {
    on('config', function (curr, prev) {
      if (curr.randomSeed !== prev.randomSeed) {
        rng = (0, _seededRNG.createRng)(curr.randomSeed);
      }
    });
  }

  /**
   * Random pick one or more values from a one dimensional array.
   * Array elements are picked using a random function with uniform or weighted distribution.
   *
   * Syntax:
   *
   *     math.pickRandom(array)
   *     math.pickRandom(array, number)
   *     math.pickRandom(array, weights)
   *     math.pickRandom(array, number, weights)
   *     math.pickRandom(array, weights, number)
   *     math.pickRandom(array, { weights, number, elementWise })
   *
   * Examples:
   *
   *     math.pickRandom([3, 6, 12, 2])                  // returns one of the values in the array
   *     math.pickRandom([3, 6, 12, 2], 2)               // returns an array of two of the values in the array
   *     math.pickRandom([3, 6, 12, 2], { number: 2 })   // returns an array of two of the values in the array
   *     math.pickRandom([3, 6, 12, 2], [1, 3, 2, 1])    // returns one of the values in the array with weighted distribution
   *     math.pickRandom([3, 6, 12, 2], 2, [1, 3, 2, 1]) // returns an array of two of the values in the array with weighted distribution
   *     math.pickRandom([3, 6, 12, 2], [1, 3, 2, 1], 2) // returns an array of two of the values in the array with weighted distribution
   *
   *     math.pickRandom([{x: 1.0, y: 2.0}, {x: 1.1, y: 2.0}], { elementWise: false })
   *         // returns one of the items in the array
   *
   * See also:
   *
   *     random, randomInt
   *
   * @param {Array | Matrix} array     A one dimensional array
   * @param {Int} number               An int or float
   * @param {Array | Matrix} weights   An array of ints or floats
   * @return {number | Array}          Returns a single random value from array when number is undefined.
   *                                   Returns an array with the configured number of elements when number is defined.
   */
  return typed(name, {
    'Array | Matrix': function ArrayMatrix(possibles) {
      return _pickRandom(possibles, {});
    },
    'Array | Matrix, Object': function ArrayMatrixObject(possibles, options) {
      return _pickRandom(possibles, options);
    },
    'Array | Matrix, number': function ArrayMatrixNumber(possibles, number) {
      return _pickRandom(possibles, {
        number: number
      });
    },
    'Array | Matrix, Array | Matrix': function ArrayMatrixArrayMatrix(possibles, weights) {
      return _pickRandom(possibles, {
        weights: weights
      });
    },
    'Array | Matrix, Array | Matrix, number': function ArrayMatrixArrayMatrixNumber(possibles, weights, number) {
      return _pickRandom(possibles, {
        number: number,
        weights: weights
      });
    },
    'Array | Matrix, number, Array | Matrix': function ArrayMatrixNumberArrayMatrix(possibles, number, weights) {
      return _pickRandom(possibles, {
        number: number,
        weights: weights
      });
    }
  });

  /**
   * @param {Array | Matrix} possibles
   * @param {{
   *   number?: number,
   *   weights?: Array | Matrix,
   *   elementWise: boolean
   * }} options
   * @returns {number | Array}
   * @private
   */
  function _pickRandom(possibles, _ref2) {
    var number = _ref2.number,
      weights = _ref2.weights,
      _ref2$elementWise = _ref2.elementWise,
      elementWise = _ref2$elementWise === void 0 ? true : _ref2$elementWise;
    var single = typeof number === 'undefined';
    if (single) {
      number = 1;
    }
    var createMatrix = (0, _is.isMatrix)(possibles) ? possibles.create : (0, _is.isMatrix)(weights) ? weights.create : null;
    possibles = possibles.valueOf(); // get Array
    if (weights) {
      weights = weights.valueOf(); // get Array
    }

    if (elementWise === true) {
      possibles = (0, _array.flatten)(possibles);
      weights = (0, _array.flatten)(weights);
    }
    var totalWeights = 0;
    if (typeof weights !== 'undefined') {
      if (weights.length !== possibles.length) {
        throw new Error('Weights must have the same length as possibles');
      }
      for (var i = 0, len = weights.length; i < len; i++) {
        if (!(0, _is.isNumber)(weights[i]) || weights[i] < 0) {
          throw new Error('Weights must be an array of positive numbers');
        }
        totalWeights += weights[i];
      }
    }
    var length = possibles.length;
    var result = [];
    var pick;
    while (result.length < number) {
      if (typeof weights === 'undefined') {
        pick = possibles[Math.floor(rng() * length)];
      } else {
        var randKey = rng() * totalWeights;
        for (var _i = 0, _len = possibles.length; _i < _len; _i++) {
          randKey -= weights[_i];
          if (randKey < 0) {
            pick = possibles[_i];
            break;
          }
        }
      }
      result.push(pick);
    }
    return single ? result[0] : createMatrix ? createMatrix(result) : result;
  }
});