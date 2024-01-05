/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let largest;
  if (!numbers.length) {
    return;
  } else {
    largest = numbers[0];
  }
  numbers.forEach((element) => {
    largest = element > largest ? element : largest;
  });
  return largest;
}

module.exports = findLargestElement;
