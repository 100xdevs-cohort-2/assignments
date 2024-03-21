/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove punctuations and convert to lowercase
  const filteredString = str.replace(/[^\w]/g, '').toLowerCase();
  
  // Reverse the string
  const reversedString = filteredString.split('').reverse().join('');

  // Check if it's a palindrome
  return filteredString === reversedString;
}

module.exports = isPalindrome;
