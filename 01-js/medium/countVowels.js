/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   let vowels_count = 0
   let vowels = ['a', 'e', 'i', 'o', 'u']
   let charArr = str.toLowerCase().split('')
   for(let i = 0; i< charArr.length; i++){
      if(vowels.includes(charArr[i])){
        vowels_count += 1
      }
   }
   return vowels_count
}

module.exports = countVowels;