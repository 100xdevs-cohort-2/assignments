"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFunctionNode = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _is = require("../../utils/is.js");
var _string = require("../../utils/string.js");
var _object = require("../../utils/object.js");
var _customs = require("../../utils/customs.js");
var _scope = require("../../utils/scope.js");
var _factory = require("../../utils/factory.js");
var _latex = require("../../utils/latex.js");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var name = 'FunctionNode';
var dependencies = ['math', 'Node', 'SymbolNode'];
var createFunctionNode = exports.createFunctionNode = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var _class;
  var math = _ref.math,
    Node = _ref.Node,
    SymbolNode = _ref.SymbolNode;
  /* format to fixed length */
  var strin = function strin(entity) {
    return (0, _string.format)(entity, {
      truncate: 78
    });
  };

  /*
   * Expand a LaTeX template
   *
   * @param {string} template
   * @param {Node} node
   * @param {Object} options
   * @private
   **/
  function expandTemplate(template, node, options) {
    var latex = '';

    // Match everything of the form ${identifier} or ${identifier[2]} or $$
    // while submatching identifier and 2 (in the second case)
    var regex = /\$(?:\{([a-z_][a-z_0-9]*)(?:\[([0-9]+)\])?\}|\$)/gi;
    var inputPos = 0; // position in the input string
    var match;
    while ((match = regex.exec(template)) !== null) {
      // go through all matches
      // add everything in front of the match to the LaTeX string
      latex += template.substring(inputPos, match.index);
      inputPos = match.index;
      if (match[0] === '$$') {
        // escaped dollar sign
        latex += '$';
        inputPos++;
      } else {
        // template parameter
        inputPos += match[0].length;
        var property = node[match[1]];
        if (!property) {
          throw new ReferenceError('Template: Property ' + match[1] + ' does not exist.');
        }
        if (match[2] === undefined) {
          // no square brackets
          switch ((0, _typeof2["default"])(property)) {
            case 'string':
              latex += property;
              break;
            case 'object':
              if ((0, _is.isNode)(property)) {
                latex += property.toTex(options);
              } else if (Array.isArray(property)) {
                // make array of Nodes into comma separated list
                latex += property.map(function (arg, index) {
                  if ((0, _is.isNode)(arg)) {
                    return arg.toTex(options);
                  }
                  throw new TypeError('Template: ' + match[1] + '[' + index + '] is not a Node.');
                }).join(',');
              } else {
                throw new TypeError('Template: ' + match[1] + ' has to be a Node, String or array of Nodes');
              }
              break;
            default:
              throw new TypeError('Template: ' + match[1] + ' has to be a Node, String or array of Nodes');
          }
        } else {
          // with square brackets
          if ((0, _is.isNode)(property[match[2]] && property[match[2]])) {
            latex += property[match[2]].toTex(options);
          } else {
            throw new TypeError('Template: ' + match[1] + '[' + match[2] + '] is not a Node.');
          }
        }
      }
    }
    latex += template.slice(inputPos); // append rest of the template

    return latex;
  }
  var FunctionNode = /*#__PURE__*/function (_Node) {
    (0, _inherits2["default"])(FunctionNode, _Node);
    var _super = _createSuper(FunctionNode);
    /**
     * @constructor FunctionNode
     * @extends {./Node}
     * invoke a list with arguments on a node
     * @param {./Node | string} fn
     *     Item resolving to a function on which to invoke
     *     the arguments, typically a SymboNode or AccessorNode
     * @param {./Node[]} args
     */
    function FunctionNode(fn, args) {
      var _this;
      (0, _classCallCheck2["default"])(this, FunctionNode);
      _this = _super.call(this);
      if (typeof fn === 'string') {
        fn = new SymbolNode(fn);
      }

      // validate input
      if (!(0, _is.isNode)(fn)) throw new TypeError('Node expected as parameter "fn"');
      if (!Array.isArray(args) || !args.every(_is.isNode)) {
        throw new TypeError('Array containing Nodes expected for parameter "args"');
      }
      _this.fn = fn;
      _this.args = args || [];
      return _this;
    }

    // readonly property name
    (0, _createClass2["default"])(FunctionNode, [{
      key: "name",
      get: function get() {
        return this.fn.name || '';
      }
    }, {
      key: "type",
      get: function get() {
        return name;
      }
    }, {
      key: "isFunctionNode",
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
        // compile arguments
        var evalArgs = this.args.map(function (arg) {
          return arg._compile(math, argNames);
        });
        if ((0, _is.isSymbolNode)(this.fn)) {
          var _name = this.fn.name;
          if (!argNames[_name]) {
            // we can statically determine whether the function
            // has the rawArgs property
            var fn = _name in math ? (0, _customs.getSafeProperty)(math, _name) : undefined;
            var isRaw = typeof fn === 'function' && fn.rawArgs === true;
            var resolveFn = function resolveFn(scope) {
              var value;
              if (scope.has(_name)) {
                value = scope.get(_name);
              } else if (_name in math) {
                value = (0, _customs.getSafeProperty)(math, _name);
              } else {
                return FunctionNode.onUndefinedFunction(_name);
              }
              if (typeof value === 'function') {
                return value;
              }
              throw new TypeError("'".concat(_name, "' is not a function; its value is:\n  ").concat(strin(value)));
            };
            if (isRaw) {
              // pass unevaluated parameters (nodes) to the function
              // "raw" evaluation
              var rawArgs = this.args;
              return function evalFunctionNode(scope, args, context) {
                var fn = resolveFn(scope);
                return fn(rawArgs, math, (0, _scope.createSubScope)(scope, args), scope);
              };
            } else {
              // "regular" evaluation
              switch (evalArgs.length) {
                case 0:
                  return function evalFunctionNode(scope, args, context) {
                    var fn = resolveFn(scope);
                    return fn();
                  };
                case 1:
                  return function evalFunctionNode(scope, args, context) {
                    var fn = resolveFn(scope);
                    var evalArg0 = evalArgs[0];
                    return fn(evalArg0(scope, args, context));
                  };
                case 2:
                  return function evalFunctionNode(scope, args, context) {
                    var fn = resolveFn(scope);
                    var evalArg0 = evalArgs[0];
                    var evalArg1 = evalArgs[1];
                    return fn(evalArg0(scope, args, context), evalArg1(scope, args, context));
                  };
                default:
                  return function evalFunctionNode(scope, args, context) {
                    var fn = resolveFn(scope);
                    var values = evalArgs.map(function (evalArg) {
                      return evalArg(scope, args, context);
                    });
                    return fn.apply(void 0, (0, _toConsumableArray2["default"])(values));
                  };
              }
            }
          } else {
            // the function symbol is an argName
            var _rawArgs = this.args;
            return function evalFunctionNode(scope, args, context) {
              var fn = (0, _customs.getSafeProperty)(args, _name);
              if (typeof fn !== 'function') {
                throw new TypeError("Argument '".concat(_name, "' was not a function; received: ").concat(strin(fn)));
              }
              if (fn.rawArgs) {
                // "Raw" evaluation
                return fn(_rawArgs, math, (0, _scope.createSubScope)(scope, args), scope);
              } else {
                var values = evalArgs.map(function (evalArg) {
                  return evalArg(scope, args, context);
                });
                return fn.apply(fn, values);
              }
            };
          }
        } else if ((0, _is.isAccessorNode)(this.fn) && (0, _is.isIndexNode)(this.fn.index) && this.fn.index.isObjectProperty()) {
          // execute the function with the right context:
          // the object of the AccessorNode

          var evalObject = this.fn.object._compile(math, argNames);
          var prop = this.fn.index.getObjectProperty();
          var _rawArgs2 = this.args;
          return function evalFunctionNode(scope, args, context) {
            var object = evalObject(scope, args, context);
            var fn = (0, _customs.getSafeMethod)(object, prop);
            if (fn !== null && fn !== void 0 && fn.rawArgs) {
              // "Raw" evaluation
              return fn(_rawArgs2, math, (0, _scope.createSubScope)(scope, args), scope);
            } else {
              // "regular" evaluation
              var values = evalArgs.map(function (evalArg) {
                return evalArg(scope, args, context);
              });
              return fn.apply(object, values);
            }
          };
        } else {
          // node.fn.isAccessorNode && !node.fn.index.isObjectProperty()
          // we have to dynamically determine whether the function has the
          // rawArgs property
          var fnExpr = this.fn.toString();
          var evalFn = this.fn._compile(math, argNames);
          var _rawArgs3 = this.args;
          return function evalFunctionNode(scope, args, context) {
            var fn = evalFn(scope, args, context);
            if (typeof fn !== 'function') {
              throw new TypeError("Expression '".concat(fnExpr, "' did not evaluate to a function; value is:") + "\n  ".concat(strin(fn)));
            }
            if (fn.rawArgs) {
              // "Raw" evaluation
              return fn(_rawArgs3, math, (0, _scope.createSubScope)(scope, args), scope);
            } else {
              // "regular" evaluation
              var values = evalArgs.map(function (evalArg) {
                return evalArg(scope, args, context);
              });
              return fn.apply(fn, values);
            }
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
        callback(this.fn, 'fn', this);
        for (var i = 0; i < this.args.length; i++) {
          callback(this.args[i], 'args[' + i + ']', this);
        }
      }

      /**
       * Create a new FunctionNode whose children are the results of calling
       * the provided callback function for each child of the original node.
       * @param {function(child: Node, path: string, parent: Node): Node} callback
       * @returns {FunctionNode} Returns a transformed copy of the node
       */
    }, {
      key: "map",
      value: function map(callback) {
        var fn = this._ifNode(callback(this.fn, 'fn', this));
        var args = [];
        for (var i = 0; i < this.args.length; i++) {
          args[i] = this._ifNode(callback(this.args[i], 'args[' + i + ']', this));
        }
        return new FunctionNode(fn, args);
      }

      /**
       * Create a clone of this node, a shallow copy
       * @return {FunctionNode}
       */
    }, {
      key: "clone",
      value: function clone() {
        return new FunctionNode(this.fn, this.args.slice(0));
      }

      /**
       * Throws an error 'Undefined function {name}'
       * @param {string} name
       */
    }, {
      key: "toString",
      value:
      /**
       * Get string representation. (wrapper function)
       * This overrides parts of Node's toString function.
       * If callback is an object containing callbacks, it
       * calls the correct callback for the current node,
       * otherwise it falls back to calling Node's toString
       * function.
       *
       * @param {Object} options
       * @return {string} str
       * @override
       */
      function toString(options) {
        var customString;
        var name = this.fn.toString(options);
        if (options && (0, _typeof2["default"])(options.handler) === 'object' && (0, _object.hasOwnProperty)(options.handler, name)) {
          // callback is a map of callback functions
          customString = options.handler[name](this, options);
        }
        if (typeof customString !== 'undefined') {
          return customString;
        }

        // fall back to Node's toString
        return (0, _get2["default"])((0, _getPrototypeOf2["default"])(FunctionNode.prototype), "toString", this).call(this, options);
      }

      /**
       * Get string representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toString",
      value: function _toString(options) {
        var args = this.args.map(function (arg) {
          return arg.toString(options);
        });
        var fn = (0, _is.isFunctionAssignmentNode)(this.fn) ? '(' + this.fn.toString(options) + ')' : this.fn.toString(options);

        // format the arguments like "add(2, 4.2)"
        return fn + '(' + args.join(', ') + ')';
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
          fn: this.fn,
          args: this.args
        };
      }

      /**
       * Instantiate an AssignmentNode from its JSON representation
       * @param {Object} json  An object structured like
       *                       `{"mathjs": "FunctionNode", fn: ..., args: ...}`,
       *                       where mathjs is optional
       * @returns {FunctionNode}
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
        var args = this.args.map(function (arg) {
          return arg.toHTML(options);
        });

        // format the arguments like "add(2, 4.2)"
        return '<span class="math-function">' + (0, _string.escape)(this.fn) + '</span><span class="math-paranthesis math-round-parenthesis">(</span>' + args.join('<span class="math-separator">,</span>') + '<span class="math-paranthesis math-round-parenthesis">)</span>';
      }

      /**
       * Get LaTeX representation. (wrapper function)
       * This overrides parts of Node's toTex function.
       * If callback is an object containing callbacks, it
       * calls the correct callback for the current node,
       * otherwise it falls back to calling Node's toTex
       * function.
       *
       * @param {Object} options
       * @return {string}
       */
    }, {
      key: "toTex",
      value: function toTex(options) {
        var customTex;
        if (options && (0, _typeof2["default"])(options.handler) === 'object' && (0, _object.hasOwnProperty)(options.handler, this.name)) {
          // callback is a map of callback functions
          customTex = options.handler[this.name](this, options);
        }
        if (typeof customTex !== 'undefined') {
          return customTex;
        }

        // fall back to Node's toTex
        return (0, _get2["default"])((0, _getPrototypeOf2["default"])(FunctionNode.prototype), "toTex", this).call(this, options);
      }

      /**
       * Get LaTeX representation
       * @param {Object} options
       * @return {string} str
       */
    }, {
      key: "_toTex",
      value: function _toTex(options) {
        var args = this.args.map(function (arg) {
          // get LaTeX of the arguments
          return arg.toTex(options);
        });
        var latexConverter;
        if (_latex.latexFunctions[this.name]) {
          latexConverter = _latex.latexFunctions[this.name];
        }

        // toTex property on the function itself
        if (math[this.name] && (typeof math[this.name].toTex === 'function' || (0, _typeof2["default"])(math[this.name].toTex) === 'object' || typeof math[this.name].toTex === 'string')) {
          // .toTex is a callback function
          latexConverter = math[this.name].toTex;
        }
        var customToTex;
        switch ((0, _typeof2["default"])(latexConverter)) {
          case 'function':
            // a callback function
            customToTex = latexConverter(this, options);
            break;
          case 'string':
            // a template string
            customToTex = expandTemplate(latexConverter, this, options);
            break;
          case 'object':
            // an object with different "converters" for different
            // numbers of arguments
            switch ((0, _typeof2["default"])(latexConverter[args.length])) {
              case 'function':
                customToTex = latexConverter[args.length](this, options);
                break;
              case 'string':
                customToTex = expandTemplate(latexConverter[args.length], this, options);
                break;
            }
        }
        if (typeof customToTex !== 'undefined') {
          return customToTex;
        }
        return expandTemplate(_latex.defaultTemplate, this, options);
      }

      /**
       * Get identifier.
       * @return {string}
       */
    }, {
      key: "getIdentifier",
      value: function getIdentifier() {
        return this.type + ':' + this.name;
      }
    }]);
    return FunctionNode;
  }(Node);
  _class = FunctionNode;
  (0, _defineProperty2["default"])(FunctionNode, "name", name);
  (0, _defineProperty2["default"])(FunctionNode, "onUndefinedFunction", function (name) {
    throw new Error('Undefined function ' + name);
  });
  (0, _defineProperty2["default"])(FunctionNode, "fromJSON", function (json) {
    return new _class(json.fn, json.args);
  });
  return FunctionNode;
}, {
  isClass: true,
  isNode: true
});