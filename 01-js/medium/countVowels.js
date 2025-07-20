/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // convert the into lowercase format
    str = str.toLowerCase();
    let result = 0;
    for(let char of str) {
      if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        result++
      }
    }

    return result;
}

module.exports = countVowels;