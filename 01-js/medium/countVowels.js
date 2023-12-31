/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let vowelsArr = str.toLowerCase().split('')
  //console.log(vowelsArr);   
  let vowelsCount = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u']
  vowelsArr.map((alpha)=> {
    if(vowels.includes(alpha)){
      vowelsCount += 1
    }
  })
  console.log(vowelsCount);
}


countVowels("hshsHaIeoHJhgdhPOau")
module.exports = countVowels;
