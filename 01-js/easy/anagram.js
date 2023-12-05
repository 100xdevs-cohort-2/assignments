/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    // Remove spaces and convert to lowercase for case-insensitive comparison
    str1 = str1.replace(/\s/g, "").toLowerCase();
    str2 = str2.replace(/\s/g, "").toLowerCase();
  
    // Check if the sorted characters of both strings are the same
    return str1.split("").sort().join("") === str2.split("").sort().join("");
  }

const word1 = "spar";
const word2 = "rasp";
const result = isAnagram(word1, word2);

if (result) {
  console.log(`${word1} and ${word2} are anagrams.`);
} else {
  console.log(`${word1} and ${word2} are not anagrams.`);
}

module.exports = isAnagram;
