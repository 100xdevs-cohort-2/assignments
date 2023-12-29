/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function reverse(str) {
  let ans = "";

  for (let i = str.length - 1; i >= 0; i--) {
    ans += str[i];
  }

  return ans;
}

function cleanString(str) {
  let ans = "";

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] !== " " &&
      str[i] !== "." &&
      str[i] !== "," &&
      str[i] !== "!" &&
      str[i] !== "?"
    ) {
      ans += str[i];
    }
  }

  return ans;
}

function isPalindrome(str) {
  // return true;

  str = cleanString(str);

  let reversedString = reverse(str);

  if (str === reversedString) return true;
  else return false;
}

module.exports = isPalindrome;
