/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

//Brute force soution
/*
function findLargestElement(numbers) {
    let largestNum = numbers[0]
    numbers.forEach(num => {
        if(num > largestNum) {
            largestNum = num
        }
    });

    return largestNum
}
*/

//Solution using Math lib
function findLargestElement(numbers) {
    if(numbers.length == 0) {
        return undefined
    }

    return Math.max(...numbers)
}

module.exports = findLargestElement;