"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.floorDocs = void 0;
var floorDocs = exports.floorDocs = {
  name: 'floor',
  category: 'Arithmetic',
  syntax: ['floor(x)'],
  description: 'Round a value towards minus infinity.If x is complex, both real and imaginary part are rounded towards minus infinity.',
  examples: ['floor(3.2)', 'floor(3.8)', 'floor(-4.2)'],
  seealso: ['ceil', 'fix', 'round']
};