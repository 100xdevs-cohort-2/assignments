/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    str = str.toLowerCase() ; 
    let count = 0 ; 
    let vowels = new Set() 
    vowels.add('a') 
    vowels.add('e') 
    vowels.add('i') 
    vowels.add('o') 
    vowels.add('u') 
    for(let i in str){
      if(vowels.has(str[i]))count++ ; 
    }
    return count ; 

}

module.exports = countVowels;