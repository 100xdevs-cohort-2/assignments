"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBroadcast = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _array = require("../../../utils/array.js");
var _factory = require("../../../utils/factory.js");
var name = 'broadcast';
var dependancies = ['concat'];
var createBroadcast = exports.createBroadcast = /* #__PURE__ */(0, _factory.factory)(name, dependancies, function (_ref) {
  var concat = _ref.concat;
  /**
  * Broadcasts two matrices, and return both in an array
  * It checks if it's possible with broadcasting rules
  *
  * @param {Matrix}   A      First Matrix
  * @param {Matrix}   B      Second Matrix
  *
  * @return {Matrix[]}      [ broadcastedA, broadcastedB ]
  */
  return function (A, B) {
    var N = Math.max(A._size.length, B._size.length); // max number of dims
    if (A._size.length === B._size.length) {
      if (A._size.every(function (dim, i) {
        return dim === B._size[i];
      })) {
        // If matrices have the same size return them
        return [A, B];
      }
    }
    var sizeA = _padLeft(A._size, N, 0); // pad to the left to align dimensions to the right
    var sizeB = _padLeft(B._size, N, 0); // pad to the left to align dimensions to the right

    // calculate the max dimensions
    var sizeMax = [];
    for (var dim = 0; dim < N; dim++) {
      sizeMax[dim] = Math.max(sizeA[dim], sizeB[dim]);
    }

    // check if the broadcasting rules applyes for both matrices
    (0, _array.checkBroadcastingRules)(sizeA, sizeMax);
    (0, _array.checkBroadcastingRules)(sizeB, sizeMax);

    // reshape A or B if needed to make them ready for concat
    var AA = A.clone();
    var BB = B.clone();
    if (AA._size.length < N) {
      AA.reshape(_padLeft(AA._size, N, 1));
    } else if (BB._size.length < N) {
      BB.reshape(_padLeft(BB._size, N, 1));
    }

    // stretches the matrices on each dimension to make them the same size
    for (var _dim = 0; _dim < N; _dim++) {
      if (AA._size[_dim] < sizeMax[_dim]) {
        AA = _stretch(AA, sizeMax[_dim], _dim);
      }
      if (BB._size[_dim] < sizeMax[_dim]) {
        BB = _stretch(BB, sizeMax[_dim], _dim);
      }
    }

    // return the array with the two broadcasted matrices
    return [AA, BB];
  };
  function _padLeft(shape, N, filler) {
    // pads an array of dimensions with numbers to the left, unitl the number of dimensions is N
    return [].concat((0, _toConsumableArray2["default"])(Array(N - shape.length).fill(filler)), (0, _toConsumableArray2["default"])(shape));
  }
  function _stretch(arrayToStretch, sizeToStretch, dimToStretch) {
    // stretches a matrix up to a certain size in a certain dimension
    return concat.apply(void 0, (0, _toConsumableArray2["default"])(Array(sizeToStretch).fill(arrayToStretch)).concat([dimToStretch]));
  }
});