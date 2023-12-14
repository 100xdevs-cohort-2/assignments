/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let strarr1 = str1.split('');
  strarr1.sort();
  let sortedstr1 = strarr1.join('');

  let strarr2 = str2.split('');
  strarr2.sort();
  let sortedstr2 = strarr2.join('');

  console.log(sortedstr1,sortedstr2);

  return (sortedstr1==sortedstr2);

}

module.exports = isAnagram;
