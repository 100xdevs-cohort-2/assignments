/**
 * Log a console.warn message only once
 */
export var warnOnce = (() => {
  var messages = {};
  return function warnOnce() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var message = args.join(', ');
    if (!messages[message]) {
      messages[message] = true;
      console.warn('Warning:', ...args);
    }
  };
})();