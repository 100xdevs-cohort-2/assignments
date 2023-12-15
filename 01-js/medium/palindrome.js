/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  
  str = str.replace(/[\.,?!]/g,"");
  str = str.replaceAll(" ","");
  
  str = str.toLowerCase();
  let length = str.length;
  let mid = length/2;
  
  for( let i=0;i<mid;i++){
    let j = length-i-1
    if( str.charAt(i) != str.charAt(j)){
      return false;
    } 
    
  }
  return true;
}


module.exports = isPalindrome;
