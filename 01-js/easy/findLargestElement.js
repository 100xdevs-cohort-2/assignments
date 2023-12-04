/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNum = -Number.MAX_VALUE;
    if(numbers.length == 0) {
        return;
    }
    numbers.forEach(el=> {
        if(el > largestNum) largestNum = el;
    });
    return largestNum;
}

module.exports = findLargestElement;