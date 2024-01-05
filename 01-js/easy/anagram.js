/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  let lowerCaseString = str1.toLowerCase();
  let StringToArray = lowerCaseString.split("");
  let SortedArray = StringToArray.sort();
  let BackToString = SortedArray.join();
  let CheckedStr1 = BackToString;

  let CheckedStr2 = str2.toLowerCase().split("").sort().join()

  if(CheckedStr1 == CheckedStr2){
    return true;
  }

  return false
}

module.exports = isAnagram;
