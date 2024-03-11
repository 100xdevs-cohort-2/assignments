/*
Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
Example:
- Input: [3, 7, 2, 9, 1]
- Output: 9
*/

function findLargestElement(numbers) {
let j=numbers[0];
  for(let i=0;i<numbers.length;i++){
  if(j<numbers[i+1]){
    j =numbers[i+1];
  }
}
  return j;
}

console.log(findLargestElement([15, 27, 8, 12]));
module.exports = findLargestElement;
