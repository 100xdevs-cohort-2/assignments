/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: The input string is case-insensitive that means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const fixedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")
  let left = 0;
  let right = fixedStr.length - 1;

  while (left <= right) {
    if(fixedStr[left] === fixedStr[right]) {
      left++
      right--
    } else {
      return false
    }
  }

  return true
}

console.log(isPalindrome("Eva, can I see bees in a cave?"))
module.exports = isPalindrome;


