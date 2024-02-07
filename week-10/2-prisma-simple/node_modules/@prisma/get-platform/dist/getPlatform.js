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
var getPlatform_exports = {};
__export(getPlatform_exports, {
  computeLibSSLSpecificPaths: () => import_chunk_RAAFO7IT.computeLibSSLSpecificPaths,
  getArchFromUname: () => import_chunk_RAAFO7IT.getArchFromUname,
  getBinaryTargetForCurrentPlatform: () => import_chunk_RAAFO7IT.getBinaryTargetForCurrentPlatform,
  getBinaryTargetForCurrentPlatformInternal: () => import_chunk_RAAFO7IT.getBinaryTargetForCurrentPlatformInternal,
  getPlatformInfo: () => import_chunk_RAAFO7IT.getPlatformInfo,
  getPlatformInfoMemoized: () => import_chunk_RAAFO7IT.getPlatformInfoMemoized,
  getSSLVersion: () => import_chunk_RAAFO7IT.getSSLVersion,
  getos: () => import_chunk_RAAFO7IT.getos,
  parseDistro: () => import_chunk_RAAFO7IT.parseDistro,
  parseLibSSLVersion: () => import_chunk_RAAFO7IT.parseLibSSLVersion,
  parseOpenSSLVersion: () => import_chunk_RAAFO7IT.parseOpenSSLVersion,
  resolveDistro: () => import_chunk_RAAFO7IT.resolveDistro
});
module.exports = __toCommonJS(getPlatform_exports);
var import_chunk_RAAFO7IT = require("./chunk-RAAFO7IT.js");
var import_chunk_NRBYW3FO = require("./chunk-NRBYW3FO.js");
var import_chunk_XC47443Z = require("./chunk-XC47443Z.js");
var import_chunk_XFO73BBC = require("./chunk-XFO73BBC.js");
var import_chunk_UPBZT3NW = require("./chunk-UPBZT3NW.js");
