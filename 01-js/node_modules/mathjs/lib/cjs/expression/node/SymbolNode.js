"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSymbolNode = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _string = require("../../utils/string.js");
var _customs = require("../../utils/customs.js");
var _factory = require("../../utils/factory.js");
var _latex = require("../../utils/latex.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'SymbolNode';
var dependencies = ['math', '?Unit', 'Node'];
var createSymbolNode = exports.createSymbolNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var math = _ref.math,
    Unit = _ref.Unit,
    Node = _ref.Node;
  /**
   * Check whether some name is a valueless unit like "inch".
   * @param {string} name
   * @return {boolean}
   */
  function isValuelessUnit(name) {
    return Unit ? Unit.isValuelessUnit(name) : false;
  }
  var SymbolNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(SymbolNode, _Node);
    var _super = _createSuper(SymbolNode);
    /**
     * @constructor SymbolNode
     * @extends {Node}
     * A symbol node can hold and resolve a symbol
     * @param {string} name
     * @extends {Node}
     */
    function SymbolNode(name) {
      var _this;
      (0, _classCallCheck2["default"])(this, SymbolNode);
      _this = _super.call(this);
      // validate input
      if (typeof name !== 'string') {
        throw new TypeError('String expected for parameter "name"');
      }
      _this.name = name;
      return _this;
    }
    (0, _createClass2["default"])(SymbolNode, [{
      key: "type",
      get: function get() {
        return 'SymbolNode';
      }
    }, {
      key: "isSymbolNode",
      get: function get() {
        return true;
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
        var name = this.name;
        if (argNames[name] === true) {
          // this is a FunctionAssignment argument
          // (like an x when inside the expression of a function
          // assignment `f(x) = ...`)
          return function (scope, args, context) {
            return (0, _customs.getSafeProperty)(args, name);
          };
        } else if (name in math) {
          return function (scope, args, context) {
            return scope.has(name) ? scope.get(name) : (0, _customs.getSafeProperty)(math, name);
          };
        } else {
          var isUnit = isValuelessUnit(name);
          return function (scope, args, context) {
            return scope.has(name) ? scope.get(name) : isUnit ? new Unit(null, name) : SymbolNode.onUndefinedSymbol(name);
          };
        }
      }

      /**
       * Execute a callback for each of the child nodes of this node
       * @param {function(child: Node, path: string, parent: Node)} callback
       */
    }, {
      key: "forEach",
      value: function forEach(callback) {
        // nothing to do, we don't have any children
      }

      /**
       * Create a new SymbolNode with children produced by the given callback.
       * Trivial since a SymbolNode has no children
       * @param {function(child: Node, path: string, parent: Node) : Node} callback
       * @returns {SymbolNode} Returns a clone of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        return this.clone();
      }

      /**
       * Throws an error 'Undefined symbol {name}'
       * @param {string} name
       */
    }, {
      key: "clone",
      value:
      /**
       * Create a clone of this node, a shallow copy
       * @return {SymbolNode}
       */
      function clone() {
        return new SymbolNode(this.name);
      }

      /**
       * Get string representation
       * @param {Object} options
       * @return {string} str
       * @override
       */
    }, {
      key: "_toString",
      value: function _toString(options) {
        return this.name;
      }

      /**
       * Get HTML representation
       * @param {Object} options
       * @return {string} str
       * @override
       */
    }, {
      key: "toHTML",
      value: function toHTML(options) {
        var name = (0, _string.escape)(this.name);
        if (name === 'true' || name === 'false') {
          return '<span class="math-symbol math-boolean">' + name + '</span>';
        } else if (name === 'i') {
          return '<span class="math-symbol math-imaginary-symbol">' + name + '</span>';
        } else if (name === 'Infinity') {
          return '<span class="math-symbol math-infinity-symbol">' + name + '</span>';
        } else if (name === 'NaN') {
          return '<span class="math-symbol math-nan-symbol">' + name + '</span>';
        } else if (name === 'null') {
          return '<span class="math-symbol math-null-symbol">' + name + '</span>';
        } else if (name === 'undefined') {
          return '<span class="math-symbol math-undefined-symbol">' + name + '</span>';
        }
        return '<span class="math-symbol">' + name + '</span>';
      }

      /**
       * Get a JSON representation of the node
       * @returns {Object}
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          mathjs: 'SymbolNode',
          name: this.name
        };
      }

      /**
       * Instantiate a SymbolNode from its JSON representation
       * @param {Object} json  An object structured like
       *                       `{"mathjs": "SymbolNode", name: "x"}`,
       *                       where mathjs is optional
       * @returns {SymbolNode}
       */
    }, {
      key: "_toTex",
      value:
      /**
       * Get LaTeX representation
       * @param {Object} options
       * @return {string} str
       * @override
       */
      function _toTex(options) {
        var isUnit = false;
        if (typeof math[this.name] === 'undefined' && isValuelessUnit(this.name)) {
          isUnit = true;
        }
        var symbol = (0, _latex.toSymbol)(this.name, isUnit);
        if (symbol[0] === '\\') {
          // no space needed if the symbol starts with '\'
          return symbol;
        }
        // the space prevents symbols from breaking stuff like '\cdot'
        // if it's written right before the symbol
        return ' ' + symbol;
      }
    }], [{
      key: "onUndefinedSymbol",
      value: function onUndefinedSymbol(name) {
        throw new Error('Undefined symbol ' + name);
      }
    }, {
      key: "fromJSON",
      value: function fromJSON(json) {
        return new SymbolNode(json.name);
      }
    }]);
    return SymbolNode;
  }(Node);
  return SymbolNode;
}, {
  isClass: true,
  isNode: true
});