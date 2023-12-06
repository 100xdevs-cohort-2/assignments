/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
function findLargestElement(numbers) {
  let big = number[0];
  for (let i = 0; i < number.length; i++) {
    if (number[i] > big) {
      big = number[i];
    }
  }
  return big;
}

module.exports = findLargestElement;
