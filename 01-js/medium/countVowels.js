/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowelsCount = 0;
    const vowelSet = new Set(["a", "e", "i", "o", "u","A", "E", "I", "O", "U"]);
    for(let i=0; i<str.length; i++) {
      vowelSet.has(str[i]) && vowelsCount++;
    }
    return vowelsCount;
}

module.exports = countVowels;