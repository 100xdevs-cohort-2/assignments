function calculateTime(n) {
  // Record the start time
  const startTime = new Date();

  // Calculate the sum from 1 to n
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  // Record the end time
  const endTime = new Date();

  // Calculate the time difference in seconds
  const elapsedTimeInSeconds = (endTime - startTime) / 1000;

  return elapsedTimeInSeconds;
}

// Example usage:
const result1 = calculateTime(100);
const result2 = calculateTime(100000);
const result3 = calculateTime(1000000000);

console.log(`Time taken for sum from 1-100: ${result1} seconds`);
console.log(`Time taken for sum from 1-100000: ${result2} seconds`);
console.log(`Time taken for sum from 1-1000000000: ${result3} seconds`);
