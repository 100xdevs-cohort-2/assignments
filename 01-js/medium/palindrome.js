/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
   // Converting the word in an array and removing characters and spaces
  const word = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reversing the word
  const reversed = word.split("").reverse().join("");

  return word === reversed ? true : false;
}

module.exports = isPalindrome;
