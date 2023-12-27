let count = 0;
function counterWithSetInterval() {
  console.log(count++);
}
setInterval(counterWithSetInterval, 1000);
