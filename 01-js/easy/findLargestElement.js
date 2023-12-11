/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = -1000000;
    numbers.map(num => {num>largest ? largest = num : largest=largest;})
    return largest;
}

module.exports = findLargestElement;