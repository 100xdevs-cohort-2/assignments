/* 

## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. 
There is a hint at the bottom of the file if you get stuck.

*/
let count = 0;

function counter(value) {
  function next() {
    // let startTime = Date.now();
    if (count <= value) {
      console.log(count);
      count++;
      setTimeout(next, 1000);
    }
    // console.log(Date.now() - startTime);
  }
  next();
}
counter(5);
