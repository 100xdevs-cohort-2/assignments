/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let inputLower = str.toLowerCase();

  let removeUnwanted = inputLower.replace(/[^a-z0-9]/g,'')

  let revInput = removeUnwanted.split('').reverse().join('');

  return removeUnwanted == revInput

}


module.exports = isPalindrome;
