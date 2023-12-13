/*
Create a counter in JavaScript without using setInterval().
It should go up as time goes by in intervals of 1 second.
*/

let count = 0;

function counter() {
  setTimeout(() => {
    console.log(count);
    count++;
    counter();
  }, 1000);
}

counter();
