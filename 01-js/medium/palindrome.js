/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let strArr = str.split("");
  strArr = strArr.filter(item => {
    return /^[a-zA-Z]+$/.test(item);
  });

  return strArr.join("").toLowerCase() === strArr.reverse().join("").toLowerCase();
}

module.exports = isPalindrome;
