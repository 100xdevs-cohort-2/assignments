/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  if(str.length){
      let count = 0;
      const string1 = str.replace(/\s|\p{P}/gu,"").toLowerCase();
      for(let i = 0; i < string1.length; i++){
          if(string1[i] === "a" || string1[i] === "e" || string1[i] === "i" || string1[i] === "o" ||string1[i] === "u"){
            count++;
          } 
      }
      return count;
    };
    return 0;
}
// time complexity - O(n)
// space complexity - O(1)
module.exports = countVowels;