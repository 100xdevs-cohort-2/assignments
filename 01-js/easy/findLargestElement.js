/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let max;
    for (let num of numbers) {
        max = max ?? num;
        max = max < num ? num : max;
    }
    return max;
}

module.exports = findLargestElement;