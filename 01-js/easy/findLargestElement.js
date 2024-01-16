/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxi = numbers[0];
    numbers.forEach(num => {
        if(maxi < num){
            maxi = num
        }
    });
    return maxi;
}

module.exports = findLargestElement;