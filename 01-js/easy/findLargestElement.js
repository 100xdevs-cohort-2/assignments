/*
  This function `findLargestElement` is designed to find the largest number in an array.
  It takes an array of numbers as an argument.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // Initialize the variable `max` with the first element of the array
    let max = numbers[0];

    // Iterate over each number in the array
    numbers.forEach(number => {
        // If the current number is greater than the current max
        if(number > max){
            // Update max with the current number
            max = number;
        }
    });

    // After checking all numbers, return the max number
    return max;
}

// Export the function for use in other modules
module.exports = findLargestElement;