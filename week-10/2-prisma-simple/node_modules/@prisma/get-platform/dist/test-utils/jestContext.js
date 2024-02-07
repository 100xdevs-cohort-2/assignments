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
var jestContext_exports = {};
__export(jestContext_exports, {
  jestConsoleContext: () => import_chunk_LVABMATQ.jestConsoleContext,
  jestContext: () => import_chunk_LVABMATQ.jestContext,
  jestProcessContext: () => import_chunk_LVABMATQ.jestProcessContext
});
module.exports = __toCommonJS(jestContext_exports);
var import_chunk_LVABMATQ = require("../chunk-LVABMATQ.js");
var import_chunk_UPBZT3NW = require("../chunk-UPBZT3NW.js");
