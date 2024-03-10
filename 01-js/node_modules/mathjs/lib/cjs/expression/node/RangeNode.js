"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRangeNode = void 0;
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
var name = 'RangeNode';
var dependencies = ['Node'];
var createRangeNode = exports.createRangeNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var Node = _ref.Node;
  /**
   * Calculate the necessary parentheses
   * @param {Node} node
   * @param {string} parenthesis
   * @param {string} implicit
   * @return {Object} parentheses
   * @private
   */
  function calculateNecessaryParentheses(node, parenthesis, implicit) {
    var precedence = (0, _operators.getPrecedence)(node, parenthesis, implicit);
    var parens = {};
    var startPrecedence = (0, _operators.getPrecedence)(node.start, parenthesis, implicit);
    parens.start = startPrecedence !== null && startPrecedence <= precedence || parenthesis === 'all';
    if (node.step) {
      var stepPrecedence = (0, _operators.getPrecedence)(node.step, parenthesis, implicit);
      parens.step = stepPrecedence !== null && stepPrecedence <= precedence || parenthesis === 'all';
    }
    var endPrecedence = (0, _operators.getPrecedence)(node.end, parenthesis, implicit);
    parens.end = endPrecedence !== null && endPrecedence <= precedence || parenthesis === 'all';
    return parens;
  }
  var RangeNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(RangeNode, _Node);
    var _super = _createSuper(RangeNode);
    /**
     * @constructor RangeNode
     * @extends {Node}
     * create a range
     * @param {Node} start  included lower-bound
     * @param {Node} end    included upper-bound
     * @param {Node} [step] optional step
     */
    function RangeNode(start, end, step) {
      var _this;
      (0, _classCallCheck2["default"])(this, RangeNode);
      _this = _super.call(this);
      // validate inputs
      if (!(0, _is.isNode)(start)) throw new TypeError('Node expected');
      if (!(0, _is.isNode)(end)) throw new TypeError('Node expected');
      if (step && !(0, _is.isNode)(step)) throw new TypeError('Node expected');
      if (arguments.length > 3) throw new Error('Too many arguments');
      _this.start = start; // included lower-bound
      _this.end = end; // included upper-bound
      _this.step = step || null; // optional step
      return _this;
    }
    (0, _createClass2["default"])(RangeNode, [{
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isRangeNode",
      get: function get() {
        return true;
      }

      /**
       * Check whether the RangeNode needs the `end` symbol to be defined.
       * This end is the size of the Matrix in current dimension.
       * @return {boolean}
       */
    }, {
      key: "needsEnd",
      value: function needsEnd() {
        // find all `end` symbols in this RangeNode
        var endSymbols = this.filter(function (node) {
          return (0, _is.isSymbolNode)(node) && node.name === 'end';
        });
        return endSymbols.length > 0;
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
        var range = math.range;
        var evalStart = this.start._compile(math, argNames);
        var evalEnd = this.end._compile(math, argNames);
        if (this.step) {
          var evalStep = this.step._compile(math, argNames);
          return function evalRangeNode(scope, args, context) {
            return range(evalStart(scope, args, context), evalEnd(scope, args, context), evalStep(scope, args, context));
          };
        } else {
          return function evalRangeNode(scope, args, context) {
            return range(evalStart(scope, args, context), evalEnd(scope, args, context));
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
        callback(this.start, 'start', this);
        callback(this.end, 'end', this);
        if (this.step) {
          callback(this.step, 'step', this);
        }
      }

      /**
       * Create a new RangeNode whose children are the results of calling
       * the provided callback function for each child of the original node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {RangeNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        return new RangeNode(this._ifNode(callback(this.start, 'start', this)), this._ifNode(callback(this.end, 'end', this)), this.step && this._ifNode(callback(this.step, 'step', this)));
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {RangeNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        return new RangeNode(this.start, this.end, this.step && this.step);
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
        var parens = calculateNecessaryParentheses(this, parenthesis, options && options.implicit);

        // format string as start:step:stop
        var str;
        var start = this.start.toString(options);
        if (parens.start) {
          start = '(' + start + ')';
        }
        str = start;
        if (this.step) {
          var step = this.step.toString(options);
          if (parens.step) {
            step = '(' + step + ')';
          }
          str += ':' + step;
        }
        var end = this.end.toString(options);
        if (parens.end) {
          end = '(' + end + ')';
        }
        str += ':' + end;
        return str;
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
          start: this.start,
          end: this.end,
          step: this.step
        };
      }

      /**
       * Instantiate an RangeNode from its JSON representation
       * @param {Object} json
       *     An object structured like
       *     `{"mathjs": "RangeNode", "start": ..., "end": ..., "step": ...}`,
       *     where mathjs is optional
       * @returns {RangeNode}
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
        var parens = calculateNecessaryParentheses(this, parenthesis, options && options.implicit);

        // format string as start:step:stop
        var str;
        var start = this.start.toHTML(options);
        if (parens.start) {
          start = '<span class="math-parenthesis math-round-parenthesis">(</span>' + start + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        str = start;
        if (this.step) {
          var step = this.step.toHTML(options);
          if (parens.step) {
            step = '<span class="math-parenthesis math-round-parenthesis">(</span>' + step + '<span class="math-parenthesis math-round-parenthesis">)</span>';
          }
          str += '<span class="math-operator math-range-operator">:</span>' + step;
        }
        var end = this.end.toHTML(options);
        if (parens.end) {
          end = '<span class="math-parenthesis math-round-parenthesis">(</span>' + end + '<span class="math-parenthesis math-round-parenthesis">)</span>';
        }
        str += '<span class="math-operator math-range-operator">:</span>' + end;
        return str;
      }

      /**
       * Get LaTeX representation
       * @params {Object} options
       * @return {string} str
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        var parenthesis = options && options.parenthesis ? options.parenthesis : 'keep';
        var parens = calculateNecessaryParentheses(this, parenthesis, options && options.implicit);
        var str = this.start.toTex(options);
        if (parens.start) {
          str = "\\left(".concat(str, "\\right)");
        }
        if (this.step) {
          var step = this.step.toTex(options);
          if (parens.step) {
            step = "\\left(".concat(step, "\\right)");
          }
          str += ':' + step;
        }
        var end = this.end.toTex(options);
        if (parens.end) {
          end = "\\left(".concat(end, "\\right)");
        }
        str += ':' + end;
        return str;
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new RangeNode(json.start, json.end, json.step);
      }
    }]);
    return RangeNode;
  }(Node);
  (0, _defineProperty2["default"])(RangeNode, "name", name);
  return RangeNode;
}, {
  isClass: true,
  isNode: true
});