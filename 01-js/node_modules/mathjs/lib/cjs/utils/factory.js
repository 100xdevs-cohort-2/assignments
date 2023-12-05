"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.assertDependencies = assertDependencies;
exports.create = create;
exports.factory = factory;
exports.isFactory = isFactory;
exports.isOptionalDependency = isOptionalDependency;
exports.sortFactories = sortFactories;
exports.stripOptionalNotation = stripOptionalNotation;
var _array = require("./array.js");
var _object = require("./object.js");
/**
 * Create a factory function, which can be used to inject dependencies.
 *
 * The created functions are memoized, a consecutive call of the factory
 * with the exact same inputs will return the same function instance.
 * The memoized cache is exposed on `factory.cache` and can be cleared
 * if needed.
 *
 * Example:
 *
 *     const name = 'log'
 *     const dependencies = ['config', 'typed', 'divideScalar', 'Complex']
 *
 *     export const createLog = factory(name, dependencies, ({ typed, config, divideScalar, Complex }) => {
 *       // ... create the function log here and return it
 *     }
 *
 * @param {string} name           Name of the function to be created
 * @param {string[]} dependencies The names of all required dependencies
 * @param {function} create       Callback function called with an object with all dependencies
 * @param {Object} [meta]         Optional object with meta information that will be attached
 *                                to the created factory function as property `meta`.
 * @returns {function}
 */
function factory(name, dependencies, create, meta) {
  function assertAndCreate(scope) {
    // we only pass the requested dependencies to the factory function
    // to prevent functions to rely on dependencies that are not explicitly
    // requested.
    var deps = (0, _object.pickShallow)(scope, dependencies.map(stripOptionalNotation));
    assertDependencies(name, dependencies, scope);
    return create(deps);
  }
  assertAndCreate.isFactory = true;
  assertAndCreate.fn = name;
  assertAndCreate.dependencies = dependencies.slice().sort();
  if (meta) {
    assertAndCreate.meta = meta;
  }
  return assertAndCreate;
}

/**
 * Sort all factories such that when loading in order, the dependencies are resolved.
 *
 * @param {Array} factories
 * @returns {Array} Returns a new array with the sorted factories.
 */
function sortFactories(factories) {
  var factoriesByName = {};
  factories.forEach(function (factory) {
    factoriesByName[factory.fn] = factory;
  });
  function containsDependency(factory, dependency) {
    // TODO: detect circular references
    if (isFactory(factory)) {
      if ((0, _array.contains)(factory.dependencies, dependency.fn || dependency.name)) {
        return true;
      }
      if (factory.dependencies.some(function (d) {
        return containsDependency(factoriesByName[d], dependency);
      })) {
        return true;
      }
    }
    return false;
  }
  var sorted = [];
  function addFactory(factory) {
    var index = 0;
    while (index < sorted.length && !containsDependency(sorted[index], factory)) {
      index++;
    }
    sorted.splice(index, 0, factory);
  }

  // sort regular factory functions
  factories.filter(isFactory).forEach(addFactory);

  // sort legacy factory functions AFTER the regular factory functions
  factories.filter(function (factory) {
    return !isFactory(factory);
  }).forEach(addFactory);
  return sorted;
}

// TODO: comment or cleanup if unused in the end
function create(factories) {
  var scope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  sortFactories(factories).forEach(function (factory) {
    return factory(scope);
  });
  return scope;
}

/**
 * Test whether an object is a factory. This is the case when it has
 * properties name, dependencies, and a function create.
 * @param {*} obj
 * @returns {boolean}
 */
function isFactory(obj) {
  return typeof obj === 'function' && typeof obj.fn === 'string' && Array.isArray(obj.dependencies);
}

/**
 * Assert that all dependencies of a list with dependencies are available in the provided scope.
 *
 * Will throw an exception when there are dependencies missing.
 *
 * @param {string} name   Name for the function to be created. Used to generate a useful error message
 * @param {string[]} dependencies
 * @param {Object} scope
 */
function assertDependencies(name, dependencies, scope) {
  var allDefined = dependencies.filter(function (dependency) {
    return !isOptionalDependency(dependency);
  }) // filter optionals
  .every(function (dependency) {
    return scope[dependency] !== undefined;
  });
  if (!allDefined) {
    var missingDependencies = dependencies.filter(function (dependency) {
      return scope[dependency] === undefined;
    });

    // TODO: create a custom error class for this, a MathjsError or something like that
    throw new Error("Cannot create function \"".concat(name, "\", ") + "some dependencies are missing: ".concat(missingDependencies.map(function (d) {
      return "\"".concat(d, "\"");
    }).join(', '), "."));
  }
}
function isOptionalDependency(dependency) {
  return dependency && dependency[0] === '?';
}
function stripOptionalNotation(dependency) {
  return dependency && dependency[0] === '?' ? dependency.slice(1) : dependency;
}