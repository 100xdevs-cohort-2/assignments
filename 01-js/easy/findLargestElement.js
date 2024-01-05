/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(nums) {
  let ans = -Infinity;
  if(nums.length==0) return undefined;
  for(let num of nums){
    if(ans < num) ans = num;
  }
  return ans;
}

module.exports = findLargestElement;