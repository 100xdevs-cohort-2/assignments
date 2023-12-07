/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(numbers.length > 0) {
        let largest = numbers[0];
        for(let i = 1; i < numbers.length; i++) {
            if(largest < numbers[i]) {
                largest = numbers[i];
            }
        }
        console.log('Largest:', largest);
        return largest;
    } else {
        console.log('Array is empty');
        return undefined;
    }
}

module.exports = findLargestElement;