/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function cleanString(str) {
  let cleanedStr = "";
  for(let i=0; i<str.length; i++) {
    if(!['!', '?', ',', '.', ' '].includes(str[i]))
      cleanedStr += str[i];
  }

  return cleanedStr;
}

function isPalindrome(str) {
  str = cleanString(str);
  let start = 0;
  let end = str.length - 1;

  while(start <= end) {
    if(str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    } else {
      start++;
      end--;
    }
  }

  return true;
}

module.exports = isPalindrome;
