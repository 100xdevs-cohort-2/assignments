/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let res = numbers.reduce((a, n) => {
    n > a ? (a = n) : null;
    return a;
  }, numbers[0]);
  return res;
}

module.exports = findLargestElement;