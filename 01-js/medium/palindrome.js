/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function keepOnlyAlphabets(inputString) {
  // Use a regular expression to match only alphabetic characters
  const regex = /[a-zA-Z]/g;
  // match will return an array of all the matches, making
  // it back to string by calling join method on it.
  const resultString = inputString.match(regex)?.join("") || "";
  return resultString;
}

function isPalindrome(str) {
  str = keepOnlyAlphabets(str);
  str = str.toLowerCase();
  return str === str.split("").reverse().join("");
}

module.exports = isPalindrome;
