/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let cnt = 0;

  let i = 0, j = str.length - 1;

  while (i < j) {

    while (str[i] === ' ' || str[i].match(/[.,\/#!$%\^&\*;:{}=\-_`~()@?]/g))
      i++;

    while (str[j] === ' ' || str[j].match(/[.,\/#!$%\^&\*;:{}=\-_`~()@?]/g))
      j -= 1;

    if (str[i] !== str[j]) {
      return false;
    }

    i += 1;
    j -= 1;
  }

  return true;

}

module.exports = isPalindrome;
