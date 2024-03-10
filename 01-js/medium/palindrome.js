/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function clean(str){
  let clean_str = str.toLowerCase();
  clean_str = clean_str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"")
  clean_str = clean_str.replace(/\s/g, '');
  return clean_str
}

function isPalindrome(str) {
  str = clean(str);
  let reverse_str = clean(str);
  reverse_str = reverse_str.split("").reverse().join("");
  if (reverse_str === str)
    return true;
  return false;

}

module.exports = isPalindrome;

console.log(isPalindrome("A man, a plan, a canal. Panama"));
