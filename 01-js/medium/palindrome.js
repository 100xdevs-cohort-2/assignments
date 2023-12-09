/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isAlpha(char) {
  return char.toLowerCase() !== char.toUpperCase();
}
function isPalindrome(str) {
  str = str.toLowerCase()
  let newStr  = ''
  for (const i of str) {
    if(i !== ' ' && isAlpha(i)){
      newStr += i
    }
  }
  newStr = newStr.toLowerCase()
  let i = 0
  let j = newStr.length-1
  while(i<j){
    if(newStr[i] !== newStr[j]) return false;
    i++
    j--
  }
  return true;
}

module.exports = isPalindrome;
