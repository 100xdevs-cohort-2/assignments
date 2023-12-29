/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isChar(ch){
  return /^[a-zA-Z]+$/.test(ch);
}
function isPalindrome(str) {
  const s = str.toLowerCase();
  let i =0, j = s.length-1;

  while(i<j){
    let chari = s[i];
    let charj = s[j];
    if(chari == ' '  || isChar(chari) == false){
      i++; continue;
    }
    if(s[j] == ' ' || isChar(charj) == false){
      j--; continue;
    }
    if(s[i] != s[j]) return false;
    i++; j--;
  }
  return true;
}

module.exports = isPalindrome;
