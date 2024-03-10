"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUseMatrixForArrayScalar = void 0;
var _factory = require("../../utils/factory.js");
var createUseMatrixForArrayScalar = exports.createUseMatrixForArrayScalar = /* #__PURE__ */(0, _factory.factory)('useMatrixForArrayScalar', ['typed', 'matrix'], function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix;
  return {
    'Array, number': typed.referTo('DenseMatrix, number', function (selfDn) {
      return function (x, y) {
        return selfDn(matrix(x), y).valueOf();
      };
    }),
    'Array, BigNumber': typed.referTo('DenseMatrix, BigNumber', function (selfDB) {
      return function (x, y) {
        return selfDB(matrix(x), y).valueOf();
      };
    }),
    'number, Array': typed.referTo('number, DenseMatrix', function (selfnD) {
      return function (x, y) {
        return selfnD(x, matrix(y)).valueOf();
      };
    }),
    'BigNumber, Array': typed.referTo('BigNumber, DenseMatrix', function (selfBD) {
      return function (x, y) {
        return selfBD(x, matrix(y)).valueOf();
      };
    })
  };
});