// creating  a counter that starts from 0 to 60 sec. per sec it will increment the counter value by 1.

let count = 0;

function counter() {
  count += 1;
  console.log(count);
}

setInterval(counter, 2000);
