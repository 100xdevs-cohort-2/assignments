/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (numbers.length == 0) {
    return;
  }

  let maxElement = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    maxElement = maxElement > numbers[i] ? maxElement : numbers[i];
  }

  return maxElement;
}

module.exports = findLargestElement;
