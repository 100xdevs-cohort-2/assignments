/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let biggie = number[0]
    for(let i = 1; i < number.length; i++){
        if(biggie < number[i]){
            biggie = number[i]
        }
    }
    return biggie
}

module.exports = findLargestElement;