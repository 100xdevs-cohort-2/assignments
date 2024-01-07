/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const newStr = str.toLowerCase().replace(/[ ,!?.]/g, '');
  console.log(newStr)
  let left = 0, right = newStr.length - 1
  while (left < right) {
    if (newStr[left] !== newStr[right]) return false
    left++
    right--
  }
  return true
}

module.exports = isPalindrome;
