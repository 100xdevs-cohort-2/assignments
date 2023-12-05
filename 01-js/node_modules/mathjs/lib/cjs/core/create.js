"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _typedFunction = _interopRequireDefault(require("typed-function"));
var _object = require("../utils/object.js");
var emitter = _interopRequireWildcard(require("./../utils/emitter.js"));
var _import = require("./function/import.js");
var _config = require("./function/config.js");
var _factory = require("../utils/factory.js");
var _is = require("../utils/is.js");
var _ArgumentsError = require("../error/ArgumentsError.js");
var _DimensionError = require("../error/DimensionError.js");
var _IndexError = require("../error/IndexError.js");
var _config2 = require("./config.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * Create a mathjs instance from given factory functions and optionally config
 *
 * Usage:
 *
 *     const mathjs1 = create({ createAdd, createMultiply, ...})
 *     const config = { number: 'BigNumber' }
 *     const mathjs2 = create(all, config)
 *
 * @param {Object} [factories] An object with factory functions
 *                             The object can contain nested objects,
 *                             all nested objects will be flattened.
 * @param {Object} [config]    Available options:
 *                            {number} epsilon
 *                              Minimum relative difference between two
 *                              compared values, used by all comparison functions.
 *                            {string} matrix
 *                              A string 'Matrix' (default) or 'Array'.
 *                            {string} number
 *                              A string 'number' (default), 'BigNumber', or 'Fraction'
 *                            {number} precision
 *                              The number of significant digits for BigNumbers.
 *                              Not applicable for Numbers.
 *                            {boolean} predictable
 *                              Predictable output type of functions. When true,
 *                              output type depends only on the input types. When
 *                              false (default), output type can vary depending
 *                              on input values. For example `math.sqrt(-4)`
 *                              returns `complex('2i')` when predictable is false, and
 *                              returns `NaN` when true.
 *                            {string} randomSeed
 *                              Random seed for seeded pseudo random number generator.
 *                              Set to null to randomly seed.
 * @returns {Object} Returns a bare-bone math.js instance containing
 *                   functions:
 *                   - `import` to add new functions
 *                   - `config` to change configuration
 *                   - `on`, `off`, `once`, `emit` for events
 */
function create(factories, config) {
  var configInternal = (0, _extends2["default"])({}, _config2.DEFAULT_CONFIG, config);

  // simple test for ES5 support
  if (typeof Object.create !== 'function') {
    throw new Error('ES5 not supported by this JavaScript engine. ' + 'Please load the es5-shim and es5-sham library for compatibility.');
  }

  // create the mathjs instance
  var math = emitter.mixin({
    // only here for backward compatibility for legacy factory functions
    isNumber: _is.isNumber,
    isComplex: _is.isComplex,
    isBigNumber: _is.isBigNumber,
    isFraction: _is.isFraction,
    isUnit: _is.isUnit,
    isString: _is.isString,
    isArray: _is.isArray,
    isMatrix: _is.isMatrix,
    isCollection: _is.isCollection,
    isDenseMatrix: _is.isDenseMatrix,
    isSparseMatrix: _is.isSparseMatrix,
    isRange: _is.isRange,
    isIndex: _is.isIndex,
    isBoolean: _is.isBoolean,
    isResultSet: _is.isResultSet,
    isHelp: _is.isHelp,
    isFunction: _is.isFunction,
    isDate: _is.isDate,
    isRegExp: _is.isRegExp,
    isObject: _is.isObject,
    isNull: _is.isNull,
    isUndefined: _is.isUndefined,
    isAccessorNode: _is.isAccessorNode,
    isArrayNode: _is.isArrayNode,
    isAssignmentNode: _is.isAssignmentNode,
    isBlockNode: _is.isBlockNode,
    isConditionalNode: _is.isConditionalNode,
    isConstantNode: _is.isConstantNode,
    isFunctionAssignmentNode: _is.isFunctionAssignmentNode,
    isFunctionNode: _is.isFunctionNode,
    isIndexNode: _is.isIndexNode,
    isNode: _is.isNode,
    isObjectNode: _is.isObjectNode,
    isOperatorNode: _is.isOperatorNode,
    isParenthesisNode: _is.isParenthesisNode,
    isRangeNode: _is.isRangeNode,
    isRelationalNode: _is.isRelationalNode,
    isSymbolNode: _is.isSymbolNode,
    isChain: _is.isChain
  });

  // load config function and apply provided config
  math.config = (0, _config.configFactory)(configInternal, math.emit);
  math.expression = {
    transform: {},
    mathWithTransform: {
      config: math.config
    }
  };

  // cached factories and instances used by function load
  var legacyFactories = [];
  var legacyInstances = [];

  /**
   * Load a function or data type from a factory.
   * If the function or data type already exists, the existing instance is
   * returned.
   * @param {Function} factory
   * @returns {*}
   */
  function load(factory) {
    if ((0, _factory.isFactory)(factory)) {
      return factory(math);
    }
    var firstProperty = factory[Object.keys(factory)[0]];
    if ((0, _factory.isFactory)(firstProperty)) {
      return firstProperty(math);
    }
    if (!(0, _object.isLegacyFactory)(factory)) {
      console.warn('Factory object with properties `type`, `name`, and `factory` expected', factory);
      throw new Error('Factory object with properties `type`, `name`, and `factory` expected');
    }
    var index = legacyFactories.indexOf(factory);
    var instance;
    if (index === -1) {
      // doesn't yet exist
      if (factory.math === true) {
        // pass with math namespace
        instance = factory.factory(math.type, configInternal, load, math.typed, math);
      } else {
        instance = factory.factory(math.type, configInternal, load, math.typed);
      }

      // append to the cache
      legacyFactories.push(factory);
      legacyInstances.push(instance);
    } else {
      // already existing function, return the cached instance
      instance = legacyInstances[index];
    }
    return instance;
  }
  var importedFactories = {};

  // load the import function
  function lazyTyped() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return math.typed.apply(math.typed, args);
  }
  lazyTyped.isTypedFunction = _typedFunction["default"].isTypedFunction;
  var internalImport = (0, _import.importFactory)(lazyTyped, load, math, importedFactories);
  math["import"] = internalImport;

  // listen for changes in config, import all functions again when changed
  // TODO: move this listener into the import function?
  math.on('config', function () {
    (0, _object.values)(importedFactories).forEach(function (factory) {
      if (factory && factory.meta && factory.meta.recreateOnConfigChange) {
        // FIXME: only re-create when the current instance is the same as was initially created
        // FIXME: delete the functions/constants before importing them again?
        internalImport(factory, {
          override: true
        });
      }
    });
  });

  // the create function exposed on the mathjs instance is bound to
  // the factory functions passed before
  math.create = create.bind(null, factories);

  // export factory function
  math.factory = _factory.factory;

  // import the factory functions like createAdd as an array instead of object,
  // else they will get a different naming (`createAdd` instead of `add`).
  math["import"]((0, _object.values)((0, _object.deepFlatten)(factories)));
  math.ArgumentsError = _ArgumentsError.ArgumentsError;
  math.DimensionError = _DimensionError.DimensionError;
  math.IndexError = _IndexError.IndexError;
  return math;
}