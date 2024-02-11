/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0
  const chars = str.toLowerCase().split("");

  chars.forEach((elm) => {
    if (
      elm === "a" ||
      elm === "e" ||
      elm === "i" ||
      elm === "o" ||
      elm === "u"
    ) {
      count++;
    }
  });
  return count;
}

let result = countVowels("Shampoo");
console.log(result);

module.exports = countVowels;
