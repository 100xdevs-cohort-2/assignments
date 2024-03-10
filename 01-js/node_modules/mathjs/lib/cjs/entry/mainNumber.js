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
var _pureFunctionsNumberGenerated = require("./pureFunctionsNumber.generated.js");
Object.keys(_pureFunctionsNumberGenerated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _pureFunctionsNumberGenerated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pureFunctionsNumberGenerated[key];
    }
  });
});
var _impureFunctionsNumberGenerated = require("./impureFunctionsNumber.generated.js");
Object.keys(_impureFunctionsNumberGenerated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _impureFunctionsNumberGenerated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _impureFunctionsNumberGenerated[key];
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
var _dependenciesNumberGenerated = require("./dependenciesNumber.generated.js");
Object.keys(_dependenciesNumberGenerated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _dependenciesNumberGenerated[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _dependenciesNumberGenerated[key];
    }
  });
});
var _factoriesNumber = require("../factoriesNumber.js");
Object.keys(_factoriesNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _factoriesNumber[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _factoriesNumber[key];
    }
  });
});
var _create = require("../core/create.js");
var _factory = require("../utils/factory.js");