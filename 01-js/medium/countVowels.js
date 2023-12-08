/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  const vowelArr = ['a','e','i','o','u'];
  if(str.length==0){
    return 0;
  }
  var total = 0;
  for(i=0;i<str.length;i++){
    
    if (vowelArr.includes(str[i].toLowerCase())){
      console.log(str[i].toLowerCase() + " is a vowel ")
      total +=1;
    }
  }
  return total;
}

module.exports = countVowels;