/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const check={'a':1,'e':1,'i':1, 'o':1, 'u':1,'A':1,'E':1,'I':1, 'O':1, 'U':1}

  let count=0;
  for (let i of str){
    if(check[i])
    count=count+1;
  }
  return count;
}
console.log(countVowels('hello'));
module.exports = countVowels;