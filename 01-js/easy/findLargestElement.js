/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let biggest=numbers[0];
    if(numbers.length==0){
        console.log("Array is empty")
        return;
    }
    // for (let index = 0; index < numbers.length; index++) {
    //     if (numbers[index]>biggest);
    //     {
    //         biggest=numbers[index];
    //     }
        
    // }
    numbers.sort((a, b) => b - a); 
    return numbers[0]; 
    // return biggest;
    
}

module.exports = findLargestElement;