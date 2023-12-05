import { isBigNumber, isNumber } from '../../utils/is.js';
import { errorTransform } from './utils/errorTransform.js';
import { factory } from '../../utils/factory.js';
import { createConcat } from '../../function/matrix/concat.js';
var name = 'concat';
var dependencies = ['typed', 'matrix', 'isInteger'];
export var createConcatTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    isInteger
  } = _ref;
  var concat = createConcat({
    typed,
    matrix,
    isInteger
  });

  /**
   * Attach a transform function to math.range
   * Adds a property transform containing the transform function.
   *
   * This transform changed the last `dim` parameter of function concat
   * from one-based to zero based
   */
  return typed('concat', {
    '...any': function any(args) {
      // change last argument from one-based to zero-based
      var lastIndex = args.length - 1;
      var last = args[lastIndex];
      if (isNumber(last)) {
        args[lastIndex] = last - 1;
      } else if (isBigNumber(last)) {
        args[lastIndex] = last.minus(1);
      }
      try {
        return concat.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});