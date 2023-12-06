/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers){
    // if (numbers.length!=0){
    //     return numbers.reduce((a,b)=>Math.max(a,b)) 
    // }
    // else{
    //     return undefined
    // }
    numbers = numbers.sort((a,b)=>a-b)
    return numbers[numbers.length-1]
}
    
    


console.log(findLargestElement(numbers = [222,32,1]))
module.exports = findLargestElement;