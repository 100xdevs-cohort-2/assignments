/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    
    // declare a variable and assign first value of array or you assign the lowest value in number
    let max = numbers[0];

    // Run a loop of array length
    for(let i = 0; i < numbers.length; i++){

        // Now update max value if numbers[i] is greater than max
        if(numbers[i]>max){
            max = numbers[i];
        }
    }
    // return the answer
    return max;
}

module.exports = findLargestElement;