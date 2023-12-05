import { factory } from '../../utils/factory.js';
import { errorTransform } from './utils/errorTransform.js';
import { createVariance } from '../../function/statistics/variance.js';
import { lastDimToZeroBase } from './utils/lastDimToZeroBase.js';
var name = 'variance';
var dependencies = ['typed', 'add', 'subtract', 'multiply', 'divide', 'apply', 'isNaN'];

/**
 * Attach a transform function to math.var
 * Adds a property transform containing the transform function.
 *
 * This transform changed the `dim` parameter of function var
 * from one-based to zero based
 */
export var createVarianceTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    add,
    subtract,
    multiply,
    divide,
    apply,
    isNaN
  } = _ref;
  var variance = createVariance({
    typed,
    add,
    subtract,
    multiply,
    divide,
    apply,
    isNaN
  });
  return typed(name, {
    '...any': function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return variance.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});