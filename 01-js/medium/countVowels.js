/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    var arr = str.split("")
    let c = 0
    for(let i = 0; i< arr.length;i++){
      if(isVowel(arr[i])){
        c = c+1
      }
    }
    return c;
}

function isVowel(str){
  if(str === "a" || str === "A" || str === "e" || str === "E" || str === "i" || str === "I" || str === "o" || str === "O" || str === "u" || str === "U"){
    return true
  }
  return false
}


module.exports = countVowels;