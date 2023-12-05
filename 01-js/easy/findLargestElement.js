/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let i = 0;
    let max = numbers[0];
    while(i<numbers.length){
        if(numbers[i]>max){
           max = numbers[i]; 
        }
        i+=1;
    }
    return max;
}
