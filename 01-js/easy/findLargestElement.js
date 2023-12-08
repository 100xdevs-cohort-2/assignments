/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let max = Number.NEGATIVE_INFINITY;
  if (numbers.length === 0) return undefined;
  numbers.forEach((num) => {
    if (max < num) max = num;
  });
  return max;
}

module.exports = findLargestElement;
