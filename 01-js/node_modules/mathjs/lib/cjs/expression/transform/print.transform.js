"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createPrintTransform = void 0;
var _print = require("../../function/string/print.js");
var _factory = require("../../utils/factory.js");
var _print2 = require("../../utils/print.js");
var name = 'print';
var dependencies = ['typed', 'matrix', 'zeros', 'add'];
var createPrintTransform = exports.createPrintTransform = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    matrix = _ref.matrix,
    zeros = _ref.zeros,
    add = _ref.add;
  var print = (0, _print.createPrint)({
    typed: typed,
    matrix: matrix,
    zeros: zeros,
    add: add
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
    return template.replace(_print2.printTemplate, function (x) {
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