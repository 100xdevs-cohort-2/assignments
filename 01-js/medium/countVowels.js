/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // so first of all convert it in the small case here 
    const strlower = str.toLowerCase().split('');
    let temp = 0;
    for(let i = 0; i < strlower.length; i++){
      if(strlower[i] == 'a' || strlower[i] == 'e' || strlower[i] =='i' || strlower[i] == 'o' || strlower[i] == 'u'){
        temp++;
      }
    }
    return temp;
}

module.exports = countVowels;