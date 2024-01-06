/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let ans=numbers[0];
    for(let i=1;i<numbers.length;i++){
       if(numbers[i]>ans)ans=numbers[i];
    }
    return ans;
}

module.exports = findLargestElement;