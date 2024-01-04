/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0;
    const strArr = str.toLowerCase().split('');
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    strArr.forEach(curr => {
        if (vowels.has(curr)) {
            count++;
        }
    });
    return count;
}

module.exports = countVowels;