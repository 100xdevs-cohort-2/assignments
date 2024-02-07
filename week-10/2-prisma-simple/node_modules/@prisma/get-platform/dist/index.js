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
var dist_exports = {};
__export(dist_exports, {
  assertNodeAPISupported: () => import_chunk_O5EOXX3N.assertNodeAPISupported,
  binaryTargets: () => import_chunk_EOMVB5QX.binaryTargets,
  getBinaryTargetForCurrentPlatform: () => import_chunk_RAAFO7IT.getBinaryTargetForCurrentPlatform,
  getNodeAPIName: () => import_chunk_2U36ISZO.getNodeAPIName,
  getPlatformInfo: () => import_chunk_RAAFO7IT.getPlatformInfo,
  getos: () => import_chunk_RAAFO7IT.getos,
  jestConsoleContext: () => import_chunk_LVABMATQ.jestConsoleContext,
  jestContext: () => import_chunk_LVABMATQ.jestContext,
  jestProcessContext: () => import_chunk_LVABMATQ.jestProcessContext,
  link: () => import_chunk_NRBYW3FO.link
});
module.exports = __toCommonJS(dist_exports);
var import_chunk_6HZWON4S = require("./chunk-6HZWON4S.js");
var import_chunk_LVABMATQ = require("./chunk-LVABMATQ.js");
var import_chunk_O5EOXX3N = require("./chunk-O5EOXX3N.js");
var import_chunk_2U36ISZO = require("./chunk-2U36ISZO.js");
var import_chunk_RAAFO7IT = require("./chunk-RAAFO7IT.js");
var import_chunk_NRBYW3FO = require("./chunk-NRBYW3FO.js");
var import_chunk_XC47443Z = require("./chunk-XC47443Z.js");
var import_chunk_XFO73BBC = require("./chunk-XFO73BBC.js");
var import_chunk_EOMVB5QX = require("./chunk-EOMVB5QX.js");
var import_chunk_UPBZT3NW = require("./chunk-UPBZT3NW.js");
(0, import_chunk_EOMVB5QX.init_binaryTargets)();
