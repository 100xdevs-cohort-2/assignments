/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (!numbers || numbers.length === 0) return undefined;

  let max = Number.NEGATIVE_INFINITY;
  console.log(max);
  numbers.forEach((n) => {
    max = n > max ? n : max;
  });

  return max;
}

module.exports = findLargestElement;
// const m = findLargestElement([-3.5, -7.2, -2.1, -9.8, -1.9]);
// console.log(m);
