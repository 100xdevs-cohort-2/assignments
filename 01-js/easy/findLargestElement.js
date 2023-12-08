/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    // Assigning the first number of the array as maxInt
    // It becomes "undefined" if the array is empty 
    let maxInt = numbers[0];
    
    // iterating through the array 
    for(let n of numbers){
        maxInt = maxInt < n ? n : maxInt;
    }

    return maxInt;
}
// console.log(findLargestElement([]));
module.exports = findLargestElement;
