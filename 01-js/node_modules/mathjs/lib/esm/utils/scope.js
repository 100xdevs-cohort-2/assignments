import { createEmptyMap, assign } from './map.js';

/**
 * Create a new scope which can access the parent scope,
 * but does not affect it when written. This is suitable for variable definitions
 * within a block node, or function definition.
 *
 * If parent scope has a createSubScope method, it delegates to that. Otherwise,
 * creates an empty map, and copies the parent scope to it, adding in
 * the remaining `args`.
 *
 * @param {Map} parentScope
 * @param  {...any} args
 * @returns {Map}
 */
export function createSubScope(parentScope) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (typeof parentScope.createSubScope === 'function') {
    return assign(parentScope.createSubScope(), ...args);
  }
  return assign(createEmptyMap(), parentScope, ...args);
}