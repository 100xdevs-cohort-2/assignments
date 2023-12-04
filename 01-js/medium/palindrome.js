/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s = str.toLowerCase();
  s = s.replace(/[^a-zA-Z0-9]/g,"");
  if (s.length == 1 || s.length == 0){
    return true;
  }
  let rs = Array.from(s).reverse();

  for (let i=0; i<s.length;i++){
    if (s[i] != rs[i]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
