/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let result=0;
    const str2=str.toLowerCase().split('')
    for (let index = 0; index < str2.length; index++) {
      if(str2[index]=='a'|str2[index]=='e'|str2[index]=='i'|str2[index]=='o'|str2[index]=='u'){
        result=result+1;
      }

      
    }
    return result;
}

module.exports = countVowels;