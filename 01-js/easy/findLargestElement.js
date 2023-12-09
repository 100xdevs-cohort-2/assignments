/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let n = numbers.length;
  let max = numbers[0];

  for (let i = 0; i < n; i++) {
    if (max < numbers[i]) {
      max = numbers[i];
    }
  }
  return max;
}

module.exports = findLargestElement;
