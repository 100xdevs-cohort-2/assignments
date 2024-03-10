"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRelationalNode = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _operators = require("../operators.js");
var _string = require("../../utils/string.js");
var _customs = require("../../utils/customs.js");
var _latex = require("../../utils/latex.js");
var _factory = require("../../utils/factory.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'RelationalNode';
var dependencies = ['Node'];
var createRelationalNode = exports.createRelationalNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var Node = _ref.Node;
  var operatorMap = {
    equal: '==',
    unequal: '!=',
    smaller: '<',
    larger: '>',
    smallerEq: '<=',
    largerEq: '>='
  };
  var RelationalNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(RelationalNode, _Node);
    var _super = _createSuper(RelationalNode);
    /**
     * A node representing a chained conditional expression, such as 'x > y > z'
     *
     * @param {String[]} conditionals
     *     An array of conditional operators used to compare the parameters
     * @param {Node[]} params
     *     The parameters that will be compared
     *
     * @constructor RelationalNode
     * @extends {Node}
     */
    function RelationalNode(conditionals, params) {
      var _this;
      (0, _classCallCheck2["default"])(this, RelationalNode);
      _this = _super.call(this);
      if (!Array.isArray(conditionals)) {
        throw new TypeError('Parameter conditionals must be an array');
      }
      if (!Array.isArray(params)) {
        throw new TypeError('Parameter params must be an array');
      }
      if (conditionals.length !== params.length - 1) {
        throw new TypeError('Parameter params must contain exactly one more element ' + 'than parameter conditionals');
      }
      _this.conditionals = conditionals;
      _this.params = params;
      return _this;
    }
    (0, _createClass2["default"])(RelationalNode, [{
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isRelationalNode",
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
        var self = this;
        var compiled = this.params.map(function (p) {
          return p._compile(math, argNames);
        });
        return function evalRelationalNode(scope, args, context) {
          var evalLhs;
          var evalRhs = compiled[0](scope, args, context);
          for (var i = 0; i < self.conditionals.length; i++) {
            evalLhs = evalRhs;
            evalRhs = compiled[i + 1](scope, args, context);
            var condFn = (0, _customs.getSafeProperty)(math, self.conditionals[i]);
            if (!condFn(evalLhs, evalRhs)) {
              return false;
            }
          }
          return true;
        };
      }

      /**
       * Execute a callback for each of the child nodes of this node
       * @param {function(child: Node, path: string, parent: Node)} callback
       */
    }, {
      key: "forEach",
      value: function forEach(callback) {
        var _this2 = this;
        this.params.forEach(function (n, i) {
          return callback(n, 'params[' + i + ']', _this2);
        }, this);
      }

      /**
       * Create a new RelationalNode whose children are the results of calling
       * the provided callback function for each child of the original node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {RelationalNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        var _this3 = this;
        return new RelationalNode(this.conditionals.slice(), this.params.map(function (n, i) {
          return _this3._ifNode(callback(n, 'params[' + i + ']', _this3));
        }, this));
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {RelationalNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        return new RelationalNode(this.conditionals, this.params);
      }

      /**
       * Get string representation.
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toString",
      value: function _toString(options) {
        var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
        var precedence = (0, _operators.getPrecedence)(this, parenthesis, options && options.implicit);
        var paramStrings = this.params.map(function (p, index) {
          var paramPrecedence = (0, _operators.getPrecedence)(p, parenthesis, options && options.implicit);
          return parenthesis === 'all' || paramPrecedence !== null && paramPrecedence <= precedence ? '(' + p.toString(options) + ')' : p.toString(options);
        });
        var ret = paramStrings[0];
        for (var i = 0; i < this.conditionals.length; i++) {
          ret += ' ' + operatorMap[this.conditionals[i]];
          ret += ' ' + paramStrings[i + 1];
        }
        return ret;
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
          conditionals: this.conditionals,
          params: this.params
        };
      }

      /**
       * Instantiate a RelationalNode from its JSON representation
       * @param {Object} json
       *     An object structured like
       *     `{"mathjs": "RelationalNode", "conditionals": ..., "params": ...}`,
       *     where mathjs is optional
       * @returns {RelationalNode}
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
        var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
        var precedence = (0, _operators.getPrecedence)(this, parenthesis, options && options.implicit);
        var paramStrings = this.params.map(function (p, index) {
          var paramPrecedence = (0, _operators.getPrecedence)(p, parenthesis, options && options.implicit);
          return parenthesis === 'all' || paramPrecedence !== null && paramPrecedence <= precedence ? '<span class="math-parenthesis math-round-parenthesis">(</span>' + p.toHTML(options) + '<span class="math-parenthesis math-round-parenthesis">)</span>' : p.toHTML(options);
        });
        var ret = paramStrings[0];
        for (var i = 0; i < this.conditionals.length; i++) {
          ret += '<span class="math-operator math-binary-operator ' + 'math-explicit-binary-operator">' + (0, _string.escape)(operatorMap[this.conditionals[i]]) + '</span>' + paramStrings[i + 1];
        }
        return ret;
      }

      /**
       * Get LaTeX representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
        var precedence = (0, _operators.getPrecedence)(this, parenthesis, options && options.implicit);
        var paramStrings = this.params.map(function (p, index) {
          var paramPrecedence = (0, _operators.getPrecedence)(p, parenthesis, options && options.implicit);
          return parenthesis === 'all' || paramPrecedence !== null && paramPrecedence <= precedence ? '\\left(' + p.toTex(options) + '\right)' : p.toTex(options);
        });
        var ret = paramStrings[0];
        for (var i = 0; i < this.conditionals.length; i++) {
          ret += _latex.latexOperators[this.conditionals[i]] + paramStrings[i + 1];
        }
        return ret;
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new RelationalNode(json.conditionals, json.params);
      }
    }]);
    return RelationalNode;
  }(Node);
  (0, _defineProperty2["default"])(RelationalNode, "name", name);
  return RelationalNode;
}, {
  isClass: true,
  isNode: true
});