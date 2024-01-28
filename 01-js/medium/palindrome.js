/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowercaseStr = str.toLowerCase();
  // To remove punctuations and whitespaces both
  let finalStr = lowercaseStr.replace(/[^0-9a-z]/g, "");
  //To reverse the string
  let reversedStr = finalStr.split("").reverse().join("");

  if (reversedStr === finalStr) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
