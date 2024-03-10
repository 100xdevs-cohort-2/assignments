/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '')
  new_str = ''
  for(let i = str.length - 1; i > -1; i--){
    new_str += str[i]
  }
  if (str == new_str){
    return true
  }
  return false;
}

module.exports = isPalindrome;
