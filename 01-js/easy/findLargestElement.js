/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    let maxNumber = Number.MIN_SAFE_INTEGER-1;
    
    for(let i = 0; i<numbers.length; i++){
        maxNumber = Math.max(maxNumber, numbers[i])
    }

    return maxNumber == Number.MIN_SAFE_INTEGER-1 ? undefined : maxNumber;
    
}

module.exports = findLargestElement;