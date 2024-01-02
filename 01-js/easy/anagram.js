/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str3, str2) {
  str3 = str3.toLowerCase()
  str2 = str2.toLowerCase()
  let str1 = {}
  for(let i of str3){
    if(str1[i]===undefined){
      str1[i] = 1;
    }
    else{
      str1[i]+=1;
    }
  }
  console.log(str1)
  let str4 = {}
  let isAnagram = true
  for(let i of str2){
    if (str1[i]===undefined){
      console.log("no anagrammmm")
      isAnagram = false;
      break;
    }
    if(str4[i]===undefined){
      str4[i] = 1;
    }
    else{
      str4[i]+=1;
    }
  }
  console.log(str4)
  if(isAnagram){
    for(let i in str4){
      if(str1[i]!==str4[i]){
        console.log("no anagram")
        isAnagram = false;
        break;
      }
      else{
        continue;
      }
    }
  }
  if(isAnagram){
    for(let i in str1){
      if(str1[i]!==str4[i]){
        console.log("no anagram")
        isAnagram = false;
        break;
      }
      else{
        continue;
      }
    }
  }
  return isAnagram;
}

module.exports = isAnagram;
