/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
import _ from 'lodash'
function countVowels(str) {
    return str.toLowerCase().split('').reduce((acc, cur) => {
      if (_.includes(['a','e','i','o','u'], cur)) {
        acc ++
      }
      return acc
    }, 0)
}

export { countVowels }