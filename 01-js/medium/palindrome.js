/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  // Remove all the things from str except alphabets
  str = str.replace(/[^a-zA-Z]/g,'');

  // Convert all the character to small letter
  str = str.toLowerCase();

  // Run a loop to check wheather it is palindromic or not
  for(let i = 0; i < str.length; i++){
    if(str[i]!=str[str.length-i-1])return false;
  }
  
  return true;
}

module.exports = isPalindrome;
