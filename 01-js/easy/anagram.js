/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


//note: if we are taking the lower case in the last after the sort , then that cant able to do the proper sorting
//replacing is necessary for removing the edge where there  may be unequal number of the spaces between words.
function isAnagram(str1, str2) {

  const sorted1=str1.toLowerCase().replace(/\s/g,'').split('').sort().join('');
  const sorted2=str2.toLowerCase().replace(/\s/g,'').split('').sort().join('');
  return sorted1==sorted2 ? true : false;
}

module.exports = isAnagram;
