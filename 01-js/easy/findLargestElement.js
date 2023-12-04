/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = Number.MIN_SAFE_INTEGER;
    if(numbers.length === 0) return undefined;
    for(let i = 0;i<numbers.length;i++){
        largest = Math.max(largest,numbers[i]);
    }
    return largest;
}

module.exports = findLargestElement;