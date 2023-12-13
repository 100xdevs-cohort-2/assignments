"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createObjectNode = void 0;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _customs = require("../../utils/customs.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _object = require("../../utils/object.js");
var _string = require("../../utils/string.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'ObjectNode';
var dependencies = ['Node'];
var createObjectNode = exports.createObjectNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var Node = _ref.Node;
  var ObjectNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(ObjectNode, _Node);
    var _super = _createSuper(ObjectNode);
    /**
     * @constructor ObjectNode
     * @extends {Node}
     * Holds an object with keys/values
     * @param {Object.<string, Node>} [properties]   object with key/value pairs
     */
    function ObjectNode(properties) {
      var _this;
      (0, _classCallCheck2["default"])(this, ObjectNode);
      _this = _super.call(this);
      _this.properties = properties || {};

      // validate input
      if (properties) {
        if (!((0, _typeof2["default"])(properties) === 'object') || !Object.keys(properties).every(function (key) {
          return (0, _is.isNode)(properties[key]);
        })) {
          throw new TypeError('Object containing Nodes expected');
        }
      }
      return _this;
    }
    (0, _createClass2["default"])(ObjectNode, [{
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isObjectNode",
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
        var evalEntries = {};
        for (var key in this.properties) {
          if ((0, _object.hasOwnProperty)(this.properties, key)) {
            // we stringify/parse the key here to resolve unicode characters,
            // so you cannot create a key like {"co\\u006Estructor": null}
            var stringifiedKey = (0, _string.stringify)(key);
            var parsedKey = JSON.parse(stringifiedKey);
            var prop = (0, _customs.getSafeProperty)(this.properties, key);
            evalEntries[parsedKey] = prop._compile(math, argNames);
          }
        }
        return function evalObjectNode(scope, args, context) {
          var obj = {};
          for (var _key in evalEntries) {
            if ((0, _object.hasOwnProperty)(evalEntries, _key)) {
              obj[_key] = evalEntries[_key](scope, args, context);
            }
          }
          return obj;
        };
      }

      /**
       * Execute a callback for each of the child nodes of this node
       * @param {function(child: Node, path: string, parent: Node)} callback
       */
    }, {
      key: "forEach",
      value: function forEach(callback) {
        for (var key in this.properties) {
          if ((0, _object.hasOwnProperty)(this.properties, key)) {
            callback(this.properties[key], 'properties[' + (0, _string.stringify)(key) + ']', this);
          }
        }
      }

      /**
       * Create a new ObjectNode whose children are the results of calling
       * the provided callback function for each child of the original node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {ObjectNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        var properties = {};
        for (var key in this.properties) {
          if ((0, _object.hasOwnProperty)(this.properties, key)) {
            properties[key] = this._ifNode(callback(this.properties[key], 'properties[' + (0, _string.stringify)(key) + ']', this));
          }
        }
        return new ObjectNode(properties);
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {ObjectNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        var properties = {};
        for (var key in this.properties) {
          if ((0, _object.hasOwnProperty)(this.properties, key)) {
            properties[key] = this.properties[key];
          }
        }
        return new ObjectNode(properties);
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
        var entries = [];
        for (var key in this.properties) {
          if ((0, _object.hasOwnProperty)(this.properties, key)) {
            entries.push((0, _string.stringify)(key) + ': ' + this.properties[key].toString(options));
          }
        }
        return '{' + entries.join(', ') + '}';
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
          properties: this.properties
        };
      }

      /**
       * Instantiate an OperatorNode from its JSON representation
       * @param {Object} json  An object structured like
       *                       `{"mathjs": "ObjectNode", "properties": {...}}`,
       *                       where mathjs is optional
       * @returns {ObjectNode}
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
        var entries = [];
        for (var key in this.properties) {
          if ((0, _object.hasOwnProperty)(this.properties, key)) {
            entries.push('<span class="math-symbol math-property">' + (0, _string.escape)(key) + '</span>' + '<span class="math-operator math-assignment-operator ' + 'math-property-assignment-operator math-binary-operator">' + ':</span>' + this.properties[key].toHTML(options));
          }
        }
        return '<span class="math-parenthesis math-curly-parenthesis">{</span>' + entries.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-curly-parenthesis">}</span>';
      }

      /**
       * Get LaTeX representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        var entries = [];
        for (var key in this.properties) {
          if ((0, _object.hasOwnProperty)(this.properties, key)) {
            entries.push('\\mathbf{' + key + ':} & ' + this.properties[key].toTex(options) + '\\\\');
          }
        }
        var tex = '\\left\\{\\begin{array}{ll}' + entries.join('\n') + '\\end{array}\\right\\}';
        return tex;
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new ObjectNode(json.properties);
      }
    }]);
    return ObjectNode;
  }(Node);
  (0, _defineProperty2["default"])(ObjectNode, "name", name);
  return ObjectNode;
}, {
  isClass: true,
  isNode: true
});