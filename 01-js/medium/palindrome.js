/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const parsedStr = str.toLowerCase().split('').reduce((acc, current) => {
    if (/[A-Za-z]/.test(current)) {
      return acc + current
    } else {
      return acc
    }
  }, '')

  let reversedStr = ''
  for (let i = parsedStr.length - 1; i >= 0; i--) {
    reversedStr += parsedStr[i]
  }

  return reversedStr === parsedStr
}

module.exports = isPalindrome;
