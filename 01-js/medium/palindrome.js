/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(/\s/g, '').replaceAll('!', '').replaceAll(',', '').replaceAll('?', '').replaceAll('.', '')
  
  for (let i = 0, j = str.length - 1; i < str.length; i++, j--) {
    if(str[i] !== str[j])
      return false;
  }

  return true;
}

module.exports = isPalindrome;
