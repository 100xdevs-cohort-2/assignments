/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const punctuationMarks = ".,?!:;''–—()[]{}.../\&%$@"
  let headPointer = 0
  let tailPointer = str.length - 1
  while (headPointer < tailPointer) {
    while (punctuationMarks.includes(str[headPointer]) || (str[headPointer] === " ")) {
      headPointer++
    }
    while (punctuationMarks.includes(str[tailPointer]) || (str[tailPointer] === " ")) {
      tailPointer--
    }
    if (str[headPointer].toLowerCase() !== str[tailPointer].toLowerCase()) return false
    headPointer++
    tailPointer--
  }
  return true;
}

module.exports = isPalindrome;
