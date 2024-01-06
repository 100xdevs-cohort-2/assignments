/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  const checkAlpha = char => {
    return char >= 'a' && char <= 'z';
  }

  str = str.toLowerCase();

  let str2 = str.split("").filter(checkAlpha);
  let candidate = str2.join("");
  let reversed = str2.reverse().join("");

  return candidate === reversed;

}

module.exports = isPalindrome;
