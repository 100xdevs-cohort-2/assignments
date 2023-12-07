/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase to make the comparison case-insensitive
  const lowercaseStr = str.toLowerCase();

  // Remove non-alphanumeric characters from the string
  const cleanStr = lowercaseStr.replace(/[^a-z0-9]/g, "");

  // Reverse the cleaned string
  const reversedStr = cleanStr.split("").reverse().join("");

  // Check if the original and reversed strings are the same
  return cleanStr === reversedStr;
}

module.exports = isPalindrome;
