/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let lowerStr = str.toLowerCase();
  let cleanStr = lowerStr.replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = cleanStr.length -1;

  while(left < right){
  if(cleanStr[left] !== cleanStr[right]){
    return false;
  }
  left++
  right--
}
  return true;
}

module.exports = isPalindrome;