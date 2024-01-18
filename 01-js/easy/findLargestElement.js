/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {

    if (numbers.length==0){
        return undefined;
    }
    let largest= numbers[0];

    let counter= 0;
    
    while(counter< numbers.length){
        if (numbers[counter]> largest){
            largest= numbers[counter];

        }

        counter++;

    }
    return largest;
    
}

module.exports = findLargestElement;