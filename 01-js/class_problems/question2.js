// Calculate the time it takes between a setTimeout call and the inner function actually running

const startTime = performance.now();

setTimeout(() => {
  const endTime = performance.now();
  const elapsedTime = endTime - startTime;

  console.log(`Time elapsed: ${elapsedTime} milliseconds`);
}, 1000);

// Date.now() returns the current timestamp in milliseconds, but it has a resolution of only 1 millisecond. This means it's accurate to the nearest millisecond.
// performance.now() returns a high-resolution time stamp in microseconds (or sometimes milliseconds, depending on the browser). It provides more precision, allowing for more accurate measurements of short time intervals.
