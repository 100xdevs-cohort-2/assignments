/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const arr = cleanedStr.split('');
  const reverseArr = [...arr].reverse();
  const reverseStr = reverseArr.join('');
  if(cleanedStr == reverseStr) 
    return true;
  else
    return false;
}

console.log(isPalindrome("race car"))

module.exports = isPalindrome;