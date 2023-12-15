/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) 
    if (
      str[i] === "a" ||
      (str[i] === "A" || str[i] === "e") ||
      (str[i] === "E" || str[i] === "i") ||
      (str[i] === "I" || str[i] === "o") ||
      (str[i] === "O" || str[i] === "u") ||
      str[i] === "U"
    )
      count ++ ;
  
  return count;
}

module.exports = countVowels;
