/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length == 0) return true;
  str = str.toLowerCase();
  for(let i=0, j=str.length-1; i<j;i++, j--) {
    if(!isLetter(str[i])) {
      j++;
      continue;
    }
    if(!isLetter(str[j])) {
      i--;
      continue;
    }
    if(str[i] != str[j]) {
        return false;
  
    }
  }
  return true;
}

function isLetter(char) {
  return char.toLowerCase() != char.toUpperCase();
}


module.exports = isPalindrome;
