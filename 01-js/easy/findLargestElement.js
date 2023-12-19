/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
       let biggestElement = numbers[0];
       for(let i=0; i<numbers.length; i++){
        if (numbers[i] > biggestElement){
            biggestElement = numbers[i];
        }
       }
       return biggestElement;

      /* if (arr.length === 0) {
        return undefined;
      }
    
      let largest = arr[0];
    
      for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
          return undefined; // Return undefined if any element is not a number
        }
        if (arr[i] > largest) {
          largest = arr[i];
        }
      }
    
      return largest;*/
}

module.exports = findLargestElement;