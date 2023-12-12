## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint
at the bottom of the file if you get stuck.

- METHOD-1 `infinite loop enabled purposely`

```js
function tick(cb) {
  return setTimeout(cb, 1000);
}

function main() {
  let counter = 0;
  let setTimeoutId = null;

  function cb() {
    ++counter;
    console.log({ counter });
    setTimeoutId = tick(cb);
  }

  setTimeoutId = tick(cb);

  // To stop the counter after a certain number of seconds (e.g., 10 seconds)
  setTimeout(function () {
    clearTimeout(setTimeoutId);
    console.log('Counter stopped after 10 seconds.');
  }, 10000);
}

main();
```

- METHOD2:
  `imporvement and chat with GPT suggested use array to clear timeouts later`

```js
function tick(counter, maxCount, timeouts) {
  console.log({ counter });

  // Stop creating timeouts after reaching the specified maximum count
  if (counter < maxCount) {
    const timeoutId = setTimeout(
      () => tick(counter + 1, maxCount, timeouts),
      1000
    );
    timeouts.push(timeoutId);
  }
}

function main() {
  const maxCount = 10;
  const timeouts = [];

  tick(0, maxCount, timeouts);

  // Stop all timeouts after a certain condition (e.g., 10 seconds)
  setTimeout(() => {
    timeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    console.log('Counters stopped after 10 seconds.');
  }, maxCount * 1000);
}

main();
```

(Hint: setTimeout)
