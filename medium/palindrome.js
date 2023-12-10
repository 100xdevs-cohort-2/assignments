/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const temp = str.toLowerCase().split(' ').join("");
  const noSpecialChars = temp.replace(/[^a-zA-Z0-9 ]/g, '');
  let i = 0;

  let j = noSpecialChars.length - 1;
  let count = 0;
  while (i < (noSpecialChars.length)) {
    if (noSpecialChars[i] === noSpecialChars[j]) {
      i++;
      j--;
      count += 1;
    }
    else{
      return false
    }
  }
  return count === noSpecialChars.length ? true : false;
}

module.exports = isPalindrome;
