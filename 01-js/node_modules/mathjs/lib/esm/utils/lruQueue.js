// (c) 2018, Mariusz Nowak
// SPDX-License-Identifier: ISC
// Derived from https://github.com/medikoo/lru-queue
export function lruQueue(limit) {
  var size = 0;
  var base = 1;
  var queue = Object.create(null);
  var map = Object.create(null);
  var index = 0;
  var del = function del(id) {
    var oldIndex = map[id];
    if (!oldIndex) return;
    delete queue[oldIndex];
    delete map[id];
    --size;
    if (base !== oldIndex) return;
    if (!size) {
      index = 0;
      base = 1;
      return;
    }
    while (!Object.prototype.hasOwnProperty.call(queue, ++base)) {/* empty */}
  };
  limit = Math.abs(limit);
  return {
    hit: function hit(id) {
      var oldIndex = map[id];
      var nuIndex = ++index;
      queue[nuIndex] = id;
      map[id] = nuIndex;
      if (!oldIndex) {
        ++size;
        if (size <= limit) return undefined;
        id = queue[base];
        del(id);
        return id;
      }
      delete queue[oldIndex];
      if (base !== oldIndex) return undefined;
      while (!Object.prototype.hasOwnProperty.call(queue, ++base)) {/* empty */}
      return undefined;
    },
    delete: del,
    clear: function clear() {
      size = index = 0;
      base = 1;
      queue = Object.create(null);
      map = Object.create(null);
    }
  };
}