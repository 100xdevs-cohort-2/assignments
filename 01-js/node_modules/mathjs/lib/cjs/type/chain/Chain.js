"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createChainClass = void 0;
var _is = require("../../utils/is.js");
var _string = require("../../utils/string.js");
var _object = require("../../utils/object.js");
var _factory = require("../../utils/factory.js");
var name = 'Chain';
var dependencies = ['?on', 'math', 'typed'];
var createChainClass = exports.createChainClass = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var on = _ref.on,
    math = _ref.math,
    typed = _ref.typed;
  /**
   * @constructor Chain
   * Wrap any value in a chain, allowing to perform chained operations on
   * the value.
   *
   * All methods available in the math.js library can be called upon the chain,
   * and then will be evaluated with the value itself as first argument.
   * The chain can be closed by executing chain.done(), which will return
   * the final value.
   *
   * The Chain has a number of special functions:
   * - done()             Finalize the chained operation and return the
   *                      chain's value.
   * - valueOf()          The same as done()
   * - toString()         Returns a string representation of the chain's value.
   *
   * @param {*} [value]
   */
  function Chain(value) {
    if (!(this instanceof Chain)) {
      throw new SyntaxError('Constructor must be called with the new operator');
    }
    if ((0, _is.isChain)(value)) {
      this.value = value.value;
    } else {
      this.value = value;
    }
  }

  /**
   * Attach type information
   */
  Chain.prototype.type = 'Chain';
  Chain.prototype.isChain = true;

  /**
   * Close the chain. Returns the final value.
   * Does the same as method valueOf()
   * @returns {*} value
   */
  Chain.prototype.done = function () {
    return this.value;
  };

  /**
   * Close the chain. Returns the final value.
   * Does the same as method done()
   * @returns {*} value
   */
  Chain.prototype.valueOf = function () {
    return this.value;
  };

  /**
   * Get a string representation of the value in the chain
   * @returns {string}
   */
  Chain.prototype.toString = function () {
    return (0, _string.format)(this.value);
  };

  /**
   * Get a JSON representation of the chain
   * @returns {Object}
   */
  Chain.prototype.toJSON = function () {
    return {
      mathjs: 'Chain',
      value: this.value
    };
  };

  /**
   * Instantiate a Chain from its JSON representation
   * @param {Object} json  An object structured like
   *                       `{"mathjs": "Chain", value: ...}`,
   *                       where mathjs is optional
   * @returns {Chain}
   */
  Chain.fromJSON = function (json) {
    return new Chain(json.value);
  };

  /**
   * Create a proxy method for the chain
   * @param {string} name
   * @param {Function} fn      The function to be proxied
   *                           If fn is no function, it is silently ignored.
   * @private
   */
  function createProxy(name, fn) {
    if (typeof fn === 'function') {
      Chain.prototype[name] = chainify(fn);
    }
  }

  /**
   * Create a proxy method for the chain
   * @param {string} name
   * @param {function} resolver   The function resolving with the
   *                              function to be proxied
   * @private
   */
  function createLazyProxy(name, resolver) {
    (0, _object.lazy)(Chain.prototype, name, function outerResolver() {
      var fn = resolver();
      if (typeof fn === 'function') {
        return chainify(fn);
      }
      return undefined; // if not a function, ignore
    });
  }

  /**
   * Make a function chainable
   * @param {function} fn
   * @return {Function} chain function
   * @private
   */
  function chainify(fn) {
    return function () {
      // Here, `this` will be the context of a Chain instance
      if (arguments.length === 0) {
        return new Chain(fn(this.value));
      }
      var args = [this.value];
      for (var i = 0; i < arguments.length; i++) {
        args[i + 1] = arguments[i];
      }
      if (typed.isTypedFunction(fn)) {
        var sigObject = typed.resolve(fn, args);
        // We want to detect if a rest parameter has matched across the
        // value in the chain and the current arguments of this call.
        // That is the case if and only if the matching signature has
        // exactly one parameter (which then must be a rest parameter
        // as it is matching at least two actual arguments).
        if (sigObject.params.length === 1) {
          throw new Error('chain function ' + fn.name + ' cannot match rest parameter between chain value and additional arguments.');
        }
        return new Chain(sigObject.implementation.apply(fn, args));
      }
      return new Chain(fn.apply(fn, args));
    };
  }

  /**
   * Create a proxy for a single method, or an object with multiple methods.
   * Example usage:
   *
   *   Chain.createProxy('add', function add (x, y) {...})
   *   Chain.createProxy({
   *     add:      function add (x, y) {...},
   *     subtract: function subtract (x, y) {...}
   *   }
   *
   * @param {string | Object} arg0   A name (string), or an object with
   *                                 functions
   * @param {*} [arg1]               A function, when arg0 is a name
   */
  Chain.createProxy = function (arg0, arg1) {
    if (typeof arg0 === 'string') {
      // createProxy(name, value)
      createProxy(arg0, arg1);
    } else {
      var _loop = function _loop(_name) {
        if ((0, _object.hasOwnProperty)(arg0, _name) && excludedNames[_name] === undefined) {
          createLazyProxy(_name, function () {
            return arg0[_name];
          });
        }
      };
      // createProxy(values)
      for (var _name in arg0) {
        _loop(_name);
      }
    }
  };
  var excludedNames = {
    expression: true,
    docs: true,
    type: true,
    classes: true,
    json: true,
    error: true,
    isChain: true // conflicts with the property isChain of a Chain instance
  };

  // create proxy for everything that is in math.js
  Chain.createProxy(math);

  // register on the import event, automatically add a proxy for every imported function.
  if (on) {
    on('import', function (name, resolver, path) {
      if (!path) {
        // an imported function (not a data type or something special)
        createLazyProxy(name, resolver);
      }
    });
  }
  return Chain;
}, {
  isClass: true
});