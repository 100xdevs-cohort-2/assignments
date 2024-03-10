/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase to make the comparison case-insensitive
  const lowerCaseStr = str.toLowerCase();

  // Remove non-alphanumeric characters from the string
  const cleanStr = lowerCaseStr.replace(/[^a-z0-9]/g, '');

  // Compare the original cleaned string with its reverse
  return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = isPalindrome;
