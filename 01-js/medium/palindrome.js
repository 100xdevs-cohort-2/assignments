/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

function validChar(char) {
  return (
    (char >= 'a' && char <= 'z') ||
    (char >= 'A' && char <= 'Z') ||
    (char >= '0' && char <= '9')
  );
}

function toLowerCase(char) {
  if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
    return char;
  } else {
    return String.fromCharCode(char.charCodeAt() + 32);
  }
}

function checkPalindrome(string) {
  let start = 0,
    end = string.length - 1;

  while (start <= end) {
    if (string[start] !== string[end]) {
      return false;
    } else {
      start++;
      end--;
    }
  }

  return true;
}

function isPalindrome(str) {
  let tempString = '';

  for (let i = 0; i < str.length; i++) {
    if (validChar(str[i])) {
      tempString += toLowerCase(str[i]);
    }
  }

  return checkPalindrome(tempString);
}

module.exports = isPalindrome;
