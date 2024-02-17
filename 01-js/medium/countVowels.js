/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/




function countVowels(str) {
  // Your code here
  var vowelCount=0;
  const vowels=['a','e','i','o','u'];

  for(let char of str){

    if(vowels.includes(char)){
      vowelCount++;

    }
  }
  console.log(
    vowelCount

  );
  return vowelCount;
}
countVowels('vibhaw')

module.exports = countVowels;