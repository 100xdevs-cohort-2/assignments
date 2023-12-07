/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function charArr(str) {
  str = str.toLowerCase()
  let strArr = []
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    if (element>='a' && element<='z') {
      strArr.push(element)
    }
  }
  return strArr
}


function isPalindrome(str) {

  let strArr = charArr(str)
  let straigtStr = charArr(str).join('')
  let revstr = strArr.reverse().join('')

  return straigtStr === revstr
}

module.exports = isPalindrome;
