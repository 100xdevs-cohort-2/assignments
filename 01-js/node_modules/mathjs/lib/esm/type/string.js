import { factory } from '../utils/factory.js';
import { deepMap } from '../utils/collection.js';
import { format } from '../utils/number.js';
var name = 'string';
var dependencies = ['typed'];
export var createString = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed
  } = _ref;
  /**
   * Create a string or convert any object into a string.
   * Elements of Arrays and Matrices are processed element wise.
   *
   * Syntax:
   *
   *    math.string(value)
   *
   * Examples:
   *
   *    math.string(4.2)               // returns string '4.2'
   *    math.string(math.complex(3, 2) // returns string '3 + 2i'
   *
   *    const u = math.unit(5, 'km')
   *    math.string(u.to('m'))         // returns string '5000 m'
   *
   *    math.string([true, false])     // returns ['true', 'false']
   *
   * See also:
   *
   *    bignumber, boolean, complex, index, matrix, number, unit
   *
   * @param {* | Array | Matrix | null} [value]  A value to convert to a string
   * @return {string | Array | Matrix} The created string
   */
  return typed(name, {
    '': function _() {
      return '';
    },
    number: format,
    null: function _null(x) {
      return 'null';
    },
    boolean: function boolean(x) {
      return x + '';
    },
    string: function string(x) {
      return x;
    },
    'Array | Matrix': typed.referToSelf(self => x => deepMap(x, self)),
    any: function any(x) {
      return String(x);
    }
  });
});