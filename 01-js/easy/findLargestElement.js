/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

const findLargestElement = numbers => {
    return numbers.reduce((largest, num) => Math.max(largest, num), numbers[0]);


    // for (let num of numbers) {
    //     largest = Math.max(largest, num);
    // }

    // return largest;
};

module.exports = findLargestElement;
