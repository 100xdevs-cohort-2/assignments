/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  let vowels = ['a','e','i','o','u','A','E','I','O','U'];
  for(let i=0;i<str.length;i++){
    for(let j=0;j<vowels.length;j++){
      if(vowels[j] === str[i]){
        count++;
      }
    }
  }
  return count;
}

console.log(countVowels('programming')); //3
console.log(countVowels('OpenAI')); //4
console.log(countVowels('Keep smiling, boo.'));//6
console.log(countVowels('EaSiEr '));//4
console.log(countVowels('aeiouAE rrr,,'));//7

module.exports = countVowels;