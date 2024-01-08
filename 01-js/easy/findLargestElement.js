/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

let input = [13, 7, 2, 9, 1];
function findLargestElement(numbers) {
  let newInput = [...numbers].sort((a, b) => b - a);
  console.log(newInput[0]);
}

findLargestElement(input);

module.exports = findLargestElement;