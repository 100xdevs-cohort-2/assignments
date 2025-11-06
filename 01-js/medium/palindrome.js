/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let str2= str.toLowerCase();
  str=""
  for(let i=0;i<str2.length;i++) if(str2[i]>='a'&& str2[i]<='z') str+=str2[i];
  let n= str.length -1;
  for(let i=0;i<n/2;i++) if(!(str[i]==str[n-i])) return false;
  return true;
}

module.exports = isPalindrome;
