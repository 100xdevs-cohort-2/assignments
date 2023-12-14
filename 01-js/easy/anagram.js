/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    if(str1.length != str2.length)
      return false;
    str1=str1.toUpperCase();
    str2=str2.toUpperCase();
    var i = 0 , j=0;
    while(i < str1.length){
      while(j < str2.length){
        if(str1.charCodeAt(i) == str2.charCodeAt(j)){
          let str3 = str2.substr(0,j) + str2.substr(j + 1);
          str2 = str3;
          console.log(str1);
          console.log(str2);
          i++;
          j=0;
        }
        else
          j++;
      }
      i++;
    }
    if(str2.length === 0)
      return true;
    return false;
}

module.exports = isAnagram;
