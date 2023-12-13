import { factory } from '../../utils/factory.js';
import { createRange } from '../../function/matrix/range.js';
var name = 'range';
var dependencies = ['typed', 'config', '?matrix', '?bignumber', 'smaller', 'smallerEq', 'larger', 'largerEq', 'add', 'isPositive'];
export var createRangeTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    config,
    matrix,
    bignumber,
    smaller,
    smallerEq,
    larger,
    largerEq,
    add,
    isPositive
  } = _ref;
  var range = createRange({
    typed,
    config,
    matrix,
    bignumber,
    smaller,
    smallerEq,
    larger,
    largerEq,
    add,
    isPositive
  });

  /**
   * Attach a transform function to math.range
   * Adds a property transform containing the transform function.
   *
   * This transform creates a range which includes the end value
   */
  return typed('range', {
    '...any': function any(args) {
      var lastIndex = args.length - 1;
      var last = args[lastIndex];
      if (typeof last !== 'boolean') {
        // append a parameter includeEnd=true
        args.push(true);
      }
      return range.apply(null, args);
    }
  });
}, {
  isTransformFunction: true
});