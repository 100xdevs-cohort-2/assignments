"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPrimeDocs = void 0;
var isPrimeDocs = exports.isPrimeDocs = {
  name: 'isPrime',
  category: 'Utils',
  syntax: ['isPrime(x)'],
  description: 'Test whether a value is prime: has no divisors other than itself and one.',
  examples: ['isPrime(3)', 'isPrime(-2)', 'isPrime([2, 17, 100])'],
  seealso: ['isInteger', 'isNumeric', 'isNegative', 'isZero']
};