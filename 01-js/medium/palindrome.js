/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s=0;
  let e=str.length-1;
  let ss="";
  for(let i=0;i<str.length;i++){
    if((str.charAt(i)>='A' && str.charAt(i)<='Z') || (str.charAt(i)>='a' && str.charAt(i)<='z')){
      ss+=str.charAt(i).toLowerCase();
    }
    
  }
  
  let rev=ss.split('').reverse().join('');
  
  return ss===rev;
}

module.exports = isPalindrome;
