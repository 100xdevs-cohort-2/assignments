/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let oldStr = str.toLowerCase();
  let reverseStr = str.toLowerCase().split("").reverse().join("");

  if (oldStr === reverseStr) {
    return true;
  } else {
    return false;
  }
}

let result = isPalindrome("Naman");
console.log(result);

let ans = isPalindrome("Suman");
console.log(ans);

module.exports = isPalindrome;
