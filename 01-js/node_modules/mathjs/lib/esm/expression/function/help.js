import { factory } from '../../utils/factory.js';
import { getSafeProperty } from '../../utils/customs.js';
import { embeddedDocs } from '../embeddedDocs/embeddedDocs.js';
import { hasOwnProperty } from '../../utils/object.js';
var name = 'help';
var dependencies = ['typed', 'mathWithTransform', 'Help'];
export var createHelp = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    mathWithTransform,
    Help
  } = _ref;
  /**
   * Retrieve help on a function or data type.
   * Help files are retrieved from the embedded documentation in math.docs.
   *
   * Syntax:
   *
   *    math.help(search)
   *
   * Examples:
   *
   *    console.log(math.help('sin').toString())
   *    console.log(math.help(math.add).toString())
   *    console.log(math.help(math.add).toJSON())
   *
   * @param {Function | string | Object} search   A function or function name
   *                                              for which to get help
   * @return {Help} A help object
   */
  return typed(name, {
    any: function any(search) {
      var prop;
      var searchName = search;
      if (typeof search !== 'string') {
        for (prop in mathWithTransform) {
          // search in functions and constants
          if (hasOwnProperty(mathWithTransform, prop) && search === mathWithTransform[prop]) {
            searchName = prop;
            break;
          }
        }

        /* TODO: implement help for data types
         if (!text) {
         // search data type
         for (prop in math.type) {
         if (hasOwnProperty(math, prop)) {
         if (search === math.type[prop]) {
         text = prop
         break
         }
         }
         }
         }
         */
      }

      var doc = getSafeProperty(embeddedDocs, searchName);
      if (!doc) {
        var searchText = typeof searchName === 'function' ? searchName.name : searchName;
        throw new Error('No documentation found on "' + searchText + '"');
      }
      return new Help(doc);
    }
  });
});