/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(array) {

        if (array.length === '') {
                return null;
        }


          // Initialize the largest element with the first element of the array
          let largestNumber = array[0]

          //iterate through array to find the largest number
          for (let i = 0; i < array.length; i++) {
               if (array[i] > largestNumber) {
                 largestNumber = array[i];
               }
                
          }

          return largestNumber;
}

const inputArray = [3, 7, 2, 9, 1];
const result = findLargestElement(inputArray);
console.log(result); 

module.exports = findLargestElement;