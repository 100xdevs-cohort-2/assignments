/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let k=0;
  
  str = str.replace(/\s/g, '').toLowerCase();
  
  console.log(str);

  for(let i=0; i<str.length; i++){
    if(str.charCodeAt(i)== 97 ||str.charCodeAt(i)== 117 || str.charCodeAt(i)== 111 || str.charCodeAt(i)== 105 || str.charCodeAt(i)== 101){
      k++;
    }
  }

  return k;
}

module.exports = countVowels;