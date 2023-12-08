/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let maxValue = numbers[0];
  for (let ind = 1; ind < numbers.length; ind++) {
    if (numbers[ind] > maxValue) maxValue = numbers[ind];
  }

  return maxValue;
}

module.exports = findLargestElement;
