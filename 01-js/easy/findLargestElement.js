/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9

    How to write the solution:
    - assign a variable and store the 1st element of the array in it.
    - Loop through the array and compare each element with the variable.
    - if the element is greater than the variable, update the variable.
    - upon completion of the loop, return the variable.
*/

function findLargestElement(numbers) {
    let largest = numbers[0];
    for (i=0; i<=numbers.length; i++){
        if (numbers[i] > largest){
            largest = numbers[i];
        }
    }
    return largest;
    
}

module.exports = findLargestElement;