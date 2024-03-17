/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
	let max = -Infinity;
	for (let i = 0; i < numbers.length; i++) {
		max = Math.max(max, numbers[i]);
	}
	return max === -Infinity ? undefined : max;
}

module.exports = findLargestElement;
