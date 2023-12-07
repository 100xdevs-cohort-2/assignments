/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(str.length){
    const string1 = str.replace(/\s|\p{P}/gu,"").toLowerCase();
    const string2 = string1.split("").reverse().join("");
    return string1 === string2;
  };
  return true;
};

// time complexity - O(n)
// space complexity - O(n)

module.exports = isPalindrome;
