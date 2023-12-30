/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const newstr= str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let count=0;
    for(let i=0; i<newstr.length; i++){
      let curr = newstr[i];
      if(curr == 'a' || curr == 'e' || curr == 'i'|| curr == 'o'|| curr == 'u'){
        count++;
      }
    }

    return count;
}

module.exports = countVowels;