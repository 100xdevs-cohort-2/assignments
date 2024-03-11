/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  smallStr= str.toLowerCase();
  let letters = smallStr.split("");
  let val = 0;
  letters.forEach(element => {
      if ((element === "a") || (element === "e") || (element === "i")
          || (element === "o") || (element === "u")){
          val++;
      }
  });
  return val;
}

module.exports = countVowels;

