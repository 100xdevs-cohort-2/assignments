/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // remove non-alphanumeric characters, convert to lowercase
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
      return false; // Not a palindrome
    }
  }

  return true; // Palindrome
}

// let str = "axyza"; // false
let str = "racecar"; // true
let ans = isPalindrome(str);
console.log(ans);

module.exports = isPalindrome;
