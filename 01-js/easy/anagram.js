/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let char of str1) {
    let lowerCase = char.toLowerCase();
    if (obj1[lowerCase] >= 1) {
      obj1[lowerCase] += 1;
    } else obj1[lowerCase] = 1;
  }
  for (let char of str2) {
    let lowerCase = char.toLowerCase();

    if (obj2[lowerCase] >= 1) {
      obj2[lowerCase] += 1;
    } else obj2[lowerCase] = 1;
  }
  let isAnagram = true;
  Object.keys(obj1).map((k) => {
    if (obj1[k] !== obj2[k]) isAnagram = false;
  });

  return isAnagram;
  // return (
  //   str1.toLowerCase().split("").sort().join("") ===
  //   str2.toLowerCase().split("").sort().join("")
  // );
}

module.exports = isAnagram;
