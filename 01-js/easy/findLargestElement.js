/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
	let largestElement = numbers[0];
	for(let i in numbers){
		if(numbers[i] > largestElement){
			largestElement = numbers[i];
		}
	}
	return largestElement;
}
console.log(findLargestElement([1,5,3,4,93]));

module.exports = findLargestElement;