/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let big = numbers[0];
    for(var i= 1;i<numbers.length;i++){
        if(big < numbers[i]){
            big = numbers[i];
        }
    }
    return big;
}

module.exports = findLargestElement;