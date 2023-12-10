/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  if (lowerStr1.length !== lowerStr2.length) return false;

  let dict = {};

  for (let char of lowerStr1) {
    if (!dict[char]) dict[char] = 1;
    else dict[char]++;
  }

  for (let char of lowerStr2) {
    if (!dict[char]) return false;

    if (dict[char] && dict[char] === 0) return false;

    dict[char] -= 1;
  }

  return true;
}

module.exports = isAnagram;
