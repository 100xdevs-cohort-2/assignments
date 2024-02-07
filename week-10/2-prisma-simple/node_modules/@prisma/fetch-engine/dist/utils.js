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
var utils_exports = {};
__export(utils_exports, {
  getCacheDir: () => import_chunk_XOY2RY3L.getCacheDir,
  getDownloadUrl: () => import_chunk_XOY2RY3L.getDownloadUrl,
  getRootCacheDir: () => import_chunk_XOY2RY3L.getRootCacheDir,
  overwriteFile: () => import_chunk_XOY2RY3L.overwriteFile
});
module.exports = __toCommonJS(utils_exports);
var import_chunk_XOY2RY3L = require("./chunk-XOY2RY3L.js");
var import_chunk_X37PZICB = require("./chunk-X37PZICB.js");
var import_chunk_VBXJIVYU = require("./chunk-VBXJIVYU.js");
