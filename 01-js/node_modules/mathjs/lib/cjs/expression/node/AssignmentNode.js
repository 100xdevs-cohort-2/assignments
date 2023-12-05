"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAssignmentNode = void 0;
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
var _assign = require("./utils/assign.js");
var _operators = require("../operators.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'AssignmentNode';
var dependencies = ['subset', '?matrix',
// FIXME: should not be needed at all, should be handled by subset
'Node'];
var createAssignmentNode = exports.createAssignmentNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var subset = _ref.subset,
    matrix = _ref.matrix,
    Node = _ref.Node;
  var access = (0, _access.accessFactory)({
    subset: subset
  });
  var assign = (0, _assign.assignFactory)({
    subset: subset,
    matrix: matrix
  });

  /*
   * Is parenthesis needed?
   * @param {node} node
   * @param {string} [parenthesis='keep']
   * @param {string} implicit
   * @private
   */
  function needParenthesis(node, parenthesis, implicit) {
    if (!parenthesis) {
      parenthesis = 'keep';
    }
    var precedence = (0, _operators.getPrecedence)(node, parenthesis, implicit);
    var exprPrecedence = (0, _operators.getPrecedence)(node.value, parenthesis, implicit);
    return parenthesis === 'all' || exprPrecedence !== null && exprPrecedence <= precedence;
  }
  var AssignmentNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(AssignmentNode, _Node);
    var _super = _createSuper(AssignmentNode);
    /**
     * @constructor AssignmentNode
     * @extends {Node}
     *
     * Define a symbol, like `a=3.2`, update a property like `a.b=3.2`, or
     * replace a subset of a matrix like `A[2,2]=42`.
     *
     * Syntax:
     *
     *     new AssignmentNode(symbol, value)
     *     new AssignmentNode(object, index, value)
     *
     * Usage:
     *
     *    new AssignmentNode(new SymbolNode('a'), new ConstantNode(2))  // a=2
     *    new AssignmentNode(new SymbolNode('a'),
     *                       new IndexNode('b'),
     *                       new ConstantNode(2))   // a.b=2
     *    new AssignmentNode(new SymbolNode('a'),
     *                       new IndexNode(1, 2),
     *                       new ConstantNode(3))  // a[1,2]=3
     *
     * @param {SymbolNode | AccessorNode} object
     *     Object on which to assign a value
     * @param {IndexNode} [index=null]
     *     Index, property name or matrix index. Optional. If not provided
     *     and `object` is a SymbolNode, the property is assigned to the
     *     global scope.
     * @param {Node} value
     *     The value to be assigned
     */
    function AssignmentNode(object, index, value) {
      var _this;
      (0, _classCallCheck2["default"])(this, AssignmentNode);
      _this = _super.call(this);
      _this.object = object;
      _this.index = value ? index : null;
      _this.value = value || index;

      // validate input
      if (!(0, _is.isSymbolNode)(object) && !(0, _is.isAccessorNode)(object)) {
        throw new TypeError('SymbolNode or AccessorNode expected as "object"');
      }
      if ((0, _is.isSymbolNode)(object) && object.name === 'end') {
        throw new Error('Cannot assign to symbol "end"');
      }
      if (_this.index && !(0, _is.isIndexNode)(_this.index)) {
        // index is optional
        throw new TypeError('IndexNode expected as "index"');
      }
      if (!(0, _is.isNode)(_this.value)) {
        throw new TypeError('Node expected as "value"');
      }
      return _this;
    }

    // class name for typing purposes:
    (0, _createClass2["default"])(AssignmentNode, [{
      key: "name",
      get:
      // readonly property name
      function get() {
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
      key: "isAssignmentNode",
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
        var evalIndex = this.index ? this.index._compile(math, argNames) : null;
        var evalValue = this.value._compile(math, argNames);
        var name = this.object.name;
        if (!this.index) {
          // apply a variable to the scope, for example `a=2`
          if (!(0, _is.isSymbolNode)(this.object)) {
            throw new TypeError('SymbolNode expected as object');
          }
          return function evalAssignmentNode(scope, args, context) {
            var value = evalValue(scope, args, context);
            scope.set(name, value);
            return value;
          };
        } else if (this.index.isObjectProperty()) {
          // apply an object property for example `a.b=2`
          var prop = this.index.getObjectProperty();
          return function evalAssignmentNode(scope, args, context) {
            var object = evalObject(scope, args, context);
            var value = evalValue(scope, args, context);
            (0, _customs.setSafeProperty)(object, prop, value);
            return value;
          };
        } else if ((0, _is.isSymbolNode)(this.object)) {
          // update a matrix subset, for example `a[2]=3`
          return function evalAssignmentNode(scope, args, context) {
            var childObject = evalObject(scope, args, context);
            var value = evalValue(scope, args, context);
            // Important:  we pass childObject instead of context:
            var index = evalIndex(scope, args, childObject);
            scope.set(name, assign(childObject, index, value));
            return value;
          };
        } else {
          // isAccessorNode(node.object) === true
          // update a matrix subset, for example `a.b[2]=3`

          // we will not use the compile function of the AccessorNode, but
          // compile it ourselves here as we need the parent object of the
          // AccessorNode:
          // wee need to apply the updated object to parent object
          var evalParentObject = this.object.object._compile(math, argNames);
          if (this.object.index.isObjectProperty()) {
            var parentProp = this.object.index.getObjectProperty();
            return function evalAssignmentNode(scope, args, context) {
              var parent = evalParentObject(scope, args, context);
              var childObject = (0, _customs.getSafeProperty)(parent, parentProp);
              // Important: we pass childObject instead of context:
              var index = evalIndex(scope, args, childObject);
              var value = evalValue(scope, args, context);
              (0, _customs.setSafeProperty)(parent, parentProp, assign(childObject, index, value));
              return value;
            };
          } else {
            // if some parameters use the 'end' parameter, we need to calculate
            // the size
            var evalParentIndex = this.object.index._compile(math, argNames);
            return function evalAssignmentNode(scope, args, context) {
              var parent = evalParentObject(scope, args, context);
              // Important: we pass parent instead of context:
              var parentIndex = evalParentIndex(scope, args, parent);
              var childObject = access(parent, parentIndex);
              // Important:  we pass childObject instead of context
              var index = evalIndex(scope, args, childObject);
              var value = evalValue(scope, args, context);
              assign(parent, parentIndex, assign(childObject, index, value));
              return value;
            };
          }
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
        if (this.index) {
          callback(this.index, 'index', this);
        }
        callback(this.value, 'value', this);
      }

      /**
       * Create a new AssignmentNode whose children are the results of calling
       * the provided callback function for each child of the original node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {AssignmentNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        var object = this._ifNode(callback(this.object, 'object', this));
        var index = this.index ? this._ifNode(callback(this.index, 'index', this)) : null;
        var value = this._ifNode(callback(this.value, 'value', this));
        return new AssignmentNode(object, index, value);
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {AssignmentNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        return new AssignmentNode(this.object, this.index, this.value);
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
        var index = this.index ? this.index.toString(options) : '';
        var value = this.value.toString(options);
        if (needParenthesis(this, options && options.parenthesis, options && options.implicit)) {
          value = '(' + value + ')';
        }
        return object + index + ' = ' + value;
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
          index: this.index,
          value: this.value
        };
      }

      /**
       * Instantiate an AssignmentNode from its JSON representation
       * @param {Object} json
       *     An object structured like
       *     `{"mathjs": "AssignmentNode", object: ..., index: ..., value: ...}`,
       *     where mathjs is optional
       * @returns {AssignmentNode}
       */
    }, {
      key: "toHTML",
      value:
      /**
       * Get HTML representation
       * @param {Object} options
       * @return {string}
       */
      function toHTML(options) {
        var object = this.object.toHTML(options);
        var index = this.index ? this.index.toHTML(options) : '';
        var value = this.value.toHTML(options);
        if (needParenthesis(this, options && options.parenthesis, options && options.implicit)) {
          value = '<span class="math-paranthesis math-round-parenthesis">(</span>' + value + '<span class="math-paranthesis math-round-parenthesis">)</span>';
        }
        return object + index + '<span class="math-operator math-assignment-operator ' + 'math-variable-assignment-operator math-binary-operator">=</span>' + value;
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
        var index = this.index ? this.index.toTex(options) : '';
        var value = this.value.toTex(options);
        if (needParenthesis(this, options && options.parenthesis, options && options.implicit)) {
          value = "\\left(".concat(value, "\\right)");
        }
        return object + index + '=' + value;
      }
    }], [{
      key: "fromJSON",
      value: function fromJSON(json) {
        return new AssignmentNode(json.object, json.index, json.value);
      }
    }]);
    return AssignmentNode;
  }(Node);
  (0, _defineProperty2["default"])(AssignmentNode, "name", name);
  return AssignmentNode;
}, {
  isClass: true,
  isNode: true
});