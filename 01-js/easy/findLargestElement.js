/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
     return numbers.reduce((max,ele)=>Math.max(ele,max),numbers[0]);
}

// console.log(findLargestElement([1,2,3,4]))
module.exports = findLargestElement;