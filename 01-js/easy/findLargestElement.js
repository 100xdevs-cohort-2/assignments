/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let bignum = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        if (bignum<numbers[index]) {
            bignum=numbers[index];
        }
        
    }
    return bignum;
}

module.exports = findLargestElement;