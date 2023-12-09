/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
   
    // Helper function to normalize and sort the characters in a string
    const normalize = str => str
        .replace(/[\W_]+/g, '') // Remove non-alphabetic characters and underscores
        .toLowerCase()         // Convert to lowercase
        .split('')             // Split into characters
        .sort()                // Sort characters
        .join('');             // Join characters back into a string

    // Compare the normalized strings
    return normalize(str1) === normalize(str2);
}

module.exports = isAnagram;

