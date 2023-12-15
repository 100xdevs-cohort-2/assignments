/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let biggest = numbers[0];
    for(let i = 0;i<numbers.length;i++){
        if(numbers[i]>biggest){
            biggest = numbers[i];
        }
    }
    return biggest;
}

module.exports = findLargestElement;