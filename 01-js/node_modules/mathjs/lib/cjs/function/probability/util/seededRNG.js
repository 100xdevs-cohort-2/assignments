"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRng = createRng;
var _seedrandom = _interopRequireDefault(require("seedrandom"));
var singletonRandom = /* #__PURE__ */(0, _seedrandom["default"])(Date.now());
function createRng(randomSeed) {
  var random;

  // create a new random generator with given seed
  function setSeed(seed) {
    random = seed === null ? singletonRandom : (0, _seedrandom["default"])(String(seed));
  }

  // initialize a seeded pseudo random number generator with config's random seed
  setSeed(randomSeed);

  // wrapper function so the rng can be updated via generator
  function rng() {
    return random();
  }
  return rng;
}