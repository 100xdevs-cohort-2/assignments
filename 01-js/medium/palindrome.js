/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length == 1 || str == "") return true;
  str = str
    .toLowerCase()
    .split(" ")
    .join("")
    .replace(/[^a-zA-Z0-9 ]/g, "");

  const reverseString = str.split("").reverse().join("");
  console.log(reverseString);

  return reverseString === str;
}

isPalindrome("race car");
module.exports = isPalindrome;
