/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let isPalindrome = false;
  if (str.length <= 1) return true;

  // Remove all of the special characters using regex.
  const updatedString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const loopLength = Math.floor(updatedString.length / 2);
  let totalLength = updatedString.length;
  for (let i = 0; i < loopLength; i++) {
    if (updatedString.charAt(i) === updatedString.charAt(totalLength - 1)) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
    totalLength--;
  }
  return isPalindrome;
}

module.exports = isPalindrome;
