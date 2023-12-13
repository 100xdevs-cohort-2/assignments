"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAccessorNode = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _is = require("../../utils/is.js");
var _customs = require("../../utils/customs.js");
var _factory = require("../../utils/factory.js");
var _access = require("./utils/access.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'AccessorNode';
var dependencies = ['subset', 'Node'];
var createAccessorNode = exports.createAccessorNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var subset = _ref.subset,
    Node = _ref.Node;
  var access = (0, _access.accessFactory)({
    subset: subset
  });

  /**
   * Are parenthesis needed?
   * @private
   */
  function needParenthesis(node) {
    // TODO: maybe make a method on the nodes which tells whether they need parenthesis?
    return !((0, _is.isAccessorNode)(node) || (0, _is.isArrayNode)(node) || (0, _is.isConstantNode)(node) || (0, _is.isFunctionNode)(node) || (0, _is.isObjectNode)(node) || (0, _is.isParenthesisNode)(node) || (0, _is.isSymbolNode)(node));
  }
  var AccessorNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(AccessorNode, _Node);
    var _super = _createSuper(AccessorNode);
    /**
     * @constructor AccessorNode
     * @extends {Node}
     * Access an object property or get a matrix subset
     *
     * @param {Node} object                 The object from which to retrieve
     *                                      a property or subset.
     * @param {IndexNode} index             IndexNode containing ranges
     */
    function AccessorNode(object, index) {
      var _this;
      (0, _classCallCheck2["default"])(this, AccessorNode);
      _this = _super.call(this);
      if (!(0, _is.isNode)(object)) {
        throw new TypeError('Node expected for parameter "object"');
      }
      if (!(0, _is.isIndexNode)(index)) {
        throw new TypeError('IndexNode expected for parameter "index"');
      }
      _this.object = object;
      _this.index = index;
      return _this;
    }

    // readonly property name
    (0, _createClass2["default"])(AccessorNode, [{
      key: "name",
      get: function get() {
        if (this.index) {
          return this.index.isObjectProperty() ? this.index.getObjectProperty() : '';
        } else {
          return this.object.name || '';
        }
      }
    }, {
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isAccessorNode",
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
        var evalObject = this.object._compile(math, argNames);
        var evalIndex = this.index._compile(math, argNames);
        if (this.index.isObjectProperty()) {
          var prop = this.index.getObjectProperty();
          return function evalAccessorNode(scope, args, context) {
            // get a property from an object evaluated using the scope.
            return (0, _customs.getSafeProperty)(evalObject(scope, args, context), prop);
          };
        } else {
          return function evalAccessorNode(scope, args, context) {
            var object = evalObject(scope, args, context);
            // we pass just object here instead of context:
            var index = evalIndex(scope, args, object);
            return access(object, index);
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
        callback(this.object, 'object', this);
        callback(this.index, 'index', this);
      }

      /**
       * Create a new AccessorNode whose children are the results of calling
       * the provided callback function for each child of the original node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {AccessorNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        return new AccessorNode(this._ifNode(callback(this.object, 'object', this)), this._ifNode(callback(this.index, 'index', this)));
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {AccessorNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        return new AccessorNode(this.object, this.index);
      }

      /**
       * Get string representation
       * @param {Object} options
       * @return {string}
       */
    }, {
      key: "_toString",
      value: function _toString(options) {
        var object = this.object.toString(options);
        if (needParenthesis(this.object)) {
          object = '(' + object + ')';
        }
        return object + this.index.toString(options);
      }

      /**
       * Get HTML representation
       * @param {Object} options
       * @return {string}
       */
    }, {
      key: "toHTML",
      value: function toHTML(options) {
        var object = this.object.toHTML(options);
        if (needParenthesis(this.object)) {
          object = '<span class="math-parenthesis math-round-parenthesis">(</span>' + object + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        return object + this.index.toHTML(options);
      }

      /**
       * Get LaTeX representation
       * @param {Object} options
       * @return {string}
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        var object = this.object.toTex(options);
        if (needParenthesis(this.object)) {
          object = '\\left(\' + object + \'\\right)';
        }
        return object + this.index.toTex(options);
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
          object: this.object,
          index: this.index
        };
      }

      /**
       * Instantiate an AccessorNode from its JSON representation
       * @param {Object} json
       *     An object structured like
       *     `{"mathjs": "AccessorNode", object: ..., index: ...}`,
       *     where mathjs is optional
       * @returns {AccessorNode}
       */
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new AccessorNode(json.object, json.index);
      }
    }]);
    return AccessorNode;
  }(Node);
  (0, _defineProperty2["default"])(AccessorNode, "name", name);
  return AccessorNode;
}, {
  isClass: true,
  isNode: true
});