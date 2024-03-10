import { factory } from '../../utils/factory.js';
import { createStd } from '../../function/statistics/std.js';
import { errorTransform } from './utils/errorTransform.js';
import { lastDimToZeroBase } from './utils/lastDimToZeroBase.js';
var name = 'std';
var dependencies = ['typed', 'map', 'sqrt', 'variance'];

/**
 * Attach a transform function to math.std
 * Adds a property transform containing the transform function.
 *
 * This transform changed the `dim` parameter of function std
 * from one-based to zero based
 */
export var createStdTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    map,
    sqrt,
    variance
  } = _ref;
  var std = createStd({
    typed,
    map,
    sqrt,
    variance
  });
  return typed('std', {
    '...any': function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return std.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});