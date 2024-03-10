/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  str1 = str1.toLowerCase().replace(/\s/g, '');
  str2 = str2.toLowerCase().replace(/\s/g, '');

  if (str1.length !== str2.length) {
    return false;
  } else {
    let str1_array = []
    let str2_array = []
    for (let i=0;i<str1.length;i++){
      str1_array.push(str1.charAt(i));
      str2_array.push(str2.charAt(i));
    }
    for (let i=0;i<str1_array.length;i++){
      if (str2_array.indexOf(str1_array[i], 0) === -1){
        return false;
      } else {
        str2_array.splice(str2_array.indexOf(str1_array[i]),1)
      }
    }
    return true
  }
}

module.exports = isAnagram;

