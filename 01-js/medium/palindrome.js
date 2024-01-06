/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const copy = str.toLowerCase(); 
  let newStr = "" ; 
  let revStr = "" ; 
 for(let i=0;i<copy.length;i++)
 {
    if(copy.charCodeAt(i)>=97 && copy.charCodeAt(i)<=122)
    {
      newStr+=copy[i]; 
      revStr = copy[i]+revStr; 
    }
 }
  if(newStr===revStr)
  return true;
  return false; 
}

module.exports = isPalindrome;

