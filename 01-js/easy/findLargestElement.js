/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // string, arrays are iterables
    // for of is used to iterate over iterables
    // for of is used to iterate over arrays and string
    if(numbers.length === 0){
        return undefined;
    }

    let maxValue = -Number.MAX_VALUE;
    for(let element of numbers) {
        if(element > maxValue) {
            maxValue = element
        }
    }

    return maxValue;
}

// MAX_Value inside JS can be get using Number.MAX_VALUE (finite positive value)
// MIN_Value inside JS can be get using -NUmber.MAC_VALUE (fintite negative value)

// Number.POSITIVE_INFINITY / INFINITY
// Number.Negative_INFINITY / -INFINITY

module.exports = findLargestElement;