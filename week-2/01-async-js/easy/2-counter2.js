// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

for (let i = 1; i <= 15; i++) {
  setTimeout(() => {
    console.log(i++);
  }, i * 1000);
}

// (Hint: setTimeout)
