/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function matchingArray(ar1, ar2){
  for(var i=0;i<256;i++){
    if(ar1[i]!=ar2[i]){
      return false;
    }
  }
  return true;
}

function isAnagram(str1, str2) {
  var ar1 = [];
  var ar2 = [];
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  for(var j = 0;j<256;j++){
    ar1[j] = 0;
    ar2[j] = 0;
  }

  for(var i = 0;i<str1.length;i++){
    ar1[str1.codePointAt(i)]++;
  }
  for(var i = 0;i<str2.length;i++){
    ar2[str2.codePointAt(i)]++;
  }

  return (matchingArray(ar1, ar2));

}

module.exports = isAnagram;
