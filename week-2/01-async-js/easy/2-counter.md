## Counter without setInterval
let i = 0;

function fn() {
  console.log(i++);
  setTimeout(fn,1000);
}
fn();

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.








































































(Hint: setTimeout)