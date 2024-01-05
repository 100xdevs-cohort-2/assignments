/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    let LargetElement = numbers[0];

    for(let i=1;i<numbers.length;i++){
        if(numbers[i] > LargetElement){
            LargetElement = numbers[i];
        }
    }
    
    return LargetElement;
}

module.exports = findLargestElement;