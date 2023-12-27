/**
 * @summary Counter without setInterval
 * Without using setInterval, try to code a `counter` in Javascript.
 * There is a hint at the bottom of the file if you get stuck.
 * (Hint: setTimeout)
 * @param {counterLimit} number - Set the limit for the `counter`
 * @param {timeInterval} number - Set the interval value for increment of the `counter`
 */
function createCounterWithTimeout(counterLimit = 10, timeInterval = 1000) {
  let counter = 0;

  function increment() {
    console.log({ counter: counter++ });
  }

  let timer = setTimeout(function myTimer() {
    increment();
    timer = setTimeout(myTimer, timeInterval);
    if (counter >= counterLimit) clearTimeout(timer);
  }, timeInterval);
}

createCounterWithTimeout();
