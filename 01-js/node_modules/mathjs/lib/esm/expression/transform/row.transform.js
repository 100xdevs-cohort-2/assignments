import { factory } from '../../utils/factory.js';
import { createRow } from '../../function/matrix/row.js';
import { errorTransform } from './utils/errorTransform.js';
import { isNumber } from '../../utils/is.js';
var name = 'row';
var dependencies = ['typed', 'Index', 'matrix', 'range'];

/**
 * Attach a transform function to matrix.column
 * Adds a property transform containing the transform function.
 *
 * This transform changed the last `index` parameter of function column
 * from zero-based to one-based
 */
export var createRowTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    Index,
    matrix,
    range
  } = _ref;
  var row = createRow({
    typed,
    Index,
    matrix,
    range
  });

  // @see: comment of row itself
  return typed('row', {
    '...any': function any(args) {
      // change last argument from zero-based to one-based
      var lastIndex = args.length - 1;
      var last = args[lastIndex];
      if (isNumber(last)) {
        args[lastIndex] = last - 1;
      }
      try {
        return row.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});