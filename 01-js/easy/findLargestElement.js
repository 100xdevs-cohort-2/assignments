/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let max_num = numbers[0];
  for (let i = 0; i < numbers.length; i++)
    if (max_num < numbers[i]) {
      max_num = numbers[i];
    }
  return max_num;
}

module.exports = findLargestElement;
