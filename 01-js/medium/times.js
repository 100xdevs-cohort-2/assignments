function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function calculateTime(n) {
    const startTime = new Date().getTime(); // Get the current time in milliseconds

    // Call the function that performs the calculation
    calculateSum(n);

    const endTime = new Date().getTime(); // Get the current time again

    // Calculate the time difference and convert it to seconds
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;

    return elapsedTimeInSeconds;
}

// Example usage:
const time1 = calculateTime(100);
console.log(`Time for sum from 1-100: ${time1} seconds`);

const time2 = calculateTime(100000);
console.log(`Time for sum from 1-100000: ${time2} seconds`);

const time3 = calculateTime(1000000000);
console.log(`Time for sum from 1-1000000000: ${time3} seconds`);
