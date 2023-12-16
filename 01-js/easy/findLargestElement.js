/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(!numbers.length){
        return undefined;
    }
    let maxVal = numbers[0];
    numbers.forEach(val => {
        maxVal = Math.max(maxVal,val);
    });
    return maxVal;
}

module.exports = findLargestElement;