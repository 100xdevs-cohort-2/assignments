/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str.toLowerCase()
    let count = 0 
    for (i in str ){
      if (i === 'a'||'e'||'i'||'o'||'u'){
        count++
      }
    }
}

module.exports = countVowels;
