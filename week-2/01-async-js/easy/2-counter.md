<!-- ## Counter without setInterval -->

<!-- Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->

function startCounter(count, interval) {
  console.log(count);

  setTimeout(function () {
    if (count > 0) {
      startCounter(count - 1, interval);
    }
  }, interval);
}

<!-- // Example: Start the counter with a count of 5 and an interval of 1000 milliseconds (1 second) -->
startCounter(5, 1000);








































































