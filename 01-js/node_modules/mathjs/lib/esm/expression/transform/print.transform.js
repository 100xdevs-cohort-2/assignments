import { createPrint } from '../../function/string/print.js';
import { factory } from '../../utils/factory.js';
import { printTemplate } from '../../utils/print.js';
var name = 'print';
var dependencies = ['typed', 'matrix', 'zeros', 'add'];
export var createPrintTransform = /* #__PURE__ */factory(name, dependencies, _ref => {
  var {
    typed,
    matrix,
    zeros,
    add
  } = _ref;
  var print = createPrint({
    typed,
    matrix,
    zeros,
    add
  });
  return typed(name, {
    'string, Object | Array': function stringObjectArray(template, values) {
      return print(_convertTemplateToZeroBasedIndex(template), values);
    },
    'string, Object | Array, number | Object': function stringObjectArrayNumberObject(template, values, options) {
      return print(_convertTemplateToZeroBasedIndex(template), values, options);
    }
  });
  function _convertTemplateToZeroBasedIndex(template) {
    return template.replace(printTemplate, x => {
      var parts = x.slice(1).split('.');
      var result = parts.map(function (part) {
        if (!isNaN(part) && part.length > 0) {
          return parseInt(part) - 1;
        } else {
          return part;
        }
      });
      return '$' + result.join('.');
    });
  }
}, {
  isTransformFunction: true
});