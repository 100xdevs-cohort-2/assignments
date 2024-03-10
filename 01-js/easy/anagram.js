/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if (str1.length != str2.length) {
      return false;
    }
    // str1 = str1.split(' ').join('').toLowerCase();
    // str2 = str2.split(' ').join('').toLowerCase();
    // for (let i = 0; i < str1.length; i++) {
    //   if (!str2.includes(str1[i])) {
    //     return false;
    //   }
    // }
    // return true;

    return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}

module.exports = isAnagram;
