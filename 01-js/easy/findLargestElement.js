/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let largestNumber = numbers[0];
  for (const num of numbers) {
    if (num > largestNumber) {
      largestNumber = num;
    }
  }

  return largestNumber;
}

module.exports = findLargestElement;
