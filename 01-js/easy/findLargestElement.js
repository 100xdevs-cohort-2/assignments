/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
	var largest = Number.NEGATIVE_INFINITY;
	if (numbers.length==0){
		return ;
	}
	for (i=0;i<numbers.length;i++){
		if(numbers[i]>largest){
			largest = numbers[i];
		}
	}
	return largest;
}

module.exports = findLargestElement;