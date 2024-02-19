/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let res = false;
  if (str === "") return true;
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    // if we encounter space
    if (str[i] === " " || !/[a-zA-Z0-9]/g.test(str[i])) {
      i = i + 1;
    } else if (str[j] === " " || !/[a-zA-Z0-9]/g.test(str[j])) {
      j = j - 1;
    }
    // if both are char probably add a regex check to chekc if they are char
    else if (str[i].toLowerCase() === str[j].toLowerCase()) {
      i = i + 1;
      j = j - 1;
    } else {
      return false;
    }
  }
  res = true;

  return res;
}

module.exports = isPalindrome;
