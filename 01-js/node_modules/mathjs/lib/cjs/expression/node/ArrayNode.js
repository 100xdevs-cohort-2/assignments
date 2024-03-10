"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createArrayNode = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _is = require("../../utils/is.js");
var _array = require("../../utils/array.js");
var _factory = require("../../utils/factory.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'ArrayNode';
var dependencies = ['Node'];
var createArrayNode = exports.createArrayNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var Node = _ref.Node;
  var ArrayNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(ArrayNode, _Node);
    var _super = _createSuper(ArrayNode);
    /**
     * @constructor ArrayNode
     * @extends {Node}
     * Holds an 1-dimensional array with items
     * @param {Node[]} [items]   1 dimensional array with items
     */
    function ArrayNode(items) {
      var _this;
      (0, _classCallCheck2["default"])(this, ArrayNode);
      _this = _super.call(this);
      _this.items = items || [];

      // validate input
      if (!Array.isArray(_this.items) || !_this.items.every(_is.isNode)) {
        throw new TypeError('Array containing Nodes expected');
      }
      return _this;
    }
    (0, _createClass2["default"])(ArrayNode, [{
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isArrayNode",
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
        var evalItems = (0, _array.map)(this.items, function (item) {
          return item._compile(math, argNames);
        });
        var asMatrix = math.config.matrix !== 'Array';
        if (asMatrix) {
          var matrix = math.matrix;
          return function evalArrayNode(scope, args, context) {
            return matrix((0, _array.map)(evalItems, function (evalItem) {
              return evalItem(scope, args, context);
            }));
          };
        } else {
          return function evalArrayNode(scope, args, context) {
            return (0, _array.map)(evalItems, function (evalItem) {
              return evalItem(scope, args, context);
            });
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
        for (var i = 0; i < this.items.length; i++) {
          var node = this.items[i];
          callback(node, 'items[' + i + ']', this);
        }
      }

      /**
       * Create a new ArrayNode whose children are the results of calling
       * the provided callback function for each child of the original node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {ArrayNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        var items = [];
        for (var i = 0; i < this.items.length; i++) {
          items[i] = this._ifNode(callback(this.items[i], 'items[' + i + ']', this));
        }
        return new ArrayNode(items);
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {ArrayNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        return new ArrayNode(this.items.slice(0));
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
        var items = this.items.map(function (node) {
          return node.toString(options);
        });
        return '[' + items.join(', ') + ']';
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
          items: this.items
        };
      }

      /**
       * Instantiate an ArrayNode from its JSON representation
       * @param {Object} json  An object structured like
       *                       `{"mathjs": "ArrayNode", items: [...]}`,
       *                       where mathjs is optional
       * @returns {ArrayNode}
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
        var items = this.items.map(function (node) {
          return node.toHTML(options);
        });
        return '<span class="math-parenthesis math-square-parenthesis">[</span>' + items.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
      }

      /**
       * Get LaTeX representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        function itemsToTex(items, nested) {
          var mixedItems = items.some(_is.isArrayNode) && !items.every(_is.isArrayNode);
          var itemsFormRow = nested || mixedItems;
          var itemSep = itemsFormRow ? '&' : '\\\\';
          var itemsTex = items.map(function (node) {
            if (node.items) {
              return itemsToTex(node.items, !nested);
            } else {
              return node.toTex(options);
            }
          }).join(itemSep);
          return mixedItems || !itemsFormRow || itemsFormRow && !nested ? '\\begin{bmatrix}' + itemsTex + '\\end{bmatrix}' : itemsTex;
        }
        return itemsToTex(this.items, false);
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new ArrayNode(json.items);
      }
    }]);
    return ArrayNode;
  }(Node);
  (0, _defineProperty2["default"])(ArrayNode, "name", name);
  return ArrayNode;
}, {
  isClass: true,
  isNode: true
});