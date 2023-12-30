let counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);
}

intervalId = setInterval(incrementCounter, 1000);

console.log(intervalId);

setTimeout(function() {
  clearInterval(intervalId);
  console.log("Stop counter");
}, 5000)

// setInterval calls the function after every 1 sec. It is async in nature
// clearInterval is used to stop the setInterval. It is sync in nature.

