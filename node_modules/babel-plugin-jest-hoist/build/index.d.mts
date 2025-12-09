import { Identifier } from "@babel/types";
import { PluginObj } from "@babel/core";

//#region src/index.d.ts

declare function jestHoist(): PluginObj<{
  declareJestObjGetterIdentifier: () => Identifier;
  jestObjGetterIdentifier?: Identifier;
}>;
//#endregion
export { jestHoist as default };