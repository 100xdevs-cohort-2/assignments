/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerStr = str.toLowerCase()
  
  const alphaNumericStr = lowerStr.replace(/[^a-z0-9]/g, '')

  return alphaNumericStr === alphaNumericStr.split('').reverse().join('')
}

const result1 = isPalindrome('Nan');
console.log(result1)

module.exports = isPalindrome;
