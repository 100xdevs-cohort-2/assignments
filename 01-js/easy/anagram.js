/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


function isAnagram(str1, str2) {
  let map = {};

  for (let i = 0; i < str1.length; i++) {
    let character = str1[i].toLowerCase(); // Convert to lowercase
    if (map[character] == undefined) {
      map[character] = 1;
    } else {
      map[character] = map[character] + 1;
    }
  }

  for (let index = 0; index < str2.length; index++) {
    let character = str2[index].toLowerCase(); // Convert to lowercase

    if (map[character] != undefined) {
      let count = map[character];
      count = count - 1;

      if (count == 0) {
        delete map[character];
      } else {
        map[character] = count;
      }

    } else {
      return false;
    }
  }

  return Object.keys(map).length === 0;
}

module.exports = isAnagram;
