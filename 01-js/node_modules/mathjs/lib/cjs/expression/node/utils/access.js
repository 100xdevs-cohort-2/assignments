"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accessFactory = accessFactory;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _errorTransform = require("../../transform/utils/errorTransform.js");
var _customs = require("../../../utils/customs.js");
function accessFactory(_ref) {
  var subset = _ref.subset;
  /**
   * Retrieve part of an object:
   *
   * - Retrieve a property from an object
   * - Retrieve a part of a string
   * - Retrieve a matrix subset
   *
   * @param {Object | Array | Matrix | string} object
   * @param {Index} index
   * @return {Object | Array | Matrix | string} Returns the subset
   */
  return function access(object, index) {
    try {
      if (Array.isArray(object)) {
        return subset(object, index);
      } else if (object && typeof object.subset === 'function') {
        // Matrix
        return object.subset(index);
      } else if (typeof object === 'string') {
        // TODO: move getStringSubset into a separate util file, use that
        return subset(object, index);
      } else if ((0, _typeof2["default"])(object) === 'object') {
        if (!index.isObjectProperty()) {
          throw new TypeError('Cannot apply a numeric index as object property');
        }
        return (0, _customs.getSafeProperty)(object, index.getObjectProperty());
      } else {
        throw new TypeError('Cannot apply index: unsupported type of object');
      }
    } catch (err) {
      throw (0, _errorTransform.errorTransform)(err);
    }
  };
}