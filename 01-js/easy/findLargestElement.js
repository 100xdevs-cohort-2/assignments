/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  //return numbers.max();

  if (numbers.length < 1) {
    return undefined;
  }

  let max = -Number.MAX_SAFE_INTEGER;

  numbers.forEach((n) => {
    if (n > max) {
      max = n;
    }
  });

  return max;
}

module.exports = findLargestElement;
