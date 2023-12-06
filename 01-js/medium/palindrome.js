/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isChar(c){
  return c>='a' && c<='z';
}

function isPalindrome(str) {
  str=str.toLowerCase();
  let s=0,e=str.length-1;
  while(s<e){
    while(s<str.length && !isChar(str[s])) s++;
    while(e>=0 && !isChar(str[e]))e--;
    if(s<e && str[s++]!=str[e--]) return false;
  }
  return true;
}


module.exports = isPalindrome;
