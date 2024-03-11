/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  var ans = numbers[0];
  let n = numbers.length;
  let i = 0;
  while (i < n) {
    if (ans < numbers[i]) {
      ans = numbers[i];
    }
    i++;
  }
  return ans;
}

module.exports = findLargestElement;
