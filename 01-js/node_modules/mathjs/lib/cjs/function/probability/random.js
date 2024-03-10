"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRandomNumber = exports.createRandom = void 0;
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _seededRNG = require("./util/seededRNG.js");
var _randomMatrix2 = require("./util/randomMatrix.js");
var name = 'random';
var dependencies = ['typed', 'config', '?on'];
var createRandom = exports.createRandom = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
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
   * Return a random number larger or equal to `min` and smaller than `max`
   * using a uniform distribution.
   *
   * Syntax:
   *
   *     math.random()                // generate a random number between 0 and 1
   *     math.random(max)             // generate a random number between 0 and max
   *     math.random(min, max)        // generate a random number between min and max
   *     math.random(size)            // generate a matrix with random numbers between 0 and 1
   *     math.random(size, max)       // generate a matrix with random numbers between 0 and max
   *     math.random(size, min, max)  // generate a matrix with random numbers between min and max
   *
   * Examples:
   *
   *     math.random()       // returns a random number between 0 and 1
   *     math.random(100)    // returns a random number between 0 and 100
   *     math.random(30, 40) // returns a random number between 30 and 40
   *     math.random([2, 3]) // returns a 2x3 matrix with random numbers between 0 and 1
   *
   * See also:
   *
   *     randomInt, pickRandom
   *
   * @param {Array | Matrix} [size] If provided, an array or matrix with given
   *                                size and filled with random values is returned
   * @param {number} [min]  Minimum boundary for the random value, included
   * @param {number} [max]  Maximum boundary for the random value, excluded
   * @return {number | Array | Matrix} A random number
   */
  return typed(name, {
    '': function _() {
      return _random(0, 1);
    },
    number: function number(max) {
      return _random(0, max);
    },
    'number, number': function numberNumber(min, max) {
      return _random(min, max);
    },
    'Array | Matrix': function ArrayMatrix(size) {
      return _randomMatrix(size, 0, 1);
    },
    'Array | Matrix, number': function ArrayMatrixNumber(size, max) {
      return _randomMatrix(size, 0, max);
    },
    'Array | Matrix, number, number': function ArrayMatrixNumberNumber(size, min, max) {
      return _randomMatrix(size, min, max);
    }
  });
  function _randomMatrix(size, min, max) {
    var res = (0, _randomMatrix2.randomMatrix)(size.valueOf(), function () {
      return _random(min, max);
    });
    return (0, _is.isMatrix)(size) ? size.create(res) : res;
  }
  function _random(min, max) {
    return min + rng() * (max - min);
  }
});

// number only implementation of random, no matrix support
// TODO: there is quite some duplicate code in both createRandom and createRandomNumber, can we improve that?
var createRandomNumber = exports.createRandomNumber = /* #__PURE__ */(0, _factory.factory)(name, ['typed', 'config', '?on'], function (_ref2) {
  var typed = _ref2.typed,
    config = _ref2.config,
    on = _ref2.on,
    matrix = _ref2.matrix;
  // seeded pseudo random number generator1
  var rng = (0, _seededRNG.createRng)(config.randomSeed);
  if (on) {
    on('config', function (curr, prev) {
      if (curr.randomSeed !== prev.randomSeed) {
        rng = (0, _seededRNG.createRng)(curr.randomSeed);
      }
    });
  }
  return typed(name, {
    '': function _() {
      return _random(0, 1);
    },
    number: function number(max) {
      return _random(0, max);
    },
    'number, number': function numberNumber(min, max) {
      return _random(min, max);
    }
  });
  function _random(min, max) {
    return min + rng() * (max - min);
  }
});