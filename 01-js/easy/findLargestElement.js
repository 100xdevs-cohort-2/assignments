/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

let largest = -Number.MAX_VALUE;
function findLargestElement(numbers) {
  numbers.forEach(v => {
    largest = Math.max(largest, v)
  })
  return largest;
}

module.exports = findLargestElement;
