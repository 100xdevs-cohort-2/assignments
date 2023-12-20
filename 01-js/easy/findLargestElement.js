/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    biggestNumber = -Infinity;
    numbers.forEach(element => {
       if( element > biggestNumber ) {;
        biggestNumber = element;
       }
    });
    if(biggestNumber === -Infinity){
        return undefined;
    }
    return biggestNumber;

}

module.exports = findLargestElement;