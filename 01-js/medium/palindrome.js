/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
      newStr += str[i];
    }
  }
  let newStr2 = newStr;
  newStr2 = newStr2.split("").reverse().join("");
  return newStr === newStr2;
}

module.exports = isPalindrome;
