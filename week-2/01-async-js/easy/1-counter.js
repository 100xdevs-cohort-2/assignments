/**
 * @summary Create a `counter` in JavaScript
 * We have already covered this in the second lesson, but as an easy recap try to code a `counter` in Javascript
 * It should go up as time goes by in intervals of 1 second
 * @param {counterLimit} number - Set the limit for the `counter`
 * @param {timeInterval} number - Set the interval value for increment of the `counter`
 */
function createCounterWithInterval(counterLimit = 10, timeInterval = 1000) {
  let counter = 0;

  const intervalId = setInterval(() => {
    if (counter >= counterLimit) clearInterval(intervalId);
    console.log({ counter: counter++ });
  }, timeInterval);
}

createCounterWithInterval();
