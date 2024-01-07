/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let result = numbers.sort((a, b) => a - b)[numbers.length - 1];
    return result;
  
    //   conventional solution
    //   let largestNumber = numbers[0];
    //   for (let i = 0; i < numbers.length; i++) {
    //     if (largestNumber < numbers[i]) {
    //       largestNumber = numbers[i];
    //     }
    //   }
    //   return largestNumber;
}

module.exports = findLargestElement;