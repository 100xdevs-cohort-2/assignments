/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(inputString) {
  // strWithoutSpaceNdPuncs = str.toLowerCase().replace(/[\s.,;!?]/g, '');
  // reversOfStrWithoutSpaceNdPuncs = strWithoutSpaceNdPuncs.split('').reverse().join('');
  // return strWithoutSpaceNdPuncs === reversOfStrWithoutSpaceNdPuncs;

  const cleanedString = inputString.toLowerCase().replace(/[\s.,;!?]/g, '');
  const reversedString = cleanedString.split('').reverse().join('');
  return cleanedString === reversedString;

}

isPalindrome('An Na');

module.exports = isPalindrome;
