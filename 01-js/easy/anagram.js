/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  //removing spaces if any
  let string1 = str1.split(" ").join("").toLowerCase();
  let string2 = str2.split(" ").join("").toLowerCase();

  //sorting the strings
  string1 = string1.split("").sort().join("");
  string2 = string2.split("").sort().join("");

  return string1 === string2;
}

module.exports = isAnagram;

// console.log(isAnagram("a Gentleman", "elegant man"))
