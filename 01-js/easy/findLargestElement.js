/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let maxNum = undefined;

    if(numbers.length>1)
    {
        maxNum = numbers[0];
        for(let i=1;i<numbers.length;i++)
        {
            maxNum = Math.max(maxNum,numbers[i]);
        }
    }

    return maxNum;
}

module.exports = findLargestElement;