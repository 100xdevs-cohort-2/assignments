/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let input = str.toLowerCase().split('');
  let vowels = ['a','e','i','o','u'];
  let totalVowels = 0;
  for(let i =0 ; i < input.length ; i++){
    for (let j = 0; j < 5 ; j++){
      if(input[i] == vowels[j]){
        totalVowels += 1
      }
    }
  }

  return totalVowels
  
}
module.exports = countVowels;