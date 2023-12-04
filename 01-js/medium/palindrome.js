/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // get the characters
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    let c = str[i].toLowerCase();
    if (c >= "a" && c <= "z") chars.push(c);
  }
  for (let I = 0; I < chars.length/2; I++) {
    if(chars[I] !== chars[chars.length-I-1]) return false;
  }

  return true;
}


module.exports = isPalindrome;
