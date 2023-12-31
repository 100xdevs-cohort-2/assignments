/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
function findLargestElement(numbers) {
    let sortedArr = numbers.sort((a, b) => a - b);
    console.log(sortedArr);
    let largestNum = sortedArr[sortedArr.length-1]
    console.log(largestNum);
}

let numbers = [3, 7, 2, 9, 1];
findLargestElement(numbers);



module.exports = findLargestElement;