/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const string = str
    .split(" ")
    .join("")
    .toLowerCase()
    .replace(/[^\w]|_/g, ""); //replace punctuations
  const strRev = string.split("").reverse().join("");

  return string === strRev;
}

console.log(isPalindrome("Able, was I ere I saw Elba!"));

module.exports = isPalindrome;
