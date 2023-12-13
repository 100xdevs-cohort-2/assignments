
let count = 0;

function updateCounter() {
  count++;
  console.log(count);
}


setInterval(updateCounter, 1000);
