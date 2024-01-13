/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  const sortedNums = numbers.slice().sort((a, b) => a - b);
  return sortedNums[numbers.length - 1];
}

module.exports = findLargestElement;
