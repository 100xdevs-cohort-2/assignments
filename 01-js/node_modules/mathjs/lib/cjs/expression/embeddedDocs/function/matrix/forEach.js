"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEachDocs = void 0;
var forEachDocs = exports.forEachDocs = {
  name: 'forEach',
  category: 'Matrix',
  syntax: ['forEach(x, callback)'],
  description: 'Iterates over all elements of a matrix/array, and executes the given callback function.',
  examples: ['numberOfPets = {}', 'addPet(n) = numberOfPets[n] = (numberOfPets[n] ? numberOfPets[n]:0 ) + 1;', 'forEach(["Dog","Cat","Cat"], addPet)', 'numberOfPets'],
  seealso: ['map', 'sort', 'filter']
};