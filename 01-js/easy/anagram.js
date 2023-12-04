/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // base case
  const formattedStr1 = str1.toLowerCase().replace(/\s/g, '');
  const formattedStr2 = str2.toLowerCase().replace(/\s/g, '');

  if (formattedStr1.length !== formattedStr2.length) {
    return false; // case: not an anagram
  }

  let str1Sort = formattedStr1.split("").sort().join("");
  let str2Sort = formattedStr2.split("").sort().join("");

  // check for anagram:
  if (str1Sort === str2Sort) {
    return true; // case: anagram
  } else {
    return false; // case: not an anagram
  }
}

// let answer = isAnagram("zeon", "eoz");  // false
let answer = isAnagram("spar", "rasp"); // true
console.log(answer);

module.exports = isAnagram;
