/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if (numbers.length == 0){
        return 0;
    }
    let sortedArr = numbers.sort();
    return sortedArr[sortedArr.length-1];
}
module.exports = findLargestElement;