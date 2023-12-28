/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxNumber = numbers[0];
    for(let idx in numbers) {
        let number = numbers[idx];
        if(number >= maxNumber) {
            maxNumber = number;
        }
    }
    return maxNumber;
}

module.exports = findLargestElement;