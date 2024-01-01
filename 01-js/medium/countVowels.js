/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowels = {
      a: "a",
      e: "e",
      i: "i",
      o: "o",
      u: "u"
    };

    let count = 0;
    str
      .replace(" ", "")
      .toLowerCase()
      .split("")
      .forEach((letter) => vowels[letter] && ++count);

    return count;  
}

module.exports = countVowels;