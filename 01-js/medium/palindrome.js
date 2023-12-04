/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let otherStr = "";
  for(let i=0;i<str.length;++i){
    if(str[i].match(/[a-zA-Z]/))
      otherStr+=str[i];
  }
  otherStr = otherStr.toLowerCase();
  const pal = (otherStr === otherStr.split('').reverse().join(''));
  return pal;
}
console.log(isPalindrome("A man a plan a canal Panama"));
module.exports = isPalindrome;
