/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1 = str1.trim().toLowerCase()
  str2 = str2.trim().toLowerCase()
  //console.log(str1)
  let count = 0;
  if (str1.length === str2.length){
    arrStr1 = str1.split("");
    arrStr2 = str2.split("")
    for (let i = 0;i<arrStr1.length;i++){
      if (arrStr2.includes(arrStr1[i]))
       count++
    }
     return (count === arrStr1.length) ? true : false;
  }
  else {
    return false;
  }
}

module.exports = isAnagram;
