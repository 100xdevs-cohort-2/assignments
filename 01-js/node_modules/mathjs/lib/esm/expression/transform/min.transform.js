import { factory } from '../../utils/factory.js';
import { errorTransform } from './utils/errorTransform.js';
import { createMin } from '../../function/statistics/min.js';
import { lastDimToZeroBase } from './utils/lastDimToZeroBase.js';
var name = 'min';
var dependencies = ['typed', 'config', 'numeric', 'smaller'];
export var createMinTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    numeric,
    smaller
  } = _ref;
  var min = createMin({
    typed,
    config,
    numeric,
    smaller
  });

  /**
   * Attach a transform function to math.min
   * Adds a property transform containing the transform function.
   *
   * This transform changed the last `dim` parameter of function min
   * from one-based to zero based
   */
  return typed('min', {
    '...any': function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return min.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});