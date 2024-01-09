/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  if (numbers.length == 0) return;
  const ans = numbers.reduce((max, item) => {
    if (max < item) {
      max = item;
    }
    return max;
  }, -Infinity);
  return ans;
}
let arr = [3, 7, 2, 9, 1];
console.log(findLargestElement(arr));

module.exports = findLargestElement;
