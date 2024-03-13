/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let arr = str.split("");
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] == "a" ||
      arr[i] == "A" ||
      arr[i] == "e" ||
      arr[i] == "E" ||
      arr[i] == "i" ||
      arr[i] == "I" ||
      arr[i] == "o" ||
      arr[i] == "O" ||
      arr[i] == "u" ||
      arr[i] == "U"
    ) {
      count += 1;
    }
  }

  
  return count;
}

countVowels("Celebration is");

module.exports = countVowels;