/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
   function isAlphabet(character) {
    return /^[a-zA-Z]$/.test(character);
  }
  let newString = '';
  for(const char of str){
    if(isAlphabet(char)){
      newString += char;
    }
  }
  newString = newString.toLowerCase();
  for(let i = 0; i < Math.ceil(newString.length / 2); i++){
    if(newString[i] !== newString[newString.length-i-1]) return false;
  }
  return true;
}

module.exports = isPalindrome;
