/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPunctuation(char) {
  const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
  return punctuationRegex.test(char);
}

function isPalindrome(string) {
  const s = string.split(" ").join("");
  const ss = s.split(",").join("");
  const sss = ss.split("?").join("");
  const str = sss.toLowerCase();
  let i = 0;
  let j = str.length - 1;
  var flag = true;
  while (i < j) {
    if (isPunctuation(str[i])) {
      i++;
      continue;
    }
    if (isPunctuation(str[j])) {
      j--;
      continue;
    }
    if (str[i] !== str[j]) {
      flag = false;
      break;
    }
    i++;
    j--;
  }
  return flag;
}

module.exports = isPalindrome;
