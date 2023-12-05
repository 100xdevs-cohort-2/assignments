"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFunctionAssignmentNode = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _is = require("../../utils/is.js");
var _keywords = require("../keywords.js");
var _string = require("../../utils/string.js");
var _array = require("../../utils/array.js");
var _latex = require("../../utils/latex.js");
var _operators = require("../operators.js");
var _factory = require("../../utils/factory.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'FunctionAssignmentNode';
var dependencies = ['typed', 'Node'];
var createFunctionAssignmentNode = exports.createFunctionAssignmentNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
    Node = _ref.Node;
  /**
   * Is parenthesis needed?
   * @param {Node} node
   * @param {Object} parenthesis
   * @param {string} implicit
   * @private
   */
  function needParenthesis(node, parenthesis, implicit) {
    var precedence = (0, _operators.getPrecedence)(node, parenthesis, implicit);
    var exprPrecedence = (0, _operators.getPrecedence)(node.expr, parenthesis, implicit);
    return parenthesis === 'all' || exprPrecedence !== null && exprPrecedence <= precedence;
  }
  var FunctionAssignmentNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(FunctionAssignmentNode, _Node);
    var _super = _createSuper(FunctionAssignmentNode);
    /**
     * @constructor FunctionAssignmentNode
     * @extends {Node}
     * Function assignment
     *
     * @param {string} name           Function name
     * @param {string[] | Array.<{name: string, type: string}>} params
     *                                Array with function parameter names, or an
     *                                array with objects containing the name
     *                                and type of the parameter
     * @param {Node} expr             The function expression
     */
    function FunctionAssignmentNode(name, params, expr) {
      var _this;
      (0, _classCallCheck2["default"])(this, FunctionAssignmentNode);
      _this = _super.call(this);
      // validate input
      if (typeof name !== 'string') {
        throw new TypeError('String expected for parameter "name"');
      }
      if (!Array.isArray(params)) {
        throw new TypeError('Array containing strings or objects expected for parameter "params"');
      }
      if (!(0, _is.isNode)(expr)) {
        throw new TypeError('Node expected for parameter "expr"');
      }
      if (_keywords.keywords.has(name)) {
        throw new Error('Illegal function name, "' + name + '" is a reserved keyword');
      }
      var paramNames = new Set();
      var _iterator = _createForOfIteratorHelper(params),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var param = _step.value;
          var _name = typeof param === 'string' ? param : param.name;
          if (paramNames.has(_name)) {
            throw new Error("Duplicate parameter name \"".concat(_name, "\""));
          } else {
            paramNames.add(_name);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      _this.name = name;
      _this.params = params.map(function (param) {
        return param && param.name || param;
      });
      _this.types = params.map(function (param) {
        return param && param.type || 'any';
      });
      _this.expr = expr;
      return _this;
    }
    (0, _createClass2["default"])(FunctionAssignmentNode, [{
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isFunctionAssignmentNode",
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
        var childArgNames = Object.create(argNames);
        (0, _array.forEach)(this.params, function (param) {
          childArgNames[param] = true;
        });

        // compile the function expression with the child args
        var evalExpr = this.expr._compile(math, childArgNames);
        var name = this.name;
        var params = this.params;
        var signature = (0, _array.join)(this.types, ',');
        var syntax = name + '(' + (0, _array.join)(this.params, ', ') + ')';
        return function evalFunctionAssignmentNode(scope, args, context) {
          var signatures = {};
          signatures[signature] = function () {
            var childArgs = Object.create(args);
            for (var i = 0; i < params.length; i++) {
              childArgs[params[i]] = arguments[i];
            }
            return evalExpr(scope, childArgs, context);
          };
          var fn = typed(name, signatures);
          fn.syntax = syntax;
          scope.set(name, fn);
          return fn;
        };
      }

      /**
       * Execute a callback for each of the child nodes of this node
       * @param {function(child: Node, path: string, parent: Node)} callback
       */
    }, {
      key: "forEach",
      value: function forEach(callback) {
        callback(this.expr, 'expr', this);
      }

      /**
       * Create a new FunctionAssignmentNode whose children are the results of
       * calling the provided callback function for each child of the original
       * node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {FunctionAssignmentNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        var expr = this._ifNode(callback(this.expr, 'expr', this));
        return new FunctionAssignmentNode(this.name, this.params.slice(0), expr);
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {FunctionAssignmentNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        return new FunctionAssignmentNode(this.name, this.params.slice(0), this.expr);
      }

      /**
       * get string representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toString",
      value: function _toString(options) {
        var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
        var expr = this.expr.toString(options);
        if (needParenthesis(this, parenthesis, options && options.implicit)) {
          expr = '(' + expr + ')';
        }
        return this.name + '(' + this.params.join(', ') + ') = ' + expr;
      }

      /**
       * Get a JSON representation of the node
       * @returns {Object}
       */
    }, {
      key: "toJSON",
      value: function toJSON() {
        var types = this.types;
        return {
          mathjs: name,
          name: this.name,
          params: this.params.map(function (param, index) {
            return {
              name: param,
              type: types[index]
            };
          }),
          expr: this.expr
        };
      }

      /**
       * Instantiate an FunctionAssignmentNode from its JSON representation
       * @param {Object} json
       *     An object structured like
       *     ```
       *     {"mathjs": "FunctionAssignmentNode",
       *      name: ..., params: ..., expr: ...}
       *     ```
       *     where mathjs is optional
       * @returns {FunctionAssignmentNode}
       */
    }, {
      key: "toHTML",
      value:
      /**
       * get HTML representation
       * @param {Object} options
       * @return {string} str
       */
      function toHTML(options) {
        var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
        var params = [];
        for (var i = 0; i < this.params.length; i++) {
          params.push('<span class="math-symbol math-parameter">' + (0, _string.escape)(this.params[i]) + '</span>');
        }
        var expr = this.expr.toHTML(options);
        if (needParenthesis(this, parenthesis, options && options.implicit)) {
          expr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + expr + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        return '<span class="math-function">' + (0, _string.escape)(this.name) + '</span>' + '<span class="math-parenthesis math-round-parenthesis">(</span>' + params.join('<span class="math-separator">,</span>') + '<span class="math-parenthesis math-round-parenthesis">)</span>' + '<span class="math-operator math-assignment-operator ' + 'math-variable-assignment-operator math-binary-operator">=</span>' + expr;
      }

      /**
       * get LaTeX representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
        var expr = this.expr.toTex(options);
        if (needParenthesis(this, parenthesis, options && options.implicit)) {
          expr = "\\left(".concat(expr, "\\right)");
        }
        return '\\mathrm{' + this.name + '}\\left(' + this.params.map(_latex.toSymbol).join(',') + '\\right)=' + expr;
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new FunctionAssignmentNode(json.name, json.params, json.expr);
      }
    }]);
    return FunctionAssignmentNode;
  }(Node);
  (0, _defineProperty2["default"])(FunctionAssignmentNode, "name", name);
  return FunctionAssignmentNode;
}, {
  isClass: true,
  isNode: true
});