/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const pattern = '[a-z]'
  const re = new RegExp(pattern);
  const tempStr = originalStr(str,re);
  const revStr = reverseStr(tempStr);
  // console.log("nan".match(re))
  if(tempStr===revStr){
    return true;
  }
  else{
    return false
  }
}
function originalStr(str,re){
  tempStr=''
  str = str.toLowerCase();
  for(let j=0;j<str.length;j++){
    if(str[j].match(re)){tempStr+=str[j];}
  }
  return tempStr
}
function reverseStr(tempStr){
  revStr='';
  for(let i=tempStr.length-1;i>=0;i--){revStr+=tempStr[i];}
  return revStr;
}
// console.log(isPalindrome('Na n'))
module.exports = isPalindrome;
