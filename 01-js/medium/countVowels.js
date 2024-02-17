/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    str = str.toLowerCase();
    let count = 0;
    for(let char of str)
    {
      if("a" ===  char || "e" ===  char || "i" ===  char || "o" ===  char || "u" ===  char) count++;
    }
    return count;
}

module.exports = countVowels;