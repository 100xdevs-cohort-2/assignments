/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const n = str.length;
  let start = 0, end = n - 1;
  
  const isAlphabet = (char) => {
    const idx = char.charCodeAt();
    return idx >= 97 && idx <= 122;
  };

  while (start < end) {
    const left = str[start].toLowerCase();
    const right = str[end].toLowerCase();

    if (!isAlphabet (left)) start++;
    else if (!isAlphabet (right)) end--;
    else if (left != right) return false;
    else start++, end--;
  }

  return true;
}

module.exports = isPalindrome;
