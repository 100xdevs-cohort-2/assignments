/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const clean_str = str.toLowerCase().replace(/[^a-z]/g, "");
  const str_arr = clean_str.split("");
  const str_arr_reversed = [...str_arr].reverse();
  let a = 0;

  for (let i = 0; i < str_arr.length; i++) {
    if (str_arr[i] === str_arr_reversed[i]) {
      a++;
    }
  }

  if (a === str_arr.length) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
