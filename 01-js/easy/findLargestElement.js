/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let sortedArray = numbers.sort((a, b) => (a < b ? 1 : -1));

  return sortedArray[0];
}

module.exports = findLargestElement;
