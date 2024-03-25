// ## Counter without setInterval
//
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function countForWithoutSetInterval(seconds) {
  let count = 1;
  function printCounter() {
    console.log(`Counter: ${count}`);
    count++;

    if (count <= seconds) {
      setTimeout(printCounter, 1000);
    }
  }
  printCounter();
}
countForWithoutSetInterval(10);

// Output:
// Counter: 1
// Counter: 2
// Counter: 3
// Counter: 4
// Counter: 5
// Counter: 6
// Counter: 7
// Counter: 8
// Counter: 9
// Counter: 10
