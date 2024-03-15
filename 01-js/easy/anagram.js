/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function hashCounter(str){
  let hashObj = {};
  for(let i = 0 ; i<str.length ; i++){
    let char = str[i].toLowerCase();
    if(hashObj.hasOwnProperty(char)){
      hashObj[char]++;
    }else{
      hashObj[char] = 1;
    }
  }
  return hashObj;
}

function isAnagram(str1, str2) {

  if(str1.length !== str2.length){
    return false;
  }

  let hashStr1 = hashCounter(str1);
  let hashStr2 = hashCounter(str2);

  for(let key in hashStr1){
    if(hashStr2.hasOwnProperty(key) && hashStr1[key] === hashStr2[key]){
      continue;
    } else{
      return false;
    }
  }

  return true;

}

module.exports = isAnagram;
