/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let isPalindrome = true;
  let specialChar = /[^a-zA-Z0-9\s]/g;
  let string = str.toLowerCase().replace(specialChar, '').split(' ').join('');
  let length = string.length;
  for(let i=0; i<length/2; i++){
          if(string[i] != string[length -1 -i]){
              isPalindrome = false;
          }
  }
  return isPalindrome;
}

module.exports = isPalindrome;
