/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let ans = Number.MIN_VALUE;  
    for (let i = 0; i < numbers.length; i++) {
         
       if (numbers[i] > ans) ans = numbers[i];  
         
    }
    return ans;
}

module.exports = findLargestElement;