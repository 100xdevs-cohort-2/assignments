import { factory } from '../../utils/factory.js';
import { errorTransform } from './utils/errorTransform.js';
import { createMax } from '../../function/statistics/max.js';
import { lastDimToZeroBase } from './utils/lastDimToZeroBase.js';
var name = 'max';
var dependencies = ['typed', 'config', 'numeric', 'larger'];
export var createMaxTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    numeric,
    larger
  } = _ref;
  var max = createMax({
    typed,
    config,
    numeric,
    larger
  });

  /**
   * Attach a transform function to math.max
   * Adds a property transform containing the transform function.
   *
   * This transform changed the last `dim` parameter of function max
   * from one-based to zero based
   */
  return typed('max', {
    '...any': function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return max.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});