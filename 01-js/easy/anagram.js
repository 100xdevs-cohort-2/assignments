/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let map = {};
    for(let i=0;i<str1.length;i++){
        const char = str1[i].toLowerCase()
        if(map[char]){
            map[char]++;
        }else{
            map[char] = 1;
        }
    }
    for(let i=0;i<str2.length;i++){
        const char = str2[i].toLowerCase()
        if(map[char]===undefined){
            return false;
        }
        map[char]--;
        if(map[char]<0){
            return false;
        }
    }
    for(let i=0;i<str1.length;i++){
        if(map[str1[i].toLowerCase()]!=0){
            console.log("false here")
            return false;
        }
    }
    return true;
}

module.exports = isAnagram;
