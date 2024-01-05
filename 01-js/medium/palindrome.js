/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str2 = str.toLowerCase();
  let str3="";
  for (let i=0;i<str2.length;i++){
    if (str2[i]>='a' && str2[i]<='z') {
      str3 += str2[i];
    }
  }
  for (let i=0;i<(str3.length)/2;i++){
    if (str3[i] != str3[str3.length-i-1]) {
      return false;
    }
  }
  return true;
}


module.exports = isPalindrome;
