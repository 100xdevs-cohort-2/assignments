/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxNumber = numbers[0]

    for(num of numbers) {
        if(num >= maxNumber) {
            maxNumber = num
        }
    }

    return maxNumber
}

module.exports = findLargestElement;