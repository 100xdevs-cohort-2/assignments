/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let i = 0, j = str.length - 1
  while (i <= j) {
    if (/([^a-zA-Z])/.test(str[i])) {
      i++
      continue
    }
    if (/([^a-zA-Z])/.test(str[j])) {
      j--
      continue
    }

    if (str[i].toLowerCase() !== str[j].toLowerCase()) {
      return false
    }
    
    i++
    j--
  }
  return true
}

module.exports = isPalindrome;
