/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length === 0) {
      // Handle the case where the array is empty
      return undefined;
    }
  
    let largestElement = numbers[0]; // Assume the first element is the largest
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largestElement) {
        largestElement = numbers[i]; // Update the largest element
      }
    }
  
    return largestElement;
  }
  
  module.exports = findLargestElement;
  