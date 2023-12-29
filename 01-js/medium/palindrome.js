/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // const lowercaseStr = str.toLowerCase();
  // const cleanStr = [];

  // for (let i = 0; i < lowercaseStr.length; i++) {
  //   const char = lowercaseStr[i];
  //   if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
  //     cleanStr.push(char);
  //   }
  // }

  // for (let i = 0; i < cleanStr.length / 2; i++) {
  //   if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
  //     return false;
  //   }
  // }

  // return true;

  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}

module.exports = isPalindrome;
