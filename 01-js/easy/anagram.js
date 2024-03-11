/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

const isAnagram = (str1, str2) => {
  const counter = {};

  for (let char of str1) {
    const _char = char.toLocaleLowerCase();
    counter[_char] = (counter[_char] || 0) + 1;
  }

  for (let char of str2) {
    const _char = char.toLocaleLowerCase();
    if (!counter[_char]) {
      return false;
    }
    counter[_char]--;
    if (counter[_char] === 0) {
      delete counter[_char];
    }
  }

  return Object.keys(counter).length === 0;
};

module.exports = isAnagram;
