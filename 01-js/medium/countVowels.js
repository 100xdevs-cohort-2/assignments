/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
const temp=str.toLowerCase()
const temp2="aeiou"
let count = 0
for (let i=0;i<temp2.length;i++){
  
  for (let j=0;j<temp.length;j++){
    if(temp2[i]==temp[j]){
      
      count ++
    }
  }
  
}
return count
}

module.exports = countVowels;