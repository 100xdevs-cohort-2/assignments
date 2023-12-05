"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSnapshotFromFactories = createSnapshotFromFactories;
exports.validateBundle = validateBundle;
exports.validateTypeOf = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _assert = _interopRequireDefault(require("assert"));
var allIsFunctions = _interopRequireWildcard(require("./is.js"));
var _create = require("../core/create.js");
var _string = require("./string.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; } /**
 * This file contains helper methods to create expected snapshot structures
 * of both instance and ES6 exports.
 *
 * The files are located here and not under /test or /tools so it's transpiled
 * into ES5 code under /lib and can be used straight by node.js
 */
var validateTypeOf = exports.validateTypeOf = allIsFunctions.typeOf;
function validateBundle(expectedBundleStructure, bundle) {
  var originalWarn = console.warn;
  console.warn = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.join(' ').indexOf('is moved to') !== -1 && args.join(' ').indexOf('Please use the new location instead') !== -1) {
      // Ignore warnings like:
      // Warning: math.type.isNumber is moved to math.isNumber in v6.0.0. Please use the new location instead.
      return;
    }
    originalWarn.apply(console, args);
  };
  try {
    var issues = [];

    // see whether all expected functions and objects are there
    traverse(expectedBundleStructure, function (expectedType, path) {
      var actualValue = get(bundle, path);
      var actualType = validateTypeOf(actualValue);
      var message = actualType === 'undefined' ? 'Missing entry in bundle. ' + "Path: ".concat(JSON.stringify(path), ", expected type: ").concat(expectedType, ", actual type: ").concat(actualType) : 'Unexpected entry type in bundle. ' + "Path: ".concat(JSON.stringify(path), ", expected type: ").concat(expectedType, ", actual type: ").concat(actualType);
      if (actualType !== expectedType) {
        issues.push({
          actualType: actualType,
          expectedType: expectedType,
          message: message
        });
        console.warn(message);
      }
    });

    // see whether there are any functions or objects that shouldn't be there
    traverse(bundle, function (actualValue, path) {
      var actualType = validateTypeOf(actualValue);
      var expectedType = get(expectedBundleStructure, path) || 'undefined';

      // FIXME: ugly to have these special cases
      if (path.join('.').indexOf('docs.') !== -1) {
        // ignore the contents of docs
        return;
      }
      if (path.join('.').indexOf('all.') !== -1) {
        // ignore the contents of all dependencies
        return;
      }
      var message = expectedType === 'undefined' ? 'Unknown entry in bundle. ' + 'Is there a new function added which is missing in this snapshot test? ' + "Path: ".concat(JSON.stringify(path), ", expected type: ").concat(expectedType, ", actual type: ").concat(actualType) : 'Unexpected entry type in bundle. ' + "Path: ".concat(JSON.stringify(path), ", expected type: ").concat(expectedType, ", actual type: ").concat(actualType);
      if (actualType !== expectedType) {
        issues.push({
          actualType: actualType,
          expectedType: expectedType,
          message: message
        });
        console.warn(message);
      }
    });

    // assert on the first issue (if any)
    if (issues.length > 0) {
      var _issues$ = issues[0],
        actualType = _issues$.actualType,
        expectedType = _issues$.expectedType,
        message = _issues$.message;
      console.warn("".concat(issues.length, " bundle issues found"));
      _assert["default"].strictEqual(actualType, expectedType, message);
    }
  } finally {
    console.warn = originalWarn;
  }
}

/**
 * Based on an object with factory functions, create the expected
 * structures for ES6 export and a mathjs instance.
 * @param {Object} factories
 * @return {{expectedInstanceStructure: Object, expectedES6Structure: Object}}
 */
function createSnapshotFromFactories(factories) {
  var math = (0, _create.create)(factories);
  var allFactoryFunctions = {};
  var allFunctionsConstantsClasses = {};
  var allFunctionsConstants = {};
  var allTransformFunctions = {};
  var allDependencyCollections = {};
  var allClasses = {};
  var allNodeClasses = {};
  Object.keys(factories).forEach(function (factoryName) {
    var factory = factories[factoryName];
    var name = factory.fn;
    var isTransformFunction = factory.meta && factory.meta.isTransformFunction;
    var isClass = !isLowerCase(name[0]) && validateTypeOf(math[name]) === 'function';
    var dependenciesName = factory.fn + (isTransformFunction ? 'Transform' : '') + 'Dependencies';
    allFactoryFunctions[factoryName] = 'function';
    allFunctionsConstantsClasses[name] = validateTypeOf(math[name]);
    allDependencyCollections[dependenciesName] = 'Object';
    if (isTransformFunction) {
      allTransformFunctions[name] = 'function';
    }
    if (isClass) {
      if ((0, _string.endsWith)(name, 'Node')) {
        allNodeClasses[name] = 'function';
      } else {
        allClasses[name] = 'function';
      }
    } else {
      allFunctionsConstants[name] = validateTypeOf(math[name]);
    }
  });
  var embeddedDocs = {};
  Object.keys(factories).forEach(function (factoryName) {
    var factory = factories[factoryName];
    var name = factory.fn;
    if (isLowerCase(factory.fn[0])) {
      // ignore class names starting with upper case
      embeddedDocs[name] = 'Object';
    }
  });
  embeddedDocs = exclude(embeddedDocs, ['equalScalar', 'apply', 'addScalar', 'subtractScalar', 'multiplyScalar', 'print', 'divideScalar', 'parse', 'compile', 'parser', 'chain', 'reviver', 'replacer']);
  var allTypeChecks = {};
  Object.keys(allIsFunctions).forEach(function (name) {
    if (name.indexOf('is') === 0) {
      allTypeChecks[name] = 'function';
    }
  });
  var allErrorClasses = {
    ArgumentsError: 'function',
    DimensionError: 'function',
    IndexError: 'function'
  };
  var expectedInstanceStructure = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, allFunctionsConstantsClasses), {}, {
    on: 'function',
    off: 'function',
    once: 'function',
    emit: 'function',
    "import": 'function',
    config: 'function',
    create: 'function',
    factory: 'function'
  }, allTypeChecks), allErrorClasses), {}, {
    expression: {
      transform: _objectSpread({}, allTransformFunctions),
      mathWithTransform: _objectSpread(_objectSpread({}, exclude(allFunctionsConstants, ['chain'])), {}, {
        config: 'function'
      })
    }
  });
  var expectedES6Structure = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, exclude(allFunctionsConstantsClasses, ['E', 'false', 'Infinity', 'NaN', 'null', 'PI', 'true'])), {}, {
    create: 'function',
    config: 'function',
    factory: 'function',
    _true: 'boolean',
    _false: 'boolean',
    _null: 'null',
    _Infinity: 'number',
    _NaN: 'number'
  }, allTypeChecks), allErrorClasses), allDependencyCollections), allFactoryFunctions), {}, {
    docs: embeddedDocs
  });
  return {
    expectedInstanceStructure: expectedInstanceStructure,
    expectedES6Structure: expectedES6Structure
  };
}
function traverse(obj) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (value, path) {};
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  // FIXME: ugly to have these special cases
  if (path.length > 0 && path[0].indexOf('Dependencies') !== -1) {
    // special case for objects holding a collection of dependencies
    callback(obj, path);
  } else if (validateTypeOf(obj) === 'Array') {
    obj.map(function (item, index) {
      return traverse(item, callback, path.concat(index));
    });
  } else if (validateTypeOf(obj) === 'Object') {
    Object.keys(obj).forEach(function (key) {
      // FIXME: ugly to have these special cases
      // ignore special case of deprecated docs
      if (key === 'docs' && path.join('.') === 'expression') {
        return;
      }
      traverse(obj[key], callback, path.concat(key));
    });
  } else {
    callback(obj, path);
  }
}
function get(object, path) {
  var child = object;
  for (var i = 0; i < path.length; i++) {
    var key = path[i];
    child = child ? child[key] : undefined;
  }
  return child;
}

/**
 * Create a copy of the provided `object` and delete
 * all properties listed in `excludedProperties`
 * @param {Object} object
 * @param {string[]} excludedProperties
 * @return {Object}
 */
function exclude(object, excludedProperties) {
  var strippedObject = (0, _extends2["default"])({}, object);
  excludedProperties.forEach(function (excludedProperty) {
    delete strippedObject[excludedProperty];
  });
  return strippedObject;
}
function isLowerCase(text) {
  return typeof text === 'string' && text.toLowerCase() === text;
}