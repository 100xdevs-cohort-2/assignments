/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let result = true;
  let lowerCaseStr = str.toLowerCase(); // convert the given string to lowercase string
  let newStringWithoutExtraCharacters = lowerCaseStr.replace(/[ ,!@#$%^&*~?><./]/g, "");
  const len = newStringWithoutExtraCharacters.length;
  for(let i = 0; i < len / 2; ++i) {
    if(newStringWithoutExtraCharacters[i] != newStringWithoutExtraCharacters[len - i - 1]) {
      result = false;
      break;
    }
  }
  return result;
}

module.exports = isPalindrome;
