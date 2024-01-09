/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const clean_str = str.toLowerCase().replace(/[^a-z]/g, "");
  const str_arr = clean_str.split("");
  let vowel = 0;

  for (let i = 0; i < str_arr.length; i++) {
    if (
      str_arr[i] === "a" ||
      str_arr[i] === "e" ||
      str_arr[i] === "i" ||
      str_arr[i] === "o" ||
      str_arr[i] === "u"
    ) {
      vowel++;
    }
  }

  return vowel;
}

module.exports = countVowels;