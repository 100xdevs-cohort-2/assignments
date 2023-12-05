"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assignFactory = assignFactory;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _errorTransform = require("../../transform/utils/errorTransform.js");
var _customs = require("../../../utils/customs.js");
function assignFactory(_ref) {
  var subset = _ref.subset,
    matrix = _ref.matrix;
  /**
   * Replace part of an object:
   *
   * - Assign a property to an object
   * - Replace a part of a string
   * - Replace a matrix subset
   *
   * @param {Object | Array | Matrix | string} object
   * @param {Index} index
   * @param {*} value
   * @return {Object | Array | Matrix | string} Returns the original object
   *                                            except in case of a string
   */
  // TODO: change assign to return the value instead of the object
  return function assign(object, index, value) {
    try {
      if (Array.isArray(object)) {
        var result = matrix(object).subset(index, value).valueOf();

        // shallow copy all (updated) items into the original array
        result.forEach(function (item, index) {
          object[index] = item;
        });
        return object;
      } else if (object && typeof object.subset === 'function') {
        // Matrix
        return object.subset(index, value);
      } else if (typeof object === 'string') {
        // TODO: move setStringSubset into a separate util file, use that
        return subset(object, index, value);
      } else if ((0, _typeof2["default"])(object) === 'object') {
        if (!index.isObjectProperty()) {
          throw TypeError('Cannot apply a numeric index as object property');
        }
        (0, _customs.setSafeProperty)(object, index.getObjectProperty(), value);
        return object;
      } else {
        throw new TypeError('Cannot apply index: unsupported type of object');
      }
    } catch (err) {
      throw (0, _errorTransform.errorTransform)(err);
    }
  };
}