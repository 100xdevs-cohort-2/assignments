"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var env_exports = {};
__export(env_exports, {
  allEngineEnvVarsSet: () => import_chunk_XN5OP4F2.allEngineEnvVarsSet,
  deprecatedEnvVarMap: () => import_chunk_XN5OP4F2.deprecatedEnvVarMap,
  engineEnvVarMap: () => import_chunk_XN5OP4F2.engineEnvVarMap,
  getBinaryEnvVarPath: () => import_chunk_XN5OP4F2.getBinaryEnvVarPath
});
module.exports = __toCommonJS(env_exports);
var import_chunk_XN5OP4F2 = require("./chunk-XN5OP4F2.js");
var import_chunk_X37PZICB = require("./chunk-X37PZICB.js");
var import_chunk_VBXJIVYU = require("./chunk-VBXJIVYU.js");
