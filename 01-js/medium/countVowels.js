/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowels = 'aAeEiIoOuU'
  let vowelCount = 0;
  for(let i =0; i<str.length;i++){
    if(vowels.indexOf(str[i]) !== -1){
      vowelCount += 1
    }
  }
  return vowelCount
}
console.log("The no of vowels in Vasanth Chandrasekar: " + countVowels("Vasanth Chandrasekar"));


module.exports = countVowels;