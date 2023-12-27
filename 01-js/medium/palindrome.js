/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s='';
  for(let i=0;i<str.length;i++){
    let x=str[i].toLowerCase();
    if(x>='a' && x<='z'){
      s+=x;
    }
  }
  let len=s.length;
  for(let i=0;i<len;i++){
    if(s[i]!==s[len-1-i]) return false;
  }
  return true;
}

module.exports = isPalindrome;
