let count = 0;
function counterWithSetTimeout() {
  console.log(count++);
  setTimeout(counterWithSetTimeout, 1000);
}

counterWithSetTimeout();
