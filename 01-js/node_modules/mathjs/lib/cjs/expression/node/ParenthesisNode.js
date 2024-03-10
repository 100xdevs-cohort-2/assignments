"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createParenthesisNode = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _is = require("../../utils/is.js");
var _factory = require("../../utils/factory.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'ParenthesisNode';
var dependencies = ['Node'];
var createParenthesisNode = exports.createParenthesisNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var Node = _ref.Node;
  var ParenthesisNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(ParenthesisNode, _Node);
    var _super = _createSuper(ParenthesisNode);
    /**
     * @constructor ParenthesisNode
     * @extends {Node}
     * A parenthesis node describes manual parenthesis from the user input
     * @param {Node} content
     * @extends {Node}
     */
    function ParenthesisNode(content) {
      var _this;
      (0, _classCallCheck2["default"])(this, ParenthesisNode);
      _this = _super.call(this);
      // validate input
      if (!(0, _is.isNode)(content)) {
        throw new TypeError('Node expected for parameter "content"');
      }
      _this.content = content;
      return _this;
    }
    (0, _createClass2["default"])(ParenthesisNode, [{
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isParenthesisNode",
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
        return this.content._compile(math, argNames);
      }

      /**
       * Get the content of the current Node.
       * @return {Node} content
       * @override
       **/
    }, {
      key: "getContent",
      value: function getContent() {
        return this.content.getContent();
      }

      /**
       * Execute a callback for each of the child nodes of this node
       * @param {function(child: Node, path: string, parent: Node)} callback
       */
    }, {
      key: "forEach",
      value: function forEach(callback) {
        callback(this.content, 'content', this);
      }

      /**
       * Create a new ParenthesisNode whose child is the result of calling
       * the provided callback function on the child of this node.
       * @param {function(child: Node, path: string, parent: Node) : Node} callback
       * @returns {ParenthesisNode} Returns a clone of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        var content = callback(this.content, 'content', this);
        return new ParenthesisNode(content);
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {ParenthesisNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        return new ParenthesisNode(this.content);
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
        if (!options || options && !options.parenthesis || options && options.parenthesis === 'keep') {
          return '(' + this.content.toString(options) + ')';
        }
        return this.content.toString(options);
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
          content: this.content
        };
      }

      /**
       * Instantiate an ParenthesisNode from its JSON representation
       * @param {Object} json  An object structured like
       *                       `{"mathjs": "ParenthesisNode", "content": ...}`,
       *                       where mathjs is optional
       * @returns {ParenthesisNode}
       */
    }, {
      key: "toHTML",
      value:
      /**
       * Get HTML representation
       * @param {Object} options
       * @return {string} str
       * @override
       */
      function toHTML(options) {
        if (!options || options && !options.parenthesis || options && options.parenthesis === 'keep') {
          return '<span class="math-parenthesis math-round-parenthesis">(</span>' + this.content.toHTML(options) + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        return this.content.toHTML(options);
      }

      /**
       * Get LaTeX representation
       * @param {Object} options
       * @return {string} str
       * @override
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        if (!options || options && !options.parenthesis || options && options.parenthesis === 'keep') {
          return "\\left(".concat(this.content.toTex(options), "\\right)");
        }
        return this.content.toTex(options);
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new ParenthesisNode(json.content);
      }
    }]);
    return ParenthesisNode;
  }(Node);
  (0, _defineProperty2["default"])(ParenthesisNode, "name", name);
  return ParenthesisNode;
}, {
  isClass: true,
  isNode: true
});