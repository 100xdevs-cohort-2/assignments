"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var chunk_JP2YPGD2_exports = {};
__export(chunk_JP2YPGD2_exports, {
  cleanupCache: () => cleanupCache
});
module.exports = __toCommonJS(chunk_JP2YPGD2_exports);
var import_chunk_PQIJMNJM = require("./chunk-PQIJMNJM.js");
var import_chunk_XOY2RY3L = require("./chunk-XOY2RY3L.js");
var import_chunk_VBXJIVYU = require("./chunk-VBXJIVYU.js");
var import_debug = __toESM(require("@prisma/debug"));
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var import_util = require("util");
var import_p_map = (0, import_chunk_VBXJIVYU.__toESM)((0, import_chunk_PQIJMNJM.require_p_map)());
var import_rimraf = (0, import_chunk_VBXJIVYU.__toESM)((0, import_chunk_PQIJMNJM.require_rimraf)());
var debug = (0, import_debug.default)("cleanupCache");
var del = (0, import_util.promisify)(import_rimraf.default);
async function cleanupCache(n = 5) {
  try {
    const rootCacheDir = await (0, import_chunk_XOY2RY3L.getRootCacheDir)();
    if (!rootCacheDir) {
      debug("no rootCacheDir found");
      return;
    }
    const channel = "master";
    const cacheDir = import_path.default.join(rootCacheDir, channel);
    const dirs = await import_fs.default.promises.readdir(cacheDir);
    const dirsWithMeta = await Promise.all(
      dirs.map(async (dirName) => {
        const dir = import_path.default.join(cacheDir, dirName);
        const statResult = await import_fs.default.promises.stat(dir);
        return {
          dir,
          created: statResult.birthtime
        };
      })
    );
    dirsWithMeta.sort((a, b) => a.created < b.created ? 1 : -1);
    const dirsToRemove = dirsWithMeta.slice(n);
    await (0, import_p_map.default)(dirsToRemove, (dir) => del(dir.dir), { concurrency: 20 });
  } catch (e) {
  }
}
