/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    biggestElem = numbers[0];
    for(let idx=1;idx<numbers.length;idx++){
        biggestElem = Math.max(numbers[idx],biggestElem);
    }
    return biggestElem;
}

module.exports = findLargestElement;