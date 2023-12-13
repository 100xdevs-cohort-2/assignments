import { isArray, isBigNumber, isMatrix, isNumber, isRange } from '../../utils/is.js';
import { factory } from '../../utils/factory.js';
var name = 'index';
var dependencies = ['Index', 'getMatrixDataType'];
export var createIndexTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    Index,
    getMatrixDataType
  } = _ref;
  /**
   * Attach a transform function to math.index
   * Adds a property transform containing the transform function.
   *
   * This transform creates a one-based index instead of a zero-based index
   */
  return function indexTransform() {
    var args = [];
    for (var i = 0, ii = arguments.length; i < ii; i++) {
      var arg = arguments[i];

      // change from one-based to zero based, convert BigNumber to number and leave Array of Booleans as is
      if (isRange(arg)) {
        arg.start--;
        arg.end -= arg.step > 0 ? 0 : 2;
      } else if (arg && arg.isSet === true) {
        arg = arg.map(function (v) {
          return v - 1;
        });
      } else if (isArray(arg) || isMatrix(arg)) {
        if (getMatrixDataType(arg) !== 'boolean') {
          arg = arg.map(function (v) {
            return v - 1;
          });
        }
      } else if (isNumber(arg)) {
        arg--;
      } else if (isBigNumber(arg)) {
        arg = arg.toNumber() - 1;
      } else if (typeof arg === 'string') {
        // leave as is
      } else {
        throw new TypeError('Dimension must be an Array, Matrix, number, string, or Range');
      }
      args[i] = arg;
    }
    var res = new Index();
    Index.apply(res, args);
    return res;
  };
}, {
  isTransformFunction: true
});