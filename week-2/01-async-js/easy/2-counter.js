// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function startCounter() {
  let count = 0;
  function increment() {
    console.log(count);
    count++;
    setTimeout(increment, 1000);
  }
  increment();
}

startCounter();