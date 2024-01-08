/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

var inputArray = [3,7,9,1];

function findLargestElement(numbers) {
    let gtNumber = 0;
    for (let i = 0; i<numbers.length; i++)
    {
          
        if(numbers[i] > gtNumber)
        {
          
            gtNumber = numbers[i];
        }
    }
    return gtNumber;
}



var result = findLargestElement(inputArray);
console.log(result);

module.exports = findLargestElement;











sort((a, b) => b - a)