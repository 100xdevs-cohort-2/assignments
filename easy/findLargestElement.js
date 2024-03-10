/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let res = numbers[0];
  for (elm in numbers) {
    if (numbers[elm] > res) {
      res = numbers[elm];
    }
  }
  return res;
}

module.exports = findLargestElement;
