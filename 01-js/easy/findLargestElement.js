/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largestNo ;
    numbers.forEach(num => {
        if(largestNo < num || !largestNo) largestNo = num;
    });
    return largestNo;
}

module.exports = findLargestElement;