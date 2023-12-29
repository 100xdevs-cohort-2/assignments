/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  // const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
  // const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();
  // return (
  //   cleanStr1.split("").sort().join("") === cleanStr2.split("").sort().join("")
  // );

  const counter = {};

  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  
  for (let item of str2) {
    if (!counter[item]) {
      return false;
    }
    counter[item]--;
  }

  return true;
}

isAnagram("Debit Card", "Bad Credit");

module.exports = isAnagram;
