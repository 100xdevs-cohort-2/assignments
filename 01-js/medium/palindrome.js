/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
import _ from 'lodash'
export function isPalindrome(str) {
  const cleanStr = str.toLowerCase().split(' ').join('').replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
  const revArr = cleanStr.toLowerCase().split('').reduce((acc, curr) => {
    return (curr === " ") ? acc : curr + acc
  }, "")
  return (_.eq(cleanStr, revArr))
}

