/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // convert string to lowercase and get rid of all spaces and punctuations using RegEx
  cleanStr = str.toLowerCase().replace(/[.,?!\s]/g, "");
  front = 0;
  back = cleanStr.length - 1;
  while (front != back && back > 0) {
    if (cleanStr[front] == cleanStr[back]) {
      back--;
      front++;
      continue;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
