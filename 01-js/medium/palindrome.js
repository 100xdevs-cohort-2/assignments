/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/\s/g,'').toLowerCase()
  str = str.replace(/[.,?\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  console.log(str)
  let l = 0
  let r = str.length -1
  while(l<=r){
    if (str[l]!==str[r]){
      return false
    }
    l++
    r--
  }
  return true

}

module.exports = isPalindrome;
