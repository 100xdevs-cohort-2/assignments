"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConstantNode = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _string = require("../../utils/string.js");
var _is = require("../../utils/is.js");
var _latex = require("../../utils/latex.js");
var _factory = require("../../utils/factory.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'ConstantNode';
var dependencies = ['Node'];
var createConstantNode = exports.createConstantNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var Node = _ref.Node;
  var ConstantNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(ConstantNode, _Node);
    var _super = _createSuper(ConstantNode);
    /**
     * A ConstantNode holds a constant value like a number or string.
     *
     * Usage:
     *
     *     new ConstantNode(2.3)
     *     new ConstantNode('hello')
     *
     * @param {*} value    Value can be any type (number, BigNumber, string, ...)
     * @constructor ConstantNode
     * @extends {Node}
     */
    function ConstantNode(value) {
      var _this;
      (0, _classCallCheck2["default"])(this, ConstantNode);
      _this = _super.call(this);
      _this.value = value;
      return _this;
    }
    (0, _createClass2["default"])(ConstantNode, [{
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isConstantNode",
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
        var value = this.value;
        return function evalConstantNode() {
          return value;
        };
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
       * Create a new ConstantNode with children produced by the given callback.
       * Trivial because there are no children.
       * @param {function(child: Node, path: string, parent: Node) : Node} callback
       * @returns {ConstantNode} Returns a clone of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        return this.clone();
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {ConstantNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        return new ConstantNode(this.value);
      }

      /**
       * Get string representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toString",
      value: function _toString(options) {
        return (0, _string.format)(this.value, options);
      }

      /**
       * Get HTML representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "toHTML",
      value: function toHTML(options) {
        var value = this._toString(options);
        switch ((0, _is.typeOf)(this.value)) {
          case 'number':
          case 'BigNumber':
          case 'Fraction':
            return '<span class="math-number">' + value + '</span>';
          case 'string':
            return '<span class="math-string">' + value + '</span>';
          case 'boolean':
            return '<span class="math-boolean">' + value + '</span>';
          case 'null':
            return '<span class="math-null-symbol">' + value + '</span>';
          case 'undefined':
            return '<span class="math-undefined">' + value + '</span>';
          default:
            return '<span class="math-symbol">' + value + '</span>';
        }
      }

      /**
       * Get a JSON representation of the node
       * @returns {Object}
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        return {
          mathjs: name,
          value: this.value
        };
      }

      /**
       * Instantiate a ConstantNode from its JSON representation
       * @param {Object} json  An object structured like
       *                       `{"mathjs": "SymbolNode", value: 2.3}`,
       *                       where mathjs is optional
       * @returns {ConstantNode}
       */
    }, {
      key: "_toTex",
      value:
      /**
       * Get LaTeX representation
       * @param {Object} options
       * @return {string} str
       */
      function _toTex(options) {
        var value = this._toString(options);
        switch ((0, _is.typeOf)(this.value)) {
          case 'string':
            return '\\mathtt{' + (0, _latex.escapeLatex)(value) + '}';
          case 'number':
          case 'BigNumber':
            {
              if (!isFinite(this.value)) {
                return this.value.valueOf() < 0 ? '-\\infty' : '\\infty';
              }
              var index = value.toLowerCase().indexOf('e');
              if (index !== -1) {
                return value.substring(0, index) + '\\cdot10^{' + value.substring(index + 1) + '}';
              }
            }
            return value;
          case 'Fraction':
            return this.value.toLatex();
          default:
            return value;
        }
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new ConstantNode(json.value);
      }
    }]);
    return ConstantNode;
  }(Node);
  (0, _defineProperty2["default"])(ConstantNode, "name", name);
  return ConstantNode;
}, {
  isClass: true,
  isNode: true
});