/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let removeSpaces = str.replace(/[^a-zA-Z]/g, "").toLowerCase().split(" ").join("")
  for(let i=0;i<removeSpaces.length;i++){
    if(removeSpaces[i]!== removeSpaces[removeSpaces.length-i-1]){
      return false
    }
  }
  return true
}
let str = 'madam'
isPalindrome(str)

module.exports = isPalindrome;
