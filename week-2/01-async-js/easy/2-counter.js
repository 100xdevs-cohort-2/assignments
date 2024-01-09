// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout);
let c = 0;

function count() {
  setTimeout(count, 1000);
  c++;

  console.log(c);
}

console.log(count());
