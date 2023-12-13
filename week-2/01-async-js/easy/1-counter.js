/*
Create a counter in JavaScript.
It should go up as time goes by in intervals of 1 second.
*/

let count = 0;

setInterval(() => {
  console.log(count);
  count += 1;
}, 1000);
