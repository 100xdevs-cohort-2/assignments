//#region src/index.d.ts
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
type Pragmas = Record<string, string | Array<string>>;
declare function extract(contents: string): string;
declare function strip(contents: string): string;
declare function parse(docblock: string): Pragmas;
declare function parseWithComments(docblock: string): {
  comments: string;
  pragmas: Pragmas;
};
declare function print({
  comments,
  pragmas
}: {
  comments?: string;
  pragmas?: Pragmas;
}): string;
//#endregion
export { extract, parse, parseWithComments, print, strip };