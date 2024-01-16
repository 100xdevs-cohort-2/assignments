/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let newStr = str.split(' ').join('').replace(/[.,?!@#$%^&*(){}]/g, '').toLowerCase();// it defines various punctuation marks in between the /  and g represents global
  let revStr = newStr.split('').reverse().join('');

  if (newStr === revStr) {
    return true;
  }

  return false;
}

module.exports = isPalindrome;
