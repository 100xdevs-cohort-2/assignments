// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

function counter(count, limit) {
  // Base case: stop when the count reaches the limit
  if (count > limit) {
    console.log("Counter reached the limit.");
    return;
  }
  console.log("Count:", count);
  count++;
  setTimeout(() => {
    counter(count, limit);
  }, 1000);
}

// Start the counter from 1 and set the limit (e.g., 5)
counter(1, 5);
