/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let string = str.toLowerCase();

  string = removeNonAlphanumeric(string)

  let j = string.length-1

  for(let i = 0; i < string.length/2 ; i++){
    if(string[i] != string[j-i]){
      return false
    }
  }
  return true;
}

function removeNonAlphanumeric(inputString) {
  // Use a regular expression to replace non-alphanumeric characters with an empty string
  return inputString.replace(/[^a-zA-Z0-9]/g, '');
}

module.exports = isPalindrome;
