/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
const isAplpahbet = (c) => {
  if(c >= 'a' && c <= 'z') {
    return true
  };
  return false;
}
function isPalindrome(str) {
  let strArr = str.toLowerCase().split('');
  let left = 0, right = str.length - 1;
  while(left <= right) {
    if(!isAplpahbet(strArr[left])) {
      left++;
      continue;
    }
    if(!isAplpahbet(strArr[right])) {
      right--;
      continue;
    }
    if (strArr[left] != strArr[right]) {
      console.log(strArr[left], strArr[right])
      return false;
    }
    left++;
    right--;
  }
  return true;
}

module.exports = isPalindrome;
