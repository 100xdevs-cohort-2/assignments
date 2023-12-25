// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count = 0;

const incrementCounter = () => {
  console.log(count);
  count++;
  setTimeout(incrementCounter, 1000);
};

incrementCounter();

// (Hint: setTimeout);
