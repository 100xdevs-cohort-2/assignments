"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIndexNode = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _array = require("../../utils/array.js");
var _customs = require("../../utils/customs.js");
var _factory = require("../../utils/factory.js");
var _is = require("../../utils/is.js");
var _string = require("../../utils/string.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'IndexNode';
var dependencies = ['Node', 'size'];
var createIndexNode = exports.createIndexNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var Node = _ref.Node,
    size = _ref.size;
  var IndexNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(IndexNode, _Node);
    var _super = _createSuper(IndexNode);
    /**
     * @constructor IndexNode
     * @extends Node
     *
     * Describes a subset of a matrix or an object property.
     * Cannot be used on its own, needs to be used within an AccessorNode or
     * AssignmentNode.
     *
     * @param {Node[]} dimensions
     * @param {boolean} [dotNotation=false]
     *     Optional property describing whether this index was written using dot
     *     notation like `a.b`, or using bracket notation like `a["b"]`
     *     (which is the default). This property is used for string conversion.
     */
    function IndexNode(dimensions, dotNotation) {
      var _this;
      (0, _classCallCheck2["default"])(this, IndexNode);
      _this = _super.call(this);
      _this.dimensions = dimensions;
      _this.dotNotation = dotNotation || false;

      // validate input
      if (!Array.isArray(dimensions) || !dimensions.every(_is.isNode)) {
        throw new TypeError('Array containing Nodes expected for parameter "dimensions"');
      }
      if (_this.dotNotation && !_this.isObjectProperty()) {
        throw new Error('dotNotation only applicable for object properties');
      }
      return _this;
    }
    (0, _createClass2["default"])(IndexNode, [{
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isIndexNode",
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
        // TODO: implement support for bignumber (currently bignumbers are silently
        //       reduced to numbers when changing the value to zero-based)

        // TODO: Optimization: when the range values are ConstantNodes,
        //       we can beforehand resolve the zero-based value

        // optimization for a simple object property
        var evalDimensions = (0, _array.map)(this.dimensions, function (dimension, i) {
          var needsEnd = dimension.filter(function (node) {
            return node.isSymbolNode && node.name === 'end';
          }).length > 0;
          if (needsEnd) {
            // SymbolNode 'end' is used inside the index,
            // like in `A[end]` or `A[end - 2]`
            var childArgNames = Object.create(argNames);
            childArgNames.end = true;
            var _evalDimension = dimension._compile(math, childArgNames);
            return function evalDimension(scope, args, context) {
              if (!(0, _is.isMatrix)(context) && !(0, _is.isArray)(context) && !(0, _is.isString)(context)) {
                throw new TypeError('Cannot resolve "end": ' + 'context must be a Matrix, Array, or string but is ' + (0, _is.typeOf)(context));
              }
              var s = size(context).valueOf();
              var childArgs = Object.create(args);
              childArgs.end = s[i];
              return _evalDimension(scope, childArgs, context);
            };
          } else {
            // SymbolNode `end` not used
            return dimension._compile(math, argNames);
          }
        });
        var index = (0, _customs.getSafeProperty)(math, 'index');
        return function evalIndexNode(scope, args, context) {
          var dimensions = (0, _array.map)(evalDimensions, function (evalDimension) {
            return evalDimension(scope, args, context);
          });
          return index.apply(void 0, (0, _toConsumableArray2["default"])(dimensions));
        };
      }

      /**
       * Execute a callback for each of the child nodes of this node
       * @param {function(child: Node, path: string, parent: Node)} callback
       */
    }, {
      key: "forEach",
      value: function forEach(callback) {
        for (var i = 0; i < this.dimensions.length; i++) {
          callback(this.dimensions[i], 'dimensions[' + i + ']', this);
        }
      }

      /**
       * Create a new IndexNode whose children are the results of calling
       * the provided callback function for each child of the original node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {IndexNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        var dimensions = [];
        for (var i = 0; i < this.dimensions.length; i++) {
          dimensions[i] = this._ifNode(callback(this.dimensions[i], 'dimensions[' + i + ']', this));
        }
        return new IndexNode(dimensions, this.dotNotation);
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {IndexNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        return new IndexNode(this.dimensions.slice(0), this.dotNotation);
      }

      /**
       * Test whether this IndexNode contains a single property name
       * @return {boolean}
       */
    }, {
      key: "isObjectProperty",
      value: function isObjectProperty() {
        return this.dimensions.length === 1 && (0, _is.isConstantNode)(this.dimensions[0]) && typeof this.dimensions[0].value === 'string';
      }

      /**
       * Returns the property name if IndexNode contains a property.
       * If not, returns null.
       * @return {string | null}
       */
    }, {
      key: "getObjectProperty",
      value: function getObjectProperty() {
        return this.isObjectProperty() ? this.dimensions[0].value : null;
      }

      /**
       * Get string representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toString",
      value: function _toString(options) {
        // format the parameters like "[1, 0:5]"
        return this.dotNotation ? '.' + this.getObjectProperty() : '[' + this.dimensions.join(', ') + ']';
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
          dimensions: this.dimensions,
          dotNotation: this.dotNotation
        };
      }

      /**
       * Instantiate an IndexNode from its JSON representation
       * @param {Object} json
       *     An object structured like
       *     `{"mathjs": "IndexNode", dimensions: [...], dotNotation: false}`,
       *     where mathjs is optional
       * @returns {IndexNode}
       */
    }, {
      key: "toHTML",
      value:
      /**
       * Get HTML representation
       * @param {Object} options
       * @return {string} str
       */
      function toHTML(options) {
        // format the parameters like "[1, 0:5]"
        var dimensions = [];
        for (var i = 0; i < this.dimensions.length; i++) {
          dimensions[i] = this.dimensions[i].toHTML();
        }
        if (this.dotNotation) {
          return '<span class="math-operator math-accessor-operator">.</span>' + '<span class="math-symbol math-property">' + (0, _string.escape)(this.getObjectProperty()) + '</span>';
        } else {
          return '<span class="math-parenthesis math-square-parenthesis">[</span>' + dimensions.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-square-parenthesis">]</span>';
        }
      }

      /**
       * Get LaTeX representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        var dimensions = this.dimensions.map(function (range) {
          return range.toTex(options);
        });
        return this.dotNotation ? '.' + this.getObjectProperty() + '' : '_{' + dimensions.join(',') + '}';
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new IndexNode(json.dimensions, json.dotNotation);
      }
    }]);
    return IndexNode;
  }(Node);
  (0, _defineProperty2["default"])(IndexNode, "name", name);
  return IndexNode;
}, {
  isClass: true,
  isNode: true
});