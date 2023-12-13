"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  config: true,
  IndexError: true,
  DimensionError: true,
  ArgumentsError: true,
  create: true,
  factory: true
};
Object.defineProperty(exports, "ArgumentsError", {
  enumerable: true,
  get: function get() {
    return _ArgumentsError.ArgumentsError;
  }
});
Object.defineProperty(exports, "DimensionError", {
  enumerable: true,
  get: function get() {
    return _DimensionError.DimensionError;
  }
});
Object.defineProperty(exports, "IndexError", {
  enumerable: true,
  get: function get() {
    return _IndexError.IndexError;
  }
});
Object.defineProperty(exports, "config", {
  enumerable: true,
  get: function get() {
    return _configReadonly.config;
  }
});
Object.defineProperty(exports, "create", {
  enumerable: true,
  get: function get() {
    return _create.create;
  }
});
Object.defineProperty(exports, "factory", {
  enumerable: true,
  get: function get() {
    return _factory.factory;
  }
});
var _configReadonly = require("./configReadonly.js");
var _pureFunctionsAnyGenerated = require("./pureFunctionsAny.generated.js");
Object.keys(_pureFunctionsAnyGenerated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _pureFunctionsAnyGenerated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pureFunctionsAnyGenerated[key];
    }
  });
});
var _impureFunctionsAnyGenerated = require("./impureFunctionsAny.generated.js");
Object.keys(_impureFunctionsAnyGenerated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _impureFunctionsAnyGenerated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _impureFunctionsAnyGenerated[key];
    }
  });
});
var _typeChecks = require("./typeChecks.js");
Object.keys(_typeChecks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _typeChecks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typeChecks[key];
    }
  });
});
var _IndexError = require("../error/IndexError.js");
var _DimensionError = require("../error/DimensionError.js");
var _ArgumentsError = require("../error/ArgumentsError.js");
var _dependenciesAnyGenerated = require("./dependenciesAny.generated.js");
Object.keys(_dependenciesAnyGenerated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _dependenciesAnyGenerated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dependenciesAnyGenerated[key];
    }
  });
});
var _factoriesAny = require("../factoriesAny.js");
Object.keys(_factoriesAny).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _factoriesAny[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _factoriesAny[key];
    }
  });
});
var _create = require("../core/create.js");
var _factory = require("../utils/factory.js");