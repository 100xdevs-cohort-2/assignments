import _extends from "@babel/runtime/helpers/extends";
import { DEFAULT_CONFIG } from '../core/config.js';
import { MATRIX_OPTIONS, NUMBER_OPTIONS } from '../core/function/config.js';

// create a read-only version of config
export var config = /* #__PURE__ */function config(options) {
  if (options) {
    throw new Error('The global config is readonly. \n' + 'Please create a mathjs instance if you want to change the default configuration. \n' + 'Example:\n' + '\n' + '  import { create, all } from \'mathjs\';\n' + '  const mathjs = create(all);\n' + '  mathjs.config({ number: \'BigNumber\' });\n');
  }
  return Object.freeze(DEFAULT_CONFIG);
};
_extends(config, DEFAULT_CONFIG, {
  MATRIX_OPTIONS,
  NUMBER_OPTIONS
});