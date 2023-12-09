/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  numbers.sort(function (a, b) {
    return b - a;
  });
  return numbers[0];
}

module.exports = findLargestElement;
