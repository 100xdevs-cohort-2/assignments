// Counter without setInterval

function counterWithoutSetInterval(interval = 1000, count = 0) {
  setTimeout(function () {
    console.log("Count:", count++);
    counterWithoutSetInterval(interval, count);
  }, interval);
}

counterWithoutSetInterval();
