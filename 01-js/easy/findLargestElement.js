/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
   
    let input = numbers
    let greatestNumber = input[0]

    for(let i = 0; i < input.length; i++){
        if( greatestNumber < input[i]){
            greatestNumber = input[i]
        }
   }
    
    return(greatestNumber)
    
}

module.exports = findLargestElement;