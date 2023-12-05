"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRandomInt = void 0;
var _factory = require("../../utils/factory.js");
var _randomMatrix = require("./util/randomMatrix.js");
var _seededRNG = require("./util/seededRNG.js");
var _is = require("../../utils/is.js");
var name = 'randomInt';
var dependencies = ['typed', 'config', '?on'];
var createRandomInt = exports.createRandomInt = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
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
   * Return a random integer number larger or equal to `min` and smaller than `max`
   * using a uniform distribution.
   *
   * Syntax:
   *
   *     math.randomInt()                // generate a random integer between 0 and 1
   *     math.randomInt(max)             // generate a random integer between 0 and max
   *     math.randomInt(min, max)        // generate a random integer between min and max
   *     math.randomInt(size)            // generate a matrix with random integer between 0 and 1
   *     math.randomInt(size, max)       // generate a matrix with random integer between 0 and max
   *     math.randomInt(size, min, max)  // generate a matrix with random integer between min and max
   *
   * Examples:
   *
   *     math.randomInt(100)    // returns a random integer between 0 and 100
   *     math.randomInt(30, 40) // returns a random integer between 30 and 40
   *     math.randomInt([2, 3]) // returns a 2x3 matrix with random integers between 0 and 1
   *
   * See also:
   *
   *     random, pickRandom
   *
   * @param {Array | Matrix} [size] If provided, an array or matrix with given
   *                                size and filled with random values is returned
   * @param {number} [min]  Minimum boundary for the random value, included
   * @param {number} [max]  Maximum boundary for the random value, excluded
   * @return {number | Array | Matrix} A random integer value
   */
  return typed(name, {
    '': function _() {
      return _randomInt(0, 1);
    },
    number: function number(max) {
      return _randomInt(0, max);
    },
    'number, number': function numberNumber(min, max) {
      return _randomInt(min, max);
    },
    'Array | Matrix': function ArrayMatrix(size) {
      return _randomIntMatrix(size, 0, 1);
    },
    'Array | Matrix, number': function ArrayMatrixNumber(size, max) {
      return _randomIntMatrix(size, 0, max);
    },
    'Array | Matrix, number, number': function ArrayMatrixNumberNumber(size, min, max) {
      return _randomIntMatrix(size, min, max);
    }
  });
  function _randomIntMatrix(size, min, max) {
    var res = (0, _randomMatrix.randomMatrix)(size.valueOf(), function () {
      return _randomInt(min, max);
    });
    return (0, _is.isMatrix)(size) ? size.create(res) : res;
  }
  function _randomInt(min, max) {
    return Math.floor(min + rng() * (max - min));
  }
});