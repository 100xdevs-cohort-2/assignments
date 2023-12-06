/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isPalindrome(str) {
  let newst = str.toLowerCase();
  let nstr = "";
  for (let i = 0; i < newst.length; i++) {
    if (
      (newst[i] >= "a" && newst[i] <= "z") ||
      (newst[i] >= "0" && newst[i] <= "9")
    ) {
      nstr += newst[i];
    }
  }
  let i = 0;
  let j = nstr.length - 1;
  while (i < j) {
    if (nstr[i] !== nstr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
module.exports = isPalindrome;
