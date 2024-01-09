let count = 5;
function myCounter() {
  console.log(count);
  count--;
  if (count == 0) {
    clearInterval(interval);
  }
}
let interval = setInterval(myCounter, 3000);
