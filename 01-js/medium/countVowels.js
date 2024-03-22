/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let count = 0
    for(let i = 0; i < str.length; i++){
      if(checkVowels(str[i])){
        count += 1
      }
    }

    return count
}

function checkVowels(str){
  if(str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u' || str === 'A' || str === 'E' || str === 'I' || str === 'O' || str === 'U'){
    return true
  }

  return false
}

module.exports = countVowels;