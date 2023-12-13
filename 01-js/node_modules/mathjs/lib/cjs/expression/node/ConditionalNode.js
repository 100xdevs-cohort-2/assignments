"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createConditionalNode = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _is = require("../../utils/is.js");
var _factory = require("../../utils/factory.js");
var _operators = require("../operators.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'ConditionalNode';
var dependencies = ['Node'];
var createConditionalNode = exports.createConditionalNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var Node = _ref.Node;
  /**
   * Test whether a condition is met
   * @param {*} condition
   * @returns {boolean} true if condition is true or non-zero, else false
   */
  function testCondition(condition) {
    if (typeof condition === 'number' || typeof condition === 'boolean' || typeof condition === 'string') {
      return !!condition;
    }
    if (condition) {
      if ((0, _is.isBigNumber)(condition)) {
        return !condition.isZero();
      }
      if ((0, _is.isComplex)(condition)) {
        return !!(condition.re || condition.im);
      }
      if ((0, _is.isUnit)(condition)) {
        return !!condition.value;
      }
    }
    if (condition === null || condition === undefined) {
      return false;
    }
    throw new TypeError('Unsupported type of condition "' + (0, _is.typeOf)(condition) + '"');
  }
  var ConditionalNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(ConditionalNode, _Node);
    var _super = _createSuper(ConditionalNode);
    /**
     * A lazy evaluating conditional operator: 'condition ? trueExpr : falseExpr'
     *
     * @param {Node} condition   Condition, must result in a boolean
     * @param {Node} trueExpr    Expression evaluated when condition is true
     * @param {Node} falseExpr   Expression evaluated when condition is true
     *
     * @constructor ConditionalNode
     * @extends {Node}
     */
    function ConditionalNode(condition, trueExpr, falseExpr) {
      var _this;
      (0, _classCallCheck2["default"])(this, ConditionalNode);
      _this = _super.call(this);
      if (!(0, _is.isNode)(condition)) {
        throw new TypeError('Parameter condition must be a Node');
      }
      if (!(0, _is.isNode)(trueExpr)) {
        throw new TypeError('Parameter trueExpr must be a Node');
      }
      if (!(0, _is.isNode)(falseExpr)) {
        throw new TypeError('Parameter falseExpr must be a Node');
      }
      _this.condition = condition;
      _this.trueExpr = trueExpr;
      _this.falseExpr = falseExpr;
      return _this;
    }
    (0, _createClass2["default"])(ConditionalNode, [{
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isConditionalNode",
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
        var evalCondition = this.condition._compile(math, argNames);
        var evalTrueExpr = this.trueExpr._compile(math, argNames);
        var evalFalseExpr = this.falseExpr._compile(math, argNames);
        return function evalConditionalNode(scope, args, context) {
          return testCondition(evalCondition(scope, args, context)) ? evalTrueExpr(scope, args, context) : evalFalseExpr(scope, args, context);
        };
      }

      /**
       * Execute a callback for each of the child nodes of this node
       * @param {function(child: Node, path: string, parent: Node)} callback
       */
    }, {
      key: "forEach",
      value: function forEach(callback) {
        callback(this.condition, 'condition', this);
        callback(this.trueExpr, 'trueExpr', this);
        callback(this.falseExpr, 'falseExpr', this);
      }

      /**
       * Create a new ConditionalNode whose children are the results of calling
       * the provided callback function for each child of the original node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {ConditionalNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        return new ConditionalNode(this._ifNode(callback(this.condition, 'condition', this)), this._ifNode(callback(this.trueExpr, 'trueExpr', this)), this._ifNode(callback(this.falseExpr, 'falseExpr', this)));
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {ConditionalNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        return new ConditionalNode(this.condition, this.trueExpr, this.falseExpr);
      }

      /**
       * Get string representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toString",
      value: function _toString(options) {
        var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
        var precedence = (0, _operators.getPrecedence)(this, parenthesis, options && options.implicit);

        // Enclose Arguments in parentheses if they are an OperatorNode
        // or have lower or equal precedence
        // NOTE: enclosing all OperatorNodes in parentheses is a decision
        // purely based on aesthetics and readability
        var condition = this.condition.toString(options);
        var conditionPrecedence = (0, _operators.getPrecedence)(this.condition, parenthesis, options && options.implicit);
        if (parenthesis === 'all' || this.condition.type === 'OperatorNode' || conditionPrecedence !== null && conditionPrecedence <= precedence) {
          condition = '(' + condition + ')';
        }
        var trueExpr = this.trueExpr.toString(options);
        var truePrecedence = (0, _operators.getPrecedence)(this.trueExpr, parenthesis, options && options.implicit);
        if (parenthesis === 'all' || this.trueExpr.type === 'OperatorNode' || truePrecedence !== null && truePrecedence <= precedence) {
          trueExpr = '(' + trueExpr + ')';
        }
        var falseExpr = this.falseExpr.toString(options);
        var falsePrecedence = (0, _operators.getPrecedence)(this.falseExpr, parenthesis, options && options.implicit);
        if (parenthesis === 'all' || this.falseExpr.type === 'OperatorNode' || falsePrecedence !== null && falsePrecedence <= precedence) {
          falseExpr = '(' + falseExpr + ')';
        }
        return condition + ' ? ' + trueExpr + ' : ' + falseExpr;
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
          condition: this.condition,
          trueExpr: this.trueExpr,
          falseExpr: this.falseExpr
        };
      }

      /**
       * Instantiate an ConditionalNode from its JSON representation
       * @param {Object} json
       *     An object structured like
       *     ```
       *     {"mathjs": "ConditionalNode",
       *      "condition": ...,
       *      "trueExpr": ...,
       *      "falseExpr": ...}
       *     ```
       *     where mathjs is optional
       * @returns {ConditionalNode}
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

        // Enclose Arguments in parentheses if they are an OperatorNode
        // or have lower or equal precedence
        // NOTE: enclosing all OperatorNodes in parentheses is a decision
        // purely based on aesthetics and readability
        var condition = this.condition.toHTML(options);
        var conditionPrecedence = (0, _operators.getPrecedence)(this.condition, parenthesis, options && options.implicit);
        if (parenthesis === 'all' || this.condition.type === 'OperatorNode' || conditionPrecedence !== null && conditionPrecedence <= precedence) {
          condition = '<span class="math-parenthesis math-round-parenthesis">(</span>' + condition + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        var trueExpr = this.trueExpr.toHTML(options);
        var truePrecedence = (0, _operators.getPrecedence)(this.trueExpr, parenthesis, options && options.implicit);
        if (parenthesis === 'all' || this.trueExpr.type === 'OperatorNode' || truePrecedence !== null && truePrecedence <= precedence) {
          trueExpr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + trueExpr + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        var falseExpr = this.falseExpr.toHTML(options);
        var falsePrecedence = (0, _operators.getPrecedence)(this.falseExpr, parenthesis, options && options.implicit);
        if (parenthesis === 'all' || this.falseExpr.type === 'OperatorNode' || falsePrecedence !== null && falsePrecedence <= precedence) {
          falseExpr = '<span class="math-parenthesis math-round-parenthesis">(</span>' + falseExpr + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        return condition + '<span class="math-operator math-conditional-operator">?</span>' + trueExpr + '<span class="math-operator math-conditional-operator">:</span>' + falseExpr;
      }

      /**
       * Get LaTeX representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        return '\\begin{cases} {' + this.trueExpr.toTex(options) + '}, &\\quad{\\text{if }\\;' + this.condition.toTex(options) + '}\\\\{' + this.falseExpr.toTex(options) + '}, &\\quad{\\text{otherwise}}\\end{cases}';
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new ConditionalNode(json.condition, json.trueExpr, json.falseExpr);
      }
    }]);
    return ConditionalNode;
  }(Node);
  (0, _defineProperty2["default"])(ConditionalNode, "name", name);
  return ConditionalNode;
}, {
  isClass: true,
  isNode: true
});