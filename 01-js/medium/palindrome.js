/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(!str.length) {
    return true;
  }

  // ignoring the special characters and only comparing the letters ig
  const length = str.length;

  str = str.toLowerCase();

  let i = 0;
  let j = str.length - 1; // pointing to the last element of string

  while(i < j) {
    const correctAsciiCode1Range = str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122 ? true : false;
    const correctAsciiCode2Range = str[j].charCodeAt(0) >= 97 && str[j].charCodeAt(0) <= 122 ? true : false;

    if(!correctAsciiCode1Range) {
      // not letter => will skip this iteration because we have to compare letters with only letters
      i++;
      continue
    }

    if(!correctAsciiCode2Range){
      // not letter
      j--;
      continue
    }

    if(correctAsciiCode2Range && correctAsciiCode1Range && str[i] !== str[j]) {
      return false
    }

    i++;
    j--;

  }

  // simple way is to keep only the letter from the string and then apply the logic

  return true
}

module.exports = isPalindrome;
