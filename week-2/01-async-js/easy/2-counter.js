// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



let a = 1;
function interval() {
  console.log(a);
  a++;
  setTimeout(interval, 1000);
}
setTimeout(interval, 1000);




































































// (Hint: setTimeout)