/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// solution 1

// function findLargestElement(numbers) {
//   let largest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) largest = numbers[i];
//   }
//   return largest;
// }

// solution 2

function findLargestElement(numbers) {
  return numbers.length === 0 ? undefined : Math.max(...numbers);
}

module.exports = findLargestElement;
