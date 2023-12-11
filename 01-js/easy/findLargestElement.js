/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let largest = Number.NEGATIVE_INFINITY;

  if (numbers.length === 0) {
    return;
  }

  for (let num of numbers) {
    if (num > largest) {
      largest = num;
    }
  }
  console.log(largest);
  return largest;
}

module.exports = findLargestElement;
