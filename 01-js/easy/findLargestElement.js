/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(!Array.isArray(numbers)) {
        return 'Error! Numbers is not an array.'
    } 

    if(numbers.length === 0) {
        return undefined;
    }

    let largestElement = numbers[0];
    for(const number of numbers) {
        if(number > largestElement) {
            largestElement = number;
        }
    }

    return largestElement;
    
}

module.exports = findLargestElement;