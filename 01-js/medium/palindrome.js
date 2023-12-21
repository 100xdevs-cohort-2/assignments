/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string = str.toLowerCase().split('')
  let reverseString = string.slice().reverse()
   
  console.log(string, "and ", reverseString);

  if(string.join('')===reverseString.join('')){
    return true
  } else{
    return false
  }
  

}
console.log(isPalindrome("Nan"));
module.exports = isPalindrome;
