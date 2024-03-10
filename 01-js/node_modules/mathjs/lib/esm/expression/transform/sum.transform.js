import { factory } from '../../utils/factory.js';
import { errorTransform } from './utils/errorTransform.js';
import { createSum } from '../../function/statistics/sum.js';
import { lastDimToZeroBase } from './utils/lastDimToZeroBase.js';

/**
 * Attach a transform function to math.sum
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `dim` parameter of function sum
 * from one-based to zero based
 */
var name = 'sum';
var dependencies = ['typed', 'config', 'add', 'numeric'];
export var createSumTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    add,
    numeric
  } = _ref;
  var sum = createSum({
    typed,
    config,
    add,
    numeric
  });
  return typed(name, {
    '...any': function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return sum.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});