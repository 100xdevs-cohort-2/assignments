/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let x = numbers[0];
    for(const num of numbers){
        if(num>x){
            x=num;
        }
    }
    return x;
    console.log(x);
}
let numbers

=[3, 7, 2, 9, 1]
findLargestElement(numbers)
module.exports = findLargestElement;