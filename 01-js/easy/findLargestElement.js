/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (!numbers || numbers.length === 0) {
        return undefined;
    }
    let largestNum = Number.NEGATIVE_INFINITY;
    numbers.forEach(num => {
        largestNum = Math.max(largestNum, num)
    });
    return largestNum;
}

module.exports = findLargestElement;