"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createNode = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _is = require("../../utils/is.js");
var _keywords = require("../keywords.js");
var _object = require("../../utils/object.js");
var _factory = require("../../utils/factory.js");
var _map = require("../../utils/map.js");
var name = 'Node';
var dependencies = ['mathWithTransform'];
var createNode = exports.createNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var mathWithTransform = _ref.mathWithTransform;
  /**
   * Validate the symbol names of a scope.
   * Throws an error when the scope contains an illegal symbol.
   * @param {Object} scope
   */
  function _validateScope(scope) {
    for (var _i = 0, _arr = (0, _toConsumableArray2["default"])(_keywords.keywords); _i < _arr.length; _i++) {
      var symbol = _arr[_i];
      if (scope.has(symbol)) {
        throw new Error('Scope contains an illegal symbol, "' + symbol + '" is a reserved keyword');
      }
    }
  }
  var Node = /*#__PURE__*/function () {
    function Node() {
      (0, _classCallCheck2["default"])(this, Node);
    }
    (0, _createClass2["default"])(Node, [{
      key: "type",
      get: function get() {
        return 'Node';
      }
    }, {
      key: "isNode",
      get: function get() {
        return true;
      }

      /**
       * Evaluate the node
       * @param {Object} [scope]  Scope to read/write variables
       * @return {*}              Returns the result
       */
    }, {
      key: "evaluate",
      value: function evaluate(scope) {
        return this.compile().evaluate(scope);
      }

      /**
       * Compile the node into an optimized, evauatable JavaScript function
       * @return {{evaluate: function([Object])}} object
       *                Returns an object with a function 'evaluate',
       *                which can be invoked as expr.evaluate([scope: Object]),
       *                where scope is an optional object with
       *                variables.
       */
    }, {
      key: "compile",
      value: function compile() {
        var expr = this._compile(mathWithTransform, {});
        var args = {};
        var context = null;
        function evaluate(scope) {
          var s = (0, _map.createMap)(scope);
          _validateScope(s);
          return expr(s, args, context);
        }
        return {
          evaluate: evaluate
        };
      }

      /**
       * Compile a node into a JavaScript function.
       * This basically pre-calculates as much as possible and only leaves open
       * calculations which depend on a dynamic scope with variables.
       * @param {Object} math     Math.js namespace with functions and constants.
       * @param {Object} argNames An object with argument names as key and `true`
       *                          as value. Used in the SymbolNode to optimize
       *                          for arguments from user assigned functions
       *                          (see FunctionAssignmentNode) or special symbols
       *                          like `end` (see IndexNode).
       * @return {function} Returns a function which can be called like:
       *                        evalNode(scope: Object, args: Object, context: *)
       */
    }, {
      key: "_compile",
      value: function _compile(math, argNames) {
        throw new Error('Method _compile must be implemented by type ' + this.type);
      }

      /**
       * Execute a callback for each of the child nodes of this node
       * @param {function(child: Node, path: string, parent: Node)} callback
       */
    }, {
      key: "forEach",
      value: function forEach(callback) {
        // must be implemented by each of the Node implementations
        throw new Error('Cannot run forEach on a Node interface');
      }

      /**
       * Create a new Node whose children are the results of calling the
       * provided callback function for each child of the original node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {OperatorNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        // must be implemented by each of the Node implementations
        throw new Error('Cannot run map on a Node interface');
      }

      /**
       * Validate whether an object is a Node, for use with map
       * @param {Node} node
       * @returns {Node} Returns the input if it's a node, else throws an Error
       * @protected
       */
    }, {
      key: "_ifNode",
      value: function _ifNode(node) {
        if (!(0, _is.isNode)(node)) {
          throw new TypeError('Callback function must return a Node');
        }
        return node;
      }

      /**
       * Recursively traverse all nodes in a node tree. Executes given callback for
       * this node and each of its child nodes.
       * @param {function(node: Node, path: string, parent: Node)} callback
       *          A callback called for every node in the node tree.
       */
    }, {
      key: "traverse",
      value: function traverse(callback) {
        // execute callback for itself
        // eslint-disable-next-line
        callback(this, null, null);

        // recursively traverse over all children of a node
        function _traverse(node, callback) {
          node.forEach(function (child, path, parent) {
            callback(child, path, parent);
            _traverse(child, callback);
          });
        }
        _traverse(this, callback);
      }

      /**
       * Recursively transform a node tree via a transform function.
       *
       * For example, to replace all nodes of type SymbolNode having name 'x' with
       * a ConstantNode with value 2:
       *
       *     const res = Node.transform(function (node, path, parent) {
       *       if (node && node.isSymbolNode) && (node.name === 'x')) {
       *         return new ConstantNode(2)
       *       }
       *       else {
       *         return node
       *       }
       *     })
       *
       * @param {function(node: Node, path: string, parent: Node) : Node} callback
       *          A mapping function accepting a node, and returning
       *          a replacement for the node or the original node. The "signature"
       *          of the callback must be:
       *          callback(node: Node, index: string, parent: Node) : Node
       * @return {Node} Returns the original node or its replacement
       */
    }, {
      key: "transform",
      value: function transform(callback) {
        function _transform(child, path, parent) {
          var replacement = callback(child, path, parent);
          if (replacement !== child) {
            // stop iterating when the node is replaced
            return replacement;
          }
          return child.map(_transform);
        }
        return _transform(this, null, null);
      }

      /**
       * Find any node in the node tree matching given filter function. For
       * example, to find all nodes of type SymbolNode having name 'x':
       *
       *     const results = Node.filter(function (node) {
       *       return (node && node.isSymbolNode) && (node.name === 'x')
       *     })
       *
       * @param {function(node: Node, path: string, parent: Node) : Node} callback
       *            A test function returning true when a node matches, and false
       *            otherwise. Function signature:
       *            callback(node: Node, index: string, parent: Node) : boolean
       * @return {Node[]} nodes
       *            An array with nodes matching given filter criteria
       */
    }, {
      key: "filter",
      value: function filter(callback) {
        var nodes = [];
        this.traverse(function (node, path, parent) {
          if (callback(node, path, parent)) {
            nodes.push(node);
          }
        });
        return nodes;
      }

      /**
       * Create a shallow clone of this node
       * @return {Node}
       */
    }, {
      key: "clone",
      value: function clone() {
        // must be implemented by each of the Node implementations
        throw new Error('Cannot clone a Node interface');
      }

      /**
       * Create a deep clone of this node
       * @return {Node}
       */
    }, {
      key: "cloneDeep",
      value: function cloneDeep() {
        return this.map(function (node) {
          return node.cloneDeep();
        });
      }

      /**
       * Deep compare this node with another node.
       * @param {Node} other
       * @return {boolean} Returns true when both nodes are of the same type and
       *                   contain the same values (as do their childs)
       */
    }, {
      key: "equals",
      value: function equals(other) {
        return other ? this.type === other.type && (0, _object.deepStrictEqual)(this, other) : false;
      }

      /**
       * Get string representation. (wrapper function)
       *
       * This function can get an object of the following form:
       * {
       *    handler: //This can be a callback function of the form
       *             // "function callback(node, options)"or
       *             // a map that maps function names (used in FunctionNodes)
       *             // to callbacks
       *    parenthesis: "keep" //the parenthesis option (This is optional)
       * }
       *
       * @param {Object} [options]
       * @return {string}
       */
    }, {
      key: "toString",
      value: function toString(options) {
        var customString = this._getCustomString(options);
        if (typeof customString !== 'undefined') {
          return customString;
        }
        return this._toString(options);
      }

      /**
       * Get a JSON representation of the node
       * Both .toJSON() and the static .fromJSON(json) should be implemented by all
       * implementations of Node
       * @returns {Object}
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        throw new Error('Cannot serialize object: toJSON not implemented by ' + this.type);
      }

      /**
       * Get HTML representation. (wrapper function)
       *
       * This function can get an object of the following form:
       * {
       *    handler: //This can be a callback function of the form
       *             // "function callback(node, options)" or
       *             // a map that maps function names (used in FunctionNodes)
       *             // to callbacks
       *    parenthesis: "keep" //the parenthesis option (This is optional)
       * }
       *
       * @param {Object} [options]
       * @return {string}
       */
    }, {
      key: "toHTML",
      value: function toHTML(options) {
        var customString = this._getCustomString(options);
        if (typeof customString !== 'undefined') {
          return customString;
        }
        return this.toHTML(options);
      }

      /**
       * Internal function to generate the string output.
       * This has to be implemented by every Node
       *
       * @throws {Error}
       */
    }, {
      key: "_toString",
      value: function _toString() {
        // must be implemented by each of the Node implementations
        throw new Error('_toString not implemented for ' + this.type);
      }

      /**
       * Get LaTeX representation. (wrapper function)
       *
       * This function can get an object of the following form:
       * {
       *    handler: //This can be a callback function of the form
       *             // "function callback(node, options)"or
       *             // a map that maps function names (used in FunctionNodes)
       *             // to callbacks
       *    parenthesis: "keep" //the parenthesis option (This is optional)
       * }
       *
       * @param {Object} [options]
       * @return {string}
       */
    }, {
      key: "toTex",
      value: function toTex(options) {
        var customString = this._getCustomString(options);
        if (typeof customString !== 'undefined') {
          return customString;
        }
        return this._toTex(options);
      }

      /**
       * Internal function to generate the LaTeX output.
       * This has to be implemented by every Node
       *
       * @param {Object} [options]
       * @throws {Error}
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        // must be implemented by each of the Node implementations
        throw new Error('_toTex not implemented for ' + this.type);
      }

      /**
       * Helper used by `to...` functions.
       */
    }, {
      key: "_getCustomString",
      value: function _getCustomString(options) {
        if (options && (0, _typeof2["default"])(options) === 'object') {
          switch ((0, _typeof2["default"])(options.handler)) {
            case 'object':
            case 'undefined':
              return;
            case 'function':
              return options.handler(this, options);
            default:
              throw new TypeError('Object or function expected as callback');
          }
        }
      }

      /**
       * Get identifier.
       * @return {string}
       */
    }, {
      key: "getIdentifier",
      value: function getIdentifier() {
        return this.type;
      }

      /**
       * Get the content of the current Node.
       * @return {Node} node
       **/
    }, {
      key: "getContent",
      value: function getContent() {
        return this;
      }
    }]);
    return Node;
  }();
  return Node;
}, {
  isClass: true,
  isNode: true
});