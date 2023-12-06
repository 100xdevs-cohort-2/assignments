/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let reverseWord = str
    .replace(/[^\w\s]|_/g, "")
    .replaceAll(" ", "")
    .split("")
    .reverse()
    .join("");
  if (
    reverseWord.toLowerCase() ===
    str
      .replace(/[^\w\s]|_/g, "")
      .replaceAll(" ", "")
      .toLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
