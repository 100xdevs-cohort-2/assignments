"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBlockNode = void 0;
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
var name = 'BlockNode';
var dependencies = ['ResultSet', 'Node'];
var createBlockNode = exports.createBlockNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var ResultSet = _ref.ResultSet,
    Node = _ref.Node;
  var BlockNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(BlockNode, _Node);
    var _super = _createSuper(BlockNode);
    /**
     * @constructor BlockNode
     * @extends {Node}
     * Holds a set with blocks
     * @param {Array.<{node: Node} | {node: Node, visible: boolean}>} blocks
     *            An array with blocks, where a block is constructed as an
     *            Object with properties block, which is a Node, and visible,
     *            which is a boolean. The property visible is optional and
     *            is true by default
     */
    function BlockNode(blocks) {
      var _this;
      (0, _classCallCheck2["default"])(this, BlockNode);
      _this = _super.call(this);
      // validate input, copy blocks
      if (!Array.isArray(blocks)) throw new Error('Array expected');
      _this.blocks = blocks.map(function (block) {
        var node = block && block.node;
        var visible = block && block.visible !== undefined ? block.visible : true;
        if (!(0, _is.isNode)(node)) throw new TypeError('Property "node" must be a Node');
        if (typeof visible !== 'boolean') {
          throw new TypeError('Property "visible" must be a boolean');
        }
        return {
          node: node,
          visible: visible
        };
      });
      return _this;
    }
    (0, _createClass2["default"])(BlockNode, [{
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isBlockNode",
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
        var evalBlocks = (0, _array.map)(this.blocks, function (block) {
          return {
            evaluate: block.node._compile(math, argNames),
            visible: block.visible
          };
        });
        return function evalBlockNodes(scope, args, context) {
          var results = [];
          (0, _array.forEach)(evalBlocks, function evalBlockNode(block) {
            var result = block.evaluate(scope, args, context);
            if (block.visible) {
              results.push(result);
            }
          });
          return new ResultSet(results);
        };
      }

      /**
       * Execute a callback for each of the child blocks of this node
       * @param {function(child: Node, path: string, parent: Node)} callback
       */
    }, {
      key: "forEach",
      value: function forEach(callback) {
        for (var i = 0; i < this.blocks.length; i++) {
          callback(this.blocks[i].node, 'blocks[' + i + '].node', this);
        }
      }

      /**
       * Create a new BlockNode whose children are the results of calling
       * the provided callback function for each child of the original node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {BlockNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        var blocks = [];
        for (var i = 0; i < this.blocks.length; i++) {
          var block = this.blocks[i];
          var node = this._ifNode(callback(block.node, 'blocks[' + i + '].node', this));
          blocks[i] = {
            node: node,
            visible: block.visible
          };
        }
        return new BlockNode(blocks);
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {BlockNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        var blocks = this.blocks.map(function (block) {
          return {
            node: block.node,
            visible: block.visible
          };
        });
        return new BlockNode(blocks);
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
        return this.blocks.map(function (param) {
          return param.node.toString(options) + (param.visible ? '' : ';');
        }).join('\n');
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
          blocks: this.blocks
        };
      }

      /**
       * Instantiate an BlockNode from its JSON representation
       * @param {Object} json
       *     An object structured like
       *     `{"mathjs": "BlockNode", blocks: [{node: ..., visible: false}, ...]}`,
       *     where mathjs is optional
       * @returns {BlockNode}
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
        return this.blocks.map(function (param) {
          return param.node.toHTML(options) + (param.visible ? '' : '<span class="math-separator">;</span>');
        }).join('<span class="math-separator"><br /></span>');
      }

      /**
       * Get LaTeX representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        return this.blocks.map(function (param) {
          return param.node.toTex(options) + (param.visible ? '' : ';');
        }).join('\\;\\;\n');
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new BlockNode(json.blocks);
      }
    }]);
    return BlockNode;
  }(Node);
  (0, _defineProperty2["default"])(BlockNode, "name", name);
  return BlockNode;
}, {
  isClass: true,
  isNode: true
});