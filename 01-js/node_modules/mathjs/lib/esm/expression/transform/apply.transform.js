import { errorTransform } from './utils/errorTransform.js';
import { factory } from '../../utils/factory.js';
import { createApply } from '../../function/matrix/apply.js';
import { isBigNumber, isNumber } from '../../utils/is.js';
var name = 'apply';
var dependencies = ['typed', 'isInteger'];

/**
 * Attach a transform function to math.apply
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `dim` parameter of function apply
 * from one-based to zero based
 */
export var createApplyTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    isInteger
  } = _ref;
  var apply = createApply({
    typed,
    isInteger
  });

  // @see: comment of concat itself
  return typed('apply', {
    '...any': function any(args) {
      // change dim from one-based to zero-based
      var dim = args[1];
      if (isNumber(dim)) {
        args[1] = dim - 1;
      } else if (isBigNumber(dim)) {
        args[1] = dim.minus(1);
      }
      try {
        return apply.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});