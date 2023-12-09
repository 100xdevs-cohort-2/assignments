/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  // str1 = word.replace(/[^\w]/g, "").toLowerCase();
  str1 = str.replace(/[^\w]/g, "").toLowerCase();
  if (str1 === str1.split('').reverse().join('')) {

    return true;
  }

  else { return false }

}

module.exports = isPalindrome;
