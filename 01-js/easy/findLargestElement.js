/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(!numbers.length) return undefined;
    return numbers.reduce((acc, item) => {
        if(item > acc) acc = item;
        return acc;
    }, Number.NEGATIVE_INFINITY)
}

module.exports = findLargestElement;