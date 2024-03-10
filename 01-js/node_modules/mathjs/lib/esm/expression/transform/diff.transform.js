import { factory } from '../../utils/factory.js';
import { errorTransform } from './utils/errorTransform.js';
import { createDiff } from '../../function/matrix/diff.js';
import { lastDimToZeroBase } from './utils/lastDimToZeroBase.js';
var name = 'diff';
var dependencies = ['typed', 'matrix', 'subtract', 'number', 'bignumber'];
export var createDiffTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    subtract,
    number,
    bignumber
  } = _ref;
  var diff = createDiff({
    typed,
    matrix,
    subtract,
    number,
    bignumber
  });

  /**
   * Attach a transform function to math.diff
   * Adds a property transform containing the transform function.
   *
   * This transform creates a range which includes the end value
   */
  return typed(name, {
    '...any': function any(args) {
      args = lastDimToZeroBase(args);
      try {
        return diff.apply(null, args);
      } catch (err) {
        throw errorTransform(err);
      }
    }
  });
}, {
  isTransformFunction: true
});